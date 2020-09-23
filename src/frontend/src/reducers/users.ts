import { RESET, RESTORE } from 'app/App.actions'
import { GET_USER_COMMIT } from 'pages/User/User.actions'
import { PublicUser } from 'shared/user/PublicUser'

export type UsersState = Record<string, PublicUser>

const usersInitialState: UsersState = {}

export function users(state = usersInitialState, action: any): UsersState {
  switch (action.type) {
    case RESET: {
      return usersInitialState
    }
    case RESTORE: {
      return state
    }
    case GET_USER_COMMIT: {
      return {
        ...state,
        [action.payload.user.username]: action.payload.user,
      }
    }
    default:
      return state
  }
}
