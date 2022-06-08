import { store } from 'index'
import { GetPrivateUserInputs } from 'shared/page/GetPrivateUser'
import { SetNameInputs } from 'shared/page/SetName'

export const GET_USER_REQUEST = 'GET_USER_REQUEST'
export const GET_USER_COMMIT = 'GET_USER_COMMIT'
export const GET_USER_ROLLBACK = 'GET_USER_ROLLBACK'

export const getUser = ({ }: GetPrivateUserInputs) => (dispatch: any) => {
  dispatch({
    type: GET_USER_REQUEST,
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/page/get-user`,
          method: 'POST',
          headers: { Authorization: `Bearer ${store.getState().auth.jwt}` },
          json: {},
        },
        commit: { type: GET_USER_COMMIT },
        rollback: { type: GET_USER_ROLLBACK},
      },
    },
  })
}

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
        commit: { type: SET_NAME_COMMIT, meta: {} },
        rollback: { type: SET_NAME_ROLLBACK, meta: {} },
      },
    },
  })
}

