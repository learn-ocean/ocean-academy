import styled from 'styled-components/macro'
import { backgroundColorDark } from 'styles'

export const DialogStyled = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 164px auto;
  grid-gap: 20px;
  background: ${backgroundColorDark};
  padding: 10px;
  font-style: italic;
  border-radius: 10px;

  @media (max-width: 900px) {
    grid-template-columns: auto;
  }
`

export const DialogCharacter = styled.img`
  position: relative;
  height: 164px;
  width: 164px;
  margin: auto;
`

export const DialogText = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  justify-content: space-around;
`
