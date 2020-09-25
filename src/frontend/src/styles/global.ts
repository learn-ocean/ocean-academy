import { createGlobalStyle } from 'styled-components/macro'

import { fadeInFromLeft, slideLeftEnter, slideLeftExit, slideRightEnter, slideRightExit } from './animations'
import { backgroundColorDark, placeholderColor, textColor } from './colors'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  font-family: 'Proxima Nova', Helvetica, Arial, sans-serif;
  font-display: optional;
  margin: 0;
  padding: 0;
  background-color: ${backgroundColorDark};
  color: ${textColor};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-size: 40px;
  font-weight: 700;
  display: inline-block;
  margin: 20px 0px;
}

h2 {
  font-size: 20px;
  font-weight: normal;
  display: block;
  margin: 0;
}

h3 {
  font-size: 30px;
  font-weight: normal;
  display: block;
  margin: 0;
}

input {
  color: ${textColor};
  font-size: 14px;
}

::placeholder {
  color: ${placeholderColor};
  font-size: 14px;
}

*:focus {
  outline: none;
}

a {
  color: #42edf8;
  text-decoration: none !important;
  opacity: 1;
  transition: opacity 0.15s ease-in-out-out;
  will-change: opacity;
}

a:visited {
  color: inherit;
}

a:hover {
  opacity: 0.9;
}

p {
    font-family: "Proxima Nova", sans-serif;
    display: block;
    margin-block-start: 10px;
    margin-block-end: 10px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 22px;
}


code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

@keyframes autofill {
    0%,100% {
        color: ${textColor};
        background: ${backgroundColorDark};
    }
}

/* Change Autocomplete styles in Chrome*/
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
    animation-delay: 300ms;
    animation-name: autofill;
    animation-fill-mode: both;
}

.appear {
  opacity: 0;
  will-change: transform, opacity;
  animation: ${fadeInFromLeft} ease-in-out 1;
  animation-fill-mode: forwards;
  animation-duration: 0.3s;
}

.slide-right-enter {
  opacity: 0;
}
.slide-right-enter-active {
  opacity: 1;
  transition: opacity 200ms;
}
.slide-right-exit {
  opacity: 1;
}
.slide-right-exit-active {
  opacity: 0;
  transition: opacity 200ms;
}

.slide-left-enter {
  opacity: 0;
}
.slide-left-enter-active {
  opacity: 1;
  transition: opacity 200ms;
}
.slide-left-exit {
  opacity: 1;
}
.slide-left-exit-active {
  opacity: 0;
  transition: opacity 200ms;
}

/* .slide-right-enter-active {
  animation-name: ${slideRightEnter};
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

.slide-right-exit-active {
  animation-name: ${slideRightExit};
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

.slide-left-enter-active {
  animation-name: ${slideLeftEnter};
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

.slide-left-exit-active {
  animation-name: ${slideLeftExit};
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
} */

.grecaptcha-badge {
  visibility: hidden;
}


*::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
  background: transparent;
}

*::-webkit-scrollbar-track, ::-webkit-scrollbar-corner, ::-webkit-scrollbar-track-piece {
  background: #00000000;
}

*::-webkit-scrollbar-thumb {
  background: #08658b;
}

*::-webkit-scrollbar-thumb:hover {
  background: #08658b;
}

.rc-slider {
  margin: 10px 0 23px 5px;
}

.rc-slider-handle {
  background-color: #0a456d !important;
}

.rc-slider-rail {
  background-color: #0a456d !important;
}

.rc-slider-track {
  background-color: #42edf8 !important;
  box-shadow: 0px 0px 25px rgba(11, 183, 226, 0.65), 0px 0px 15px rgba(0, 112, 202, 0.6);
}

.rc-slider-dot {
  background-color: #0a456d !important;
  border: 2px solid #0a456d !important;
}

.rc-slider-dot-active {
  background-color: #42edf8 !important;
  border-color: #42edf8 !important;
  drop-shadow: 0px 0px 25px rgba(11, 183, 226, 0.65), 0px 0px 15px rgba(0, 112, 202, 0.6);
}

.rc-slider-mark-text {
  display: none !important;
}

`
