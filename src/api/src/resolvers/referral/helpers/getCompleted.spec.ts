import { User } from '../../../shared/user/User'
import { Next } from 'koa'
import { Jwt } from '../../../shared/user/Jwt'
import { createTestUser } from '../../../test/createTestUser'
import { deleteTestUser } from '../../../test/deleteTestUser'
import { mockConnect } from '../../../test/mockConnect'
import { getCompleted } from './getCompleted'
import {addProgressHelper} from '../startReferral.spec';

let user: User
let user2: User
let user3: User
let next1: Next
let next2: Next
let jwt1: Jwt
let jwt2: Jwt

describe('Get Completed', () => {
  beforeAll(async () => {
    await mockConnect()
    const created = await createTestUser('bob@test.com', 'bob', 'Bob1234#')
    const created2 = await createTestUser('alice@test.com', 'alice', 'Alice1234#')
    const created3 = await createTestUser('carlos@test.com', 'carlos', 'Carlos1234#')

    user = created.user
    jwt1 = created.jwt
    next1 = created.next
    next2 = created2.next
    jwt2 = created2.jwt
    user2 = created2.user
    user3 = created3.user
  })


  it('Completed should be equal to 0 when user is created', async (done) => {
    const completed = await getCompleted([user._id, user2._id, user3._id])
    expect(completed).toBe(0)
    done()
  })

  it('Completed should be equal to 0 when user is created and has not completed all chapters', async (done) => {
    for(let i = 1; i < 24; i++){
        await addProgressHelper(next1, jwt1, `/ocean101/chapter-${i}`);
    }
    const completed = await getCompleted([user._id, user2._id, user3._id])
    expect(completed).toBe(0)
    done()
  })

  it('Completed should be equal to 1 when 1 user has completed all chapters', async (done) => {
    await addProgressHelper(next1, jwt1, `/ocean101/chapter-${24}`);
    const completed = await getCompleted([user._id, user2._id, user3._id])
    expect(completed).toBe(1)
    done()
  })

  it('Completed should be equal to 2 when 2 uses have completed all chapters', async (done) => {
    for(let i = 1; i < 25; i++){
        await addProgressHelper(next2, jwt2, `/ocean101/chapter-${i}`);
    }
    const completed = await getCompleted([user._id, user2._id, user3._id])
    expect(completed).toBe(2)
    done()
  })

    
  afterAll(async () => {
    await deleteTestUser(user._id)
    await deleteTestUser(user2._id)
    await deleteTestUser(user3._id)
  })
})
