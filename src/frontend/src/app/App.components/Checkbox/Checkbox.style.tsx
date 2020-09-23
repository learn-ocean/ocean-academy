import styled from 'styled-components/macro'

export const CheckboxStyled = styled.div`
  > svg {
    cursor: pointer;
    height: 22px;
    width: 22px;
    display: block;
    margin-top: 6px;
  }

  > svg > g {
    fill: none;
    stroke: currentColor;
    stroke-width: 1.5px;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`
