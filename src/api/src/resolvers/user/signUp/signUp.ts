import { hash } from 'bcryptjs'
import { plainToClass } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { Context, Next } from 'koa'
import { firstError } from '../../../helpers/firstError'
import { toPrivateUser } from '../../../helpers/toPublicUser'
import { ResponseError } from '../../../shared/mongo/ResponseError'
import { ReferralModel } from '../../../shared/referral/Referral'
import { Jwt } from '../../../shared/user/Jwt'
import { PrivateUser } from '../../../shared/user/PrivateUser'
import { SignUpInputs, SignUpOutputs } from '../../../shared/user/SignUp'
import { User, UserModel } from '../../../shared/user/User'
import { getSignedJwt } from '../helpers/getSignedJwt'
import { verifyRecaptchaToken } from '../helpers/verifyRecaptchaToken'

export const signUp = async (ctx: Context, next: Next): Promise<void> => {
  const signUpArgs = plainToClass(SignUpInputs, ctx.request.body, { excludeExtraneousValues: true })
  await validateOrReject(signUpArgs, { forbidUnknownValues: true }).catch(firstError)
  let { username, email, password, recaptchaToken, referralCode } = signUpArgs

  username = username.toLowerCase()
  email = email.toLowerCase()
  await verifyRecaptchaToken(recaptchaToken)

  const emailAlreadyTaken: User | null = await UserModel.findOne({ email }).lean()
  if (emailAlreadyTaken) throw new ResponseError(400, 'Email is already taken')

  const usernameAlreadyTaken: User | null = await UserModel.findOne({ username }).lean()
  if (usernameAlreadyTaken) throw new ResponseError(400, 'Username is already taken')

  let user : User | null;

  if(referralCode){
    const referral = await ReferralModel.findOne({referralCode})

    if (!referral) 
      throw new ResponseError(400, 'Referral code not found.')
    if(referral.referredUsers.length > 200) 
      throw new ResponseError(400, 'Referral maxed out its invitations.')

    user = await createUser(password, email, username);
  
    referral.referredUsers.push(user._id)
    referral.save()
  }else{
    user = await createUser(password, email, username);
  }

  const publicUser: PrivateUser = toPrivateUser(user)
  const jwt: Jwt = getSignedJwt(user._id.toHexString(), user.username)

  const response: SignUpOutputs = { jwt, user: publicUser }

  ctx.status = 200
  ctx.body = response

  await next()
}

const createUser = async(password: string, email: string, username: string) : Promise<User> =>{
  const hashedPassword = await hash(password, 12)
  //Add userId to new user
  const userId = await UserModel.countDocuments() + 1;
  const user: User = await UserModel.create({ email, username, hashedPassword,  userId} as User)
  return user;
}