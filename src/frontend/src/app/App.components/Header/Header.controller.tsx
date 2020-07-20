import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { HeaderView } from './Header.view'
import { State } from 'reducers'
import { logout } from 'pages/Login/Login.actions'

export const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: State) => state.auth.user)

  function removeAuthUserCallback() {
    dispatch(logout())
  }

  return <HeaderView user={user} removeAuthUserCallback={removeAuthUserCallback} />
}
