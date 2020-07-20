import { showToaster } from 'app/App.components/Toaster/Toaster.actions'
import { SUCCESS } from 'app/App.components/Toaster/Toaster.constants'
import { State } from 'reducers'

export const GET_VERIFY_EMAIL_RESEND_REQUEST = 'GET_VERIFY_EMAIL_RESEND_REQUEST'
export const GET_VERIFY_EMAIL_RESEND_COMMIT = 'GET_VERIFY_EMAIL_RESEND_COMMIT'
export const GET_VERIFY_EMAIL_RESEND_ROLLBACK = 'GET_VERIFY_EMAIL_RESEND_ROLLBACK'

export const resendVerifyEmail = () => (dispatch: any, getState: any) => {
  const state: State = getState()
  dispatch({
    type: GET_VERIFY_EMAIL_RESEND_REQUEST,
    payload: {},
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/user/resend-email-verification`,
          method: 'POST',
          headers: { Authorization: `Bearer ${state.auth.jwt}` },
        },
        commit: {
          type: GET_VERIFY_EMAIL_RESEND_COMMIT,
          meta: {
            thunks: [showToaster(SUCCESS, 'Email sent!', 'Go check')],
          },
        },
        rollback: { type: GET_VERIFY_EMAIL_RESEND_ROLLBACK },
      },
    },
  })
}
