import * as React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { State } from 'reducers'

import { Option } from '../Select/Select.view'
import { hideChapterDrawer, hideCourseDrawer, hideMenuDrawer, showDataDefiDrawer, showOcean101Drawer } from './Drawer.actions'
import { ChapterDrawerView, CourseDrawerView, LoginDrawerView } from './Drawer.view'

export const ChapterDrawer = () => {
  const dispatch = useDispatch()
  const showingChapter = useSelector((state: State) => state.chapterDrawer && state.chapterDrawer.showingChapterDrawer)
  const currentCourseCategory = useSelector((state: State) => state.chapterDrawer.courseCategory)

  const { pathname } = useLocation()

  let defaultCourseCategory: Option = { name: "category 1", path: "category 1" }
  const [activeCourseCategory, setActiveCourseCategory] = useState<Option>(defaultCourseCategory)
  

  function changeCourseCategoryCallback(e: Option) {
    if (e.path === 'category1') {
      const category1: Option = {
        name: "category 1",
        path: "category1"
      }
      setActiveCourseCategory(category1)
    }
    if (e.path === 'category2') {
      const category2: Option = {
        name: "category 2",
        path: "category2"
      }
      setActiveCourseCategory(category2)
    }
  }

  // ts
  React.useEffect(() => {
    console.log(`activeCourseCategory = ${activeCourseCategory}`)
  }, [activeCourseCategory])

  const hideCallback = () => {
    dispatch(hideChapterDrawer())
  }

  return (
    <ChapterDrawerView
      showingChapters={showingChapter}
      hideCallback={hideCallback}
      pathname={pathname}
      activeCourseCategory={activeCourseCategory}
      changeCategoryCallback={changeCourseCategoryCallback}
    />
  )
}


export const CourseDrawer = () => {
  const dispatch = useDispatch()
  const showingCourses = useSelector((state: State) => state.chapterDrawer && state.chapterDrawer.showingChapterDrawer)
  const { pathname } = useLocation()

  const hideCallback = () => {
    dispatch(hideCourseDrawer())
  }

  const changeChapterState = ((currentCourse: string) => {
    { console.log("currentCourse inside callback = ", currentCourse) }
    switch (currentCourse) {
      case ``: {
        break;
      }
      case `ocean101`: {
        dispatch(showOcean101Drawer())
        break;
      }
      case `introToDataDefi`: {
        dispatch(showDataDefiDrawer())
        break;
      }
    }
  })

  return (
    <CourseDrawerView
      showingCourses={showingCourses}
      hideCallback={hideCallback}
      changeChapterState={changeChapterState}
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
