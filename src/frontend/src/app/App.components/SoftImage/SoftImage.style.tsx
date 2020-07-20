import styled from 'styled-components/macro'

export const SoftImageStyled = styled.img`
  opacity: 0;
  transition: opacity 1s;

  &.true {
    opacity: 1;
  }
`
