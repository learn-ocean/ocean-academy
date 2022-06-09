import { State } from 'reducers'

import { history } from './App.store'

export const refresh = () => (dispatch: any) =>{
  dispatch(history.go(0))
}

export const redirect = (path: string) => (dispatch: any, getState: any) => {
  if (path.indexOf('$resetPasswordToken') >= 0) {
    const state: State = getState()
    path = path.replace('$resetPasswordToken', state.auth.resetPasswordToken as string)
  }
  dispatch(history.push(path))
}

export const RESET = 'RESET'
export const reset = () => (dispatch: any) => {
  dispatch({
    type: RESET,
  })
}

export const RESTORE = 'RESTORE'
export const restore = () => (dispatch: any) => {
  dispatch({
    type: RESTORE,
  })
}

export const RECAPTCHA_REQUEST = 'RECAPTCHA_REQUEST'
export const recaptchaRequest = () => (dispatch: any) => {
  dispatch({
    type: RECAPTCHA_REQUEST,
  })
}
