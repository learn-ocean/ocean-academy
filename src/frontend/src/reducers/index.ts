import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

import { auth, AuthState } from './auth'
import { chapterDrawer, ChapterDrawerState } from './chapterDrawer'
import { loginDrawer, LoginDrawerState } from './loginDrawer'
import { gdpr, GdprState } from './gdpr'
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
    chapterDrawer,
    loginDrawer,
    progressBar,
    serviceWorker,
    gdpr
  })

export interface State {
  auth: AuthState
  loading: LoadingState
  users: UsersState
  toaster: ToasterState
  chapterDrawer: ChapterDrawerState
  loginDrawer: LoginDrawerState
  progressBar: ProgressBarState
  serviceWorker: ServiceWorkerState
  gdpr: GdprState
}
