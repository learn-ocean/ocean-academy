import styled from 'styled-components/macro'

import { FullPage } from 'styles'

export const HomeCourse = styled.div`
  width: 100%;
  max-width: 850px;
  margin: auto;
  padding: 50px 130px 50px 130px;
  text-align: center;
  left: 0;

  border-top: 1px solid rgb(0, 0, 0);
  border-bottom: 1px solid rgb(0, 0, 0);

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
    padding: 0px;
    max-width: 550px;
    @media (max-width: 600px) {
      padding: 0px 25px 0px 25px;
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
    width: 160px;
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
