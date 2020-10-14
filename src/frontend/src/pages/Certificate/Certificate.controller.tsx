import { getUser } from 'pages/User/User.actions'
import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { State } from 'reducers'
import { PublicUser } from 'shared/user/PublicUser'

import { CertificateView } from './Certificate.view'

export const Certificate = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state: State) => state.loading)
  let { username } = useParams<{ username: string }>()
  const user = useSelector((state: State) => (state.users as Record<string, PublicUser | undefined>)[username])

  useEffect(() => {
    dispatch(getUser({ username }))
  }, [dispatch, username])

  return <CertificateView loading={loading} user={user} />
}
