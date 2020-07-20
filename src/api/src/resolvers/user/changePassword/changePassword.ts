import { hash } from 'bcryptjs'
import { plainToClass } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { Context, Next } from 'koa'

import { firstError } from '../../../helpers/firstError'
import { ChangePasswordInputs } from '../../../shared/user/ChangePassword'
import { User, UserModel } from '../../../shared/user/User'
import { authenticate } from '../helpers/authenticate'
import { matchPassword } from '../helpers/matchPassword'
import { rateLimit } from '../../quota/rateLimit/rateLimit'

export const changePassword = async (ctx: Context, next: Next): Promise<void> => {
  const changePasswordArgs = plainToClass(ChangePasswordInputs, ctx.request.body, {
    excludeExtraneousValues: true,
  })
  await validateOrReject(changePasswordArgs, { forbidUnknownValues: true }).catch(firstError)
  const { password, newPassword } = changePasswordArgs

  const user: User = await authenticate(ctx)

  await rateLimit(user._id)

  await matchPassword(password, user.hashedPassword)

  const hashedPassword = await hash(newPassword, 12)
  await UserModel.updateOne({ _id: user._id }, { hashedPassword }).exec()

  ctx.status = 200
  ctx.body = {}

  await next()
}
