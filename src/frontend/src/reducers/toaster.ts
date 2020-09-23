import { RESET, RESTORE } from 'app/App.actions'

import { HIDE_TOASTER, SHOW_TOASTER } from '../app/App.components/Toaster/Toaster.actions'
import { ERROR } from '../app/App.components/Toaster/Toaster.constants'

export interface ToasterState {
  showing: boolean
  status?: string
  title?: string
  message?: string
}

const toasterDefaultState: ToasterState = {
  showing: false,
  status: ERROR,
  title: undefined,
  message: undefined,
}

export function toaster(state = toasterDefaultState, action: any): ToasterState {
  switch (action.type) {
    case RESET: {
      return toasterDefaultState
    }
    case RESTORE: {
      return toasterDefaultState
    }
    case SHOW_TOASTER:
      return {
        showing: true,
        status: action.status,
        title: action.title,
        message: action.message,
      }
    case HIDE_TOASTER:
      return {
        ...state,
        showing: false,
      }
    default:
      return state
  }
}
