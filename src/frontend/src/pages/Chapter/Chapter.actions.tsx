import { store } from 'index'
import { AddProgressInputs } from 'shared/user/AddProgress'

export const ADD_PROGRESS_REQUEST = 'ADD_PROGRESS_REQUEST'
export const ADD_PROGRESS_COMMIT = 'ADD_PROGRESS_COMMIT'
export const ADD_PROGRESS_ROLLBACK = 'ADD_PROGRESS_ROLLBACK'

export const addProgress = ({ chapterDone }: AddProgressInputs) => (dispatch: any) => {
  dispatch({
    type: ADD_PROGRESS_REQUEST,
    payload: {},
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/user/add-progress`,
          method: 'POST',
          headers: { Authorization: `Bearer ${store.getState().auth.jwt}` },
          json: { chapterDone },
        },
        commit: { type: ADD_PROGRESS_COMMIT, meta: {} },
        rollback: { type: ADD_PROGRESS_ROLLBACK, meta: {} },
      },
    },
  })
}
