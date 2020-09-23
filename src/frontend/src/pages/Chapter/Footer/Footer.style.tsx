import styled from 'styled-components/macro'

export const FooterStyled = styled.div`
  height: 50px;

  > a:nth-child(1) {
    position: absolute;
    bottom: 0;
    left: 20px;
    width: 200px;
  }

  > a:nth-child(2) {
    position: absolute;
    bottom: 0;
    right: 20px;
    width: 200px;
  }

  @media (max-width: 900px) {
    > a:nth-child(1) {
      display: none;
    }
  }
`
