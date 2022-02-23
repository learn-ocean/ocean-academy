import * as PropTypes from 'prop-types'
import * as React from 'react'
import { PublicUser } from 'shared/user/PublicUser'

// prettier-ignore
import { CertificateItself, CertificateNone, CertificateStyled } from './Certificate.style'

type CertificateViewProps = {
  loading: boolean
  user: PublicUser
  unlocked: boolean
  courseTitle: string
}

export const CertificateView = ({ loading, user, unlocked, courseTitle }: CertificateViewProps) => {

  return (
    <CertificateStyled>
      {unlocked ? (
        <CertificateItself>
          <img alt="certificate" src={`/certificates/cert-${courseTitle}.jpg`} />
          <div>{user.name}</div>
        </CertificateItself>
      ) : (
        <CertificateNone>No active certificate</CertificateNone>
      )}
    </CertificateStyled>
  )
}

CertificateView.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object,
  unlocked: PropTypes.bool,
  courseTitle: PropTypes.string
}

CertificateView.defaultProps = {
  loading: false,
  user: {
    name: 'Not found',
    username: 'Not found',
    karmaTotal: 0,
  },
  unlocked: false,
  courseTitle: ""

}
