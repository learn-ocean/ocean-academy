import axios from 'axios'

import { DEVELOPMENT, TEST } from '../../../constants'
import { ResponseError } from '../../../shared/mongo/ResponseError'

interface VerifyRecaptchaToken {
  (recaptchaToken: string): Promise<void>
}

export const verifyRecaptchaToken: VerifyRecaptchaToken = async (recaptchaToken) => {
  if (process.env.NODE_ENV === DEVELOPMENT || process.env.NODE_ENV === TEST) return

  const response = await axios({
    method: 'post',
    url: 'https://www.google.com/recaptcha/api/siteverify',
    params: {
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: recaptchaToken,
      // TODO: Add remoteip
    },
  })

  if (!(response && response.data && response.data.success)) throw new ResponseError(401, 'Wrong re-captcha token')
}
