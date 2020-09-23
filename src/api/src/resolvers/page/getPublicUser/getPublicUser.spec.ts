import { Context, Next } from 'koa'

import { User } from '../../../shared/user/User'
import { createTestUser } from '../../../test/createTestUser'
import { deleteTestUser } from '../../../test/deleteTestUser'
import { mockConnect } from '../../../test/mockConnect'
import { getPublicUser } from './getPublicUser'

let user: User
let next: Next

describe('User', () => {
  beforeAll(async () => {
    await mockConnect()
    const created = await createTestUser('bob@test.com', 'bob', 'Bob1234#')
    user = created.user
    next = created.next
  })

  it('can get public user', async (done) => {
    const ctx: Context = {
      request: {
        headers: {},
        body: {
          username: user.username,
        },
      },
    } as Context

    await getPublicUser(ctx, next)

    expect(ctx.body.user).toBeDefined()
    done()
  })

  it('cannot get undefined public user', async () => {
    try {
      const ctx: Context = {
        request: {
          headers: {},
          body: {
            username: 'unexisting',
          },
        },
      } as Context

      await getPublicUser(ctx, next)

      throw new Error('Should not reach this point')
    } catch (error) {
      expect(error).toBeDefined()
      expect(error.message).toEqual('User not found')
    }
  })

  afterAll(async () => {
    await deleteTestUser(user._id)
  })
})
