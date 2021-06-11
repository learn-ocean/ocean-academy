import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

import { auth, AuthState } from './auth'
import { chapterDrawer, ChapterDrawerState } from './chapterDrawer'
import { gdpr, GdprState } from './gdpr'
import { individualChapterDrawers, IndividualChapterDrawerState } from './individualChapterDrawers'
import { loading, LoadingState } from './loading'
// Drawers
import { loginDrawer, LoginDrawerState } from './loginDrawer'
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
    individualChapterDrawers,
    chapterDrawer,
    loginDrawer,
    progressBar,
    serviceWorker,
    gdpr,
  })

export interface State {
  auth: AuthState
  loading: LoadingState
  users: UsersState
  toaster: ToasterState
  loginDrawer: LoginDrawerState
  chapterDrawer: ChapterDrawerState
  individualChapterDrawers: IndividualChapterDrawerState
  progressBar: ProgressBarState
  serviceWorker: ServiceWorkerState
  gdpr: GdprState
}
