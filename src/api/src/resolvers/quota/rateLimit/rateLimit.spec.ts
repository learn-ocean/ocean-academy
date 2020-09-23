import { User } from '../../../shared/user/User'
import { createTestUser } from '../../../test/createTestUser'
import { PRODUCTION, TEST } from '../../../constants'
import { deleteTestUser } from '../../../test/deleteTestUser'
import { Quota, QuotaModel } from '../../../shared/quota/Quota'
import { QuotaType } from '../../../shared/quota/QuotaType'
import { rateLimit } from './rateLimit'

let user: User

describe('User', () => {
  beforeAll(async () => {
    process.env.NODE_ENV = TEST
    const created = await createTestUser('bob@test.com', 'bob', 'Bob1234#')
    user = created.user
    process.env.NODE_ENV = PRODUCTION
  })

  it('rate limit is created', async (done) => {
    const limitBefore: Quota | null = await QuotaModel.findOne({ userId: user._id }).lean()
    expect(limitBefore).toBeNull()

    await rateLimit(user._id)

    const limitAfter: Quota | null = await QuotaModel.findOne({ userId: user._id }).lean()
    expect(limitAfter && limitAfter.count).toEqual(1)

    done()
  })

  it('rate limiter is throwing at fast action', async (done) => {
    try {
      for (let i = 0; i < 4; i++) await rateLimit(user._id, QuotaType.NEW_CAPTCHA)
      throw new Error('Should not reach this point')
    } catch (error) {
      expect(error.message).toEqual('Quota limit reached. Please wait 24h and retry.')
    }
    done()
  })

  //   it('rate limiter is resetting', async (done) => {
  //     await sleep(60000)
  //     const limitBefore: Quota | null = await QuotaModel.findOne({ _id: user._id }).lean()
  //     expect(limitBefore).toBeNull()
  //     done()
  //   })

  afterAll(async () => {
    await deleteTestUser(user._id)
    process.env.NODE_ENV = TEST
  })
})
