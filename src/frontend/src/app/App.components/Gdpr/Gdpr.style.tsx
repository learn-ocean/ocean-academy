import styled from 'styled-components/macro'
import { backgroundColorLight } from 'styles'

export const GdprStyled = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 60px;

  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  grid-gap: 10px;

  background-color: ${backgroundColorLight};
  padding: 10px 20px 0 20px;

  font-size: 14px;
`
