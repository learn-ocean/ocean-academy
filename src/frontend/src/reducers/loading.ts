export type LoadingState = boolean

const loadingInitialState: LoadingState =  false

export function loading(state = loadingInitialState, action: any): LoadingState {
  switch (true) {
    case /RESET/.test(action.type): {
      return false
    }
    case /RESTORE/.test(action.type): {
      return false
    }
    case /_REQUEST/.test(action.type): {
      return true
    }
    case /_COMMIT/.test(action.type): {
      return false
    }
    case /_ROLLBACK/.test(action.type): {
      return false
    }
    default:
      return state
  }
}
