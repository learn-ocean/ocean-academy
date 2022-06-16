import { ObjectId } from 'mongodb'
import { ReferralModel } from '../shared/referral/Referral'

interface DeleteTestReferral {
    (userId: ObjectId): Promise<void>
  }
  
  export const deleteTestReferral: DeleteTestReferral = async (referrerId) => {
    await ReferralModel.deleteOne({ referrerId: referrerId})
  }