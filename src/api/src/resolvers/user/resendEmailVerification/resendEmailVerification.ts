import { Context, Next } from 'koa'

import { Captcha, CaptchaModel } from '../../../shared/captcha/Captcha'
import { CaptchaFor } from '../../../shared/captcha/CaptchaFor'
import { User } from '../../../shared/user/User'
import { createCaptcha } from '../../captcha/helpers/createCaptcha'
import { authenticate } from '../helpers/authenticate'
import { sendEmailVerifyEmail } from '../helpers/sendEmailVerifyEmail'
import { rateLimit } from '../../quota/rateLimit/rateLimit'
import { QuotaType } from '../../../shared/quota/QuotaType'

export const resendEmailVerification = async (ctx: Context, next: Next): Promise<void> => {
  const user: User = await authenticate(ctx)

  await rateLimit(user._id, QuotaType.NEW_CAPTCHA)

  await CaptchaModel.deleteMany({
    userId: user._id,
    captchaFor: CaptchaFor.CAPTCHA_FOR_VERIFY_EMAIL,
  }).exec()

  const captcha: Captcha = await createCaptcha(user._id, CaptchaFor.CAPTCHA_FOR_VERIFY_EMAIL)

  await sendEmailVerifyEmail(user.email, captcha.index)

  ctx.status = 200
  ctx.body = { status: true }

  await next()
}
