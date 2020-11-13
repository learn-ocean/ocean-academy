import { RESET, RESTORE } from 'app/App.actions'
import { HIDE_DRAWER, SHOW_DRAWER } from '../app/App.components/Drawer/Drawer.actions'

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
    case SHOW_DRAWER:
    console.log("loginDrawer SHOW_DRAWER\nediting showingMenu...")
    return {
        showingMenu: true,
    }
    case HIDE_DRAWER:
    console.log("loginDrawer HIDE_DRAWER\nediting showingMenu...")
    return {
        showingMenu: false,
    }
    default:
    return state
}
}
