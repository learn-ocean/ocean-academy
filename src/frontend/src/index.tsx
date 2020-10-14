import * as React from 'react'
import ReactGA from 'react-ga'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { App } from './app/App.controller'
import { configureStore } from './app/App.store'
import { unregister } from './serviceWorker'
import { GlobalStyle } from './styles'

import './styles/fonts.css'

export const store = configureStore({})

ReactGA.initialize('UA-180076760-1')

export const Root = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} language="en">
      <GlobalStyle />
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </GoogleReCaptchaProvider>
  )
}

unregister()
