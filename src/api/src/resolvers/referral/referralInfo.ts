import { Context, Next } from 'koa'
import { User, UserModel } from '../../shared/user/User'
import { authenticate } from '../user/helpers/authenticate'
import { ReferralModel } from '../../shared/referral/Referral'
import { ReferralInfoOutputs } from '../../shared/referral/ReferralInfo'

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
  let completed = 0;
  for(let i = 0; i < referredUsers.length; i++){
    const referred = referredUsers[i];
    const user = await UserModel.findOne({_id: referred}).lean()
    if(user && user.emailVerified && user.ocean101?.completedAt){
      completed += 1;
    }
  }

  const started = true
  const data = {
    invited: referredUsers.length,
    referralCode: referral.referralCode,
    completed: completed,
    nonce: referral.nonce
  }
  
  const response: ReferralInfoOutputs = {data ,started}

  ctx.status = 200
  ctx.body = response
  await next()
}