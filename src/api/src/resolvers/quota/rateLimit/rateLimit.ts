import { ObjectId } from 'mongodb'

import { ResponseError } from '../../../shared/mongo/ResponseError'
import { QuotaModel, Quota } from '../../../shared/quota/Quota'
import { TEST } from '../../../constants'
import { QuotaType } from '../../../shared/quota/QuotaType'
import { QuotaRates } from '../../../shared/quota/QuotaRates'

interface RateLimit {
  (userId: ObjectId, quotaType?: QuotaType): Promise<void>
}

export const rateLimit: RateLimit = async (userId, quotaType = QuotaType.DEFAULT_LIMIT) => {
  if (process.env.NODE_ENV === TEST) return

  const limitBefore: Quota | null = await QuotaModel.findOneAndUpdate(
    { userId, quotaType },
    {
      $inc: { count: 1 },
    },
    { upsert: true, setDefaultsOnInsert: true },
  ).exec()

  if (limitBefore && limitBefore.count && limitBefore.count >= QuotaRates[quotaType])
    throw new ResponseError(429, 'Quota limit reached. Please wait 24h and retry.')
}
