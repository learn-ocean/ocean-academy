import { RESET, RESTORE } from 'app/App.actions'

import { HIDE_DRAWER, SHOW_DRAWER } from '../app/App.components/Drawer/Drawer.actions'

export interface DrawerState {
  showing: boolean
}

const drawerDefaultState: DrawerState = {
  showing: false,
}

export function drawer(state = drawerDefaultState, action: any): DrawerState {
  switch (action.type) {
    case RESET: {
      return drawerDefaultState
    }
    case RESTORE: {
      return drawerDefaultState
    }
    case SHOW_DRAWER:
      return {
        showing: true,
      }
    case HIDE_DRAWER:
      return {
        showing: false,
      }
    default:
      return state
  }
}
