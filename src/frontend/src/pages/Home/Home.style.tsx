import styled from 'styled-components/macro'

import { FullPage } from 'styles'

export const HomeCourse = styled.div`
  width: 100%;
  max-width: 850px;
  margin: auto;
  padding: 50px 130px 50px 130px;
  text-align: center;
  left: 0;

  > h1 {
    margin-bottom: 0;
  }
  > p {
    font-size: 20px;
  }
`

export const HomeCourseGridWrapper = styled.div`
  width: 100%;
  max-width: 850px;
  margin: auto;
  // padding: 50px 50px 50px 50px;
  text-align: center;

  border-top: 1px solid rgb(0, 0, 0);
  border-bottom: 1px solid rgb(0, 0, 0);

  > h1 {
    margin-bottom: 0;
  }
  > p {
    font-size: 20px;
  }
`

export const HomeCourseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 100px;
  margin: 50px;
  p {
    font-size: 16px;
  }
  > div > img {
    display: block;
    margin: 30px;
    margin: 30px auto;
  }
  @media (max-width: 600px) {
    grid-template-columns: auto;
    grid-gap: 10px;
  }
`

export const HomeStyled = styled.div`
  position: relative;
  margin: 0;
  padding: 0;

  .about {
    background: rgba(255,255,255,0.1);
    padding: 20px;
    max-width: 540px;
    @media (max-width: 600px) {
      padding: 20px 25px;
    }
  }

  img.mantaray {
    position: absolute;
    top: -50px;
    right: -50px;
    width: 55%;
    z-index: -1;
    margin-left: auto;
    animation: float 6s ease-in-out infinite;
  }

  img.mantaray {
    position: absolute;
    top: -50px;
    right: -50px;
    width: 55%;
    z-index: -1;
    margin-left: auto;
    animation: float 6s ease-in-out infinite;
  }

  @media (max-width: 400px) {
    img.mantaray {
      display: none;
    }
  }

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

  img {
    position: absolute;
    top: calc(33vh - 130px);
    left: 0;
    width: 100%;
    z-index: -1;
  };

  .modules {
    background-image: url(../../../waves-animated.svg);
    background-repeat: no-repeat;
    background-size: cover;
  }
`

export const HomePage = styled(FullPage)``

export const HomeContainer = styled.div`
  width: 44vw;
  /* margin-top: calc(30vh - 130px);
  margin-bottom: calc(30vh - 200px); */
  margin: 15vw 10vw;

  > h1 {
    margin-bottom: 10px;
  }

  > div > a > button {
    width: 166px;
  }

  .communityButton {
    display: flex;
    gap: 15px;
    margin-top: 20px;
  }

  @media (max-width: 375px) {
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

export const HomeDescription = styled.div`
  margin: 50px 10vw;
  
 .row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;


  @media (max-width: 700px) {
    flex-direction: column;
  }

  &:hover {
    background: rgba(255,255,255,0.1);
  }
}

.column {
  margin: 50px 0;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;

  img {
    padding: 0 10px;
  }
  
  p {
    max-width: 550px;
  }
}

 img {
    position: relative;
    padding: 0 10px;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  };

  .top-animation {
    animation: float-top 8s ease-in-out infinite;
  }

  .bottom-animation {
    animation: float-bottom 10s ease-in-out infinite;
  }

  @keyframes float-bottom {
    0% {
      transform: translate(0px, 0px);
    }
    50% {
      transform: translate(-8px, 8px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }

  @keyframes float-top {
    0% {
      transform: translate(0px, 0px);
    }
    50% {
      transform: translate(-5px, -4px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
`


export const HomeTestimonials = styled.div`
  margin: 50px 10vw;

  h2 {
    color: #ff4092;
    font-weight: bold;
  }
  
 .row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;


  @media (max-width: 900px) {
    flex-direction: column;
  }
}

.column {
  margin: 50px;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  
  flex: 1;

  a {
    color: #ffa5cc;
  }

  .quote {
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 50px;
  height: 100%;
  border: 1px solid rgba(255, 64, 146, 0.2);

    background: rgba(255, 64, 146, .02);
  }

  @media (max-width: 500px) {
    padding: 50px;
    margin: 15px 0 0 0;
  }

  img {
    padding: 0 10px;
  }
  
  p {
    max-width: 550px;
  }
}
`
