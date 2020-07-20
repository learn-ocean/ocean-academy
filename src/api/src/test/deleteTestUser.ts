import { ObjectId } from 'mongodb'

import { CaptchaModel } from '../shared/captcha/Captcha'
import { CaptchaFor } from '../shared/captcha/CaptchaFor'
import { UserModel } from '../shared/user/User'

interface DeleteTestUser {
  (userId: ObjectId): Promise<void>
}

export const deleteTestUser: DeleteTestUser = async (userId) => {
  await CaptchaModel.deleteOne({ userId, captchaFor: CaptchaFor.CAPTCHA_FOR_VERIFY_EMAIL })
  await UserModel.deleteOne({ _id: userId })
}
