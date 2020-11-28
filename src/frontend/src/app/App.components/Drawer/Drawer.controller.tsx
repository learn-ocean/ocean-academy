import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { State } from 'reducers'
import { ShowingChaptersState } from 'reducers/chapterDrawer'

import {
  hideCourseDrawer,
  hideMenuDrawer,
  showOcean101Drawer,
  hideOcean101Drawer,
  showBusinessDrawer,
  hideBusinessDrawer,
  showOutreachDrawer,
  hideOutreachDrawer,
  showC2DDrawer,
  hideC2DDrawer
} from './Drawer.actions'
import { CourseDrawerView, LoginDrawerView } from './Drawer.view'

export const CourseDrawer = () => {
  const dispatch = useDispatch()
  const showingCourses = useSelector((state: State) => state.courseDrawer && state.courseDrawer.showingCourses) // showing the entire drawer
  const chapterStates = useSelector((state: State) => state.chapterDrawer)                                      // object with booleans, noting which chapters should be showing.
  const { pathname } = useLocation()

  const hideCallback = () => {
    dispatch(hideCourseDrawer())
  }

  const changeChapterState = ((chapterStates: ShowingChaptersState, currentCourse: string) => {
    console.log(`[CHAPTERSTATES PRE CHANNGE]\nOcean101: ${chapterStates.ocean101}\nBusiness: ${chapterStates.oceanBusiness}\nOutreach: ${chapterStates.oceanOutreach}\nC2D: ${chapterStates.computeToData}`)
    console.log("Click registered! Changing chapter state of... ", currentCourse)

    switch (currentCourse) {
      case `ocean101`: {
        if (!chapterStates.ocean101) {
          dispatch(showOcean101Drawer())
        } else {
          dispatch(hideOcean101Drawer())
        }
        break;
      }
      case `oceanBusiness`: {
        if (!chapterStates.oceanBusiness) {
          dispatch(showBusinessDrawer())
        } else {
          dispatch(hideBusinessDrawer())
        }
        break;
      }
      case `oceanOutreach`: {
        if (!chapterStates.oceanOutreach) {
          dispatch(showOutreachDrawer())
        } else {
          dispatch(hideOutreachDrawer())
        }
        break;
      }
      case `computeToData`: {
        if (!chapterStates.computeToData) {
          dispatch(showC2DDrawer())
        } else {
          dispatch(hideC2DDrawer())
        }
        break;
      }
    }
  })

  console.log(`[CHAPTERSTATES POST CHANNGE]\nOcean101: ${chapterStates.ocean101}\nBusiness: ${chapterStates.oceanBusiness}\nOutreach: ${chapterStates.oceanOutreach}\nC2D: ${chapterStates.computeToData}`)

  return (
    <CourseDrawerView
      showingCourses={showingCourses}
      chapterStates={chapterStates}
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
