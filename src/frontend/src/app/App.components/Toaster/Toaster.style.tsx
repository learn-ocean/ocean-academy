import styled, { keyframes } from 'styled-components/macro'

import { subTextColor, textColor, backgroundColorDark } from '../../../styles'

export const ToasterStyled = styled.div`
  position: fixed;
  top: 0;
  right: -470px;
  z-index: 13;
  width: 400px;
  max-width: calc(100vw - 20px);
  margin: 10px;
  padding: 21px 20px;
  border-radius: 4px;
  background-color: ${backgroundColorDark};
  box-shadow: 1px 7px 14px -5px rgba(0, 0, 0, 0.2);
  transform: translate3d(0px, 0, 0);
  transition: transform 1s ease-in-out;
  will-change: transform;
  overflow: hidden;

  &.showing {
    transform: translate3d(-470px, 0, 0);
  }
`

export const decreaseBar = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(470px, 0, 0);
  }
`

export const ToasterCountdown = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 4px;
  width: 400px;
  max-width: calc(100vw - 20px);
  border-radius: 0 0 4px 0;
  will-change: transform;
  transform: translate3d(470px, 0, 0);

  &.showing {
    animation: ${decreaseBar} ease-in-out 1;
    animation-fill-mode: forwards;
    animation-duration: 5s;
  }
`

export const ToasterGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 30px calc(100% - 100px) 30px;
`

export const ToasterIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-top: 13px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  > img {
    height: 14px;
    width: 14px;
  }
`

export const ToasterContent = styled.div`
  padding: 8px;
`

export const ToasterTitle = styled.div`
  color: ${textColor};
  font-weight: 700;
  margin-bottom: 8px;
`

export const ToasterMessage = styled.div`
  color: ${subTextColor};
`

export const ToasterClose = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  margin-top: 13px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  > img {
    height: 14px;
    width: 14px;
  }
`
