import styled from 'styled-components/macro'

import { FullPage } from 'styles'

export const AboutStyled = styled.div`
  position: relative;

  > img {
    position: absolute;
    top: calc(33vh);
    left: 0;
    width: 100%;
    z-index: -1;
    opacity: 0.5;
  }
`

export const AboutPage = styled(FullPage)``

export const AboutContainer = styled.div`
  width: 590px;
  margin-top: calc(30vh - 130px);

  > h1 {
    margin-bottom: 10px;
  }

  span {
    font-size: 16px;
    display: block;
  }

  @media (max-width: 700px) {
    width: 100%;
  }

  ul {
    list-style-type:none;
    padding: 0;
  }

  ul > li > a {
    color: #ff4092;
    text-decoration: underline !important;
  }
`

export const ButtonContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 12px;
`
