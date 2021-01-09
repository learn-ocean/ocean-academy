import * as React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
<<<<<<< HEAD
import { useLocation } from 'react-router-dom'

import { State } from 'reducers'
import { ShowingChaptersState } from 'reducers/chapterDrawer'
=======
import { useLocation, useHistory } from 'react-router-dom'
import { State } from 'reducers'
import { Option } from '../Select/Select.view'
>>>>>>> Add-ITDF

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
<<<<<<< HEAD
  const showingCourses = useSelector((state: State) => state.courseDrawer && state.courseDrawer.showingCourses) // showing the entire drawer
  const chapterStates = useSelector((state: State) => state.chapterDrawer)                                      // object with booleans, noting which chapters should be showing.
=======
  const showingChapter = useSelector((state: State) => state.chapterDrawer && state.chapterDrawer.showingChapter)
>>>>>>> Add-ITDF
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
    dispatch(hideCourseDrawer())
  }

<<<<<<< HEAD
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
=======
  return (
    <ChapterDrawerView
      showingChapters={showingChapter}
>>>>>>> Add-ITDF
      hideCallback={hideCallback}
      changeChapterState={changeChapterState}
      pathname={pathname}
<<<<<<< HEAD
=======
      activeCourse={activeCourse}
      changeCourseCallback={changeCourseCallback}
>>>>>>> Add-ITDF
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
<<<<<<< HEAD
=======
      hideCallback={hideCallback}
>>>>>>> Add-ITDF
      removeAuthUserCallback={removeAuthUserCallback}
    />
  )
}
