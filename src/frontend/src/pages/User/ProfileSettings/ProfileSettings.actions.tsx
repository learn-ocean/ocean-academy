import { store } from 'index'
import { SetNameInputs } from "shared/page/SetName"
import { ChangeEmailInputs } from 'shared/page/ChangeEmail'
import { showToaster } from 'app/App.components/Toaster/Toaster.actions'
import { SUCCESS } from 'app/App.components/Toaster/Toaster.constants'
import { refresh } from 'app/App.actions'

export const SET_NAME_REQUEST = 'SET_NAME_REQUEST'
export const SET_NAME_COMMIT = 'SET_NAME_COMMIT'
export const SET_NAME_ROLLBACK = 'SET_NAME_ROLLBACK'

export const sendName = ({ name }: SetNameInputs) => (dispatch: any) => {
  dispatch({
    type: SET_NAME_REQUEST,
    payload: {},
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/page/set-name`,
          method: 'POST',
          headers: { Authorization: `Bearer ${store.getState().auth.jwt}` },
          json: { name },
        },
        commit: { type: SET_NAME_COMMIT, meta: {
            thunks: [showToaster(SUCCESS, 'Success', 'Name modified.'), refresh],
        } },
        rollback: { type: SET_NAME_ROLLBACK, meta: {} },
      },
    },
  })
}

export const CHANGE_EMAIL_REQUEST = 'CHANGE_EMAIL_REQUEST'
export const CHANGE_EMAIL_COMMIT = 'CHANGE_EMAIL_COMMIT'
export const CHANGE_EMAIL_ROLLBACK = 'CHANGE_EMAIL_ROLLBACK'

export const changeEmail = ({ email }: ChangeEmailInputs) => (dispatch: any) => {
  dispatch({
    type: CHANGE_EMAIL_REQUEST,
    payload: {},
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/page/change-email`,
          method: 'POST',
          headers: { Authorization: `Bearer ${store.getState().auth.jwt}` },
          json: { email },
        },
        commit: { type: CHANGE_EMAIL_COMMIT, meta: {
            thunks: [showToaster(SUCCESS, 'Sucess', 'Email address was modified. Please verify it on your profile page.'), refresh],
        } },
        rollback: { type: CHANGE_EMAIL_ROLLBACK, meta: {} },
      },
    },
  })
}