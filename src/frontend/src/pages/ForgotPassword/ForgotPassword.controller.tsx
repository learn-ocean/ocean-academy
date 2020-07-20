import * as React from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useDispatch, useSelector } from 'react-redux'
import { ForgotPasswordInputs } from 'shared/user/ForgotPassword'

import { showToaster } from '../../app/App.components/Toaster/Toaster.actions'
import { ERROR } from '../../app/App.components/Toaster/Toaster.constants'
import { State } from '../../reducers'
import { forgotPassword } from './ForgotPassword.actions'
import { ForgotPasswordView } from './ForgotPassword.view'

export const ForgotPassword = () => {
  const dispatch = useDispatch()
  const { executeRecaptcha } = useGoogleReCaptcha()
  const loading = useSelector((state: State) => state.loading)

  const forgotPasswordCallback = async (forgotPasswordInputs: ForgotPasswordInputs) => {
    if (!executeRecaptcha) {
      dispatch(showToaster(ERROR, 'Recaptcha not ready', 'Please try again'))
      return
    }
    const recaptchaToken = await executeRecaptcha('signup')

    dispatch(forgotPassword({ ...forgotPasswordInputs, recaptchaToken }))
  }

  return <ForgotPasswordView forgotPasswordCallback={forgotPasswordCallback} loading={loading} />
}
