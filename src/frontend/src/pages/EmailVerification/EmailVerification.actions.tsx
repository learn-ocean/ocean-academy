import { redirect } from 'app/App.actions'
import { showToaster } from 'app/App.components/Toaster/Toaster.actions'
import { SUCCESS } from 'app/App.components/Toaster/Toaster.constants'
import { store } from 'index'
import { EmailVerificationInputs } from 'shared/user/EmailVerificationToken'

export const REQUESST_EMAIL_VERIFICATION_REQUEST = 'FORGOT_PASSWORD_REQUEST'
export const REQUEST_EMAIL_VERIFICATION_COMMIT = 'FORGOT_PASSWORD_COMMIT'
export const REQUEST_EMAIL_VERIFICATION_ROLLBACK = 'FORGOT_PASSWORD_ROLLBACK'

export const CODE_VERIFICATION_REQUEST = 'FORGOT_PASSWORD_REQUEST'
export const CODE_VERIFICATION_COMMIT = 'FORGOT_PASSWORD_COMMIT'
export const CODE_VERIFICATION_ROLLBACK = 'FORGOT_PASSWORD_ROLLBACK'

export const requestEmailVerification = (codeSentCallback: any) => (dispatch: any) => {
    dispatch({
        type: REQUESST_EMAIL_VERIFICATION_REQUEST,
        payload: {},
        meta: {
            offline: {
                effect: {
                    url: `${process.env.REACT_APP_BACKEND_URL}/user/request-email-verification`,
                    headers: { Authorization: `Bearer ${store.getState().auth.jwt}` },
                    method: 'POST',
                },
                commit: {
                    type: REQUEST_EMAIL_VERIFICATION_COMMIT,
                    meta: {
                        thunks: [
                            showToaster(SUCCESS, 'Verification code sent.', 'Check your email for the code.'),
                            codeSentCallback()
                        ],
                    },
                },
                rollback: { type: REQUEST_EMAIL_VERIFICATION_ROLLBACK },
            },
        },
    })
}

export const verifyCode = ({ token }: EmailVerificationInputs) => (dispatch: any) => {
    dispatch({
        type: CODE_VERIFICATION_REQUEST,
        payload: {},
        meta: {
            offline: {
                effect: {
                    url: `${process.env.REACT_APP_BACKEND_URL}/user/verify-email`,
                    headers: { Authorization: `Bearer ${store.getState().auth.jwt}` },
                    method: 'POST',
                    json: { token }
                },
                commit: {
                    type: CODE_VERIFICATION_COMMIT,
                    meta: {
                        thunks: [
                            showToaster(SUCCESS, 'Verification code sent.', 'Check your email for the code.'),
                            redirect('/'),
                        ],
                    },
                },
                rollback: { type: CODE_VERIFICATION_ROLLBACK },
            },
        },
    })
}