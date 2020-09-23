import { hash } from 'bcryptjs'

import { matchPassword } from './matchPassword'

describe('User', () => {
  it('can match correct passwords', async (done) => {
    const password = 'Test#123'
    const hashedPassword = await hash(password, 12)
    await matchPassword(password, hashedPassword)
    done()
  })

  it('cannot match incorrect passwords', async (done) => {
    try {
      const password = 'Test#123'
      const hashedPassword = await hash(password, 12)
      await matchPassword(password + 'x', hashedPassword)
      throw new Error('Should not reach this point')
    } catch (error) {
      expect(error).toBeDefined()
      expect(error.message).toBe('Wrong username or password')
      done()
    }
  })
})
