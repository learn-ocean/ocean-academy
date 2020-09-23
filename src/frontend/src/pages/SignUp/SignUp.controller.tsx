import { recaptchaRequest } from 'app/App.actions'
import * as React from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useDispatch, useSelector } from 'react-redux'
import { SignUpInputs } from 'shared/user/SignUp'

import { showToaster } from '../../app/App.components/Toaster/Toaster.actions'
import { ERROR } from '../../app/App.components/Toaster/Toaster.constants'
import { State } from '../../reducers'
import { signUp } from './SignUp.actions'
import { SignUpView } from './SignUp.view'

export const SignUp = () => {
  const dispatch = useDispatch()
  const { executeRecaptcha } = useGoogleReCaptcha()
  const loading = useSelector((state: State) => state.loading)

  const signUpCallback = async (signUpInputs: SignUpInputs) => {
    dispatch(recaptchaRequest())

    if (!executeRecaptcha) {
      dispatch(showToaster(ERROR, 'Recaptcha not ready', 'Please try again'))
      return
    }
    const recaptchaToken = await executeRecaptcha('signup')

    dispatch(signUp({ ...signUpInputs, recaptchaToken }))
  }

  return <SignUpView signUpCallback={signUpCallback} loading={loading} />
}
