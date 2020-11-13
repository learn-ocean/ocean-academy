import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { HamburgerViewLeft, HamburgerViewRight } from './Hamburger.view'
import { showChapterDrawer, hideChapterDrawer, hideMenuDrawer, showMenuDrawer } from '../Drawer/Drawer.actions'
import { State } from 'reducers'

export const HamburgerLeft = () => {
  const dispatch = useDispatch()
  const activated = useSelector((state: State) => state.chapterDrawer.showingChapter)

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

