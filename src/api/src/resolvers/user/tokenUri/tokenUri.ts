import { plainToClass } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { Context, Next } from 'koa'
import { firstError } from '../../../helpers/firstError'
import { ResponseError } from '../../../shared/mongo/ResponseError'

import { TokenUriInputs, TokenUriOutputs } from '../../../shared/user/TokenUri'
import { UserModel } from '../../../shared/user/User'

export const PUBLIC_USER_MONGO_SELECTOR = '_id username emailVerified createdAt'

export const tokenUri = async (ctx: Context, next: Next): Promise<void> => {
  console.log(ctx.params.id)
  
  const tokenUriArgs = plainToClass(TokenUriInputs, ctx.params.id, { excludeExtraneousValues: true })
  await validateOrReject(tokenUriArgs, { forbidUnknownValues: true }).catch(firstError)
  let { id } = tokenUriArgs

  id = id.toLowerCase()

  const user = await UserModel.findOne({ username: { $regex: new RegExp("^" + id.toLowerCase(), "i") } }).lean()

  if (!user) throw new ResponseError(401, 'User not found')

  const response: TokenUriOutputs = { name: 'test', description: 'test', image: 'test' }

  ctx.status = 200
  ctx.body = response

  await next()
}
