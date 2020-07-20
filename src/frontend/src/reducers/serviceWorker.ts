export const SW_INIT = 'SW_INIT'
export const SW_UPDATE = 'SW_UPDATE'

export interface ServiceWorkerState {
  serviceWorkerInitialized: boolean
  serviceWorkerUpdated: boolean
  serviceWorkerRegistration: any
}

const serviceWorkerState: ServiceWorkerState = {
  serviceWorkerInitialized: false,
  serviceWorkerUpdated: false,
  serviceWorkerRegistration: null,
}

export function serviceWorker(state = serviceWorkerState, action: any): ServiceWorkerState {
  switch (action.type) {
    case SW_INIT: {
      return {
        ...state,
      }
    }
    case SW_UPDATE: {
      return {
        ...state,
      }
    }
    default:
      return state
  }
}
