import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { HamburgerViewLeft, HamburgerViewRight } from './Hamburger.view'
<<<<<<< HEAD
import {
  showCourseDrawer,
  hideCourseDrawer,
  hideMenuDrawer,
  showMenuDrawer
} from '../Drawer/Drawer.actions'
import { State } from 'reducers'

/*
showOcean101Drawer,
hideOcean101Drawer,
showBusinessDrawer,
hideBusinessDrawer,
showOutreachDrawer,
hideOutreachDrawer,
showC2DDrawer,
hideC2DDrawer,
*/

// Chapters Menu
export const HamburgerLeft = () => {
  const dispatch = useDispatch()
  const activated = useSelector((state: State) => state.courseDrawer.showingCourses)

  const activateCallback = () => {
    dispatch(activated ? hideCourseDrawer() : showCourseDrawer())
=======
import { showChapterDrawer, hideChapterDrawer, hideMenuDrawer, showMenuDrawer } from '../Drawer/Drawer.actions'
import { State } from 'reducers'

export const HamburgerLeft = () => {
  const dispatch = useDispatch()
  const activated = useSelector((state: State) => state.chapterDrawer.showingChapter)

  const activateCallback = () => {
    dispatch(activated ? hideChapterDrawer() : showChapterDrawer())
>>>>>>> upstream/development
  }

  return <HamburgerViewLeft activated={activated} activateCallback={activateCallback} />
}

<<<<<<< HEAD
// Login / About Us Menu
=======
>>>>>>> upstream/development
export const HamburgerRight = () => {
  const dispatch = useDispatch()
  const activated = useSelector((state: State) => state.loginDrawer.showingMenu)

  const activateCallback = () => {
    dispatch(activated ? hideMenuDrawer() : showMenuDrawer())
  }

  return <HamburgerViewRight activated={activated} activateCallback={activateCallback} />
}

