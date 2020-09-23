import styled from 'styled-components/macro'

import { fadeIn, fadeInFromBottom, fadeInFromLeft, fadeInFromRight, fadeInFromTop } from './animations'
import { backgroundColorLight, primaryColor, upColor } from './colors'

export const Ellipsis = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const CardPage = styled.div`
  margin: 100px auto 20px auto;
  width: 400px;
  max-width: 90vw;
`

export const FullPage = styled.div`
  width: 90vw;
  max-width: 1280px;
  margin: 100px auto 20px auto;
`

export const BannerPage = styled.div`
  width: 100vw;
  margin: 100px auto 20px auto;
`

export const GridTitle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`

export const GreenDot = styled.div`
  display: inline-block;
  margin-bottom: 1px;
  margin-right: 8px;
  border-radius: 12px;
  width: 6px;
  height: 6px;
  background-color: ${upColor};
  animation: flickerAnimation 3s infinite;

  @keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
`

export const PrimaryText = styled.div`
  color: ${primaryColor};
  display: inline-block;
`

export const Card = styled.div`
  background: ${backgroundColorLight};
  border-radius: 10px;
  box-shadow: 0 1px 10px ${backgroundColorLight}19;
`

export const AnimatedCard = styled(Card)`
  will-change: opacity, transform;
  animation: ${fadeInFromLeft} 500ms;
`

export const FadeIn = styled.div`
  will-change: opacity;
  animation: ${fadeIn} 500ms;
`

export const FadeInFromTop = styled.div`
  will-change: opacity, transform;
  animation: ${fadeInFromTop} 500ms;
`

export const FadeInFromRight = styled.div`
  will-change: opacity, transform;
  animation: ${fadeInFromRight} 500ms;
`

export const FadeInFromBottom = styled.div`
  will-change: opacity, transform;
  animation: ${fadeInFromBottom} 500ms;
`

export const FadeInFromLeft = styled.div`
  will-change: opacity, transform;
  animation: ${fadeInFromLeft} 500ms;
`
