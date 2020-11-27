import { RESET, RESTORE } from 'app/App.actions'
import { HIDE_COURSE_DRAWER, SHOW_COURSE_DRAWER } from '../app/App.components/Drawer/Drawer.actions'

export interface CourseDrawerState {
  showingCourses: boolean
}

const courseDrawerDefaultState: CourseDrawerState = {
  showingCourses: false,
}

export function courseDrawer(state = courseDrawerDefaultState, action: any): CourseDrawerState {
  switch (action.type) {
    case RESET: {
      return courseDrawerDefaultState
    }
    case RESTORE: {
      return courseDrawerDefaultState
    }
    case SHOW_COURSE_DRAWER:
      return {
        showingCourses: true,
      }
    case HIDE_COURSE_DRAWER:
      return {
        showingCourses: false,
      }
    default:
      return state
  }
}