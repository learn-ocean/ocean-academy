import { Context, Next } from 'koa'

import { clone } from '../../../helpers/clone'
import { User, UserModel } from '../../../shared/user/User'
import { mockConnect } from '../../../test/mockConnect'
import * as createCaptchaObject from '../../captcha/helpers/createCaptcha'
import * as getSignedJwtObject from '../helpers/getSignedJwt'
import * as sendEmailVerifyEmailObject from '../helpers/sendEmailVerifyEmail'
import * as verifyRecaptchaTokenObject from '../helpers/verifyRecaptchaToken'
import { signUp } from './signUp'

const ctx: Context = {
  request: {
    headers: {},
    body: {
      email: 'test@test.com',
      username: 'test',
      password: 'Test1234#',
      confirmPassword: 'Test1234#',
      recaptchaToken:
        'mockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockToken',
    },
  },
} as Context

const next: Next = (async () => Promise.resolve()) as Next

describe('Users', () => {
  beforeAll(async () => {
    await mockConnect()
  })

  it('can sign up', async (done) => {
    jest.spyOn(verifyRecaptchaTokenObject, 'verifyRecaptchaToken').mockImplementation(async () => Promise.resolve())
    jest.spyOn(getSignedJwtObject, 'getSignedJwt').mockImplementation(() => 'testJwt')
    jest.spyOn(createCaptchaObject, 'createCaptcha')
    jest.spyOn(sendEmailVerifyEmailObject, 'sendEmailVerifyEmail').mockImplementation(async () => Promise.resolve())

    const ctx1 = clone(ctx)
    await signUp(ctx1, next)

    expect(ctx1.body.jwt).toBeDefined()
    expect(verifyRecaptchaTokenObject.verifyRecaptchaToken).toHaveBeenCalled()
    expect(getSignedJwtObject.getSignedJwt).toHaveBeenCalled()
    expect(createCaptchaObject.createCaptcha).toHaveBeenCalled()
    expect(sendEmailVerifyEmailObject.sendEmailVerifyEmail).toHaveBeenCalled()

    const user: User | null = await UserModel.findOne({ username: ctx1.request.body.username }).lean()

    expect(user).toBeDefined()
    if (user) {
      expect(user.username).toBe(ctx1.request.body.username)
    }

    done()
  })

  it('cannot sign up with a wrong password', async () => {
    try {
      const ctx2 = clone(ctx)
      ctx2.request.body.password = 'test'
      ctx2.request.body.confirmPassword = 'test'
      await signUp(ctx2, next)
      throw new Error('Should not reach this point')
    } catch (e) {
      expect(e.message).toEqual('Password must have at least one letter and one digit')
    }
  })

  it('cannot sign up with an existing email', async () => {
    try {
      const ctx3 = clone(ctx)
      await signUp(ctx3, next)
      throw new Error('Should not reach this point')
    } catch (e) {
      expect(e.message).toEqual('Email is already taken')
    }
  })

  it('cannot sign up with an existing username', async () => {
    try {
      const ctx4 = clone(ctx)
      ctx4.request.body.email = 'otherTest@test.com'
      await signUp(ctx4, next)
      throw new Error('Should not reach this point')
    } catch (e) {
      expect(e.message).toEqual('Username is already taken')
    }
  })

  afterAll(async () => {
    jest.clearAllMocks()
    await UserModel.deleteOne({ username: ctx.request.body.username })
  })
})
