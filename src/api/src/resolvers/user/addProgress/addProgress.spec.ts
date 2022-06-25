import { Context, Next } from 'koa'
import { Jwt } from '../../../shared/user/Jwt'
import { User, UserModel } from '../../../shared/user/User'
import { createTestUser } from '../../../test/createTestUser'
import { deleteTestUser } from '../../../test/deleteTestUser'
import { mockConnect } from '../../../test/mockConnect'
import { mockDisconnect } from '../../../test/mockDisconnect'
import { MOCK_RECAPTCHA } from '../../../test/mockRecaptcha'
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
          recaptchaToken: MOCK_RECAPTCHA
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

  it('can add progress 5 Ocean101', async (done) => {
    let ctx: Context = {
      request: {
        headers: {
          authorization: 'Bearer ' + jwt,
        },
        body: {
          chapterDone: '/ocean101/chapter-1',
          recaptchaToken: MOCK_RECAPTCHA
        },
      },
    } as Context
    for(let i = 2; i < 6; i++){
      ctx = {
        request: {
          headers: {
            authorization: 'Bearer ' + jwt,
          },
          body: {
            chapterDone: `/ocean101/chapter-${i}`,
            recaptchaToken: MOCK_RECAPTCHA
          },
        },
      } as Context
      await addProgress(ctx, next)
    }
    const userQueried = await UserModel.findById(user._id)
    expect(ctx.body.user).toBeDefined()
    expect(ctx.body.user.progress).toContain('/ocean101/chapter-4')
    expect(ctx.body.user.ocean101).toBeDefined()
    expect(ctx.body.user.ocean101.progress).toBeDefined()
    expect(ctx.body.user.ocean101.progress[4]).toBeDefined()
    expect(ctx.body.user.ocean101.progress[4].completedAt).toBeDefined()
    expect(ctx.body.user.ocean101.progress[4].chapter).toBe(5)
    expect(userQueried?.ComputeToData?.completedAt).toBeUndefined()
    done()
  })

  it('can complete Ocean101', async (done) => {

    for(let i = 6; i <= 23; i++){
     const ctx: Context = {
        request: {
          headers: {
            authorization: 'Bearer ' + jwt,
          },
          body: {
            chapterDone: `/ocean101/chapter-${i}`,
            recaptchaToken: MOCK_RECAPTCHA
          },
        },
      } as Context
      await addProgress(ctx, next)
    }
    const ctx: Context = {
      request: {
        headers: {
          authorization: 'Bearer ' + jwt,
        },
        body: {
          chapterDone: `/ocean101/chapter-24`,
          recaptchaToken: MOCK_RECAPTCHA
        },
      },
    } as Context
    const now = Date.now()
    jest.spyOn(global.Date, 'now').mockReturnValue(now + 45 * 60000);
    await addProgress(ctx, next)
    const userQueried = await UserModel.findById(user._id)
    expect(ctx.body.user).toBeDefined()
    expect(ctx.body.user.progress).toContain('/ocean101/chapter-24')
    expect(ctx.body.user.ocean101).toBeDefined()
    expect(ctx.body.user.ocean101.progress).toBeDefined()
    expect(ctx.body.user.ocean101.progress[23]).toBeDefined()
    expect(ctx.body.user.ocean101.progress[23].completedAt).toBeDefined()
    expect(ctx.body.user.ocean101.progress[23].chapter).toBe(24)
    expect(userQueried?.ocean101?.completedAt).toBeDefined()
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
          recaptchaToken: MOCK_RECAPTCHA
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

  it('can add progress 5 Intro To Data Defi', async (done) => {
    let ctx: Context = {
      request: {
        headers: {
          authorization: 'Bearer ' + jwt,
        },
        body: {
          chapterDone: '/ocean101/chapter-1',
          recaptchaToken: MOCK_RECAPTCHA
        },
      },
    } as Context
    for(let i = 2; i < 6; i++){
      ctx = {
        request: {
          headers: {
            authorization: 'Bearer ' + jwt,
          },
          body: {
            chapterDone: `/introToDataDefi/chapter-${i}`,
            recaptchaToken: MOCK_RECAPTCHA
          },
        },
      } as Context
      await addProgress(ctx, next)
    }
    const userQueried = await UserModel.findById(user._id)
    expect(ctx.body.user).toBeDefined()
    expect(ctx.body.user.progress).toContain('/introToDataDefi/chapter-4')
    expect(ctx.body.user.introToDataDefi).toBeDefined()
    expect(ctx.body.user.introToDataDefi.progress).toBeDefined()
    expect(ctx.body.user.introToDataDefi.progress[4]).toBeDefined()
    expect(ctx.body.user.introToDataDefi.progress[4].completedAt).toBeDefined()
    expect(ctx.body.user.introToDataDefi.progress[4].chapter).toBe(5)
    expect(userQueried?.introToDataDefi?.completedAt).toBeUndefined()
    done()
  })

  it('can complete Intro To Data Defi', async (done) => {
    let ctx: Context = {
      request: {
        headers: {
          authorization: 'Bearer ' + jwt,
        },
        body: {
          chapterDone: '/introToDataDefi/chapter-6',
          recaptchaToken: MOCK_RECAPTCHA
        },
      },
    } as Context
    await addProgress(ctx, next)
    
    const userQueried = await UserModel.findById(user._id)
    expect(ctx.body.user).toBeDefined()
    expect(ctx.body.user.progress).toContain('/introToDataDefi/chapter-6')
    expect(ctx.body.user.introToDataDefi).toBeDefined()
    expect(ctx.body.user.introToDataDefi.progress).toBeDefined()
    expect(ctx.body.user.introToDataDefi.progress[5]).toBeDefined()
    expect(ctx.body.user.introToDataDefi.progress[5].completedAt).toBeDefined()
    expect(ctx.body.user.introToDataDefi.progress[5].chapter).toBe(6)
    expect(userQueried?.introToDataDefi?.completedAt).toBeDefined()
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
          recaptchaToken: MOCK_RECAPTCHA
        },
      },
    } as Context
    const userQueried = await UserModel.findById(user._id)
    await addProgress(ctx, next)
    expect(ctx.body.user).toBeDefined()
    expect(ctx.body.user.progress).toContain('/ComputeToData/chapter-1')
    expect(ctx.body.user.ComputeToData).toBeDefined()
    expect(ctx.body.user.ComputeToData.progress).toBeDefined()
    expect(ctx.body.user.ComputeToData.progress[0]).toBeDefined()
    expect(ctx.body.user.ComputeToData.progress[0].completedAt).toBeDefined()
    expect(ctx.body.user.ComputeToData.progress[0].chapter).toBe(1)
    expect(userQueried?.ComputeToData?.completedAt).toBeUndefined()
    done()
  })

  it('can add progress 5 Compute To Data', async (done) => {
    let ctx: Context = {
      request: {
        headers: {
          authorization: 'Bearer ' + jwt,
        },
        body: {
          chapterDone: '/ComputeToData/chapter-1',
          recaptchaToken: MOCK_RECAPTCHA
        },
      },
    } as Context
    for(let i = 2; i < 7; i++){
      ctx = {
        request: {
          headers: {
            authorization: 'Bearer ' + jwt,
          },
          body: {
            chapterDone: `/ComputeToData/chapter-${i}`,
            recaptchaToken: MOCK_RECAPTCHA
          },
        },
      } as Context
      await addProgress(ctx, next)
    }
    const userQueried = await UserModel.findById(user._id)
    expect(ctx.body.user).toBeDefined()
    expect(ctx.body.user.progress).toContain('/ComputeToData/chapter-4')
    expect(ctx.body.user.ComputeToData).toBeDefined()
    expect(ctx.body.user.ComputeToData.progress).toBeDefined()
    expect(ctx.body.user.ComputeToData.progress[4]).toBeDefined()
    expect(ctx.body.user.ComputeToData.progress[4].completedAt).toBeDefined()
    expect(ctx.body.user.ComputeToData.progress[4].chapter).toBe(5)
    expect(userQueried?.ComputeToData?.completedAt).toBeUndefined()
    done()
  })

  it('can complete Compute To Data', async (done) => {
    let ctx: Context = {
      request: {
        headers: {
          authorization: 'Bearer ' + jwt,
        },
        body: {
          chapterDone: '/ComputeToData/chapter-7',
          recaptchaToken: "11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
        },
      },
    } as Context
    await addProgress(ctx, next)
    
    const userQueried = await UserModel.findById(user._id)
    expect(ctx.body.user).toBeDefined()
    expect(ctx.body.user.progress).toContain('/ComputeToData/chapter-6')
    expect(ctx.body.user.ComputeToData).toBeDefined()
    expect(ctx.body.user.ComputeToData.progress).toBeDefined()
    expect(ctx.body.user.ComputeToData.progress[6]).toBeDefined()
    expect(ctx.body.user.ComputeToData.progress[6].completedAt).toBeDefined()
    expect(ctx.body.user.ComputeToData.progress[6].chapter).toBe(7)
    expect(userQueried?.ComputeToData?.completedAt).toBeDefined()
    done()
  })

  afterAll(async () => {
    await deleteTestUser(user._id)
    await mockDisconnect()
  })
})
