import { User, UserModel } from '../../shared/user/User'
import { Next , Context} from 'koa'
import { Jwt } from '../../shared/user/Jwt'
import { createTestUser } from '../../test/createTestUser'
import { deleteTestUser } from '../../test/deleteTestUser'
import { mockConnect } from '../../test/mockConnect'
import { claimReward } from './claimReward'
import { startReferral } from './startReferral'
import { addProgressHelper } from './startReferral.spec'
import { ReferralModel } from '../../shared/referral/Referral'
import { deleteTestReferral } from '../../test/deleteTestReferral'

let user: User
let referred1: User
let referred2: User
let referred3: User

let next: Next
let jwt: Jwt
let jwtReferred1: Jwt
let jwtReferred2: Jwt
//let jwtReferred3: Jwt

const linkedAddress = "0xC6DE6C8Fb1Df511DB82800980E8a2d3E724287Af"
//const notLinkedAddress = "0x49A4F74A39D6fBD70470c5CA6d21D129D3aC2F53"

describe('Claim Reward', () => {
  beforeAll(async () => {
    await mockConnect()
    const created = await createTestUser('bob@test.com', 'bob', 'Bob1234#')
    const created2 = await createTestUser('alice@test.com', 'alice', 'Alice1234#')
    const created3 = await createTestUser('carlos@test.com', 'carlos', 'Carlos1234#')
    const created4 = await createTestUser('julie@test.com', 'julie', 'Julie1234#')

    user = created.user
    jwt = created.jwt
    next = created.next

    referred1 = created2.user
    jwtReferred1 = created2.jwt

    referred2 = created3.user
    jwtReferred2 = created3.jwt

    referred3 = created4.user
    //jwtReferred3 = created4.jwt
    process.env.COINMARKETCAP_API_KEY="sandbox-api.coinmarketcap.com"
  })

  it('Cannot claim reward while email not verified.', async (done) => {
    try{
        const ctx: Context = {request: {
            headers: {
              authorization: 'Bearer ' + jwt,
            },
            body: {
              publicAddress: linkedAddress,
              nonce: 100000000
            },
          }} as Context
    
        await claimReward(ctx, next)

    }catch(e){
        expect(e).toBeDefined()
        expect(e.message).toBe("Email not verified.")
        done()
    }
  })

  it('Cannot claim reward if referral not started.', async (done) => {
    await UserModel.findByIdAndUpdate(user._id, {emailVerified: true})
    try{
        const ctx: Context = {request: {
            headers: {
              authorization: 'Bearer ' + jwt,
            },
            body: {
              publicAddress: linkedAddress,
              nonce: 100000000
            },
          }} as Context
    
        await claimReward(ctx, next)

    }catch(e){
        expect(e).toBeDefined()
        expect(e.message).toBe("Referral not started.")
        done()
    }
  })


  it('Cannot claim reward if no user have completed ocean101.', async (done) => {
    let ctx : Context = {request: {
        headers: {
          authorization: 'Bearer ' + jwt,
        },
        body: {}
      }} as Context

    //Complete Ocean 101
    for(let i = 1; i<25; i++){
        await addProgressHelper(next,jwt, `/ocean101/chapter-${i}`);
    }
    await startReferral(ctx, next);

    try{
        ctx = {request: {
            headers: {
              authorization: 'Bearer ' + jwt,
            },
            body: {
              publicAddress: linkedAddress,
              nonce: 100000000
            },
          }} as Context
    
       await claimReward(ctx, next)
    }catch(e){
        expect(e).toBeDefined()
        expect(e.message).toBe("Reward is not claimable yet. You have not achieved 3 friends who have met the requirements.")
        done()
    }
  })
  
  it('Cannot claim reward if 2 users have completed ocean101.', async (done) => {
    const referral = await ReferralModel.findOne({referrerId: user._id});
    referral?.referredUsers.push(referred3._id, referred2._id, referred1._id)
    await referral?.save()

    //Complete Ocean 101
    for(let i = 1; i<25; i++){
        await addProgressHelper(next,jwtReferred1, `/ocean101/chapter-${i}`);
        await addProgressHelper(next,jwtReferred2, `/ocean101/chapter-${i}`);
    }

    try{
        const ctx: Context = {request: {
            headers: {
              authorization: 'Bearer ' + jwt,
            },
            body: {
              publicAddress: linkedAddress,
              nonce: 100000000
            },
          }} as Context
    
       await claimReward(ctx, next)
    }catch(e){
        expect(e).toBeDefined()
        expect(e.message).toBe("Reward is not claimable yet. You have not achieved 3 friends who have met the requirements.")
        done()
    }
  })
      
  afterAll(async () => {
    await deleteTestUser(user._id)
    await deleteTestUser(referred1._id)
    await deleteTestUser(referred2._id)
    await deleteTestUser(referred3._id)
    await deleteTestReferral(user._id)
  })
})
