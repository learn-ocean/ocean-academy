import { ValidationError } from 'class-validator'
import { firstError } from './firstError'

const mockErrors = [
  {
    target: {
      usernameOrEmail: undefined,
      password: undefined,
    },
    value: undefined,
    property: 'usernameOrEmail',
    children: [],
    constraints: {
      length: 'usernameOrEmail must be longer than or equal to 2 characters',
    },
  },
  {
    target: {
      usernameOrEmail: undefined,
      password: undefined,
    },
    value: undefined,
    property: 'password',
    children: [],
    constraints: {
      matches: 'Password must have at least one letter and one digit',
      length: 'password must be longer than or equal to 8 characters',
    },
  },
]

describe('Helper', () => {
  it('bypass if no validation error', () => {
    firstError([] as ValidationError[])
  })

  it('throws error the first validation error', () => {
    try {
      firstError(mockErrors as ValidationError[])
    } catch (error) {
      expect(error).toBeDefined()
      expect(error.message).toBe('usernameOrEmail must be longer than or equal to 2 characters')
    }
  })
})
