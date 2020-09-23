import { redirect } from 'app/App.actions'
import { showToaster } from 'app/App.components/Toaster/Toaster.actions'
import { SUCCESS } from 'app/App.components/Toaster/Toaster.constants'
import { ResetPasswordInputs } from 'shared/user/ResetPassword'

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST'
export const RESET_PASSWORD_COMMIT = 'RESET_PASSWORD_COMMIT'
export const RESET_PASSWORD_ROLLBACK = 'RESET_PASSWORD_ROLLBACK'

export const resetPassword = ({ solution, token, newPassword }: ResetPasswordInputs) => (dispatch: any) => {
  dispatch({
    type: RESET_PASSWORD_REQUEST,
    payload: {},
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/user/reset-password`,
          method: 'POST',
          json: { solution, token, newPassword },
        },
        commit: {
          type: RESET_PASSWORD_COMMIT,
          meta: {
            thunks: [showToaster(SUCCESS, 'Password sucessfully changed', 'You can now login'), redirect('/login')],
          },
        },
        rollback: { type: RESET_PASSWORD_ROLLBACK },
      },
    },
  })
}
