import styled from 'styled-components/macro'

import { Card, CardPage, FadeInFromTop, primaryColor } from '../../styles'

export const SignUpStyled = styled(CardPage)``

export const SignUpCard = styled(Card)`
  padding: 20px;
`
export const SignUpSeparator = styled.div`
  height: 10px;
`

export const SignUpTitle = styled(FadeInFromTop)``

export const SignUpLogin = styled.div`
  margin-top: 10px;
  text-align: center;
  > a {
    color: ${primaryColor} !important;
  }
`
