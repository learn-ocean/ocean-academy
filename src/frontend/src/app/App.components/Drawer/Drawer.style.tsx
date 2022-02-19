import styled from 'styled-components/macro'
import { primaryColor, textColor, backgroundColorLight } from 'styles'

export const DrawerMask = styled.div`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  opacity: 0;
  will-change: opacity;
  transition: opacity 0.2s ease-in-out;

  &.true {
    width: 100vw;
    height: 100vh;
    opacity: 0.5;
    background-color: black;
  }
`

export const DrawerStyled = styled.div`
  position: fixed;
  top: 0;
  left: -1px;
  height: 100vh;
  z-index: 10;
  width: 300px;
  max-width: calc(100vw - 20px);
  padding: 40px 20px 20px 30px;
  background-color: ${backgroundColorLight};
  box-shadow: 1px 7px 14px -5px rgba(0, 0, 0, 0.2);
  transform: translate3d(-300px, 0, 0);
  transition: 0.2s ease-in-out;
  will-change: transform;
  overflow: scroll;

  h1 {
    color: ${textColor};
  }

  &.true {
    transform: translate3d(0px, 0, 0);
  }

  &.false {
    transform: translate3d(-300px, 0, 0);
  }

  a {
    color: ${textColor};
  }
`

export const DrawerItem = styled.div`
  margin-top: 20px;

  > a {
    display: inline-block;
    font-weight: bold;
    line-height: 24px;
    display: flex;
  }

  &.current-path > a {
    color: ${primaryColor};
  }

  > a > svg {
    display: inline-block;
    width: 24px;
    height: 24px;
    stroke: ${textColor};
    fill: ${textColor};
    margin-right: 20px;
  }

  > a > img {
    width: 24px;
    height: 24px;
    margin-right: 20px;
    border-radius: 12px;
  }

  &.current-path > a > svg {
    stroke: ${primaryColor};
  }
`

export const DrawerStyledLogin = styled.div`
  position: fixed;
  top: 0;
  right: -1px;
  height: 100vh;
  z-index: 10;
  width: 300px;
  max-width: calc(100vw - 20px);
  padding: 40px 20px 20px 30px;
  background-color: ${backgroundColorLight};
  box-shadow: 1px 7px 14px -5px rgba(0, 0, 0, 0.2);
  transform: translate3d(300px, 0, 0);
  transition: 0.2s ease-in-out;
  will-change: transform;
  overflow: scroll;
  font-size: 22px;


  h1 {
    color: #41474e;
  }

  &.true {
    transform: translate3d(0px, 0, 0);
  }

  &.false {
    transform: translate3d(300px, 0, 0);
  }

  a {
    color: ${textColor};
  }

  .inactiveBelow{
    transition:all 0.2s ease-in;

    transform: translateY(-100px);

  }

  .activeBelow{
    transition:all 0.2s ease-in;

    transform: translateY(10px);
  }
`

export const DrawerSubMenuLabel = styled.div`

  width: 100%;

  .forwardIcon{
    width: 26px;
    color: ${textColor};
    position: relative;
    left: 95px;
    top: 4px;
  }
    
`

export const DrawerSubMenuItem = styled.div`
margin-top: 10px;
color: #7b1173 !important;


`

export const DrawerTitle = styled.div`
font-size: 42px;

.backIcon{
  width: 34px;
  color: ${textColor};
  position: relative;
  transform: rotate(180deg);
  cursor: pointer;
}

`

export const DrawerItens = styled.div`
margin-top: 25px;
`

export const DrawerSubMenu = styled.div`

  &:hover{
    cursor: pointer;
  }

  .activeSubMenu{
    margin-left: 30px;
    opacity:1;

  transition:all 0.2s ease-in;
  }

  .inactiveSubMenu{
    transition:all 0.2s ease-in;
    opacity:0;
  }


  font-weight: bold;

`

