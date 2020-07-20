import { reset } from 'app/App.actions'
import * as React from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { SW_INIT, SW_UPDATE } from 'reducers/serviceWorker'

import { App } from './app/App.controller'
import { configureStore } from './app/App.store'
import { register } from './serviceWorker'
import { GlobalStyle } from './styles'

import './styles/fonts.css'

export const store = configureStore({})

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

// const rootElement = document.getElementById('root')
// ReactDOM.render(<Root />, rootElement)

register({
  onSuccess: () => {
    console.info(SW_INIT)
    store.dispatch({ type: SW_INIT })
  },
  onUpdate: (reg) => {
    console.info(SW_UPDATE)
    store.dispatch({ type: SW_UPDATE, payload: reg })
    store.dispatch<any>(reset())
    setTimeout(function () {
      window.location.reload()
    }, 100)
  },
})
