import { Context, Next } from 'koa'
import { User } from '../../shared/user/User'
import { authenticate } from '../user/helpers/authenticate'
import { ReferralModel } from '../../shared/referral/Referral'
import { ReferralInfoOutputs } from '../../shared/referral/ReferralInfo'
import { getCompleted } from './helpers/getCompleted'

export const referralInfo = async (ctx: Context, next: Next): Promise<void> => {
  const user: User = await authenticate(ctx)
  //Verify that the program has not already started
  const referral = await ReferralModel.findOne({referrerId: user._id}).lean()
  if(!referral){
    const response: ReferralInfoOutputs = {started: false}
    ctx.status = 200
    ctx.body = response
    await next()
    return;
  }
    
  const referredUsers = referral.referredUsers;
  const completed = await getCompleted(referral.referredUsers)

  const started = true
  const data = {
    invited: referredUsers.length,
    referralCode: referral.referralCode,
    completed: completed,
    nonce: referral.nonce,
    tx: referral.tx ? referral.tx : undefined
  }
  
  const response: ReferralInfoOutputs = {data ,started}

  ctx.status = 200
  ctx.body = response
  await next()
}