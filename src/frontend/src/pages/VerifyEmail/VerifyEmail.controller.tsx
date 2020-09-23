import * as React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VerifyEmailInputs } from 'shared/user/VerifyEmail'

import { State } from '../../reducers'
import { verifyEmail } from './VerifyEmail.actions'
import { VerifyEmailView } from './VerifyEmail.view'

export const VerifyEmail = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state: State) => state.loading)
  const [autoSubmitted, setAutoSubmitted] = useState(false)

  const verifyEmailCallback = async (verifyEmailInputs: VerifyEmailInputs) => {
    setAutoSubmitted(true)
    dispatch(verifyEmail({ ...verifyEmailInputs }))
  }

  return <VerifyEmailView verifyEmailCallback={verifyEmailCallback} loading={loading} autoSubmitted={autoSubmitted} />
}
