import * as React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { State } from 'reducers'

import { Option } from '../Select/Select.view'
import { hideChapterDrawer, hideCourseDrawer, hideDataDefiDrawer, hideMenuDrawer, hideOcean101Drawer, showDataDefiDrawer, showOcean101Drawer } from './Drawer.actions'
import { ChapterDrawerView, LoginDrawerView } from './Drawer.view'

export const ChapterDrawer = () => {
  const dispatch = useDispatch()
  const showingChapter = useSelector((state: State) => state.chapterDrawer && state.chapterDrawer.showingChapterDrawer)
  const currentCourseSelector = useSelector((state: State) => state.individualChapterDrawers.currentCourse)

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

  function changeChapterState(currentCourse: string) {
    if (currentCourse === `ocean101`) {
      if (currentCourseSelector === `ocean101`) {
        dispatch(hideOcean101Drawer())
      } else {
        dispatch(showOcean101Drawer())
      }
    } else if (currentCourse === `introToDataDefi`) {
      if (currentCourseSelector === `introToDataDefi`) {
        dispatch(hideDataDefiDrawer())
      } else {
        dispatch(showDataDefiDrawer())
      }
    }
  }

  // ts
  // React.useEffect(() => {
  //   console.log(`activeCourseCategory = ${activeCourseCategory}`)
  // }, [activeCourseCategory])

  const hideCallback = () => {
    dispatch(hideChapterDrawer())
  }

  return (
    <ChapterDrawerView
      showingChapters={showingChapter}
      currentCourse={currentCourseSelector}
      pathname={pathname}
      activeCourseCategory={activeCourseCategory}
      hideCallback={hideCallback}
      changeCategoryCallback={changeCourseCategoryCallback}
      changeChapterState={changeChapterState}
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
