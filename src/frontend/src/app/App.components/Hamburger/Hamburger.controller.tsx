import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { HamburgerView } from './Hamburger.view'
import { hideDrawer, showDrawer } from '../Drawer/Drawer.actions'
import { State } from 'reducers'

export const Hamburger = () => {
  const dispatch = useDispatch()
  const activated = useSelector((state: State) => state.drawer.showing)

  const activateCallback = () => {
    dispatch(activated ? hideDrawer() : showDrawer())
  }

  return <HamburgerView activated={activated} activateCallback={activateCallback} />
}
