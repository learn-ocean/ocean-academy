import * as React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import { State } from 'reducers'

import { hideChapterDrawer, hideMenuDrawer } from './Drawer.actions'
import { ChapterDrawerView, LoginDrawerView } from './Drawer.view'

export const ChapterDrawer = () => {
  const dispatch = useDispatch()
  const showingChapter = useSelector((state: State) => state.chapterDrawer && state.chapterDrawer.showingChapter)
  const { pathname } = useLocation()
  // const history = useHistory()

  let defaultCourse = "ocean101"
  const [activeCourse, setActiveCourse] = useState(defaultCourse)

  // ts
  console.log(`[Drawer.controller.tsx] pathname = ${pathname}`)
  console.log(`[Drawer.controller.tsx] activeCourse = ${activeCourse}`)

  function changeCourseCallback(e: string) {
    console.log(e)
    if (e === 'ocean101') {
      // history.push(pathname.replace(new RegExp('camel|reason', 'i'), 'pascal'))
      setActiveCourse('ocean101')
    }
    if (e === 'introToDataDefi') {
      // history.push(pathname.replace(new RegExp('pascal|reason', 'i'), 'camel'))
      setActiveCourse('introToDataDefi')
    }
  }

  const hideCallback = () => {
    dispatch(hideChapterDrawer())
  }

  return (
    <ChapterDrawerView
      showingChapters={showingChapter}
      hideCallback={hideCallback}
      pathname={pathname}
      activeCourse={activeCourse}
      changeCourseCallback={changeCourseCallback}
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

  function removeAuthUserCallback() { }

  return (
    <LoginDrawerView
      showingMenu={showingMenu}
      user={user}
      hideCallback={hideCallback}
      removeAuthUserCallback={removeAuthUserCallback}
    />
  )
}
