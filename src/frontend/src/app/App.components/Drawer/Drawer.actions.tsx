export const SHOW_DRAWER = 'SHOW_DRAWER'
export const HIDE_DRAWER = 'HIDE_DRAWER'

export const showDrawer = () => (dispatch: any) => {
  dispatch({
    type: SHOW_DRAWER
  })
}

export const hideDrawer = () => (dispatch: any) => {
  dispatch({
    type: HIDE_DRAWER
  })
}
