import { Context, Next } from 'koa'

import { Captcha, CaptchaModel } from '../../../shared/captcha/Captcha'
import { CaptchaFor } from '../../../shared/captcha/CaptchaFor'
import { User, UserModel } from '../../../shared/user/User'
import { createTestUser } from '../../../test/createTestUser'
import { deleteTestUser } from '../../../test/deleteTestUser'
import { mockConnect } from '../../../test/mockConnect'
import { resetPassword } from './resetPassword'

let user: User
let next: Next

describe('User', () => {
  beforeAll(async () => {
    process.env.FROM_EMAIL = 'test@test.com'
    process.env.SENDGRID_API_KEY = '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'

    await mockConnect()
    const created = await createTestUser('bob@test.com', 'bob', 'Bob1234#')
    user = created.user
    next = created.next
  })

  it('can reset his password', async (done) => {
    let captcha: Captcha = await CaptchaModel.create({
      userId: user._id,
      index: 0,
      solution: '0000',
      captchaFor: CaptchaFor.CAPTCHA_FOR_RESET_PASSWORD,
    } as Captcha)

    captcha = (await CaptchaModel.findOne({ _id: captcha._id }).lean()) as Captcha

    const ctx: Context = {
      request: {
        headers: {},
        body: {
          solution: captcha.solution,
          token: captcha.token,
          newPassword: 'New1234#s',
        },
      },
    } as Context

    await resetPassword(ctx, next)

    expect(ctx.status).toEqual(200)
    done()
  })

  it('throws if user not found', async () => {
    try {
      let captcha: Captcha = await CaptchaModel.create({
        userId: user._id,
        index: 0,
        solution: '0000',
        captchaFor: CaptchaFor.CAPTCHA_FOR_RESET_PASSWORD,
      } as Captcha)

      captcha = (await CaptchaModel.findOne({ _id: captcha._id }).lean()) as Captcha

      await UserModel.deleteOne({ _id: user._id })

      const ctx: Context = {
        request: {
          headers: {},
          body: {
            solution: captcha.solution,
            token: captcha.token,
            newPassword: 'New1234#s',
          },
        },
      } as Context

      await resetPassword(ctx, next)

      throw new Error('Should not reach this point')
    } catch (e) {
      expect(e.message).toEqual('User not found')
    }
  })

  it('throws if wrong token', async () => {
    try {
      //   await CaptchaModel.deleteOne({ userId, captchaFor: CaptchaFor.CAPTCHA_FOR_VERIFY_EMAIL })

      const ctx: Context = {
        request: {
          headers: {},
          body: {
            solution: '0000',
            token: 'wrongwrongwrongwrong',
            newPassword: 'New1234#s',
          },
        },
      } as Context

      await resetPassword(ctx, next)

      throw new Error('Should not reach this point')
    } catch (e) {
      expect(e.message).toEqual('Wrong token key')
    }
  })

  afterAll(async () => {
    await deleteTestUser(user._id)
  })
})
