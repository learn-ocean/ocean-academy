/* eslint-disable security/detect-object-injection */

import { CaptchaPair } from '../../../shared/captcha/CaptchaPair'
import { CaptchaSolution } from '../../../shared/captcha/CaptchaSolution'
import { captchaSolutions } from './captchaSolutions'

interface GetRandomCaptcha {
  (): CaptchaPair
}

export const getRandomCaptchaPair: GetRandomCaptcha = () => {
  const captchaIndex: number = Math.floor(Math.random() * 100)
  const captchaSolution: CaptchaSolution = captchaSolutions[captchaIndex]
  const captchaPair: CaptchaPair = {
    captchaIndex,
    captchaSolution,
  }

  return captchaPair
}
