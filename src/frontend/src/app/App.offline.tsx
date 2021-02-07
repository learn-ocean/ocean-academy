import offlineConfig from '@redux-offline/redux-offline/lib/defaults'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Root, store } from '../index'
import { redirect, reset, restore } from './App.actions'
import { showToaster } from './App.components/Toaster/Toaster.actions'
import { ERROR } from './App.components/Toaster/Toaster.constants'

const discard = (error: any, _action: any, _retries: any) => {
  const { request, response } = error
  let message = 'Error, please contact support'
  if (response && response.error && typeof response.error === 'string') message = response.error
  else if (response && typeof response === 'string') message = response

  console.error('discard', response.status, response.error)

  // Rename error
  if (response.error === 'jwt expired' || response.error === 'jwt malformed') message = 'Session expired'

  // Actions on server errors
  if (response) store.dispatch<any>(showToaster(ERROR, message, 'Contact support if needed'))
  if (response.error === 'Password expired') store.dispatch<any>(redirect('/forgot-password'))
  if (response.error === 'jwt expired' || response.error === 'jwt malformed' || response.error === 'Not logged in') {
    store.dispatch<any>(reset())
    store.dispatch<any>(redirect('/login'))
  }

  if (!request) throw error
  if (!response) return false
  return 400 <= response.status && response.status < 500
}

const persistCallback = () => {
  store.dispatch<any>(restore())
  const rootElement = document.getElementById('root')
  ReactDOM.render(<Root />, rootElement)
}

export const storeOfflineConfig = {
  ...offlineConfig,
  discard,
  persistCallback,
  persistOptions: {
    blacklist: ['router'],
  },
  //returnPromises: true,
}

export const reduxOfflineThunkMiddleware = () => (_: any) => (next: any) => (action: any) => {
  if (action && action.type === 'Offline/JS_ERROR') console.error(action.meta.error)
  if (action) next(action)

  if (action && action.meta && action.meta.thunks && action.meta.thunks.length > 0) {
    action.meta.thunks.forEach((thunk: any) => {
      if (!!thunk) store.dispatch<any>(thunk)
    })
  }

  // return action ? next(action) : next()
}
