// Chapters
export const SHOW_OCEAN101_DRAWER = 'SHOW_OCEAN101_DRAWER'
export const HIDE_OCEAN101_DRAWER = 'HIDE_OCEAN101_DRAWER'
export const SHOW_DATADEFI_DRAWER = 'SHOW_DATADEFI_DRAWER'
export const HIDE_DATADEFI_DRAWER = 'HIDE_DATADEFI_DRAWER'

// Chapter Drawers
export const SHOW_COURSE_DRAWER = 'SHOW_COURSE_DRAWER'
export const HIDE_COURSE_DRAWER = 'HIDE_COURSE_DRAWER'

// Menu Drawer
export const SHOW_CHAPTER_DRAWER = 'SHOW_CHAPTER_DRAWER'
export const HIDE_CHAPTER_DRAWER = 'HIDE_CHAPTER_DRAWER'
export const SHOW_MENU_DRAWER = 'SHOW_MENU_DRAWER'
export const HIDE_MENU_DRAWER = 'HIDE_MENU_DRAWER'



// Chapter Drawer Reducers
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

export const showDataDefiDrawer = () => (dispatch: any) => {
  dispatch({
    type: SHOW_DATADEFI_DRAWER
  })
}
export const hideDataDefiDrawer = () => (dispatch: any) => {
  dispatch({
    type: HIDE_DATADEFI_DRAWER
  })
}


// Chapter Drawer Menu Reducers
export const hideCourseDrawer = () => (dispatch: any) => {
  dispatch({
    type: HIDE_COURSE_DRAWER
  })
}



// Menu Drawer Reducers
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
