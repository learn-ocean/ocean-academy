import { keyframes, css } from 'styled-components/macro'

// Formula: https://www.wolframalpha.com/input/?i=%60f%27%27%28t%29+%3D+-180%28f%28t%29+-+1%29+-+12%28f%27%28t%29%29%3B+f%27%280%29+%3D+0%3B+f%280%29+%3D+0%60
export const springWobbly = (t: number) =>
  -1 * Math.pow(2.71828, -6 * t) * Math.sin(12 * t) - 1 * Math.pow(2.71828, -6 * t) * Math.cos(12 * t) + 1

// Formula: https://www.wolframalpha.com/input/?i=%60f%27%27%28t%29+%3D+-174%28f%28t%29+-+1%29+-+19%28f%27%28t%29%29%3B+f%27%280%29+%3D+0%3B+f%280%29+%3D+0%60
export const springStiff = (t: number) =>
  -1 * Math.pow(2.71828, -9.5 * t) * Math.sin(9.1515 * t) - 1 * Math.pow(2.71828, -9.5 * t) * Math.cos(9.1515 * t) + 1


function hamburgerBottomForward() {
  let styles = ''
  for (let i = 0; i <= 100; i += 1) {
    styles += `
          ${i}% {
            transform: translate3d(${springWobbly(i / 50) * -8}px, ${springWobbly(i / 50) * -2}px, 0) rotate(${springWobbly(i / 50) * 45}deg) scaleX(${1 - springWobbly(i / 50) * 0.5});
          }
          `
  }
  return css`
      ${styles}
    `
}
export const HamburgerBottomForward = keyframes`
    ${hamburgerBottomForward()};
  `

function hamburgerTopForward() {
  let styles = ''
  for (let i = 0; i <= 100; i += 1) {
    styles += `
        ${i}% {
          transform: translate3d(${springWobbly(i / 50) * -8}px, ${springWobbly(i / 50) * 2}px, 0) rotate(${springWobbly(i / 50) * -45}deg) scaleX(${1 - springWobbly(i / 50) * 0.5});
        }
        `
  }
  return css`
    ${styles}
  `
}
export const HamburgerTopForward = keyframes`
  ${hamburgerTopForward()};
`

function hamburgerBottomBackward() {
  let styles = ''
  for (let i = 0; i <= 100; i += 1) {
    styles += `
          ${i}% {
            transform: translate3d(${-8 - springWobbly(i / 50) * -8}px, ${-2 - springWobbly(i / 50) * -2}px, 0) rotate(${45 - springWobbly(i / 50) * 45}deg) scaleX(${0.5 + springWobbly(i / 50) * 0.5});
          }
          `
  }
  return css`
      ${styles}
    `
}
export const HamburgerBottomBackward = keyframes`
    ${hamburgerBottomBackward()};
  `

function hamburgerTopBackward() {
  let styles = ''
  for (let i = 0; i <= 100; i += 1) {
    styles += `
        ${i}% {
          transform: translate3d(${-8 - springWobbly(i / 50) * -8}px, ${2 - springWobbly(i / 50) * 2}px, 0) rotate(${-45 - springWobbly(i / 50) * -45}deg) scaleX(${0.5 + springWobbly(i / 50) * 0.5});
        }
        `
  }
  return css`
    ${styles}
  `
}
export const HamburgerTopBackward = keyframes`
  ${hamburgerTopBackward()};
`

// function slideRightEnterKeyframes() {
//   let styles = ''
//   for (let i = 0; i <= 100; i += 1) {
//     styles += `
//         ${i}% {
//           transform: translate3d(${-200 + springStiff(i / 100) * 200}px, 0, 0);
//           opacity: ${springStiff(i / 100)};
//         }
//        `
//   }
//   return css`
//     ${styles}
//   `
// }
// export const slideRightEnter = keyframes`
//   ${slideRightEnterKeyframes()};
// `
export const slideRightEnter = keyframes`
from {
  transform: translate3d(-200px, 0, 0);
  opacity: 0;
}
to {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}
`

// function slideRightExitKeyframes() {
//   let styles = ''
//   for (let i = 0; i <= 100; i += 1) {
//     styles += `
//         ${i}% {
//           transform: translate3d(${springStiff(i / 100) * 100}px, 0, 0);
//           opacity: ${1 - springStiff(i / 100)};
//         }
//        `
//   }
//   return css`
//     ${styles}
//   `
// }
// export const slideRightExit = keyframes`
//   ${slideRightExitKeyframes()};
// `
export const slideRightExit = keyframes`
from {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}
to {
  transform: translate3d(100px, 0, 0);
  opacity: 0;
}
`

// function slideLeftEnterKeyframes() {
//   let styles = ''
//   for (let i = 0; i <= 100; i += 1) {
//     styles += `
//         ${i}% {
//           transform: translate3d(${200 - springStiff(i / 100) * 200}px, 0, 0);
//           opacity: ${springStiff(i / 100)};
//         }
//        `
//   }
//   return css`
//     ${styles}
//   `
// }
// export const slideLeftEnter = keyframes`
//   ${slideLeftEnterKeyframes()};
// `
export const slideLeftEnter = keyframes`
from {
  transform: translate3d(200px, 0, 0);
  opacity: 0;
}
to {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}
`

// function slideLeftExitKeyframes() {
//   let styles = ''
//   for (let i = 0; i <= 100; i += 1) {
//     styles += `
//         ${i}% {
//           transform: translate3d(${springStiff(i / 100) * -100}px, 0, 0);
//           opacity: ${1 - springStiff(i / 100)};
//         }
//        `
//   }
//   return css`
//     ${styles}
//   `
// }
// export const slideLeftExit = keyframes`
//   ${slideLeftExitKeyframes()};
// `
export const slideLeftExit = keyframes`
from {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}
to {
  transform: translate3d(-100px, 0, 0);
  opacity: 0;
}
`

export const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`

export const fadeInFromLeft = keyframes`
from {
  opacity: 0;
  transform: translate3d(-50px, 0, 0);
}
to {
  opacity: 1;
  transform: translate3d(0px, 0, 0);
}
`

export const fadeInFromRight = keyframes`
from {
  opacity: 0;
  transform: translate3d(50px, 0, 0);
}
to {
  opacity: 1;
  transform: translate3d(0px, 0, 0);
}`

export const fadeInFromTop = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -50px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0px, 0);
  }
`

export const fadeInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0px, 0);
  }
`
