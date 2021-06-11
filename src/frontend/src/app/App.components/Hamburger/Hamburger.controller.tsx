import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'reducers'

import { hideChapterDrawer, hideMenuDrawer, showChapterDrawer, showMenuDrawer } from '../Drawer/Drawer.actions'
import { HamburgerViewLeft, HamburgerViewRight } from './Hamburger.view'

export const HamburgerLeft = () => {
  const dispatch = useDispatch()
  const activated = useSelector((state: State) => state.chapterDrawer.showingChapterDrawer)

  const activateCallback = () => {
    dispatch(activated ? hideChapterDrawer() : showChapterDrawer())
  }

  return <HamburgerViewLeft activated={activated} activateCallback={activateCallback} />
}

export const HamburgerRight = () => {
  const dispatch = useDispatch()
  const activated = useSelector((state: State) => state.loginDrawer.showingMenu)

  const activateCallback = () => {
    dispatch(activated ? hideMenuDrawer() : showMenuDrawer())
  }

  return <HamburgerViewRight activated={activated} activateCallback={activateCallback} />
}

