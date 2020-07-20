import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { State } from 'reducers'
import { ResetPasswordInputs } from 'shared/user/ResetPassword'

import { resetPassword } from './ResetPassword.actions'
import { ResetPasswordView } from './ResetPassword.view'

export const ResetPassword = () => {
  const dispatch = useDispatch()
  let { token } = useParams()
  const loading = useSelector((state: State) => state.loading)

  const resetPasswordCallback = async (resetPasswordInputs: ResetPasswordInputs) => {
    dispatch(resetPassword({ ...resetPasswordInputs, token }))
  }

  return <ResetPasswordView resetPasswordCallback={resetPasswordCallback} loading={loading} />
}
