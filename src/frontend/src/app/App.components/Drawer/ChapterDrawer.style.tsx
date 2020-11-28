import styled from 'styled-components/macro'
import { textColor, backgroundColorLight } from 'styles'

export const ChaptersWrapper = styled.div`
  display: none;
  visibility: hidden;
  position: relative;
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
    visibility: visible;
    display: block;
  }

  &.false {
    transform: translate3d(-300px, 0, 0);
    visibility: hidden;
    display: none;
  }

  a {
    color: ${textColor};
  }
`