import * as React from 'react'

import { Error404H1, Error404Message, Error404Styled, Error404Card } from './Error404.style'
import { Button } from 'app/App.components/Button/Button.controller'
import { Link } from 'react-router-dom'

export const Error404View = () => {
  return (
    <Error404Styled>
      <Error404Card>
        <Error404H1>Error 404</Error404H1>
        <Error404Message>Page not found...</Error404Message>
        <Link to="/">
          <Button text="Go back home" icon="home" />
        </Link>
      </Error404Card>
    </Error404Styled>
  )
}
