import { RESET, RESTORE } from 'app/App.actions'
import {
  SHOW_OCEAN101_DRAWER,
  HIDE_OCEAN101_DRAWER, 
  SHOW_OCEANBUSINESS_DRAWER,
  HIDE_OCEANBUSINESS_DRAWER,
  SHOW_OCEANOUTREACH_DRAWER,
  HIDE_OCEANOUTREACH_DRAWER,
  SHOW_C2D_DRAWER,
  HIDE_C2D_DRAWER
} from '../app/App.components/Drawer/Drawer.actions'

export interface ChapterDrawerState {
  course: string,
  showingChapter: boolean
}

const chapterDrawerDefaultState: ChapterDrawerState = {
  course: '',
  showingChapter: false,
}

export function chapterDrawer(state = chapterDrawerDefaultState, action: any): ChapterDrawerState {
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
    
    case SHOW_OCEANBUSINESS_DRAWER: {
      console.log("OCEANBUSINESS SHOW_DRAWER\nediting showingChapter property...")
      return {
        course: "oceanBusiness",
        showingChapter: true,
      }
    }
    case HIDE_OCEANBUSINESS_DRAWER: {
      console.log("OCEANBUSINESS HIDE_DRAWER\nediting showingChapter property...")
      return {
        course: "oceanBusiness",
        showingChapter: false,
      }
    }

    case SHOW_OCEANOUTREACH_DRAWER: {
      console.log("OCEANOUTREACH SHOW_DRAWER\nediting showingChapter property...")
      return {
        course: "oceanOutreach",
        showingChapter: true,
      }
    }
    case HIDE_OCEANOUTREACH_DRAWER: {
      console.log("OCEAN101 HIDE_DRAWER\nediting showingChapter property...")
      return {
        course: "oceanOutreach",
        showingChapter: false,
      }
    }

    case SHOW_C2D_DRAWER: {
      console.log("C2D SHOW_DRAWER\nediting showingChapter property...")
      return {       
        course: "computeToData",
        showingChapter: true,
      }
    }
    case HIDE_C2D_DRAWER: {
      console.log("C2D HIDE_DRAWER\nediting showingChapter property...")
      return {
        course: "computeToData",
        showingChapter: false,
      } 
    }

    default:
      return state
  }
}