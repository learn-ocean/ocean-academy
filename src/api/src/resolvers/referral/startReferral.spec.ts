import { Context, Next } from 'koa'
import { ReferralModel } from '../../shared/referral/Referral'
import { Jwt } from '../../shared/user/Jwt'
import { User, UserModel } from '../../shared/user/User'
import { createTestUser } from '../../test/createTestUser'
import { deleteTestReferral } from '../../test/deleteTestReferral'
import { deleteTestUser } from '../../test/deleteTestUser'
import { mockConnect } from '../../test/mockConnect'
import { mockDisconnect } from '../../test/mockDisconnect'
import { addProgress } from '../user/addProgress/addProgress'
import { startReferral } from './startReferral'

let user: User
let next: Next
let jwt: Jwt

export const addProgressHelper = async(next:Next, jwt:Jwt, chapterDone: string) => {
    const ctx: Context = {request: {
        headers: {
          authorization: 'Bearer ' + jwt,
        },
        body: {
          chapterDone: chapterDone,
        },
      }} as Context
    await addProgress(ctx,next);
}

describe('Start Referral', () => {
  beforeAll(async () => {
    await mockConnect()
    await ReferralModel.deleteMany({},{})
    const created = await createTestUser('bob@test.com', 'bob', 'Bob1234#')
    user = created.user
    jwt = created.jwt
    next = created.next
  })

  it('cannot start referral if email not verified', async (done) => {
   try{ const ctx: Context = {
      request: {
        headers: {
          authorization: 'Bearer ' + jwt,
        },
        body: {
        },
      },
    } as Context

    await startReferral(ctx, next)
    throw new Error("Should not be reaching here.")
    }catch(e){
        expect(e).toBeDefined()
        expect(e.message).toBe("Please verify your email to be able to start referral.")
        done()
    }
  })

  it('cannot start referral if ocean 101 not completed', async (done) => {
    await UserModel.findOneAndUpdate({_id: user._id}, {emailVerified: true})
    try{
    const ctx: Context = {
       request: {
         headers: {
           authorization: 'Bearer ' + jwt,
         },
         body: {
         },
       },
     } as Context
     await startReferral(ctx, next)     
    }catch(e){
        expect(e).toBeDefined()
        expect(e.message).toBe("Complete Ocean 101 before starting the referral.")
        done()
    }
   })

   it('cannot start referral if ocean101 almost completed', async (done) => {
    for(let i = 1; i<24; i++){
        await addProgressHelper(next,jwt, `/ocean101/chapter-${i}`);
    }
    try{
     const ctx: Context = {
       request: {
         headers: {
           authorization: 'Bearer ' + jwt,
         },
         body: {
         },
       },
     } as Context
     await startReferral(ctx, next)     
    }catch(e){
        expect(e).toBeDefined()
        expect(e.message).toBe("Complete Ocean 101 before starting the referral.")
        done()
    }})

    it('can start referral if ocean101 was completed', async (done) => {
        await addProgressHelper(next,jwt, `/ocean101/chapter-24`);
        const ctx: Context = {
           request: {
             headers: {
               authorization: 'Bearer ' + jwt,
             },
             body: {
             },
           },
         } as Context
        await startReferral(ctx, next)  
        expect(ctx.body.referralCode).toBeDefined()
        done()
    })
    
    
    it('cannot start referral if already started', async (done) => {
    try{
        const ctx: Context = {
           request: {
             headers: {
               authorization: 'Bearer ' + jwt,
             },
             body: {
             },
           },
         } as Context
        await startReferral(ctx, next)  
    }catch(e){
        expect(e).toBeDefined()
        expect(e.message).toBe("Referral already started.")
        done()
    }
    })   
    
  afterAll(async () => {
    await deleteTestUser(user._id)
    await deleteTestReferral(user._id)
    await mockDisconnect()
  })
})
