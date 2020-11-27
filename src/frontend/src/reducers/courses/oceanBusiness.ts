import { RESET, RESTORE } from 'app/App.actions'
import {
    SHOW_OCEANBUSINESS_CHAPTERS,
    HIDE_OCEANBUSINESS_CHAPTERS
} from '../../app/App.components/Drawer/Drawer.actions'
import { ShowingChaptersState } from '../../pages/Course/Course.controller'

const thisCourse = 'oceanBusiness'

const showingChaptersDefaultState: ShowingChaptersState = {
    course: thisCourse,
    showingChapters: false,
}

export function oceanBusiness(state = showingChaptersDefaultState, action: any): ShowingChaptersState {
    switch (action.type) {
        case RESET: {
            return showingChaptersDefaultState
        }

        case RESTORE: {
            return showingChaptersDefaultState
        }

        case SHOW_OCEANBUSINESS_CHAPTERS: {
            return {
                course: thisCourse,
                showingChapters: true,
            }
        }

        case HIDE_OCEANBUSINESS_CHAPTERS: {
            return {
                course: thisCourse,
                showingChapters: false,
            }
        }
        default: 
           return state
    }
}