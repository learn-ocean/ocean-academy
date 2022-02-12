import { getUser } from 'pages/User/User.actions'
import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Redirect } from 'react-router-dom'
import { State } from 'reducers'
import { PublicUser } from 'shared/user/PublicUser'
import { courseTitleExists, isCourseCompletedFromTitle } from 'helpers/courses'

import { CertificateView } from './Certificate.view'

export const Certificate = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state: State) => state.loading)
  let { course, username } = useParams<{ course: string, username: string }>()
  const user = useSelector((state: State) => (state.users as Record<string, PublicUser | undefined>)[username])

  useEffect(() => {
    dispatch(getUser({ username }))
  }, [dispatch, username])
  
  if(!courseTitleExists(course))
    return <Redirect to='/page-not-found'/>

  const unlocked = (user && user.progress) ? isCourseCompletedFromTitle(course, user.progress) : false
  

  return <CertificateView loading={loading} user={user} unlocked={unlocked} courseTitle={course} />
}
