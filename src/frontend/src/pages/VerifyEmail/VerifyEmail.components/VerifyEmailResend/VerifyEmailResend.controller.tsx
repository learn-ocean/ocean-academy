import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'reducers'

import { resendVerifyEmail } from './VerifyEmailResend.actions'
import { VerifyEmailResendView } from './VerifyEmailResend.view'

export const VerifyEmailResend = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state: State) => state.loading)

  const resendEmailCallback = () => {
    dispatch(resendVerifyEmail())
  }

  return <VerifyEmailResendView loading={loading} resendEmailCallback={resendEmailCallback} />
}
