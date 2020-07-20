import styled from 'styled-components/macro'

import { Card, CardPage, FadeInFromTop, primaryColor } from '../../styles'

export const ResetPasswordStyled = styled(CardPage)``

export const ResetPasswordCard = styled(Card)`
  padding: 20px;
`
export const ResetPasswordSeparator = styled.div`
  height: 10px;
`

export const ResetPasswordTitle = styled(FadeInFromTop)``

export const ResetPasswordSignUp = styled.div`
  margin-top: 10px;
  text-align: center;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;

  > a {
    color: ${primaryColor} !important;
  }
`
