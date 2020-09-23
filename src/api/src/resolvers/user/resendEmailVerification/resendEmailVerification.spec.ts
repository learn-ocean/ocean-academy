import { Context, Next } from 'koa'
import { mockConnect } from '../../../test/mockConnect'
import { createTestUser } from '../../../test/createTestUser'
import { User } from '../../../shared/user/User'
import { Jwt } from '../../../shared/user/Jwt'
import { deleteTestUser } from '../../../test/deleteTestUser'
import { CaptchaFor } from '../../../shared/captcha/CaptchaFor'
import { CaptchaModel } from '../../../shared/captcha/Captcha'
import { resendEmailVerification } from './resendEmailVerification'

let user: User
let jwt: Jwt
let next: Next

describe('User', () => {
  beforeAll(async () => {
    await mockConnect()
    const created = await createTestUser('bob@test.com', 'bob', 'Bob1234#')
    user = created.user
    jwt = created.jwt
    next = created.next
  })

  it('can resend email verification token using existing captcha', async (done) => {
    const ctx: Context = {
      request: {
        headers: {
          authorization: 'Bearer ' + jwt,
        },
        body: {},
      },
    } as Context

    await resendEmailVerification(ctx, next)

    expect(ctx.status).toEqual(200)
    done()
  })

  it('can resend email verification token using new captcha', async (done) => {
    const ctx: Context = {
      request: {
        headers: {
          authorization: 'Bearer ' + jwt,
        },
        body: {},
      },
    } as Context

    await CaptchaModel.deleteOne({ userId: user._id, captchaFor: CaptchaFor.CAPTCHA_FOR_VERIFY_EMAIL })

    await resendEmailVerification(ctx, next)

    expect(ctx.status).toEqual(200)
    done()
  })

  afterAll(async () => {
    await deleteTestUser(user._id)
  })
})
