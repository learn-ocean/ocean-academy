import styled from 'styled-components/macro'

import { backgroundColorDark, Card, CardPage, FadeInFromTop, primaryColor, borderColor } from '../../styles'

export const VerifyEmailStyled = styled(CardPage)``

export const VerifyEmailCard = styled(Card)`
  padding: 20px;
`

export const VerifyEmailSeparator = styled.div`
  height: 15px;
`

export const VerifyEmailTitle = styled(FadeInFromTop)``

export const VerifyEmailFieldsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const VerifyEmailInput = styled.input`
  width: 80px;
  display: inline-block;
  position: relative;
  height: 50px;
  font-size: 28px;
  line-height: 28px;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-color: ${borderColor};
  border-radius: 4px;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  will-change: border-color, box-shadow;
  background-color: ${backgroundColorDark};

  ::placeholder {
    font-size: 28px;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    margin: 0;
  }

  &:hover {
    border-color: ${primaryColor}7F;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${primaryColor}19;
    border-color: ${primaryColor}7F;
  }
`
