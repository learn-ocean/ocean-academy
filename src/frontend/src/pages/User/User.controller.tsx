import { Console } from 'console'
import { jsPDF } from 'jspdf'
import * as React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { State } from 'reducers'
import { PublicUser } from 'shared/user/PublicUser'

import { getUser, sendName } from './User.actions'
import { UserView } from './User.view'

export const User = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state: State) => state.loading)
  let { username } = useParams<{ username: string }>()
  const user = useSelector((state: State) => (state.users as Record<string, PublicUser | undefined>)[username])
  const authUser = useSelector((state: State) => state.auth.user)
  const [name, setName] = useState<string>('')

  const downloadCallback = () => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [1100, 800],
    })
    doc.addImage('/certificate.jpg', 'JPEG', 0, 0, 1100, 800)
    doc.setFontSize(50)
    doc.text(authUser?.name || '', 550, 400, { align: 'center' })
    doc.save('a4.pdf')
  }

  const getCertificateCallback = () => {
    dispatch(sendName({ name }))
  }

  useEffect(() => {
    dispatch(getUser({ username }))
  }, [dispatch, username])

  return (
    <UserView
      loading={loading}
      user={user}
      authUser={authUser}
      downloadCallback={downloadCallback}
      name={name}
      setName={setName}
      getCertificateCallback={getCertificateCallback}
    />
  )
}
