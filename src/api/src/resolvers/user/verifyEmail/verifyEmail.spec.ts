import { Context, Next } from 'koa'

import { Captcha, CaptchaModel } from '../../../shared/captcha/Captcha'
import { CaptchaSolution } from '../../../shared/captcha/CaptchaSolution'
import { Jwt } from '../../../shared/user/Jwt'
import { User } from '../../../shared/user/User'
import { createTestUser } from '../../../test/createTestUser'
import { deleteTestUser } from '../../../test/deleteTestUser'
import { mockConnect } from '../../../test/mockConnect'
import { verifyEmail } from './verifyEmail'

let user: User
let jwt: Jwt
let next: Next
let solution: CaptchaSolution

describe('User', () => {
  beforeAll(async () => {
    await mockConnect()
    const created = await createTestUser('bob@test.com', 'bob', 'Bob1234#')
    user = created.user
    jwt = created.jwt
    next = created.next

    const captcha: Captcha = (await CaptchaModel.findOne({ userId: user._id }).exec()) as Captcha
    solution = captcha.solution
  })

  it('can verify his email', async (done) => {
    const ctx: Context = {
      request: {
        headers: {
          authorization: 'Bearer ' + jwt,
        },
        body: {
          solution,
        },
      },
    } as Context

    await verifyEmail(ctx, next)

    expect(ctx.status).toEqual(200)
    done()
  })

  afterAll(async () => {
    await deleteTestUser(user._id)
  })
})
