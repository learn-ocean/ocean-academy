import styled from 'styled-components/macro'
import { FadeInFromTop, primaryColor, textColor, AnimatedCard } from 'styles'

export const UserStyled = styled.div`
  margin: 100px auto 20px auto;
  width: 800px;
  max-width: 90vw;
`

export const UserCard = styled(AnimatedCard)`
  padding: 20px;
`

export const UserTitle = styled(FadeInFromTop)``

export const UserProgress = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(30, auto);
  grid-gap: 10px;
  grid-auto-flow: column;
`

export const UserChapter = styled.div<{ done?: boolean }>`
  color: ${(props) => (props.done ? primaryColor : textColor)};

  > img {
    height: 17px;
    vertical-align: sub;
    margin-left: 10px;
  }
`

export const UserBadge = styled.div<{ badgeUnlocked: boolean }>`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 30px;

  > p {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  > img {
    opacity: ${(props) => (props.badgeUnlocked ? 1 : 0.5)};
  }

  > h1 {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`

export const UserTitle2 = styled(FadeInFromTop)`
  margin-top: 30px;
`
