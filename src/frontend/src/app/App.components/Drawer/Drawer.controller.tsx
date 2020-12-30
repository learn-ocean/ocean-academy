import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { State } from 'reducers'

import { hideChapterDrawer, hideMenuDrawer } from './Drawer.actions'
import { ChapterDrawerView, LoginDrawerView } from './Drawer.view'

export const ChapterDrawer = () => {
  const dispatch = useDispatch()
  const showingChapter = useSelector((state: State) => state.chapterDrawer && state.chapterDrawer.showingChapter)
  const { pathname } = useLocation()

  const hideCallback = () => {
    dispatch(hideChapterDrawer())
  }

<<<<<<< Updated upstream
  function removeAuthUserCallback() {}

=======
>>>>>>> Stashed changes
  return (
    <ChapterDrawerView
      showingChapters={showingChapter}
      hideCallback={hideCallback}
      pathname={pathname}
    />
  )
}

export const LoginDrawer = () => {
  const dispatch = useDispatch()
  const showingMenu = useSelector((state: State) => state.loginDrawer && state.loginDrawer.showingMenu)
  const user = useSelector((state: State) => state && state.auth && state.auth.user)

  const hideCallback = () => {
    dispatch(hideMenuDrawer())
  }

  function removeAuthUserCallback() {}

  return (
    <LoginDrawerView
      showingMenu={showingMenu}
      user={user}
      hideCallback={hideCallback}
      removeAuthUserCallback={removeAuthUserCallback}
    />
  )
}
