import { plainToClass } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { Context, Next } from 'koa'

import { firstError } from '../../../helpers/firstError'
import { ResponseError } from '../../../shared/mongo/ResponseError'
import { GetPublicUserInputs, GetPublicUserOutputs } from '../../../shared/page/GetPublicUser'
import { PublicUser } from '../../../shared/user/PublicUser'
import { UserModel } from '../../../shared/user/User'

export const PUBLIC_USER_MONGO_SELECTOR = '_id username name emailVerified progress createdAt'

export const getPublicUser = async (ctx: Context, next: Next): Promise<void> => {
  const getPublicUserArgs = plainToClass(GetPublicUserInputs, ctx.request.body, { excludeExtraneousValues: true })
  await validateOrReject(getPublicUserArgs, { forbidUnknownValues: true }).catch(firstError)
  const { username } = getPublicUserArgs

  const user: PublicUser = (await UserModel.findOne({ username }, PUBLIC_USER_MONGO_SELECTOR).lean()) as PublicUser
  if (!user) throw new ResponseError(404, 'User not found')

  const response: GetPublicUserOutputs = { user }

  ctx.status = 200
  ctx.body = response

  await next()
}
