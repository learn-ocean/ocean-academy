import { Context, Next } from 'koa'

import { User } from '../../../shared/user/User'
import { createTestUser } from '../../../test/createTestUser'
import { deleteTestUser } from '../../../test/deleteTestUser'
import { mockConnect } from '../../../test/mockConnect'
import { login } from './login'

let user: User
let next: Next

describe('User', () => {
  beforeAll(async () => {
    await mockConnect()
    const created = await createTestUser('bob@test.com', 'bob', 'Bob1234#')
    user = created.user
    next = created.next
  })

  it('can login with email', async (done) => {
    const ctx: Context = {
      request: {
        headers: {},
        body: {
          usernameOrEmail: 'bob@test.com',
          password: 'Bob1234#',
          recaptchaToken:
            'mockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockToken',
        },
      },
    } as Context
    await login(ctx, next)

    expect(ctx.body.jwt).toBeDefined()
    done()
  })

  it('can login with username', async (done) => {
    const ctx: Context = {
      request: {
        headers: {},
        body: {
          usernameOrEmail: 'bob',
          password: 'Bob1234#',
          recaptchaToken:
            'mockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockToken',
        },
      },
    } as Context

    await login(ctx, next)

    expect(ctx.body.jwt).toBeDefined()
    done()
  })

  it('cannot login with wrong password', async () => {
    try {
      const ctx: Context = {
        request: {
          headers: {},
          body: {
            usernameOrEmail: 'bob@test.com',
            password: 'Wrong1234#',
            recaptchaToken:
              'mockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockToken',
          },
        },
      } as Context

      await login(ctx, next)

      throw new Error('Should not reach this point')
    } catch (error) {
      expect(error).toBeDefined()
      expect(error.message).toEqual('Wrong username or password')
    }
  })

  it('cannot find user', async () => {
    try {
      const ctx: Context = {
        request: {
          headers: {},
          body: {
            usernameOrEmail: 'wrong',
            password: 'Bob1234#',
            recaptchaToken:
              'mockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockTokenmockToken',
          },
        },
      } as Context

      await login(ctx, next)

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
