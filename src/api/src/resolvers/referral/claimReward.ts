import { Context, Next } from 'koa'
import { plainToClass } from 'class-transformer'
import { validateOrReject } from 'class-validator'
import { User } from '../../shared/user/User'
import { authenticate } from '../user/helpers/authenticate'
import { ReferralModel, REFERRAL_STATUS } from '../../shared/referral/Referral'
import { ClaimRewardInputs, ClaimRewardOutputs } from '../../shared/referral/ClaimReferral'
import { firstError } from '../../helpers/firstError'
import { getCompleted } from './helpers/getCompleted'
import { ResponseError } from '../../shared/mongo/ResponseError'
import { verifyBrightId } from './helpers/claimVerifications'
import { sendReward } from './helpers/sendReward'

export const claimReward = async (ctx: Context, next: Next): Promise<void> => {
  const claimRewardArgs = plainToClass(ClaimRewardInputs, ctx.request.body, { excludeExtraneousValues: true });
  await validateOrReject(claimRewardArgs, { forbidUnknownValues: true }).catch(firstError);
  const user: User = await authenticate(ctx);
  const {publicAddress} = claimRewardArgs;

  if(!user.emailVerified)
    throw new ResponseError(400, "Email not verified.")

  //Verify that the program has already started
  const referral = await ReferralModel.findOne({referrerId: user._id}).lean()
  if(!referral)
    throw new ResponseError(404, "Referral not started.")

  //Verify if the referral is not already claimed/rewarded
  if(referral.status == REFERRAL_STATUS.RECEIVED)
    throw new ResponseError(400, "Reward already received.")

  //if(!user.ocean101?.completedAt)
    //throw new ResponseError(400, "Complete Ocean 101 before claiming reward.")


  //Check number of users that have completed
  const completed = await getCompleted(referral.referredUsers);
  if(completed <= 0)
    //throw new ResponseError(400, "Reward is not claimable yet.")

   //TODO:Verify nonce
   //await verifyNonce(publicAddress, signedNonce, referral.nonce);
   await verifyBrightId(user._id, publicAddress);

   const tx = await sendReward(publicAddress, user.userId);
   await ReferralModel.updateOne({referrerId: user._id}, {publicAddress: publicAddress, status: REFERRAL_STATUS.CLAIMED});

   const response: ClaimRewardOutputs = {tx: tx}

   ctx.status = 200
   ctx.body = response
   await next()
}