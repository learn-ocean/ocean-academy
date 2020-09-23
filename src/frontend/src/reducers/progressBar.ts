import { RESET, RESTORE } from 'app/App.actions'

import { HIDE_PROGRESS_BAR, SHOW_PROGRESS_BAR } from '../app/App.components/ProgressBar/ProgressBar.actions'

export interface ProgressBarState {
  showing: boolean
}

const progressBarDefaultState: ProgressBarState = {
  showing: false,
}

export function progressBar(state = progressBarDefaultState, action: any): ProgressBarState {
  switch (action.type) {
    case RESET: {
      return progressBarDefaultState
    }
    case RESTORE: {
      return progressBarDefaultState
    }
    case SHOW_PROGRESS_BAR:
      return {
        showing: true,
      }
    case HIDE_PROGRESS_BAR:
      return {
        showing: false,
      }
    default:
      return state
  }
}
