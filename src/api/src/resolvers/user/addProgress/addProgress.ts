import { plainToClass } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { Context, Next } from 'koa'
import { firstError } from '../../../helpers/firstError'
import { toPrivateUser } from '../../../helpers/toPublicUser'
import { AddProgressInputs, AddProgressOutputs } from '../../../shared/user/AddProgress'
import { User, UserModel } from '../../../shared/user/User'
import { rateLimit } from '../../quota/rateLimit/rateLimit'
import { authenticate } from '../helpers/authenticate'
import { COURSES } from '../../../helpers/courses'
import { PrivateUser } from '../../../shared/user/PrivateUser'
import { ResponseError } from '../../../shared/mongo/ResponseError'
import { verifyRecaptchaToken } from '../helpers/verifyRecaptchaToken'

export const addProgress = async (ctx: Context, next: Next): Promise<void> => {
  const addProgressArgs = plainToClass(AddProgressInputs, ctx.request.body, { excludeExtraneousValues: true })
  await validateOrReject(addProgressArgs, { forbidUnknownValues: true }).catch(firstError)
  const { chapterDone, recaptchaToken } = addProgressArgs
  await verifyRecaptchaToken(recaptchaToken);
  const user: User = await authenticate(ctx)

  await rateLimit(user._id)
  const courseTitle = chapterDone.split("/")[1]
  const chapter = chapterDone.split("/")[2].split("-")[1]
  
 //Check the time for the user to complete Ocean 101.
  if(courseTitle === COURSES.OCEAN_101.title && parseInt(chapter) === COURSES.OCEAN_101.chapters){
    const firstChapterCompletion = user.ocean101?.progress[0].completedAt;
    const now =  Date.now()
    //@ts-ignore
    const diffMs = now - firstChapterCompletion?.getTime();
    const diffMin = diffMs / (60 * 1000) 
    if(diffMin < 30){
      throw new ResponseError(400, "Unauthorized to complete Ocean 101.")
    }
  }

  //Deprecated user progress: will be replaced soon.
  await UserModel.updateOne(
    { _id: user._id },
    { $addToSet: { progress: chapterDone } },
  ).exec()

  
  //New user progress
  await addProgressForCourse(user._id, courseTitle, parseInt(chapter))

  const updatedUser: User = await UserModel.findOne(
    { _id: user._id },
  ).lean()  as User
 
  const privateUser: PrivateUser = toPrivateUser(updatedUser)
  
  const response: AddProgressOutputs = { user: privateUser }

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

      //Add to the user profile the progress.
      const postUser = await UserModel.findOneAndUpdate(
        //$ne prevents from adding two objects with the same chapter value: mimics $addToSet
        { _id: id,  [`${courseTitle}.progress.chapter`]: {$ne: chapter}},
        { $push: 
          { [`${courseTitle}.progress`]: 
          {chapter: chapter, completedAt: now}
        }  
      }, {new: true} 
      )

      //Check if the course is completed, and so add completedAt
      if(postUser?.get(courseTitle) && postUser?.get(courseTitle).progress.length === chapters){
        await UserModel.updateOne(
          {_id: id},
          {$set: { [`${courseTitle}.completedAt`]: now}}
          )
      }
    
  }
try{
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
}catch(e){
  throw new ResponseError(400, e.message === "Unauthorized to complete Ocean 101." ? e.message : "An error ocurred")
}

}
