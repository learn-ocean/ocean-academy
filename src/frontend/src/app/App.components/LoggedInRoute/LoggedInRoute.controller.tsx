import * as PropTypes from 'prop-types'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, useLocation } from 'react-router-dom'
import { State } from 'reducers'
import { Jwt } from 'shared/user/Jwt'

type LoggedInRouteProps = {
  children: any
  path: string
  exact: boolean
}

export const LoggedInRoute = ({ children, path, exact }: LoggedInRouteProps) => {
  const jwt: Jwt | undefined = useSelector((state: State) => state.auth.jwt)
  const location = useLocation()

  return (
    <Route path={path} exact={exact}>
      {jwt ? <>{children}</> : <Redirect to={{ pathname: '/login', state: { from: location } }} />}
    </Route>
  )
}

LoggedInRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.object.isRequired]),
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
}

LoggedInRoute.defaultProps = {
  exact: false,
}
