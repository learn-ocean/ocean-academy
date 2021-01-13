import { RESET, RESTORE } from 'app/App.actions'
import { HIDE_MENU_DRAWER, SHOW_MENU_DRAWER } from '../app/App.components/Drawer/Drawer.actions'

export interface LoginDrawerState {
    showingMenu: boolean
}
  
const loginDrawerDefaultState: LoginDrawerState = {
    showingMenu: false,
}

export function loginDrawer(state = loginDrawerDefaultState, action: any): LoginDrawerState {
    switch (action.type) {
        case RESET: {
            return loginDrawerDefaultState
        }
        case RESTORE: {
            return loginDrawerDefaultState
        }
        case SHOW_MENU_DRAWER:
            return {
                showingMenu: true,
            }
        case HIDE_MENU_DRAWER:
            return {
                showingMenu: false,
            }
        default:
            return state
    }
}
