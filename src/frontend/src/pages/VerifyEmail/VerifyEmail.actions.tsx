import { redirect } from 'app/App.actions'
import { showToaster } from 'app/App.components/Toaster/Toaster.actions'
import { SUCCESS } from 'app/App.components/Toaster/Toaster.constants'
import { State } from 'reducers'
import { VerifyEmailInputs } from 'shared/user/VerifyEmail'

export const VERIFY_EMAIL_REQUEST = 'VERIFY_EMAIL_REQUEST'
export const VERIFY_EMAIL_COMMIT = 'VERIFY_EMAIL_COMMIT'
export const VERIFY_EMAIL_ROLLBACK = 'VERIFY_EMAIL_ROLLBACK'
export const verifyEmail = ({ solution }: VerifyEmailInputs) => (dispatch: any, getState: any) => {
  const state: State = getState()
  dispatch({
    type: VERIFY_EMAIL_REQUEST,
    payload: {},
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/user/verify-email`,
          method: 'POST',
          json: { solution },
          headers: { Authorization: `Bearer ${state.auth.jwt}` },
        },
        commit: {
          type: VERIFY_EMAIL_COMMIT,
          meta: {
            thunks: [showToaster(SUCCESS, 'Email verified!', 'Thanks'), redirect('/')],
          },
        },
        rollback: { type: VERIFY_EMAIL_ROLLBACK },
      },
    },
  })
}
