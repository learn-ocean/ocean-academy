import { plainToClass } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { Context, Next } from 'koa'
import { firstError } from '../../../helpers/firstError'
import { EmailVerificationInputs } from '../../../shared/user/EmailVerificationToken'
import { User, UserModel } from '../../../shared/user/User'
import { authenticate } from '../helpers/authenticate'
import { EmailVerificationModel } from '../../../shared/user/EmailVerificationToken'
import { ResponseError } from '../../../shared/mongo/ResponseError'
import { verifyRecaptchaToken } from '../helpers/verifyRecaptchaToken'

export const verifyEmail = async (ctx: Context, next: Next): Promise<void> => {
    const verifyEmailArgs = plainToClass(EmailVerificationInputs, ctx.request.body, { excludeExtraneousValues: true })
    await validateOrReject(verifyEmailArgs, { forbidUnknownValues: true }).catch(firstError)
    let {token, recaptchaToken} = verifyEmailArgs

    const user: User = await authenticate(ctx)

    await verifyRecaptchaToken(recaptchaToken)

    const emailVerification = await EmailVerificationModel.findOne({userId: user._id})

    if (!emailVerification) 
        throw new ResponseError(404, 'No token was found')

    const correctToken = emailVerification.token

    if(correctToken?.toLowerCase() !== token.toLowerCase())
      throw new ResponseError(404, 'Incorrect token.')

    await UserModel.updateOne({ _id: user._id }, { emailVerified: true }).exec()

    ctx.status = 200
    ctx.body = "Success. Email was verified."
  
    await next()
  }
  