import { plainToClass } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { Context, Next } from 'koa'

import { firstError } from '../../../helpers/firstError'
import { toPublicUser } from '../../../helpers/toPublicUser'
import { ResponseError } from '../../../shared/mongo/ResponseError'
import { Jwt } from '../../../shared/user/Jwt'
import { LoginInputs, LoginOutputs } from '../../../shared/user/Login'
import { PublicUser } from '../../../shared/user/PublicUser'
import { User, UserModel } from '../../../shared/user/User'
import { rateLimit } from '../../quota/rateLimit/rateLimit'
import { getSignedJwt } from '../helpers/getSignedJwt'
import { matchPassword } from '../helpers/matchPassword'
import { verifyRecaptchaToken } from '../helpers/verifyRecaptchaToken'
import { QuotaType } from '../../../shared/quota/QuotaType'

export const login = async (ctx: Context, next: Next): Promise<void> => {
  const loginArgs = plainToClass(LoginInputs, ctx.request.body, { excludeExtraneousValues: true })
  await validateOrReject(loginArgs, { forbidUnknownValues: true }).catch(firstError)
  let { usernameOrEmail, password, recaptchaToken } = loginArgs

  usernameOrEmail = usernameOrEmail.toLowerCase()

  await verifyRecaptchaToken(recaptchaToken)

  let user: User | null = await UserModel.findOne({ email: usernameOrEmail }).lean()
  if (!user) {
    user = await UserModel.findOne({ username: usernameOrEmail }).lean()
  }
  if (!user) throw new ResponseError(401, 'Wrong username or password')

  const publicUser: PublicUser = toPublicUser(user)

  await rateLimit(user._id, QuotaType.LOGIN)

  await matchPassword(password, user.hashedPassword)

  const jwt: Jwt = getSignedJwt(user._id.toHexString(), user.username)

  const response: LoginOutputs = { jwt, user: publicUser }

  ctx.status = 200
  ctx.body = response

  await next()
}
