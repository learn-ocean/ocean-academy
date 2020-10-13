import styled from 'styled-components/macro'
import { AnimatedCard, FadeInFromTop, primaryColor, textColor } from 'styles'

export const UserStyled = styled.div`
  margin: 100px auto 20px auto;
  width: 800px;
  max-width: 90vw;
`

export const UserCard = styled(AnimatedCard)`
  padding: 20px;
`

export const UserTitle = styled(FadeInFromTop)``

export const UserProgress = styled.div``

export const UserChapter = styled.div<{ done?: boolean }>`
  color: ${(props) => (props.done ? primaryColor : textColor)};
  margin-top: 5px;

  > img {
    height: 17px;
    vertical-align: sub;
    margin-left: 10px;
  }
`

export const UserBadge = styled.div<{ badgeUnlocked: boolean }>``

export const UserTitle2 = styled(FadeInFromTop)`
  margin-top: 30px;
`

export const UserBadgeInput = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 10px;

  > button {
    height: 40px;
  }
`

export const UserBadgeButtons = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
`
