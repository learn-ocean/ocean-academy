import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { State } from 'reducers'

import { hideChapterDrawer, hideMenuDrawer } from './Drawer.actions'
import { ChapterDrawerView, LoginDrawerView } from './Drawer.view'

export const ChapterDrawer = () => {
  const dispatch = useDispatch()
  const showingChapter = useSelector((state: State) => state.chapterDrawer && state.chapterDrawer.showingChapter)
  const user = useSelector((state: State) => state && state.auth && state.auth.user)
  const { pathname } = useLocation()

  const hideCallback = () => {
    dispatch(hideChapterDrawer())
  }

  function removeAuthUserCallback() { }

  return (
    <ChapterDrawerView
      showingChapter={showingChapter}
      showingMenu={showingChapter}
      hideCallback={hideCallback}
      pathname={pathname}
      user={user}
      user_drawer={user}
      removeAuthUserCallback={removeAuthUserCallback}
    />
  )
}

export const LoginDrawer = () => {
  const dispatch = useDispatch()
  const showingMenu = useSelector((state: State) => state.loginDrawer && state.loginDrawer.showingMenu)
  const user = useSelector((state: State) => state && state.auth && state.auth.user)
  const { pathname } = useLocation()

  const hideCallback = () => {
    dispatch(hideMenuDrawer())
  }

  function removeAuthUserCallback() { }

  return (
    <LoginDrawerView
      showingChapter={showingMenu}
      showingMenu={showingMenu}
      hideCallback={hideCallback}
      pathname={pathname}
      user={user}
      user_drawer={user}
      removeAuthUserCallback={removeAuthUserCallback}
    />
  )
}
