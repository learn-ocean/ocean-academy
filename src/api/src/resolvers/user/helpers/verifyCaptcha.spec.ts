import { CaptchaModel } from '../../../shared/captcha/Captcha'
import { CaptchaFor } from '../../../shared/captcha/CaptchaFor'
import { User } from '../../../shared/user/User'
import { createTestUser } from '../../../test/createTestUser'
import { deleteTestUser } from '../../../test/deleteTestUser'
import { mockConnect } from '../../../test/mockConnect'
import { verifyCaptcha } from './verifyCaptcha'

let user: User

describe('User', () => {
  beforeAll(async () => {
    await mockConnect()
    const created = await createTestUser('bob@test.com', 'bob', 'Bob1234#')
    user = created.user
  })

  it('can verify captcha', async (done) => {
    const proposedSolution = '0000'
    await verifyCaptcha(user._id, proposedSolution, CaptchaFor.CAPTCHA_FOR_VERIFY_EMAIL)
    done()
  })

  it('throws at invalid captcha', async (done) => {
    try {
      const proposedSolution = '1111'
      await verifyCaptcha(user._id, proposedSolution, CaptchaFor.CAPTCHA_FOR_VERIFY_EMAIL)
      throw new Error('Should not reach this point')
    } catch (error) {
      expect(error).toBeDefined()
      expect(error.message).toBe('Wrong captcha entered')
      done()
    }
  })

  it('allows next 2nd attempt', async (done) => {
    try {
      const proposedSolution = '22222'
      await verifyCaptcha(user._id, proposedSolution, CaptchaFor.CAPTCHA_FOR_VERIFY_EMAIL)
      throw new Error('Should not reach this point')
    } catch (error) {
      expect(error).toBeDefined()
      expect(error.message).toBe('Wrong captcha entered')
      done()
    }
  })

  it('allows next 3rd attempt', async (done) => {
    try {
      const proposedSolution = '3333'
      await verifyCaptcha(user._id, proposedSolution, CaptchaFor.CAPTCHA_FOR_VERIFY_EMAIL)
      throw new Error('Should not reach this point')
    } catch (error) {
      expect(error).toBeDefined()
      expect(error.message).toBe('Wrong captcha entered')
      done()
    }
  })

  it('blocks account at 4th attempt', async (done) => {
    try {
      const proposedSolution = '4444'
      await verifyCaptcha(user._id, proposedSolution, CaptchaFor.CAPTCHA_FOR_VERIFY_EMAIL)
      throw new Error('Should not reach this point')
    } catch (error) {
      expect(error).toBeDefined()
      expect(error.message).toBe('Maximum attempts reached - Please click "Send another email"')
      done()
    }

    done()
  })

  it('expires the captcha', async (done) => {
    try {
      await CaptchaModel.deleteOne({ userId: user._id, captchaFor: CaptchaFor.CAPTCHA_FOR_VERIFY_EMAIL })
      const proposedSolution = '0000'
      await verifyCaptcha(user._id, proposedSolution, CaptchaFor.CAPTCHA_FOR_VERIFY_EMAIL)
      throw new Error('Should not reach this point')
    } catch (error) {
      expect(error).toBeDefined()
      expect(error.message).toBe('Captcha expired - Please click "Send another email"')
      done()
    }

    done()
  })

  afterAll(async () => {
    await deleteTestUser(user._id)
  })
})
