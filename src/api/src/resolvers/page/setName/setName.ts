import { plainToClass } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { Context, Next } from 'koa'

import { firstError } from '../../../helpers/firstError'
import { toPublicUser } from '../../../helpers/toPublicUser'
import { SetNameInputs, SetNameOutputs } from '../../../shared/page/SetName'
import { PublicUser } from '../../../shared/user/PublicUser'
import { User, UserModel } from '../../../shared/user/User'
import { rateLimit } from '../../quota/rateLimit/rateLimit'
import { authenticate } from '../../user/helpers/authenticate'

export const PUBLIC_USER_MONGO_SELECTOR = '_id username emailVerified progress createdAt'

export const setName = async (ctx: Context, next: Next): Promise<void> => {
  const setNameArgs = plainToClass(SetNameInputs, ctx.request.body, { excludeExtraneousValues: true })
  await validateOrReject(setNameArgs, { forbidUnknownValues: true }).catch(firstError)
  const { name } = setNameArgs

  const user: User = await authenticate(ctx)

  await rateLimit(user._id)

  await UserModel.updateOne(
    { _id: user._id },
    { $set: { name } },
  ).exec()

  const updatedUser: User = await UserModel.findOne(
    { _id: user._id },
  ).lean()  as User

  const publicUser: PublicUser = toPublicUser(updatedUser)
  
  const response: SetNameOutputs = { user: publicUser }

  ctx.status = 200
  ctx.body = response

  await next()
}
