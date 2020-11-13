import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { HamburgerViewLeft, HamburgerViewRight } from './Hamburger.view'
import { hideDrawer, showDrawer } from '../Drawer/Drawer.actions'
import { State } from 'reducers'

export const HamburgerLeft = () => {
  const dispatch = useDispatch()
  const activated = useSelector((state: State) => state.chapterDrawer.showingChapter)

  const activateCallback = () => {
    dispatch(activated ? hideDrawer() : showDrawer())
  }

  return <HamburgerViewLeft activated={activated} activateCallback={activateCallback} />
}

export const HamburgerRight = () => {
  const dispatch = useDispatch()
  const activated = useSelector((state: State) => state.loginDrawer.showingMenu)

  const activateCallback = () => {
    dispatch(activated ? hideDrawer() : showDrawer())
  }

  return <HamburgerViewRight activated={activated} activateCallback={activateCallback} />
}

