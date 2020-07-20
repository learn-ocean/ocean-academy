import axios, { AxiosResponse } from 'axios'
import { mocked } from 'ts-jest/utils'

import { DEVELOPMENT, PRODUCTION } from '../../../constants'
import { verifyRecaptchaToken } from './verifyRecaptchaToken'

jest.mock('axios')
const mockedAxios = mocked(axios, true)

describe('Users', () => {
  it('can verify re-captcha in development', async () => {
    process.env.NODE_ENV = DEVELOPMENT

    await verifyRecaptchaToken('mockToken')

    expect(axios).not.toHaveBeenCalled()
  })

  it('can verify re-captcha in production', async () => {
    process.env.NODE_ENV = PRODUCTION

    const expectedResult = { success: true }
    const feedResponsePromise = Promise.resolve({ data: expectedResult } as AxiosResponse)
    mockedAxios.mockReturnValueOnce(feedResponsePromise)
    const recaptchaToken = 'testRecaptchaToken'

    await verifyRecaptchaToken(recaptchaToken)

    expect(axios).toHaveBeenCalled()
  })

  it('throws at wrong re-captcha in production', async () => {
    process.env.NODE_ENV = PRODUCTION

    try {
      const expectedResult = { success: false }
      const feedResponsePromise = Promise.resolve({ data: expectedResult } as AxiosResponse)
      mockedAxios.mockReturnValueOnce(feedResponsePromise)
      const recaptchaToken = 'testRecaptchaToken'

      await verifyRecaptchaToken(recaptchaToken)
      throw new Error('Should not reach this point')
    } catch (e) {
      expect(axios).toHaveBeenCalled()
      expect(e.message).toEqual('Wrong re-captcha token')
    }
  })
})
