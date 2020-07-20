import { offline } from '@redux-offline/redux-offline'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore, Store } from 'redux'
import thunk from 'redux-thunk'

import { reducers, State } from '../reducers'
import { reduxOfflineThunkMiddleware, storeOfflineConfig } from './App.offline'

export const history = createBrowserHistory()

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
  }
}

export function configureStore(preloadedState: any) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })
    : compose

  const store: Store<State> = offline(storeOfflineConfig)(createStore)(
    reducers(history) as any,
    preloadedState,
    composeEnhancer(
      applyMiddleware(routerMiddleware(history)),
      applyMiddleware(thunk),
      applyMiddleware(reduxOfflineThunkMiddleware()),
    ),
  )

  return store
}
