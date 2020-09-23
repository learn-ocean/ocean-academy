import offlineConfig from '@redux-offline/redux-offline/lib/defaults'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Root, store } from '../index'
import { restore } from './App.actions'
import { showToaster } from './App.components/Toaster/Toaster.actions'
import { ERROR } from './App.components/Toaster/Toaster.constants'

const discard = (error: any, _action: any, _retries: any) => {
  const { request, response } = error
  let message = 'Error, please contact support'
  if (response && response.error && typeof response.error === 'string') message = response.error
  else if (response && typeof response === 'string') message = response

  if (response) store.dispatch<any>(showToaster(ERROR, message, 'Contact support if needed'))
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
}

export const reduxOfflineThunkMiddleware = () => (storex: any) => (next: any) => (action: any) => {
  if (action && action.type === 'Offline/JS_ERROR') console.error(action.meta.error)
  const result = next(action)

  if (action.meta && action.meta.thunks && action.meta.thunks.length > 0) {
    action.meta.thunks.forEach((thunk: any) => {
      if (!!thunk) store.dispatch<any>(thunk)
    })
  }

  return result
}
