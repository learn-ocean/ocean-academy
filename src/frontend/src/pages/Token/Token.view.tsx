import { Button } from 'app/App.components/Button/Button.controller'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { PublicUser } from 'shared/user/PublicUser'

// prettier-ignore
import { TokenButton, TokenNone, TokenStyled, CertificateLink } from './Token.style'

type TokenViewProps = {
  loading: boolean
  user: PublicUser
  certificate: string
  mintCallback: () => void
}

export const TokenView = ({ loading, user, certificate, mintCallback }: TokenViewProps) => {
  let badgeUnlocked = false
  let counter = 0
  user.progress?.forEach(() => {
    counter++
  })
  if (counter >= 23) badgeUnlocked = true

  return (
    <TokenStyled>
      {certificate ? 
      <TokenNone>Congratulations, you already have a certificate! Your completion certificate token id is {user.tokenId} and its metadata is available <CertificateLink href={`${certificate}`}>here</CertificateLink>. </TokenNone>
      :
      (badgeUnlocked ? (
        <TokenButton>
          <Button type="button" text="Get token" icon="wallet" loading={loading} onClick={() => mintCallback()} />
        </TokenButton>
      ) : (
        <TokenNone>No active certificate</TokenNone>
      ))}
    </TokenStyled>
  )
}

TokenView.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object,
  certificate: PropTypes.string
}

TokenView.defaultProps = {
  loading: false,
  user: {
    name: 'Not found',
    username: 'Not found',
    karmaTotal: 0,
  },
  certificate: ""
}
