import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { State } from 'reducers'

import {
  hideCourseDrawer,
  hideMenuDrawer,
  showOcean101Drawer,
  showBusinessDrawer,
  showOutreachDrawer,
  showC2DDrawer,
} from './Drawer.actions'
import { CourseDrawerView, LoginDrawerView } from './Drawer.view'

export const CourseDrawer = () => {
  const dispatch = useDispatch()
  const showingCourses = useSelector((state: State) => state.courseDrawer && state.courseDrawer.showingCourses)
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
      case `oceanBusiness`: {
        dispatch(showBusinessDrawer())
        break;
      }
      case `oceanOutreach`: {
        dispatch(showOutreachDrawer())
        break;
      }
      case `computeToData`: {
        dispatch(showC2DDrawer())
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
  const { pathname } = useLocation()

  const hideCallback = () => {
    dispatch(hideMenuDrawer())
  }

  function removeAuthUserCallback() { }

  return (
    <LoginDrawerView
      showingMenu={showingMenu}
      hideCallback={hideCallback}
      pathname={pathname}
      user={user}
      removeAuthUserCallback={removeAuthUserCallback}
    />
  )
}
