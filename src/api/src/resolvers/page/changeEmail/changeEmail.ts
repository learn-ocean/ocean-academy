import { plainToClass } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { Context, Next } from 'koa'
import { firstError } from '../../../helpers/firstError'
import { toPrivateUser } from '../../../helpers/toPublicUser'
import { ChangeEmailInputs, ChangeEmailOutputs } from '../../../shared/page/ChangeEmail'
import { PrivateUser } from '../../../shared/user/PrivateUser'
import { User, UserModel } from '../../../shared/user/User'
import { rateLimit } from '../../quota/rateLimit/rateLimit'
import { authenticate } from '../../user/helpers/authenticate'
import { ResponseError } from '../../../shared/mongo/ResponseError'

export const changeEmail = async (ctx: Context, next: Next): Promise<void> => {
  const changeEmailArgs = plainToClass(ChangeEmailInputs, ctx.request.body, { excludeExtraneousValues: true })
  await validateOrReject(changeEmailArgs, { forbidUnknownValues: true }).catch(firstError)
  let { email } = changeEmailArgs

  const user: User = await authenticate(ctx)
  await rateLimit(user._id)
  email = email.toLowerCase()
  const emailAlreadyTaken: User | null = await UserModel.findOne({ email }).lean()
  if (emailAlreadyTaken) 
    throw new ResponseError(400, 'Email is already taken')

  await UserModel.updateOne(
    { _id: user._id },
    { $set: { email: email, emailVerified: false } },
  ).exec()

  const updatedUser: User = await UserModel.findOne(
    { _id: user._id },
  ).lean()  as User

  const privateUser: PrivateUser = toPrivateUser(updatedUser)
  const response: ChangeEmailOutputs = { user: privateUser }

  ctx.status = 200
  ctx.body = response

  await next()
}
