import * as dayjs from 'dayjs'
import { ObjectId } from 'mongodb'

import { Captcha, CaptchaModel } from '../../../shared/captcha/Captcha'
import { CaptchaFor } from '../../../shared/captcha/CaptchaFor'
import { CaptchaSolution } from '../../../shared/captcha/CaptchaSolution'
import { mockConnect } from '../../../test/mockConnect'
import { createCaptcha } from './createCaptcha'
import * as getRandomCaptchaPairObject from './getRandomCaptchaPair'

describe('User', () => {
  beforeAll(async () => {
    process.env.FROM_EMAIL = 'test@test.com'
    await mockConnect()
  })

  it('registration can get captcha', async (done) => {
    const userId = new ObjectId('5e678dc6929100d88de390e2')
    const captchaFor: CaptchaFor = CaptchaFor.CAPTCHA_FOR_VERIFY_EMAIL
    const captchaIndex = 0
    const captchaSolution: CaptchaSolution = '0000'

    jest.spyOn(getRandomCaptchaPairObject, 'getRandomCaptchaPair').mockReturnValue({ captchaIndex, captchaSolution })

    const captcha: Captcha = await createCaptcha(userId, captchaFor)

    expect(captcha).toBeDefined()
    expect(captcha.solution).toBe(captchaSolution)
    expect(captcha.index).toBe(captchaIndex)
    expect(captcha.userId).toBe(userId)
    expect(dayjs(captcha.expiresAt).unix()).toBeLessThanOrEqual(dayjs(captcha.createdAt).unix() + 3600)
    expect(dayjs(captcha.expiresAt).unix()).toBeGreaterThanOrEqual(dayjs(captcha.createdAt).unix() + 3000)

    expect(getRandomCaptchaPairObject.getRandomCaptchaPair).toHaveBeenCalled()

    done()
  })

  afterAll(async () => {
    jest.clearAllMocks()
    const userId = 'testUserId'
    const captchaFor: CaptchaFor = CaptchaFor.CAPTCHA_FOR_VERIFY_EMAIL
    await CaptchaModel.deleteOne({ userId, captchaFor })
  })
})
