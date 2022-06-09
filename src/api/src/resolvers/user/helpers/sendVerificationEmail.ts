import { MailDataRequired } from '@sendgrid/helpers/classes/mail'
import * as sendgrid from '@sendgrid/mail';

interface SendVerificationEmail{
    (email: string, verificationToken: string)  : Promise<void>
}

export const sendVerificationEmail: SendVerificationEmail = async(email, verificationToken) => {
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string)

    const verificationMessage: MailDataRequired = {
        to: email,
        from: { name: 'OceanAcademy', email: process.env.FROM_EMAIL as string },
        subject: 'Email Verification - Ocean Academy',
        text: `Please enter the folowing verification code: ${verificationToken.toUpperCase()} `,
        html: `Please enter the folowing verification code: ${verificationToken.toUpperCase()}`,
    }

    await sendgrid.send(verificationMessage)
}