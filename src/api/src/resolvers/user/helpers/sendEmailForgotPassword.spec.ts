import * as sendgrid from '@sendgrid/mail'

import { sendEmailForgotPassword } from './sendEmailForgotPassword'

describe('User', () => {
  beforeAll(async () => {
    process.env.FROM_EMAIL = 'test@test.com'
    process.env.SENDGRID_API_KEY = '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'
  })

  it('registration can send email', async (done) => {
    const email = 'test872387@yopmail.com'
    const index = 0
    const key = 'test'

    const emailMsg = {
      from: { email: 'test@test.com', name: 'OceanAcademy' },
      html:
        'Please enter the following captcha <br /><img alt="captcha" src="https://oceanacademy.io/captchas/0.png" /> <br />on <a href="https://oceanacademy.io/reset-password?key=test">https://oceanacademy.io/reset-password?key=test</a>',
      subject: 'Password reset',
      text:
        'Please enter the following captcha https://oceanacademy.io/captchas/0.png on https://oceanacademy.io/reset-password?key=test',
      to: 'test872387@yopmail.com',
    }

    jest.spyOn(sendgrid, 'send').mockImplementation((emailMsg): any => {
      expect(emailMsg).toBeDefined()
    })

    await sendEmailForgotPassword(email, index, key)

    expect(sendgrid.send).toHaveBeenCalledWith(emailMsg)

    done()
  })

  afterAll(async () => {
    jest.clearAllMocks()
  })
})
