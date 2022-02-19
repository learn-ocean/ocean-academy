import { plainToClass } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { Context, Next } from 'koa'

import { firstError } from '../../../helpers/firstError'
import { ResponseError } from '../../../shared/mongo/ResponseError'
import { TokenUriInputs, TokenUriOutputs } from '../../../shared/user/TokenUri'
import { UserModel } from '../../../shared/user/User'

export const PUBLIC_USER_MONGO_SELECTOR = '_id username emailVerified createdAt'

export const tokenUri = async (ctx: Context, next: Next): Promise<void> => {
  console.log(ctx.params.username)
  console.log(ctx.params.course)

  
  const tokenUriArgs = plainToClass(TokenUriInputs, ctx.params, { excludeExtraneousValues: true })
  await validateOrReject(tokenUriArgs, { forbidUnknownValues: true }).catch(firstError)
  let { username, course } = tokenUriArgs

  username = username.toLowerCase()

  const user = await UserModel.findOne({ username: { $regex: new RegExp("^" + username, "i") } }).lean()

  if (!user) throw new ResponseError(401, 'User not found')
  if (!(user?.progress?.length && user?.progress?.length >= 20)) throw new ResponseError(401, 'User not certified')

  const response: TokenUriOutputs = { 
    name: `${username}'s certificate for ${course}`,
     description: `${username}'s certificate of completion of Ocean Academy's ${course} course.`, 
     image: `https://oceanacademy.io/certificates/${course}.jpg`,
     certifiedUrl: `https://oceanacademy.io/certificates/${username}/${course}.jpg`
     }

  ctx.status = 200
  ctx.body = response

  await next()
}
