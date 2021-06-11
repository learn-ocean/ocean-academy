import { RESET, RESTORE } from 'app/App.actions'

import { HIDE_DATADEFI_DRAWER, HIDE_OCEAN101_DRAWER, SHOW_DATADEFI_DRAWER, SHOW_OCEAN101_DRAWER } from '../app/App.components/Drawer/Drawer.actions'

export interface IndividualChapterDrawerState {
  currentCourse: string
}
  
const chapterDrawerDefaultState: IndividualChapterDrawerState = {
  currentCourse: 'none',
}


export function individualChapterDrawers(state = chapterDrawerDefaultState, action: any): IndividualChapterDrawerState {
  switch (action.type) {
    case RESET: {
      return chapterDrawerDefaultState
    }
    case RESTORE: {
      return chapterDrawerDefaultState
    }

    case SHOW_OCEAN101_DRAWER: {
      return {
        currentCourse: 'ocean101'
      }
    }
    case HIDE_OCEAN101_DRAWER: {
      return {
        currentCourse: 'none',
      }
    }

    case SHOW_DATADEFI_DRAWER: {
      return {
        currentCourse: 'introToDataDefi'
      }
    }
    case HIDE_DATADEFI_DRAWER: {
      return {
        currentCourse: 'none'
      }
    }

    default:
      return state
  }
} 