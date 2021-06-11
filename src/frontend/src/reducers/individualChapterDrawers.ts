import { RESET, RESTORE } from 'app/App.actions'

import { HIDE_DATADEFI_DRAWER, HIDE_OCEAN101_DRAWER, SHOW_DATADEFI_DRAWER, SHOW_OCEAN101_DRAWER } from '../app/App.components/Drawer/Drawer.actions'

export interface IndividualChapterDrawerState {
  course: string,
  showingChapter: boolean
}
  
const chapterDrawerDefaultState: IndividualChapterDrawerState = {
  course: 'ocean101',
  showingChapter: false,
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
        course: "ocean101",
        showingChapter: true,
      }
    }
    case HIDE_OCEAN101_DRAWER: {
      console.log("OCEAN101 HIDE_DRAWER\nediting showingChapter property...")
      return {
        course: "ocean101",
        showingChapter: false,
      }
    }

    case SHOW_DATADEFI_DRAWER: {
      console.log("DATADEFI SHOW_DRAWER\nediting showingChapter property...")
      return {
        course: "introToDataDefi",
        showingChapter: true,
      }
    }
    case HIDE_DATADEFI_DRAWER: {
      console.log("OCEANBUSINESS HIDE_DRAWER\nediting showingChapter property...")
      return {
        course: "introToDataDefi",
        showingChapter: false,
      }
    }

    default:
      return state
  }
} 