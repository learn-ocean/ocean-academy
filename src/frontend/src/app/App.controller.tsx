import { ConnectedRouter } from 'connected-react-router'
import * as React from 'react'

import { ChapterDrawer, LoginDrawer } from './App.components/Drawer/Drawer.controller'
import { Gdpr } from './App.components/Gdpr/Gdpr.controller'
import { HamburgerLeft, HamburgerRight } from './App.components/Hamburger/Hamburger.controller'
import { Header } from './App.components/Header/Header.controller'
import { ProgressBar } from './App.components/ProgressBar/ProgressBar.controller'
import { Toaster } from './App.components/Toaster/Toaster.controller'
import { history } from './App.store'
import { AppBg } from './App.style'
import { AppView } from './App.view'

export const App = () => (
  <ConnectedRouter history={history}>
    <AppBg>
      <Header />
      <ChapterDrawer />
      <HamburgerLeft />
      <LoginDrawer />
      <HamburgerRight />
      <AppView />
      <Toaster />
      <ProgressBar />
      <Gdpr />
    </AppBg>
  </ConnectedRouter>
)
