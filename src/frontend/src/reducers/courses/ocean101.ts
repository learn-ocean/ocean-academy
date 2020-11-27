import { RESET, RESTORE } from 'app/App.actions'
import {
    SHOW_OCEAN101_CHAPTERS,
    HIDE_OCEAN101_CHAPTERS,
} from '../../app/App.components/Drawer/Drawer.actions'
import { ShowingChaptersState } from '../../pages/Course/Course.controller'

const thisCourse = 'ocean101'

const showingChaptersDefaultState: ShowingChaptersState = {
    course: thisCourse,
    showingChapters: false,
}

export function ocean101(state = showingChaptersDefaultState, action: any): ShowingChaptersState {
    switch (action.type) {
        case RESET: {
            return showingChaptersDefaultState
        }
        case RESTORE: {
            return showingChaptersDefaultState
        }

        case SHOW_OCEAN101_CHAPTERS: {
            return {
                course: thisCourse,
                showingChapters: true,
            }
        }
        case HIDE_OCEAN101_CHAPTERS: {
            return {
                course: thisCourse,
                showingChapters: false,
            }
        }
        default: 
           return state
    }
}