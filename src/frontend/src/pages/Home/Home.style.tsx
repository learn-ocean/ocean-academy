import styled from 'styled-components/macro'
import { FullPage } from 'styles'

export const HomeStyled = styled.div`
  position: relative;

  > img {
    position: absolute;
    top: calc(30vh - 130px);
    left: 0;
    width: 100%;
    z-index: -1;
  }
`

export const HomePage = styled(FullPage)``

export const HomeContainer = styled.div`
  width: 590px;
  margin-top: calc(40vh - 130px);

  > h1 {
    margin-bottom: 10px;
  }

  > a > button {
    margin-top: 20px;
    width: 160px;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`
