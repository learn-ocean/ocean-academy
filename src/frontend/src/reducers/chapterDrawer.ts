import { RESET, RESTORE } from 'app/App.actions'
import {
    SHOW_C2D_CHAPTERS,
    HIDE_C2D_CHAPTERS,
    SHOW_OCEAN101_CHAPTERS,
    HIDE_OCEAN101_CHAPTERS,
    SHOW_OCEANOUTREACH_CHAPTERS,
    HIDE_OCEANOUTREACH_CHAPTERS,
    SHOW_OCEANBUSINESS_CHAPTERS,
    HIDE_OCEANBUSINESS_CHAPTERS
} from '../app/App.components/Drawer/Drawer.actions'

export interface ShowingChaptersState {
    [key: string]: boolean,
}

const showingChaptersDefault: ShowingChaptersState = {
    "ocean101": false,
    "oceanBusiness": false,
    "oceanOutreach": false,
    "computeToData": false,
}

export function chapterDrawer(state = showingChaptersDefault, action: any): ShowingChaptersState {
    switch (action.type) {
        case RESET: {
            return showingChaptersDefault
        }
        case RESTORE: {
            return showingChaptersDefault
        }

        case SHOW_OCEAN101_CHAPTERS: {
            return {
                ocean101: true,
                oceanBusiness: false,
                oceanOutreach: false,
                computeToData: false
            }
        }
        case HIDE_OCEAN101_CHAPTERS: {
            return {
                ocean101: false,
                oceanBusiness: false,
                oceanOutreach: false,
                computeToData: false
            }
        }
        case SHOW_OCEANBUSINESS_CHAPTERS: {
            return {
                ocean101: false,
                oceanBusiness: true,
                oceanOutreach: false,
                computeToData: false
            }
        }

        case HIDE_OCEANBUSINESS_CHAPTERS: {
            return {
                ocean101: false,
                oceanBusiness: false,
                oceanOutreach: false,
                computeToData: false
            }
        }

        case SHOW_OCEANOUTREACH_CHAPTERS: {
            console.log("OCEAN101 SHOW_DRAWER\nediting showingChapter property...")
            return {
                ocean101: false,
                oceanBusiness: false,
                oceanOutreach: true,
                computeToData: false
            }
        }

        case HIDE_OCEANOUTREACH_CHAPTERS: {
            console.log("OCEAN101 HIDE_DRAWER\nediting showingChapter property...")
            return {
                ocean101: false,
                oceanBusiness: false,
                oceanOutreach: false,
                computeToData: false
            }
        }

        case SHOW_C2D_CHAPTERS: {
            return {
                ocean101: false,
                oceanBusiness: false,
                oceanOutreach: false,
                computeToData: true
            }
        }

        case HIDE_C2D_CHAPTERS: {
            return {
                ocean101: false,
                oceanBusiness: false,
                oceanOutreach: false,
                computeToData: false
            }
        }
        
        default: 
           return state
    }
}
