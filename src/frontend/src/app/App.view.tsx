import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'

import { AppMeta } from './App.meta'
import { AppRoutes } from './App.routes'
import { AppStyled, AppWrapper } from './App.style'
import { AppTransitions } from './App.transitions'

export const AppView = () => {
  let previousLocation = window.location.pathname
  return (
    <AppStyled>
      <AppMeta />
      <Suspense fallback={<div>Loading...</div>}>
        <Route
          render={({ location }: any) => {
            const nextPage = parseInt(location.pathname.replace('/', ''))
            const previousPage = parseInt(previousLocation.replace('/', ''))
            previousLocation = location.pathname
            return (
              <AppWrapper>
                <AppTransitions pageKey={location.key} reverse={previousPage > nextPage}>
                  <AppRoutes location={location} />
                </AppTransitions>
              </AppWrapper>
            )
          }}
        />
      </Suspense>
    </AppStyled>
  )
}
