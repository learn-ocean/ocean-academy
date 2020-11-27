import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { HamburgerViewLeft, HamburgerViewRight } from './Hamburger.view'
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
  }

  return <HamburgerViewLeft activated={activated} activateCallback={activateCallback} />
}

// Login / About Us Menu
export const HamburgerRight = () => {
  const dispatch = useDispatch()
  const activated = useSelector((state: State) => state.loginDrawer.showingMenu)

  const activateCallback = () => {
    dispatch(activated ? hideMenuDrawer() : showMenuDrawer())
  }

  return <HamburgerViewRight activated={activated} activateCallback={activateCallback} />
}

