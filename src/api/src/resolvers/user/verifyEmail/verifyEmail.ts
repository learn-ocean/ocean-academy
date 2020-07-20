import { plainToClass } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { Context, Next } from 'koa'

import { firstError } from '../../../helpers/firstError'
import { CaptchaModel } from '../../../shared/captcha/Captcha'
import { CaptchaFor } from '../../../shared/captcha/CaptchaFor'
import { User, UserModel } from '../../../shared/user/User'
import { VerifyEmailInputs } from '../../../shared/user/VerifyEmail'
import { authenticate } from '../helpers/authenticate'
import { verifyCaptcha } from '../helpers/verifyCaptcha'
import { rateLimit } from '../../quota/rateLimit/rateLimit'

export const verifyEmail = async (ctx: Context, next: Next): Promise<void> => {
  const verifyEmailArgs = plainToClass(VerifyEmailInputs, ctx.request.body, { excludeExtraneousValues: true })
  await validateOrReject(verifyEmailArgs, { forbidUnknownValues: true }).catch(firstError)
  const { solution } = verifyEmailArgs

  const user: User = await authenticate(ctx)

  await rateLimit(user._id)

  await verifyCaptcha(user._id, solution, CaptchaFor.CAPTCHA_FOR_VERIFY_EMAIL)

  await UserModel.updateOne({ _id: user._id }, { $set: { emailVerified: true } }).exec()

  await CaptchaModel.deleteOne({
    userId: user._id,
    captchaFor: CaptchaFor.CAPTCHA_FOR_VERIFY_EMAIL,
  }).exec()

  ctx.status = 200
  ctx.body = {}

  await next()
}
