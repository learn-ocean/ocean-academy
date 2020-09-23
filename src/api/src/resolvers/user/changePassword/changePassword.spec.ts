import { Context, Next } from 'koa'

import { Jwt } from '../../../shared/user/Jwt'
import { User } from '../../../shared/user/User'
import { createTestUser } from '../../../test/createTestUser'
import { deleteTestUser } from '../../../test/deleteTestUser'
import { mockConnect } from '../../../test/mockConnect'
import { changePassword } from './changePassword'

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

  it('can change their password', async (done) => {
    const ctx: Context = {
      request: {
        headers: {
          authorization: 'Bearer ' + jwt,
        },
        body: {
          password: 'Bob1234#',
          newPassword: 'New1234#',
        },
      },
    } as Context

    await changePassword(ctx, next)

    expect(ctx.status).toEqual(200)
    done()
  })

  it('cannot change with a wrong password', async (done) => {
    try {
      const ctx: Context = {
        request: {
          headers: {
            authorization: 'Bearer ' + jwt,
          },
          body: {
            password: 'Wrong1234#',
            newPassword: 'New1234#',
          },
        },
      } as Context

      await changePassword(ctx, next)
      throw new Error('Should not reach this point')
    } catch (error) {
      expect(error.message).toEqual('Wrong username or password')
    }

    done()
  })

  afterAll(async () => {
    await deleteTestUser(user._id)
  })
})
