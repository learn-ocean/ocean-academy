import { Button } from 'app/App.components/Button/Button.controller'
import { COURSE_TYPE, getCourseByTitle } from 'helpers/courses'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { PublicUser } from 'shared/user/PublicUser'
import { MintedToken } from 'shared/user/User'
import { Link } from 'react-router-dom'

// prettier-ignore
import { TokenButton, TokenNone, TokenStyled,TokenCardInfo, TokenContent, TokenCardSpan, TokenCardDate, TokenCardStyled, TokenCardTitle, TokenCardBottom } from './Token.style'
import { MAIN_CERTIF_ADDR } from './Token.constants'

type TokenViewProps = {
  loading: boolean
  user: PublicUser
  certificate: MintedToken
  mintCallback: () => void
}

type TokenCardProps = {
  course: COURSE_TYPE
  account: string
  tokenUri: string
  mintedAt: Date
  tokenId: number
  tx: string
}

const TokenCard = ({course, account, tokenUri, mintedAt, tokenId, tx}: TokenCardProps) =>
  (  
  <TokenCardStyled>
    <TokenContent>
      <TokenCardTitle>Your <Link to={`/${course.title}/chapter-1`}>{course.name}</Link>'s completion token.</TokenCardTitle>
        <TokenCardInfo>
        <TokenCardSpan>Token Id <br></br></TokenCardSpan>
        <a href={`https://etherscan.io/token/${MAIN_CERTIF_ADDR}?a=${tokenId}`}>{tokenId}</a>
        </TokenCardInfo>
        <TokenCardInfo>
        <TokenCardSpan>Account <br></br></TokenCardSpan>
        <a href={`https://etherscan.io/address/${account}`}>{account}</a>
        </TokenCardInfo>
        <TokenCardInfo>
        <TokenCardSpan>Token URI <br></br></TokenCardSpan>
        <a href={tokenUri}>{tokenUri}</a>
        </TokenCardInfo>
        <TokenCardInfo>
        <TokenCardSpan>Transaction hash <br></br></TokenCardSpan>
        <a href={`https://etherscan.io/tx/${tx}`}>{tx}</a>
        </TokenCardInfo>
      </TokenContent>
      <TokenCardBottom>
        <TokenCardDate>Minted at: {(new Date(mintedAt)).toDateString()}</TokenCardDate>

      </TokenCardBottom>
      
   </TokenCardStyled>
)

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
      <TokenCard 
      course={getCourseByTitle(certificate.course)!} 
      account={certificate.account}
      tx={certificate.tx}
      tokenUri={certificate.tokenUri}
      mintedAt={certificate.mintedAt}
      tokenId={certificate.tokenId}
      /> 
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
