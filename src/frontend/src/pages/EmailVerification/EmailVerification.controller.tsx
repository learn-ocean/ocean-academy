import * as React from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useDispatch, useSelector } from 'react-redux'
import { EmailVerificationInputs } from 'shared/user/EmailVerificationToken'
import { showToaster } from '../../app/App.components/Toaster/Toaster.actions'
import { ERROR } from '../../app/App.components/Toaster/Toaster.constants'
import { State } from '../../reducers'
import { requestEmailVerification, verifyCode } from './EmailVerification.actions'
import { EmailVerificationView } from './EmailVerification.view'

export const EmailVerification = () => {
    const [codeSent, setCodeSent] = React.useState(false)
    const dispatch = useDispatch()
    const { executeRecaptcha } = useGoogleReCaptcha()
    const loading = useSelector((state: State) => state.loading)

    const emailVerificationCallback = async () => {
        if (!executeRecaptcha) {
            dispatch(showToaster(ERROR, 'Recaptcha not ready', 'Please try again'))
            return
        }
        const recaptchaToken = await executeRecaptcha('signup')

        dispatch(requestEmailVerification(() => setCodeSent(true)))
    }

    const verifyCodeCallback = async ({ token }: EmailVerificationInputs) => {
        if (!executeRecaptcha) {
            dispatch(showToaster(ERROR, 'Recaptcha not ready', 'Please try again'))
            return
        }
        const recaptchaToken = await executeRecaptcha('signup')

        dispatch(verifyCode({ token }))
    }

    return <EmailVerificationView verifyCodeCallback={verifyCodeCallback} emailVerificationCallback={emailVerificationCallback} codeSent={codeSent} loading={loading} />
}