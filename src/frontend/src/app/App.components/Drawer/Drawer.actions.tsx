export const SHOW_COURSE_DRAWER = 'SHOW_COURSE_DRAWER'
export const HIDE_COURSE_DRAWER = 'HIDE_COURSE_DRAWER'

// CHAPTERS
export const SHOW_OCEAN101_DRAWER = 'SHOW_OCEAN101_DRAWER'
export const HIDE_OCEAN101_DRAWER = 'HIDE_OCEAN101_DRAWER'

export const SHOW_OCEANBUSINESS_DRAWER = 'SHOW_OCEANBUSINESS_DRAWER'
export const HIDE_OCEANBUSINESS_DRAWER = 'HIDE_OCEANBUSINESS_DRAWER'

export const SHOW_OCEANOUTREACH_DRAWER = 'SHOW_OCEANOUTREACH_DRAWER'
export const HIDE_OCEANOUTREACH_DRAWER = 'HIDE_OCEANOUTREACH_DRAWER'

export const SHOW_C2D_DRAWER = 'SHOW_C2D_DRAWER'
export const HIDE_C2D_DRAWER = 'HIDE_C2D_DRAWER'

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
export const showOcean101Drawer = () => (dispatch: any) => {
  dispatch({
    type: SHOW_OCEAN101_DRAWER
  })
}
export const hideOcean101Drawer = () => (dispatch: any) => {
  dispatch({
    type: HIDE_OCEAN101_DRAWER
  })
}
// BUSINESS
export const showBusinessDrawer = () => (dispatch: any) => {
  dispatch({
    type: SHOW_OCEANBUSINESS_DRAWER
  })
}
export const hideBusinessDrawer = () => (dispatch: any) => {
  dispatch({
    type: HIDE_OCEANBUSINESS_DRAWER
  })
}
// OUTREACH
export const showOutreachDrawer = () => (dispatch: any) => {
  dispatch({
    type: SHOW_OCEANOUTREACH_DRAWER
  })
}
export const hideOutreachDrawer = () => (dispatch: any) => {
  dispatch({
    type: HIDE_OCEANOUTREACH_DRAWER
  })
}
// C2D
export const showC2DDrawer = () => (dispatch: any) => {
  dispatch({
    type: SHOW_C2D_DRAWER
  })
}
export const hideC2DDrawer = () => (dispatch: any) => {
  dispatch({
    type: HIDE_C2D_DRAWER
  })
}

// LOGIN
export const showMenuDrawer = () => (dispatch: any) => {
  dispatch({
    type: SHOW_MENU_DRAWER
  })
}
export const hideMenuDrawer = () => (dispatch: any) => {
  dispatch({
    type: HIDE_MENU_DRAWER
  })
}
