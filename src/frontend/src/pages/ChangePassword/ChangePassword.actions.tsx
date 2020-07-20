import { redirect } from 'app/App.actions'
import { showToaster } from 'app/App.components/Toaster/Toaster.actions'
import { SUCCESS } from 'app/App.components/Toaster/Toaster.constants'
import { State } from 'reducers'
import { ChangePasswordInputs } from 'shared/user/ChangePassword'

export const CHANGE_PASSWORD_REQUEST = 'CHANGE_PASSWORD_REQUEST'
export const CHANGE_PASSWORD_COMMIT = 'CHANGE_PASSWORD_COMMIT'
export const CHANGE_PASSWORD_ROLLBACK = 'CHANGE_PASSWORD_ROLLBACK'

export const changePassword = ({ password, newPassword }: ChangePasswordInputs) => (dispatch: any, getState: any) => {
  const state: State = getState()
  dispatch({
    type: CHANGE_PASSWORD_REQUEST,
    payload: {},
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/user/change-password`,
          method: 'POST',
          json: { password, newPassword },
          headers: { Authorization: `Bearer ${state.auth.jwt}` },
        },
        commit: {
          type: CHANGE_PASSWORD_COMMIT,
          meta: {
            thunks: [
              showToaster(SUCCESS, 'Password changed', 'You can now login with your new password'),
              redirect(`/user/${state.auth.user?.username}`),
            ],
          },
        },
        rollback: { type: CHANGE_PASSWORD_ROLLBACK },
      },
    },
  })
}
