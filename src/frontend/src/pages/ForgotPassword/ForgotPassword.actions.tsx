import { redirect } from 'app/App.actions'
import { showToaster } from 'app/App.components/Toaster/Toaster.actions'
import { SUCCESS } from 'app/App.components/Toaster/Toaster.constants'
import { ForgotPasswordInputs } from 'shared/user/ForgotPassword'

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST'
export const FORGOT_PASSWORD_COMMIT = 'FORGOT_PASSWORD_COMMIT'
export const FORGOT_PASSWORD_ROLLBACK = 'FORGOT_PASSWORD_ROLLBACK'

export const forgotPassword = ({ usernameOrEmail, recaptchaToken }: ForgotPasswordInputs) => (dispatch: any) => {
  dispatch({
    type: FORGOT_PASSWORD_REQUEST,
    payload: {},
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/user/forgot-password`,
          method: 'POST',
          json: { usernameOrEmail, recaptchaToken },
        },
        commit: {
          type: FORGOT_PASSWORD_COMMIT,
          meta: {
            thunks: [
              showToaster(SUCCESS, 'Check your email', 'for a reset captcha'),
              redirect('/reset-password/$resetPasswordToken'),
            ],
          },
        },
        rollback: { type: FORGOT_PASSWORD_ROLLBACK },
      },
    },
  })
}
