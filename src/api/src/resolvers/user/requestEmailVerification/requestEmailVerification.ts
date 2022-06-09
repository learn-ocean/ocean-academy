import { Context, Next } from 'koa'
import { ResponseError } from '../../../shared/mongo/ResponseError'
import {randomBytes} from "crypto";
import { authenticate } from '../helpers/authenticate'
import { User } from '../../../shared/user/User'
import { EmailVerificationModel, EmailVerification } from '../../../shared/user/EmailVerificationToken'
import { sendVerificationEmail } from '../helpers/sendVerificationEmail'
import { rateLimit } from '../../quota/rateLimit/rateLimit';
import { QuotaType } from '../../../shared/quota/QuotaType';

export const requestEmailVerification = async(ctx: Context, next: Next): Promise<void> => {
    //const requestEmailVerifArgs = plainToClass(RequestEmailVerificationInputs, ctx.request.body, { excludeExtraneousValues: true })
    //await validateOrReject(requestEmailVerifArgs, { forbidUnknownValues: true }).catch(firstError)
    const user: User = await authenticate(ctx)

    if(user.emailVerified)
        throw new ResponseError(404, "User email already verified.")

    await rateLimit(user._id, QuotaType.EMAIL_VERIFICATION)

    //Send verification email
    const verificationToken = randomBytes(3).toString("hex");
    await EmailVerificationModel.findOneAndDelete({userId: user._id})
    await EmailVerificationModel.create({userId: user._id,  token: verificationToken} as unknown as EmailVerification)
    await sendVerificationEmail(user.email, verificationToken)

    ctx.status = 200
    ctx.body = `Verification email was sent to ${user.email}.`
    next()
}