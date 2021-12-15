import { plainToClass } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { Context, Next } from 'koa'

import { firstError } from '../../../helpers/firstError'
import { toPublicUser } from '../../../helpers/toPublicUser'
import { AddProgressInputs, AddProgressOutputs } from '../../../shared/user/AddProgress'
import { PublicUser } from '../../../shared/user/PublicUser'
import { User, UserModel } from '../../../shared/user/User'
import { rateLimit } from '../../quota/rateLimit/rateLimit'
import { authenticate } from '../helpers/authenticate'

import { COURSES } from '../../../helpers/courses'


export const PUBLIC_USER_MONGO_SELECTOR = '_id username emailVerified createdAt'

export const addProgress = async (ctx: Context, next: Next): Promise<void> => {
  const addProgressArgs = plainToClass(AddProgressInputs, ctx.request.body, { excludeExtraneousValues: true })
  await validateOrReject(addProgressArgs, { forbidUnknownValues: true }).catch(firstError)
  const { chapterDone } = addProgressArgs

  const user: User = await authenticate(ctx)

  await rateLimit(user._id)

  console.log("Chapter Done:  ", chapterDone)

  //Deprecated user progress: will be replaced soon.
  await UserModel.updateOne(
    { _id: user._id },
    { $addToSet: { progress: chapterDone } },
  ).exec()

  const courseTitle = chapterDone.split("/")[1]
  const chapter = chapterDone.split("/")[2].split("-")[1]
  
  //New user progress
  await addProgressForCourse(user._id, courseTitle, parseInt(chapter))


  const updatedUser: User = await UserModel.findOne(
    { _id: user._id },
  ).lean()  as User

  const publicUser: PublicUser = toPublicUser(updatedUser)
  
  const response: AddProgressOutputs = { user: publicUser }

  ctx.status = 200
  ctx.body = response

  await next()
}


/**
 * Adds progress inside course subfield.
 * @param id userId
 * @param courseTitle course title following courses helpers e.g. "ocean101", "introToDataDefi", "ComputeToData"
 * @param chapter the chapter that was completed insdie the course
 */
async function addProgressForCourse(id: any, courseTitle: string, chapter: number){


  const handleProgress = async(courseTitle: string, chapters: number) =>{

      const now = new Date(Date.now())

      const postUser = await UserModel.findOneAndUpdate(
        //$ne prevents from adding two objects with the same chapter value: mimics $addToSet
        { _id: id,  [`${courseTitle}.progress.chapter`]: {$ne: chapter}},
        { $push: 
          { [`${courseTitle}.progress`]: 
          {chapter: chapter, completedAt: now}
        }  
      }, {new: true} 
      ).exec()

      if(postUser?.get(courseTitle).progress.length === chapters){
        console.log("Hello")
        await UserModel.updateOne(
          {_id: id},
          {$set: { [`${courseTitle}.completedAt`]: now}}
          )
      }
    
  }
  

  switch(courseTitle){
    case COURSES.OCEAN_101.title:
      handleProgress(COURSES.OCEAN_101.title, COURSES.OCEAN_101.chapters)
      break

    case COURSES.INTRO_TO_DATA_DEFI.title:
      handleProgress(COURSES.INTRO_TO_DATA_DEFI.title, COURSES.INTRO_TO_DATA_DEFI.chapters)
      break

    case COURSES.COMPUTE_TO_DATA.title:
      handleProgress(COURSES.COMPUTE_TO_DATA.title, COURSES.COMPUTE_TO_DATA.chapters)
      break

  }  

}
