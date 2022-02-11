import styled from 'styled-components/macro'
import { AnimatedCard, FadeInFromTop, primaryColor, textColor } from 'styles'

const roseColor = "#ff4092"
const whiteColor = "#e2e2e2"

export const CourseStyled = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 110px 90px 0px 110px;



  @media (max-width: 900px) {
    flex-direction: column;
    margin: 90px 10px 0px 10px;
    align-items:center;
  }
`

export const LeftBox = styled.div`
  display:flex;
  flex-direction: column;
  width: 625px;
  padding: 45px 30px 30px 55px;

  @media (max-width: 900px) {
    max-width: 400px;
    padding: 0px 35px 30px 35px;
  }
`

export const CourseTitle = styled(FadeInFromTop)`
  font-size: 72px;
  font-family: Proxima nova, sans-serif;
  font-weight: 800;
  color: ${roseColor};

  @media (max-width: 900px) {
    font-size: 50px;
    text-align: center;
  }
  
`

export const Section = styled(AnimatedCard)`
  margin-top: 45px;
  padding: 30px 30px 30px 30px;
  background-color: black;
  border-radius: 15px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`

export const CreatureWrapper = styled(FadeInFromTop)`
`

export const Creature = styled.img`
width: 400px;
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

export const Description = styled.div`
  color: white;
  font-size: 22px;
  font-weight: 400;
  margin-top: 20px;

  p{
    font-size: 20px;
  }

  @media (max-width: 900px) {
    font-size: 18px;

    p{
      font-size: 18px;
    }
  }

`

export const SubTitle = styled.div`
font-weight: 800;
font-size: 32px;
color: ${whiteColor};

@media (max-width: 900px) {
  font-size: 26px;
}
`

export const ProgressTitle = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const CompletionPercentage = styled.div`
font-weight: 800;
font-size: 28px;
color: ${roseColor};
`

export const ResumeCourse = styled.div`
margin-top: 50px;
`
export const CurrentChapter = styled.div`
font-size: 20px;
color: white;
margin-top:15px;
`

export const ChapterProgression = styled.div`
margin-top: 35px;
margin-left: 30px;
`

export const PreviousNextChapter = styled.div`
font-size: 16px;
color: grey;
margin-top:15px;
`

export const RightBox = styled.div`
  display:flex;
  flex-direction: column;
  background-color: blue;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  height: 650x; 
  min-width: 600px;


`