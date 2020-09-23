import { Context, Next } from 'koa'

import { Jwt } from '../../../shared/user/Jwt'
import { User } from '../../../shared/user/User'
import { createTestUser } from '../../../test/createTestUser'
import { deleteTestUser } from '../../../test/deleteTestUser'
import { mockConnect } from '../../../test/mockConnect'
import { addProgress } from './addProgress'

let user: User
let next: Next
let jwt: Jwt

describe('User', () => {
  beforeAll(async () => {
    await mockConnect()
    const created = await createTestUser('bob@test.com', 'bob', 'Bob1234#')
    user = created.user
    jwt = created.jwt
    next = created.next
  })

  it('can add progress', async (done) => {
    const ctx: Context = {
      request: {
        headers: {
          authorization: 'Bearer ' + jwt,
        },
        body: {
          chapterDone: '/chapter-1',
        },
      },
    } as Context

    await addProgress(ctx, next)

    expect(ctx.body.user).toBeDefined()
    expect(ctx.body.user.progress).toContain('/chapter-1')

    done()
  })

  afterAll(async () => {
    await deleteTestUser(user._id)
  })
})
