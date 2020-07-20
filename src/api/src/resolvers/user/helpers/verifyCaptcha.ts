import { ObjectId } from 'mongodb'

import { Captcha, CaptchaModel } from '../../../shared/captcha/Captcha'
import { CaptchaFor } from '../../../shared/captcha/CaptchaFor'
import { ResponseError } from '../../../shared/mongo/ResponseError'

interface VerifyCaptcha {
  (userId: ObjectId, proposedSolution: string, captchaFor: CaptchaFor): Promise<void>
}

export const verifyCaptcha: VerifyCaptcha = async (userId, proposedSolution, captchaFor) => {
  const captcha: Captcha = (await CaptchaModel.findOne({ userId, captchaFor }).lean()) as Captcha

  if (!captcha) throw new ResponseError(400, 'Captcha expired - Please click "Send another email"')

  if (captcha.attempts && captcha.attempts >= 3)
    throw new ResponseError(401, 'Maximum attempts reached - Please click "Send another email"')

  if (captcha.solution === proposedSolution) return

  await CaptchaModel.updateOne({ _id: captcha._id }, { $inc: { attempts: 1 } }).exec()

  throw new ResponseError(400, 'Wrong captcha entered')
}
