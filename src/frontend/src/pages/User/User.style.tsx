import styled from 'styled-components/macro'
import { AnimatedCard, FadeInFromTop, primaryColor, activePink, textColor, headerColor } from 'styles'

export const UserStyled = styled.div`
  margin: 100px auto 20px auto;
  width: 800px;
  max-width: 90vw;
`
export const UserCard = styled(AnimatedCard)`
  padding: 20px;
`
export const ProfileCard = styled(AnimatedCard)`
  padding: 15px;
  background-color: black;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`

export const Referral = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: space-around;

  > p {
    font-size: 18px;
  }
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

export const UserBadge = styled.div<{ badgeUnlocked: boolean }>`
  > p {
    font-size: 18px;
    padding-bottom: 12px;
  }
`

export const UserTitle2 = styled(FadeInFromTop)`
  margin-top: 30px;
  > h1 {
    font-size: 26px;
  }
`

export const Highlight = styled.span`
  color: ${activePink};
  font-weigth: bold;
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
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`

export const CertificateContainer = styled.div`
  margin-bottom: 15px;
`

export const ProfileTitle = styled(FadeInFromTop)`
    > h1 {
      font-size: 22px;
    }
`

export const ProgressStatsContainer = styled.div`
      display:flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;
`

export const StatPercentage = styled.div`
    color: ${activePink};
    font-size: 22px;
    font-weight: bold;
`

export const ProgressStat = styled.div`
      display:flex;
      flex-direction: column;
      align-items: center;
      width: 200px;
      height: 200px;

      > h1 {
        font-weight: bold;
        font-size: 18px;
      }

      > p{
        font-size: 20px;
      }
`