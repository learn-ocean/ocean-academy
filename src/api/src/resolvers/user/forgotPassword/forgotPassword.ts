import { plainToClass } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { Context, Next } from 'koa'

import { firstError } from '../../../helpers/firstError'
import { Captcha } from '../../../shared/captcha/Captcha'
import { CaptchaFor } from '../../../shared/captcha/CaptchaFor'
import { ResponseError } from '../../../shared/mongo/ResponseError'
import { ForgotPasswordInputs, ForgotPasswordOutputs } from '../../../shared/user/ForgotPassword'
import { User, UserModel } from '../../../shared/user/User'
import { createCaptcha } from '../../captcha/helpers/createCaptcha'
import { sendEmailForgotPassword } from '../helpers/sendEmailForgotPassword'
import { verifyRecaptchaToken } from '../helpers/verifyRecaptchaToken'
import { rateLimit } from '../../quota/rateLimit/rateLimit'
import { QuotaType } from '../../../shared/quota/QuotaType'

export const forgotPassword = async (ctx: Context, next: Next): Promise<void> => {
  const forgotPasswordArgs = plainToClass(ForgotPasswordInputs, ctx.request.body, { excludeExtraneousValues: true })
  await validateOrReject(forgotPasswordArgs, { forbidUnknownValues: true }).catch(firstError)
  const { usernameOrEmail, recaptchaToken } = forgotPasswordArgs

  await verifyRecaptchaToken(recaptchaToken)

  let user: User | null = await UserModel.findOne({ email: usernameOrEmail }).lean()
  if (!user) {
    user = await UserModel.findOne({ username: usernameOrEmail }).lean()
  }
  if (!user) throw new ResponseError(401, 'Wrong username or password')

  await rateLimit(user._id, QuotaType.NEW_CAPTCHA)

  const captcha: Captcha = await createCaptcha(user._id, CaptchaFor.CAPTCHA_FOR_RESET_PASSWORD)

  await sendEmailForgotPassword(user.email, captcha.index, captcha.token)

  const response: ForgotPasswordOutputs = { token: captcha.token }

  ctx.status = 200
  ctx.body = response

  await next()
}
