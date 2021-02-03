import { redirect } from 'app/App.actions'
import { showToaster } from 'app/App.components/Toaster/Toaster.actions'
import { SUCCESS } from 'app/App.components/Toaster/Toaster.constants'
import { SignUpInputs } from 'shared/user/SignUp'

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_COMMIT = 'SIGN_UP_COMMIT'
export const SIGN_UP_ROLLBACK = 'SIGN_UP_ROLLBACK'
export const signUp = ({ email, password, confirmPassword, username, recaptchaToken }: SignUpInputs) => (
  dispatch: any,
) => {
  dispatch({
    type: SIGN_UP_REQUEST,
    payload: {},
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/user/sign-up`,
          method: 'POST',
          json: { email, password, confirmPassword, username, recaptchaToken },
        },
        commit: {
          type: SIGN_UP_COMMIT,
          meta: {
            thunks: [showToaster(SUCCESS, `Welcome ${username}!`, 'Happy to see you'), redirect('/')],
          },
        },
        rollback: { type: SIGN_UP_ROLLBACK },
      },
    },
  })
}
