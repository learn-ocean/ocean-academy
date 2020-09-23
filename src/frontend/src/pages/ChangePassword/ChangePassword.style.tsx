import styled from 'styled-components/macro'

import { Card, CardPage, FadeInFromTop, primaryColor } from '../../styles'

export const ChangePasswordStyled = styled(CardPage)``

export const ChangePasswordCard = styled(Card)`
  padding: 20px;
`
export const ChangePasswordSeparator = styled.div`
  height: 10px;
`

export const ChangePasswordTitle = styled(FadeInFromTop)``

export const ChangePasswordSignUp = styled.div`
  margin-top: 10px;
  text-align: center;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;

  > a {
    color: ${primaryColor} !important;
  }
`
