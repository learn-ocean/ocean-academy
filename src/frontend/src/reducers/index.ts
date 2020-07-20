import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

import { auth, AuthState } from './auth'
import { drawer, DrawerState } from './drawer'
import { loading, LoadingState } from './loading'
import { progressBar, ProgressBarState } from './progressBar'
import { serviceWorker, ServiceWorkerState } from './serviceWorker'
import { toaster, ToasterState } from './toaster'
import { users, UsersState } from './users'

export const reducers = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    loading,
    users,
    toaster,
    drawer,
    progressBar,
    serviceWorker,
  })

export interface State {
  auth: AuthState
  loading: LoadingState
  users: UsersState
  toaster: ToasterState
  drawer: DrawerState
  progressBar: ProgressBarState
  serviceWorker: ServiceWorkerState
}
