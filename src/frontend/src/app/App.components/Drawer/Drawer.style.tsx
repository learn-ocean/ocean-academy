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
  margin-top: 10px;

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

  h1 {
    color: ${textColor};
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
`
