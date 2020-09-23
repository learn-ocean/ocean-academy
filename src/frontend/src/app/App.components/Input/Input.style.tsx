import styled, { keyframes } from 'styled-components/macro'

import {
  backgroundColorDark,
  borderColor,
  downColor,
  primaryColor,
  upColor,
  backgroundTextColor,
} from '../../../styles'

export const InputStyled = styled.div`
  position: relative;
  margin-bottom: 5px;
`

export const InputComponent = styled.input`
  width: 100%;
  display: block;
  position: relative;
  height: 40px;
  padding: 12px 16px 12px 40px;
  border-width: 1px;
  border-style: solid;
  border-color: ${borderColor};
  border-radius: 4px;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  will-change: border-color, box-shadow;
  background-color: ${backgroundColorDark};

  &:hover {
    border-color: ${primaryColor}7F;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${primaryColor}19;
    border-color: ${primaryColor}7F;
  }

  &.error {
    border-color: ${downColor};

    &:focus {
      box-shadow: 0 0 0 2px ${downColor}7F;
    }
  }

  &.success {
    border-color: ${upColor};

    &:focus {
      box-shadow: 0 0 0 2px ${upColor}7F;
    }
  }
`
const zoomIn = keyframes`
  from {
    transform:scale(.2);
    opacity:0
  }
  to {
    transform:scale(1);
    opacity:1
  }
`

export const InputStatus = styled.div`
  display: block;
  position: absolute;
  top: 20px;
  right: 10px;
  z-index: 1;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  visibility: visible;
  pointer-events: none;
  will-change: transform, opacity;

  &.error {
    background-image: url('/icons/input-error.svg');
    animation: ${zoomIn} 0.3s cubic-bezier(0.12, 0.4, 0.29, 1.46);
  }

  &.success {
    background-image: url('/icons/input-success.svg');
    animation: ${zoomIn} 0.3s cubic-bezier(0.12, 0.4, 0.29, 1.46);
  }
`

export const InputIcon = styled.svg`
  display: block;
  position: absolute;
  top: 20px;
  left: 10px;
  z-index: 1;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  visibility: visible;
  pointer-events: none;
  stroke: ${backgroundTextColor};
`

const slideDown = keyframes`
  from {
    transform: translate3d(0, -10px, 0);
    opacity:0
  }
  to {
    transform: translate3d(0, 0px, 0);
    opacity:1
  }
`

export const InputErrorMessage = styled.div`
  color: ${downColor};
  line-height: 24px;
  will-change: transform, opacity;
  animation: ${slideDown} 0.3s cubic-bezier(0.12, 0.4, 0.29, 1.46);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:first-letter {
    text-transform: uppercase;
  }
`

export const InputSpacer = styled.div`
  height: 10px;
`
