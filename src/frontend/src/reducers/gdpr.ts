import { RESET, RESTORE } from 'app/App.actions'

import { HIDE_GDPR } from '../app/App.components/Gdpr/Gdpr.actions'

export interface GdprState {
  showing: boolean
}

const drawerDefaultState: GdprState = {
  showing: true,
}

export function gdpr(state = drawerDefaultState, action: any): GdprState {
  switch (action.type) {
    case RESET: {
      return drawerDefaultState
    }
    case RESTORE: {
      return state
    }
    case HIDE_GDPR:
      return {
        showing: false,
      }
    default:
      return state
  }
}
