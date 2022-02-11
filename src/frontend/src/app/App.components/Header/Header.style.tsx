import styled from 'styled-components/macro'
import { bgTextColor, primaryColor, backgroundColorLight, textColor } from 'styles'

export const HeaderStyled = styled.div`
  margin-bottom: 20px;
  position: relative;
  height: 58px;
  z-index: 1;
  @media (max-width: 1200px) {
    position: fixed; 
    height: 58px;
    width: 100%;
    background-color: ${backgroundColorLight};
  }
  background-color: ${backgroundColorLight};
`


export const HeaderContainer = styled.div`
background-color: ${backgroundColorLight};

`

export const HeaderLogo = styled.img`
  top: 5px;
  position: absolute;
  padding: 11px 45px;
  z-index: 1;
  text-align: left;
  align-self: left;
  @media (max-width: 1200px) {
    padding: 11px 20px;
  }
`

export const HeaderLoggedOut = styled.div`
  position: absolute;
  margin-top: 5px;
  top: 0;
  right: 10px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;

  @media (max-width: 1130px) {
    display: none;
  }
`

export const HeaderLoggedIn = styled.div`
  position: absolute;
  
  top: 5px;
  right: 0;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  text-transform: uppercase;

  @media (max-width: 1130px) {
    display: none;
  }
`

export const HeaderMenuItem = styled.div`
  position: relative;
  color: ${textColor};
  line-height: 50px;
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
  padding: 0 20px;

  &.login {
    background-color: ${primaryColor};
    color: ${bgTextColor};
    width: 128px;
    display: grid;
    grid-template-columns: auto 50px;
    text-align: right;

    > div {
      line-height: 50px;
    }

    > svg {
      height: 28px;
      width: 28px;
      margin: 11px;
      stroke: ${bgTextColor};
    }
  }

  @media (max-width: 1440px) {
    padding: 0 10px;
  }
`

export const HeaderSubMenuItem = styled.div `
position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  `

