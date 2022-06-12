// import { Console } from 'console'
import { jsPDF } from 'jspdf'
import * as React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { State } from 'reducers'
import { PrivateUser } from 'shared/user/PrivateUser'
import { getUser, sendName } from './User.actions'
import { UserView } from './User.view'

export const User = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state: State) => state.loading)
  let { username } = useParams<{ username: string }>()
  const user = useSelector((state: State) => (state.users as Record<string, PrivateUser | undefined>)[username])
  const authUser = useSelector((state: State) => state.auth.user)

  const [name, setName] = useState<string>('')

  const downloadCallback = (courseTitle: string) => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [1100, 800],
    })
    doc.addImage(`/certificates/cert-${courseTitle}.jpg`, 'JPEG', 0, 0, 1100, 800)
    doc.setFontSize(35)
    doc.text(authUser?.name || '', 550, 405, { align: 'center' })
    doc.save('a4.pdf')
  }

  const getCertificateCallback = () => {
    dispatch(sendName({ name }))
  }

  useEffect(() => {
    dispatch(getUser({ username }))
  }, [dispatch, username, authUser?.email, authUser?.name])

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
