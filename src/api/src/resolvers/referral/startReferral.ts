import { Context, Next } from 'koa'
import { User } from '../../shared/user/User'
import { authenticate } from '../user/helpers/authenticate'
import {  StartReferralOutputs } from '../../shared/referral/StartReferral'
import { Referral, ReferralModel } from '../../shared/referral/Referral'
import { ResponseError } from '../../shared/mongo/ResponseError'
import { randomBytes, randomInt } from 'crypto'
import { isCourseCompleted } from '../../helpers/courses'
import { COURSES } from '../../helpers/courses'

export const startReferral = async (ctx: Context, next: Next): Promise<void> => {
  const user: User = await authenticate(ctx)

  if(!user.emailVerified)
    throw new ResponseError(400, "Please verify your email to be able to start referral.")

  //Verify that the program has not already started
  const referralQuery = await ReferralModel.findOne({referrerId: user._id}).lean()
  if(referralQuery)
    throw new ResponseError(400, "Referral has already started for this user.")
    
  if(!user.ocean101?.completedAt && user.progress && !isCourseCompleted(COURSES.OCEAN_101, user?.progress) || !user.progress)
    throw new ResponseError(400, "Complete Ocean 101 before starting the referral.")
  
  const nonce = randomInt(1000000000, 10000000000);
  const code = randomBytes(2).toString("hex").toUpperCase();
  const referralCode = `${user.username}-${code}`
  
  const referral = await ReferralModel.create({
        referrerId: user._id,
        referralCode: referralCode,
        nonce: nonce
  } as Referral)

  const response: StartReferralOutputs = { referralCode: referral.referralCode }

  ctx.status = 200
  ctx.body = response
  await next()
}