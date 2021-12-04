import styled from 'styled-components/macro'

const secondary = "#e2e2e2"
const primary = "#f7f7f7"

export const FooterStyled = styled.footer`
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 200px;
  margin-top: 20px;

  @media only screen and (max-width: 1000px) {
    height: 100%;
  }
`

export const FooterIconSection = styled.div`
  
  display: flex;
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
  width: 150px;

  
`

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 70px 35px 35px 80px;
  background-color: #303030;


  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    height: 100%;
    align-items: center;
    padding: 15px 15px 15px 15px;

  }
`

export const FooterSection = styled.div`
  dispaly: flex;
  flex-direction: column;
  @media only screen and (max-width: 1000px) {
    margin-top: 25px;
    text-align: center;
  }

`

export const FooterIcon = styled.div`
  width: 35px;

  .discord{
    width: 45px;
  }
`

export const FooterTitle = styled.div`
  font-size: 16;
  text-align: center;
  font-weight: 700;
  color: ${secondary}
`

export const FooterLink = styled.div`
  margin-top: 10px;
  font-size: 12;
  color: ${primary};
  font-weight: 500;
`

export const FooterSeaCreature = styled.div`
  margin-right: 20px;
  width: 150px;

  @media only screen and (max-width: 1000px) {
    margin-top: 35px;
    margin-right: 0px;

  }

`

export const FooterLogo = styled.div`

  width: 300px;

  @media only screen and (max-width: 1000px) {
    margin-bottom: 25px;
  }

`
