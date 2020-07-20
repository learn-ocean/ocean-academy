import styled from 'styled-components/macro'

import { primaryColor } from '../../../styles'

export const ProgressBarStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 20;
  height: 2px;
  background-color: ${primaryColor};
  will-change: transform;
  transform: translate3d(-100vw, 0, 0);
  opacity: 0;

  &.ready {
    transform: translate3d(-100vw, 0, 0);
    opacity: 0;
  }

  &.showing {
    transition: transform 10s cubic-bezier(0, 1, 0.75, 1), opacity 0.3s ease-in-out;
    transform: translate3d(-20vw, 0, 0);
    opacity: 1;
  }

  &.done {
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out 0.5s;
    transform: translate3d(0vw, 0, 0);
    opacity: 0;
  }
`
