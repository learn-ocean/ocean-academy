import { Button } from 'app/App.components/Button/Button.controller'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { PublicUser } from 'shared/user/PublicUser'

// prettier-ignore
import { TokenButton, TokenNone, TokenStyled } from './Token.style'

type TokenViewProps = {
  loading: boolean
  user: PublicUser
  mintCallback: () => void
}

export const TokenView = ({ loading, user, mintCallback }: TokenViewProps) => {
  let badgeUnlocked = false
  let counter = 0
  user.progress?.forEach(() => {
    counter++
  })
  if (counter >= 20) badgeUnlocked = true

  return (
    <TokenStyled>
      {badgeUnlocked ? (
        <TokenButton>
          <Button type="button" text="Get token" icon="wallet" loading={loading} onClick={() => mintCallback()} />
        </TokenButton>
      ) : (
        <TokenNone>No active certificate</TokenNone>
      )}
    </TokenStyled>
  )
}

TokenView.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object,
}

TokenView.defaultProps = {
  loading: false,
  user: {
    name: 'Not found',
    username: 'Not found',
    karmaTotal: 0,
  },
}
