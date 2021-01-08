import { RESET, RESTORE } from 'app/App.actions'
import { HIDE_CHAPTER_DRAWER, SHOW_CHAPTER_DRAWER } from '../app/App.components/Drawer/Drawer.actions'

export interface ChapterDrawerState {
  showingChapter: boolean
}

const chapterDrawerDefaultState: ChapterDrawerState = {
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
    case SHOW_CHAPTER_DRAWER:
      return {
        showingChapter: true,
      }
    case HIDE_CHAPTER_DRAWER:
      return {
        showingChapter: false,
      }
    default:
      return state
  }
}
