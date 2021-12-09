import { plainToClass } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { Context, Next } from 'koa'
import { firstError } from '../../../helpers/firstError'
import { ResponseError } from '../../../shared/mongo/ResponseError'
import { RequestTokenIdInputs, RequestTokenIdOutputs } from '../../../shared/user/RequestTokenId'
import { authenticate } from '../helpers/authenticate'
import { rateLimit } from '../../quota/rateLimit/rateLimit'
import {  User, UserModel } from '../../../shared/user/User'
import { TokenModel } from '../../../shared/tokens/Token'
import { isCourseCompletedFromTitle } from '../../../helpers/courses'

export const PUBLIC_USER_MONGO_SELECTOR = '_id username name tokenId progress createdAt tokens'


/**
 * Api route for an user that wants to request a tokenId before a mint.
 * Once a tokenId is assigned, user will persist with it. (even if he does not mint a token)
 * The route check if a tokenId has already been assigned and returns it if it exists 
 * otherwise it assigns a new tokenId.
 * @param ctx course title as a json body. Course title should be in validation with it. 
 * @param next 
 */
export const requestTokenId = async (ctx: Context, next: Next): Promise<void> => {

    const requestTokenIdArgs = plainToClass(RequestTokenIdInputs, ctx.request.body, { excludeExtraneousValues: true })
    await validateOrReject(requestTokenIdArgs, { forbidUnknownValues: true }).catch(firstError)
    const { course } = requestTokenIdArgs

    const user: User = await authenticate(ctx)
    await rateLimit(user._id)
    let response : RequestTokenIdOutputs;

    if (!user) throw new ResponseError(404, 'User not found')

    //The token has already been assigned. Returns
    //the already assigned token.
    if(user.tokens && course in user.tokens){
      //@ts-ignore
      console.log("Exists already", user.tokens[course])
      //@ts-ignore
      response = { tokenId: user.tokens[course].tokenId}
  
    }else{ 
        //Verify the user has completed the course
        if(!user.progress || !isCourseCompletedFromTitle(course, user.progress)) 
          throw new ResponseError(405, 'Course not completed yet.')

        //Get the max value tokenId from the database. 
        const maxReq = await TokenModel.find().sort({tokenId: -1}).limit(1).exec()
        let newTokenId;

        if(!maxReq[0]){
            //Check if the database is not empty.
            const nbDocuments = await TokenModel.countDocuments().exec()
            if(nbDocuments > 0)
              //An error occured during the request as it is not empty.
              throw new ResponseError(500, 'Error occured while assigning new tokenId')
            //Otherwise, set first document number if the database is empty
            newTokenId = 1
        }else{
          newTokenId = maxReq[0].tokenId + 1
        }

        //Updates the token collection with the new tokenId.
        await TokenModel.updateOne(       
            { tokenId : newTokenId },
            { $set: { userId: user._id }},
            { upsert: true } 
          )

        //Assigns the user object with the tokenId for the course.
        await UserModel.updateOne(        
            { _id : user._id },
            { $set: { [`tokens.${course}`] : {tokenId: newTokenId} } } 
        )

        response = { tokenId: newTokenId }
    }


  
    ctx.status = 200
    ctx.body = response
  
    await next()
  }