import styled from 'styled-components/macro'

import { FullPage } from 'styles'

export const AboutStyled = styled.div`
  position: relative;
  min-height: 60%;


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
  margin: calc(30vh - 90px);
  
  @media (max-width: 800px) {
    padding: 50px;
    margin: 0;
  }

  p{
    margin-top: 10px;
  }
  
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

export const TeamListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 50px;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }

`

export const TeamMemberContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  max-height: 500px;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1000px) {
      margin-top: 35px;
  }
`

export const TeamMemberPicture = styled.div`
  margin-bottom: 30px;
  img{
    border-radius: 80%;
    object-fit: cover;
    width:200px;
    height:200px;
  }
`

export const Section = styled.div`
  margin-top: 20px;
`

export const MemberName = styled.div`
  font-weight: 700;
  font-size: 32;
  color: #e000cf;

  a{
  font-weight: 700;
  font-size: 24px !important;
  color: #e000cf !important;
  }
`

export const MemberDescription = styled.div`
  margin-top: 15px;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 40px;
`
