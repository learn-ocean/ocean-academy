import { RESET, RESTORE } from 'app/App.actions'
import {
    SHOW_C2D_CHAPTERS,
    HIDE_C2D_CHAPTERS,
} from '../../app/App.components/Drawer/Drawer.actions'
import { ShowingChaptersState } from '../../pages/Course/Course.controller'

const thisCourse = 'computeToData'

const showingChaptersDefaultState: ShowingChaptersState = {
    course: thisCourse,
    showingChapters: false,
}

export function computeToData(state = showingChaptersDefaultState, action: any): ShowingChaptersState {
    switch (action.type) {
        case RESET: {
            return showingChaptersDefaultState
        }

        case RESTORE: {
            return showingChaptersDefaultState
        }

        case SHOW_C2D_CHAPTERS: {
            return {
                course: thisCourse,
                showingChapters: true,
            }
        }

        case HIDE_C2D_CHAPTERS: {
            return {
                course: thisCourse,
                showingChapters: false,
            }
        }
        default: 
           return state
    }
}