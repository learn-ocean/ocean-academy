export const SHOW_COURSE_DRAWER = 'SHOW_COURSE_DRAWER'
export const HIDE_COURSE_DRAWER = 'HIDE_COURSE_DRAWER'

// CHAPTERS
export const SHOW_OCEAN101_CHAPTERS = 'SHOW_OCEAN101_CHAPTERS'
export const HIDE_OCEAN101_CHAPTERS = 'HIDE_OCEAN101_CHAPTERS'

export const SHOW_OCEANBUSINESS_CHAPTERS = 'SHOW_OCEANBUSINESS_CHAPTERS'
export const HIDE_OCEANBUSINESS_CHAPTERS = 'HIDE_OCEANBUSINESS_CHAPTERS'

export const SHOW_OCEANOUTREACH_CHAPTERS = 'SHOW_OCEANOUTREACH_CHAPTERS'
export const HIDE_OCEANOUTREACH_CHAPTERS = 'HIDE_OCEANOUTREACH_CHAPTERS'

export const SHOW_C2D_CHAPTERS = 'SHOW_C2D_CHAPTERS'
export const HIDE_C2D_CHAPTERS = 'HIDE_C2D_CHAPTERS'

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
    type: SHOW_OCEAN101_CHAPTERS
  })
}
export const hideOcean101Drawer = () => (dispatch: any) => {
  dispatch({
    type: HIDE_OCEAN101_CHAPTERS
  })
}
// BUSINESS
export const showBusinessDrawer = () => (dispatch: any) => {
  dispatch({
    type: SHOW_OCEANBUSINESS_CHAPTERS
  })
}
export const hideBusinessDrawer = () => (dispatch: any) => {
  dispatch({
    type: HIDE_OCEANBUSINESS_CHAPTERS
  })
}
// OUTREACH
export const showOutreachDrawer = () => (dispatch: any) => {
  dispatch({
    type: SHOW_OCEANOUTREACH_CHAPTERS
  })
}
export const hideOutreachDrawer = () => (dispatch: any) => {
  dispatch({
    type: HIDE_OCEANOUTREACH_CHAPTERS
  })
}
// C2D
export const showC2DDrawer = () => (dispatch: any) => {
  dispatch({
    type: SHOW_C2D_CHAPTERS
  })
}
export const hideC2DDrawer = () => (dispatch: any) => {
  dispatch({
    type: HIDE_C2D_CHAPTERS
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
