import { CaptchaPair } from '../../../shared/captcha/CaptchaPair'
import { CaptchaSolution } from '../../../shared/captcha/CaptchaSolution'
import { captchaSolutions } from './captchaSolutions'
import { getRandomCaptchaPair } from './getRandomCaptchaPair'

describe('Captcha', () => {
  it('generates a correct captcha pair', () => {
    const captchaPair: CaptchaPair = getRandomCaptchaPair()
    expect(captchaPair).toBeDefined()
    expect(captchaPair.captchaIndex).toBeDefined()
    expect(captchaPair.captchaSolution).toBeDefined()

    const captchaSolution: CaptchaSolution = captchaSolutions[captchaPair.captchaIndex]
    expect(captchaSolution).toBeDefined()
    expect(captchaSolution).toEqual(captchaPair.captchaSolution)
  })
})
