import { MailDataRequired } from '@sendgrid/helpers/classes/mail'
import * as sendgrid from '@sendgrid/mail'

interface SendEmailForgotPassword {
  (email: string, captchaIndex: string, token: string): Promise<void>
}

export const sendEmailForgotPassword: SendEmailForgotPassword = async (email, captchaIndex, token) => {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string)

  const message: MailDataRequired = {
    to: email,
    from: { name: 'OceanAcademy', email: process.env.FROM_EMAIL as string },
    subject: 'Password reset',
    text: `Please enter the following : ${captchaIndex} on https://oceanacademy.io/reset-password?key=${token}`,
    html: `Please enter the following : ${captchaIndex} on <a href="https://oceanacademy.io/reset-password?key=${token}">https://oceanacademy.io/reset-password?key=${token}</a>`,
  }

  await sendgrid.send(message)
}
