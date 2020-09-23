import styled from 'styled-components/macro'
import { primaryColor, backgroundTextColor } from 'styles'

export const VerifyEmailResendStyled = styled.div`
  margin-top: 10px;
  text-align: center;
  color: ${primaryColor};
`

export const VerifyEmailResendActive = styled.div`
  color: ${primaryColor};
  cursor: pointer;
`

export const VerifyEmailResendInactive = styled.div`
  color: ${backgroundTextColor};
`
