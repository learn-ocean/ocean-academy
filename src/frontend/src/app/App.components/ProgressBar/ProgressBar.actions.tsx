export const SHOW_PROGRESS_BAR = 'SHOW_PROGRESS_BAR'
export const HIDE_PROGRESS_BAR = 'HIDE_PROGRESS_BAR'

export const showProgressBar = () => (dispatch: any) => {
  dispatch({
    type: SHOW_PROGRESS_BAR,
  })
}

export const hideProgressBar = () => (dispatch: any) => {
  dispatch({
    type: HIDE_PROGRESS_BAR,
  })
}
