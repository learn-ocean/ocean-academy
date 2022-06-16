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

  it('can add progress Ocean101', async (done) => {
    const ctx: Context = {
      request: {
        headers: {
          authorization: 'Bearer ' + jwt,
        },
        body: {
          chapterDone: '/ocean101/chapter-1',
        },
      },
    } as Context

    await addProgress(ctx, next)
    expect(ctx.body.user).toBeDefined()
    expect(ctx.body.user.progress).toContain('/ocean101/chapter-1')
    expect(ctx.body.user.ocean101).toBeDefined()
    expect(ctx.body.user.ocean101.progress).toBeDefined()
    expect(ctx.body.user.ocean101.progress[0]).toBeDefined()
    expect(ctx.body.user.ocean101.progress[0].completedAt).toBeDefined()
    expect(ctx.body.user.ocean101.progress[0].chapter).toBe(1)

    done()
  })

  it('can add progress Intro To Data Defi', async (done) => {
    const ctx: Context = {
      request: {
        headers: {
          authorization: 'Bearer ' + jwt,
        },
        body: {
          chapterDone: '/introToDataDefi/chapter-1',
        },
      },
    } as Context

    await addProgress(ctx, next)
    expect(ctx.body.user).toBeDefined()
    expect(ctx.body.user.progress).toContain('/introToDataDefi/chapter-1')
    expect(ctx.body.user.introToDataDefi).toBeDefined()
    expect(ctx.body.user.introToDataDefi.progress).toBeDefined()
    expect(ctx.body.user.introToDataDefi.progress[0]).toBeDefined()
    expect(ctx.body.user.introToDataDefi.progress[0].completedAt).toBeDefined()
    expect(ctx.body.user.introToDataDefi.progress[0].chapter).toBe(1)

    done()
  })

  it('can add progress Compute To Data', async (done) => {
    const ctx: Context = {
      request: {
        headers: {
          authorization: 'Bearer ' + jwt,
        },
        body: {
          chapterDone: '/ComputeToData/chapter-1',
        },
      },
    } as Context

    await addProgress(ctx, next)
    expect(ctx.body.user).toBeDefined()
    expect(ctx.body.user.progress).toContain('/ComputeToData/chapter-1')
    expect(ctx.body.user.ComputeToData).toBeDefined()
    expect(ctx.body.user.ComputeToData.progress).toBeDefined()
    expect(ctx.body.user.ComputeToData.progress[0]).toBeDefined()
    expect(ctx.body.user.ComputeToData.progress[0].completedAt).toBeDefined()
    expect(ctx.body.user.ComputeToData.progress[0].chapter).toBe(1)

    done()
  })

  afterAll(async () => {
    await deleteTestUser(user._id)
  })
})
