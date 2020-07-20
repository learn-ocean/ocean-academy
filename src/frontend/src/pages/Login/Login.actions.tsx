import { showToaster } from 'app/App.components/Toaster/Toaster.actions'
import { SUCCESS } from 'app/App.components/Toaster/Toaster.constants'
import { LoginInputs } from 'shared/user/Login'
import { redirect } from 'app/App.actions'

export const LOGOUT = 'LOGOUT'
export const logout = () => (dispatch: any) => {
  dispatch({
    type: LOGOUT,
  })
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_COMMIT = 'LOGIN_COMMIT'
export const LOGIN_ROLLBACK = 'LOGIN_ROLLBACK'

export const login = ({ usernameOrEmail, password, recaptchaToken }: LoginInputs) => (dispatch: any) => {
  dispatch({
    type: LOGIN_REQUEST,
    payload: {},
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/user/login`,
          method: 'POST',
          json: { usernameOrEmail, password, recaptchaToken },
        },
        commit: {
          type: LOGIN_COMMIT,
          meta: {
            thunks: [showToaster(SUCCESS, 'Welcome back!', 'Happy to see you again'), redirect('/')],
          },
        },
        rollback: { type: LOGIN_ROLLBACK },
      },
    },
  })
}
