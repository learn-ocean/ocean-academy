import { Context, Next } from 'koa'

import { Jwt } from '../../../shared/user/Jwt'
import { User } from '../../../shared/user/User'
import { createTestUser } from '../../../test/createTestUser'
import { deleteTestUser } from '../../../test/deleteTestUser'
import { mockConnect } from '../../../test/mockConnect'
import * as createCaptchaObject from '../../captcha/helpers/createCaptcha'
import * as sendEmailForgotPasswordObject from '../helpers/sendEmailForgotPassword'
import * as verifyRecaptchaTokenObject from '../helpers/verifyRecaptchaToken'
import { forgotPassword } from './forgotPassword'

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

  it('can request a forget password captcha using username', async (done) => {
    jest.spyOn(verifyRecaptchaTokenObject, 'verifyRecaptchaToken').mockImplementation(async () => Promise.resolve())
    jest.spyOn(createCaptchaObject, 'createCaptcha')
    jest
      .spyOn(sendEmailForgotPasswordObject, 'sendEmailForgotPassword')
      .mockImplementation(async () => Promise.resolve())

    const ctx: Context = {
      request: {
        headers: {
          authorization: 'Bearer ' + jwt,
        },
        body: {
          usernameOrEmail: 'bob',
          recaptchaToken:
            'mockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockToken',
        },
      },
    } as Context

    await forgotPassword(ctx, next)

    expect(ctx.status).toEqual(200)
    expect(verifyRecaptchaTokenObject.verifyRecaptchaToken).toHaveBeenCalled()
    expect(createCaptchaObject.createCaptcha).toHaveBeenCalled()
    expect(sendEmailForgotPasswordObject.sendEmailForgotPassword).toHaveBeenCalled()

    done()
  })

  it('can request a forget password captcha using email', async (done) => {
    jest.spyOn(verifyRecaptchaTokenObject, 'verifyRecaptchaToken').mockImplementation(async () => Promise.resolve())
    jest.spyOn(createCaptchaObject, 'createCaptcha')
    jest
      .spyOn(sendEmailForgotPasswordObject, 'sendEmailForgotPassword')
      .mockImplementation(async () => Promise.resolve())

    const ctx: Context = {
      request: {
        headers: {
          authorization: 'Bearer ' + jwt,
        },
        body: {
          usernameOrEmail: 'bob@test.com',
          recaptchaToken:
            'mockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockToken',
        },
      },
    } as Context

    await forgotPassword(ctx, next)

    expect(ctx.status).toEqual(200)
    expect(verifyRecaptchaTokenObject.verifyRecaptchaToken).toHaveBeenCalled()
    expect(createCaptchaObject.createCaptcha).toHaveBeenCalled()
    expect(sendEmailForgotPasswordObject.sendEmailForgotPassword).toHaveBeenCalled()

    done()
  })

  it('cannot request a forget password captcha with wrong username', async () => {
    try {
      jest.spyOn(verifyRecaptchaTokenObject, 'verifyRecaptchaToken').mockImplementation(async () => Promise.resolve())
      jest.spyOn(createCaptchaObject, 'createCaptcha')
      jest
        .spyOn(sendEmailForgotPasswordObject, 'sendEmailForgotPassword')
        .mockImplementation(async () => Promise.resolve())

      const ctx: Context = {
        request: {
          headers: {
            authorization: 'Bearer ' + jwt,
          },
          body: {
            usernameOrEmail: 'wrong',
            recaptchaToken:
              'mockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockToken',
          },
        },
      } as Context

      await forgotPassword(ctx, next)

      throw new Error('Should not reach this point')
    } catch (error) {
      expect(error).toBeDefined()
      expect(error.message).toEqual('Wrong username or password')
    }
  })

  afterAll(async () => {
    await deleteTestUser(user._id)
  })
})
