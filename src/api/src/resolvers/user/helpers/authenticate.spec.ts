import { Context } from 'koa'

import { Jwt } from '../../../shared/user/Jwt'
import { User } from '../../../shared/user/User'
import { createTestUser } from '../../../test/createTestUser'
import { deleteTestUser } from '../../../test/deleteTestUser'
import { mockConnect } from '../../../test/mockConnect'
import { authenticate } from './authenticate'

let user: User
let jwt: Jwt

describe('User', () => {
  beforeAll(async () => {
    await mockConnect()
    const created = await createTestUser('bob@test.com', 'bob', 'Bob1234#')
    user = created.user
    jwt = created.jwt
  })

  it('can authenticate', async (done) => {
    const ctx: Context = {
      request: {
        headers: {
          authorization: 'Bearer ' + jwt,
        },
        body: {},
      },
    } as Context

    const user: User = await authenticate(ctx)
    expect(user).toBeDefined()
    done()
  })

  it('throws at invalid jwt', async () => {
    try {
      const ctx: Context = {
        request: {
          headers: {
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTVkMDZlNTUzZDM1ZWM4YjYwYTdkYTkiLCJ1c2VybmFtZSI6InRlc3QiLCJleHBpcmVzQXQiOiIyMDIwLTA0LTAxVDEyOjE1OjE4LjI3OVoiLCJpYXQiOjE1ODMxNTQ5MTgsImV4cCI6MTU4NTc0NjkxOCwiYXVkIjoiaHR0cHM6Ly9zZXJ2ZXJsZXNzc3RhY2suY29tIiwiaXNzIjoiU2VydmVybGVzcyBTdGFjayIsInN1YiI6InRlc3QifQ.WfFHjO3duzcFn1NzNzXm5DBhOvC4Ox48jhiE1KhGG5cn0N9wTYQerJtoTFENgRkFleWigOOm-CVBXgAtYa1Oyg',
          },
          body: {},
        },
      } as Context

      await authenticate(ctx)
      throw new Error('Should not reach this point')
    } catch (error) {
      expect(error).toBeDefined()
      expect(error.message).toBe('invalid signature')
    }
  })

  it('throws if no token sent', async () => {
    try {
      const ctx: Context = {
        request: {
          body: {},
        },
      } as Context

      await authenticate(ctx)
      throw new Error('Should not reach this point')
    } catch (error) {
      expect(error).toBeDefined()
      expect(error.message).toBe('No bearer token present in request')
    }
  })

  it('throws if jwt has expired', async () => {
    try {
      const ctx: Context = {
        request: {
          headers: {
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWE2ZDJiNTMxNWM5YmY2NTJiMmY5Y2YiLCJ1c2VybmFtZSI6ImR3ZHcxMjM0NSIsImV4cGlyZXNBdCI6IjIwMjAtMDUtMjdUMTU6MzI6NTMuNDg0WiIsImlhdCI6MTU4ODAwMTU3MywiZXhwIjoxNTkwNTkzNTczLCJhdWQiOiJodHRwczovL2VudGlyZXN0YWNrLmNvbSIsImlzcyI6IkVudGlyZSBTdGFjayIsInN1YiI6ImR3ZHcxMjM0NSJ9.PaNHCES1qlIhMgHfXoUT6eSAFJWqi2Kj5U6OLIfMSKim3601ijInfHUe5ZBAXTAxd14Rbgy6g871oZwHnKHi4A',
          },
          body: {},
        },
      } as Context

      await authenticate(ctx)
      throw new Error('Should not reach this point')
    } catch (error) {
      expect(error).toBeDefined()
      expect(error.message).toBe('jwt expired')
    }
  })

  it('throws if no user corresponds to jwt', async () => {
    try {
      const ctx: Context = {
        request: {
          headers: {
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmE1Zjk4ZDhiYjU5ZTBmZmNjOGZhN2UiLCJ1c2VybmFtZSI6ImJvYiIsImV4cGlyZXNBdCI6IjIwMjItMDctMTJUMTQ6MzQ6NTMuMTA3WiIsImlhdCI6MTY1NTA0NDQ5MywiZXhwIjoxNjU3NjM2NDkzLCJhdWQiOiJodHRwczovL29jZWFuYWNhZGVteS5pbyIsImlzcyI6Ik9jZWFuQWNhZGVteSIsInN1YiI6ImJvYiJ9.N8fxFU_9PtSMSED8TDuMl3NAL9LMXQgDY-de0Y8M_qw9E7rSiZbNDV5292iwUuPrVwc9ldnzWLmRPOiZAimj2A',
          },
          body: {},
        },
      } as Context

      await authenticate(ctx)
      throw new Error('Should not reach this point')
    } catch (error) {
      expect(error).toBeDefined()
      expect(error.message).toBe('User not found')
    }
  })

  afterAll(async () => {
    await deleteTestUser(user._id)
  })
})
