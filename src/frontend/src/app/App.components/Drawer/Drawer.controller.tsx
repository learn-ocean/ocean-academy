import * as React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { State } from 'reducers'
import { Option } from '../Select/Select.view'

import { hideChapterDrawer, hideMenuDrawer } from './Drawer.actions'
import { ChapterDrawerView, LoginDrawerView } from './Drawer.view'

export const ChapterDrawer = () => {
  const dispatch = useDispatch()
  const showingChapter = useSelector((state: State) => state.chapterDrawer && state.chapterDrawer.showingChapter)
  const { pathname } = useLocation()

  let defaultCourse: Option = { name: "Ocean 101", path: "ocean101" }
  const [activeCourse, setActiveCourse] = useState(defaultCourse)

  function changeCourseCallback(e: Option) {
    if (e.path === 'ocean101') {
      setActiveCourse({ name: "Ocean 101", path: 'ocean101' })
    }
    if (e.path === 'introToDataDefi') {
      setActiveCourse({ name: 'Intro to Data Defi', path: 'introToDataDefi' })
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
