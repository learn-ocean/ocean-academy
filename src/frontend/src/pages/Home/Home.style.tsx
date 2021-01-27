import styled from 'styled-components/macro'
import { FullPage } from 'styles'

export const HomeCourse = styled.div`
  width: 100%;
  margin: auto;
  padding: 50px;
  text-align: center;
  left: 0;

  background:rgba(196, 196, 196, 0.14);
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
  }
  @media (max-width: 600px) {
    margin: 0;
  }
`

export const HomeStyled = styled.div`
  position: relative;
  
  > img.mantaray {
    position: absolute;
    top:0;
    right: 0;
    width: 55%;
    z-index: -1;
    margin-left: auto;
  };

  img {
    position: absolute;
    top: calc(33vh - 130px);
    left: 0;
    width: 100%;
    z-index: -1;
  }
`

export const HomePage = styled(FullPage)``

export const HomeContainer = styled.div`
  width: 590px;
  /* margin-top: calc(30vh - 130px);
  margin-bottom: calc(30vh - 200px); */
  margin: 150px 100px 200px 100px;

  > h1 {
    margin-bottom: 10px;
  }

  > a > button {
    margin-top: 20px;
    width: 160px;
  }

  span {
    font-size: 16px;
    display: block;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`
