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
      console.log("OCEAN101 SHOW_DRAWER\nediting showingChapter property...")
      return {
        currentCourse: 'ocean101'
      }
    }
    case HIDE_OCEAN101_DRAWER: {
      console.log("OCEAN101 HIDE_DRAWER\nediting showingChapter property...")
      return {
        currentCourse: 'none',
      }
    }

    case SHOW_DATADEFI_DRAWER: {
      console.log("DATADEFI SHOW_DRAWER\nediting showingChapter property...")
      return {
        currentCourse: 'introToDataDefi'
      }
    }
    case HIDE_DATADEFI_DRAWER: {
      console.log("OCEANBUSINESS HIDE_DRAWER\nediting showingChapter property...")
      return {
        currentCourse: 'none'
      }
    }

    default:
      return state
  }
} 