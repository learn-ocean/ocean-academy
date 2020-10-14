import * as PropTypes from 'prop-types'
import * as React from 'react'
import { PublicUser } from 'shared/user/PublicUser'

// prettier-ignore
import { CertificateItself, CertificateNone, CertificateStyled } from './Certificate.style'

type CertificateViewProps = {
  loading: boolean
  user: PublicUser
}

export const CertificateView = ({ loading, user }: CertificateViewProps) => {
  let badgeUnlocked = false
  let counter = 0
  user.progress?.forEach(() => {
    counter++
  })
  if (counter >= 20) badgeUnlocked = true

  return (
    <CertificateStyled>
      {badgeUnlocked ? (
        <CertificateItself>
          <img alt="certificate" src="/certificate.jpg" />
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
}

CertificateView.defaultProps = {
  loading: false,
  user: {
    name: 'Not found',
    username: 'Not found',
    karmaTotal: 0,
  },
}
