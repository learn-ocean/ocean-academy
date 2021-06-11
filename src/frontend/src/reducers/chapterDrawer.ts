import { RESET, RESTORE } from 'app/App.actions'

import { HIDE_CHAPTER_DRAWER, SHOW_CHAPTER_DRAWER } from '../app/App.components/Drawer/Drawer.actions'

export interface ChapterDrawerState {
  courseCategory: string
  showingChapterDrawer: boolean
}

const chapterDrawerDefaultState: ChapterDrawerState = {
  courseCategory: 'Course Category 1',
  showingChapterDrawer: false,
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
        courseCategory: 'Course Category 1',
        showingChapterDrawer: true,
      }
    case HIDE_CHAPTER_DRAWER:
      return {
        courseCategory: 'Course Category 1',
        showingChapterDrawer: false,
      }
    default:
      return state
  }
}


