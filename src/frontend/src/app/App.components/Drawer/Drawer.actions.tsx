export const SHOW_CHAPTER_DRAWER = 'SHOW_CHAPTER_DRAWER'
export const HIDE_CHAPTER_DRAWER = 'HIDE_CHAPTER_DRAWER'
export const SHOW_MENU_DRAWER = 'SHOW_MENU_DRAWER'
export const HIDE_MENU_DRAWER = 'HIDE_MENU_DRAWER'

export const showChapterDrawer = () => (dispatch: any) => {
  dispatch({
    type: SHOW_CHAPTER_DRAWER,
  })
}

export const hideChapterDrawer = () => (dispatch: any) => {
  dispatch({
    type: HIDE_CHAPTER_DRAWER,
  })
}

export const showMenuDrawer = () => (dispatch: any) => {
  dispatch({
    type: SHOW_MENU_DRAWER,
  })
}

export const hideMenuDrawer = () => (dispatch: any) => {
  dispatch({
    type: HIDE_MENU_DRAWER,
  })
}
