import { RESET, RESTORE } from 'app/App.actions'
import {
    SHOW_OCEANOUTREACH_CHAPTERS,
    HIDE_OCEANOUTREACH_CHAPTERS,
} from '../../app/App.components/Drawer/Drawer.actions'
import { ShowingChaptersState } from '../../pages/Course/Course.controller'

const thisCourse = 'oceanOutreach'

const showingChaptersDefaultState: ShowingChaptersState = {
    course: thisCourse,
    showingChapters: false,
}

export function oceanOutreach(state = showingChaptersDefaultState, action: any): ShowingChaptersState {
    switch (action.type) {
        case RESET: {
            return showingChaptersDefaultState
        }
        case RESTORE: {
            return showingChaptersDefaultState
        }

        case SHOW_OCEANOUTREACH_CHAPTERS: {
            console.log("OCEAN101 SHOW_DRAWER\nediting showingChapter property...")
            return {
                course: thisCourse,
                showingChapters: true,
            }
        }

        case HIDE_OCEANOUTREACH_CHAPTERS: {
            console.log("OCEAN101 HIDE_DRAWER\nediting showingChapter property...")
            return {
                course: thisCourse,
                showingChapters: false,
            }
        }
        default: 
           return state
    }
}