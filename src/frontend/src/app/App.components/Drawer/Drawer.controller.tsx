import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { State } from 'reducers'

import { hideDrawer } from './Drawer.actions'
import { ChapterDrawerView, LoginDrawerView } from './Drawer.view'

// CHANGE DRAWER ==> CHAPTERDRAWER
export const ChapterDrawer = () => {
  const dispatch = useDispatch()
  const showing = useSelector((state: State) => state.drawer && state.drawer.showing)
  const user = useSelector((state: State) => state && state.auth && state.auth.user)
  const { pathname } = useLocation()

  const hideCallback = () => {
    dispatch(hideDrawer())
  }

  function removeAuthUserCallback() { }

  return (
    <ChapterDrawerView
      showing={showing}
      hideCallback={hideCallback}
      pathname={pathname}
      user_drawer={user}
      removeAuthUserCallback_drawer={removeAuthUserCallback}
    />
  )
}

export const LoginDrawer = () => {
  const dispatch = useDispatch()
  const showing = useSelector((state: State) => state.drawer && state.drawer.showing)
  const user = useSelector((state: State) => state && state.auth && state.auth.user)
  const { pathname } = useLocation()

  const hideCallback = () => {
    dispatch(hideDrawer())
  }

  function removeAuthUserCallback() { }

  return (
    <LoginDrawerView
      user_header={user}
      removeAuthUserCallback_header={removeAuthUserCallback}
      showing={showing}
      hideCallback={hideCallback}
      pathname={pathname}
      user_drawer={user}
      removeAuthUserCallback_drawer={removeAuthUserCallback}
    />
  )
}
