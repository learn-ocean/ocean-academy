import styled from 'styled-components/macro'
import { activePink } from '../../styles'
import { Card, AnimatedCard, FadeInFromTop, FullPage } from '../../styles'

export const ReferralPage = styled(FullPage)`
height: 90vh;
`

export const ReferralContainer = styled(FadeInFromTop)`
width: 44vw;
/* margin-top: calc(30vh - 130px);
margin-bottom: calc(30vh - 200px); */
margin: 8vw 10vw;
padding: 20px 0 20px 0;

> h1 {
  margin-bottom: 10px;
}

> div > a > button {
  width: 166px;
}

.communityButton {
  display: inline-flex;
  flex-direction: row;
  margin-top: 20px;
  gap: 20px;

}

@media (max-width: 375px) {
  margin: 20vw 10vw 20vw;
  .communityButton {
    flex-direction: column;
  }
}



span {
  font-size: 16px;
  display: block;
}

@media (max-width: 700px) {
  width: 82vw;
}
`

export const ReferralRow = styled.div`
display: flex;
flex-direction: row;
margin: auto;
justify-content: space-between;
width: 1350px;
`

export const ReferralCardsRow = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
margin-top: 75px;
margin-bottom: 75px;
`

export const ReferralCard  = styled(AnimatedCard)`
padding: 25px;
width: 200px;
background-color: black;
border-radius: 15px;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
display: flex;
align-items: center;
> p {
  color: ${activePink};
  font-size: 16px;
  font-weight: bold;
}
`

export const ReferralLeftContent = styled.div`
display: flex;
flex-direction: column;
width: 700px;
`

export const ReferralRightContent = styled.div`
display: flex;
flex-direction: column;
`

export const ButtonsRow = styled.div`
    margin-top: 50px;
    width: 450px;
    display:flex;
    justify-content: space-between;
    flex-direction: row;


  @media (max-width: 900px) {
    height: 125px;
    align-self: center;
    flex-direction: column;
    margin-top: 50px;
  }
`

export const CreatureWrapper = styled(FadeInFromTop)`
left: 115px;

`

export const Creature = styled.img`
width: 500px;
animation: float 10s linear infinite;


@keyframes float {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(10px, -10px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}


@media (max-width: 900px) {
  display: none;
}

`
export const BrightIdVerifTitle = styled(FadeInFromTop)``