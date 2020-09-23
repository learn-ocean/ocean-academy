import * as sgMail from '@sendgrid/mail'

import { sendEmailVerifyEmail } from './sendEmailVerifyEmail'

describe('User', () => {
  beforeAll(async () => {
    process.env.FROM_EMAIL = 'test@test.com'
    process.env.SENDGRID_API_KEY = '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'
  })

  it('registration can send email', async (done) => {
    const email = 'test872387@yopmail.com'
    const captchaIndex = 0
    const emailMsg = {
      from: { email: 'test@test.com', name: 'OceanAcademy' },
      html:
        'Please enter the following captcha <br /><img alt="captcha" src="https://oceanacademy.io/captchas/0.png" /> <br />on <a href="https://oceanacademy.io/verify-email">https://oceanacademy.io/verify-email</a>',
      subject: 'Please verify your email',
      text:
        'Please enter the following captcha https://oceanacademy.io/captchas/0.png on https://oceanacademy.io/verify-email',
      to: 'test872387@yopmail.com',
    }

    jest.spyOn(sgMail, 'send').mockImplementation((emailMsg): any => {
      expect(emailMsg).toBeDefined()
    })

    await sendEmailVerifyEmail(email, captchaIndex)

    expect(sgMail.send).toHaveBeenCalledWith(emailMsg)

    done()
  })

  afterAll(async () => {
    jest.clearAllMocks()
  })
})
