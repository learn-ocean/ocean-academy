export const SHOW_COURSE_DRAWER = 'SHOW_COURSE_DRAWER'
export const HIDE_COURSE_DRAWER = 'HIDE_COURSE_DRAWER'

// CHAPTERS
export const SHOW_CHAPTER_DRAWER = 'SHOW_CHAPTER_DRAWER'
export const HIDE_CHAPTER_DRAWER = 'HIDE_CHAPTER_DRAWER'

// LOGIN MENU
export const SHOW_MENU_DRAWER = 'SHOW_MENU_DRAWER'
export const HIDE_MENU_DRAWER = 'HIDE_MENU_DRAWER'


// Dispatchers
export const showCourseDrawer = () => (dispatch: any) => {
  dispatch({
    type: SHOW_COURSE_DRAWER
  })
}
export const hideCourseDrawer = () => (dispatch: any) => {
  dispatch({
    type: HIDE_COURSE_DRAWER
  })
}

// CHAPTERS
export const showChapterDrawer = () => (dispatch: any) => {
  dispatch({
    type: SHOW_CHAPTER_DRAWER
  })
}
export const hideChapterDrawer = () => (dispatch: any) => {
  dispatch({
    type: HIDE_CHAPTER_DRAWER
  })
}

// LOGIN
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
