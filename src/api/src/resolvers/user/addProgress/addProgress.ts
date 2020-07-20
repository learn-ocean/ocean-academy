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

export const PUBLIC_USER_MONGO_SELECTOR = '_id username emailVerified createdAt'

export const addProgress = async (ctx: Context, next: Next): Promise<void> => {
  const addProgressArgs = plainToClass(AddProgressInputs, ctx.request.body, { excludeExtraneousValues: true })
  await validateOrReject(addProgressArgs, { forbidUnknownValues: true }).catch(firstError)
  const { chapterDone } = addProgressArgs

  const user: User = await authenticate(ctx)

  await rateLimit(user._id)

  await UserModel.updateOne(
    { _id: user._id },
    { $addToSet: { progress: chapterDone } },
  ).exec()

  const updatedUser: User = await UserModel.findOne(
    { _id: user._id },
  ).lean()  as User

  const publicUser: PublicUser = toPublicUser(updatedUser)
  
  const response: AddProgressOutputs = { user: publicUser }

  ctx.status = 200
  ctx.body = response

  await next()
}
