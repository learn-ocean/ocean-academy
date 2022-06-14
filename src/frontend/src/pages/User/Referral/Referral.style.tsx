import { AnimatedCard, backgroundColorDark } from "styles"
import styled from 'styled-components/macro'
import { textColor, activePink } from "styles"

export const ProfileCard = styled(AnimatedCard)`
  padding: 15px;
  background-color: black;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`

export const ReferralNotStarted = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: space-around;

  > p {
    font-size: 18px;
  }
`

export const ShareLink = styled.div`
  display:flex;
  flex-direction: coluj;
  align-items: center;
  > h1 {
    font-size: 18px;
    color: ${activePink}
  }

  > .copyLink:hover{
    opacity: 0.7;
    cursor: pointer;
  }
`

export const CopyLink = styled.div`
  background-color: ${backgroundColorDark};
  font-size: 16px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  width: 450px;
  align-itens: center;
  justify-content: space-around;
  padding: 15px;
  margin: auto;

  >p {
    font-size: 16px;
  }

`
export const CopyButton = styled.div`
  display: flex;
  flex-direction: row;
  borderLeft: 1px solid;
  color: ${activePink};
  marginLeft: 25px;

`

export const Referral = styled.div`
  display: flex; 
  flex-direction: column;
  padding: 0 25px 0 25px;

  > h1 {
    font-size: 24px;
  }

  > p {
    font-size: 16px;
    font-weight: normal;
  }

  > .status{
    margin-top: 5px;
    color: gray
  }

  > .copyLink{
    font-weight: heavy;
  }

  > .copyLink:hover{
    opacity: 0.7;
    cursor: pointer;
  }
`

// export const FriendStat = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 300px;
//   font-size: 16px;

//   > p {
//     font-size: 20px;
//   }
// `

// export const FriendStats = styled.div`
//   display: flex;
//   flex-direction: row;
//   padding: 50px;
//   justify-content: space-around;
// `

export const FriendStat = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 0 15px 0;
  font-size: 20px;
`

export const FriendStats = styled.div`
  display: flex;
  flex-direction: column;
  spacing: 5px;
  padding: 20px 0px 10px 0px;

  > p {
    font-size: 18px;
  }
`

export const CopyIcon = styled.svg`
  width: 22px;
  height: 22px;
  display: inline-block;
  vertical-align: sub;
  margin: 0 0 0 8px;
  stroke: ${textColor};
`
export const PeopleIcon = styled.svg`
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: sub;
  margin: 0 25px 0 8px;
  stroke: ${textColor};
`

export const RewardAvailableTitle = styled.h1`
font-size: 26px;
margin-bottom: 3px;
`

export const RewardAvailableSubtitle = styled.p`
font-size: 14px;
margin-bottom: 40px;
color: grey;
`

export const ClaimStep = styled.div`
display: flex;
flex-direction: row;
width: 550px;
align-items: baseline;
margin-top: 20px;
`
export const ClaimMessage = styled.div`
color: grey;
font-size: 14px;
`

export const SuccessClaimed = styled.div`
color: grey;
font-size: 16px;
font-weight: bold;
color: ${textColor};
margin-top: 15px;
opacity: 0.6;
`

export const ClaimStepTitle = styled.div`
font-size: 16px;
font-weight: bold;
color: ${textColor};
width: 200px;
padding: 0px 15px 0px 0px;
`