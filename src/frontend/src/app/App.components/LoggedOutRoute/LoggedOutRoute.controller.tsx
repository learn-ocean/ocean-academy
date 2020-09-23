import * as PropTypes from 'prop-types'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, useLocation } from 'react-router-dom'
import { State } from 'reducers'

type LoggedOutRouteProps = {
  children: any
  path: string
  exact: boolean
}

export const LoggedOutRoute = ({ children, path, exact }: LoggedOutRouteProps) => {
  const jwt = useSelector((state: State) => state.auth.jwt)
  const location = useLocation()

  return (
    <Route path={path} exact={exact}>
      {jwt ? <Redirect to={{ pathname: '/', state: { from: location } }} /> : <>{children}</>}
    </Route>
  )
}

LoggedOutRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.object.isRequired]),
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
}

LoggedOutRoute.defaultProps = {
  exact: false,
}
