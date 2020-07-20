import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChangePasswordInputs } from 'shared/user/ChangePassword'

import { State } from '../../reducers'
import { changePassword } from './ChangePassword.actions'
import { ChangePasswordView } from './ChangePassword.view'

export const ChangePassword = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state: State) => state.loading)

  const changePasswordCallback = async (changePasswordInputs: ChangePasswordInputs) => {
    dispatch(changePassword({ ...changePasswordInputs }))
  }

  return <ChangePasswordView changePasswordCallback={changePasswordCallback} loading={loading} />
}
