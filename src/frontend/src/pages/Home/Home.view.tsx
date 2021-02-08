import { Button } from 'app/App.components/Button/Button.controller'
import { CourseBox } from 'app/App.components/CourseBox/CourseBox.controller'
import * as React from 'react'
import { Link } from 'react-router-dom'

import { HomeContainer, HomeCourse, HomeCourseGridWrapper, HomeCourseGrid, HomeStyled } from './Home.style'

export const HomeView = () => {
  return (
    <HomeStyled>
      <img className={"mantaray"} alt="mantaray-animated" src="/mantaray-full.svg" />
        <HomeContainer>
          {/*Removed "and analytic services", analytics is also data. providing clear and concise header */}
          <h1>Learn to monetize data using blockchain technology</h1>
          <p>
            Ocean Academy 101 is a community initiative providing a simple and practical introduction to Ocean Protocol
            starting from zero. For free.
          </p>

          <Link to="/ocean101/chapter-1">
            <Button text="GET STARTED" color="primary" />
          </Link>
        </HomeContainer>

        <HomeCourse className={"about"}>
          <p>Through an interactive experience, you will learn to use Ocean Protocol to create value from data science in the Web3 space.</p>
          <p><b>Ocean101</b> provides a 23-modules introduction and gives an official completion certificate writable on the blockchain (NFT).</p>
          <p><b>Data DeFi</b> is a 6-modules overview of Decentralized Finance with tokenized data assets.</p>
          {/* <Link to="/ocean101/chapter-1">
            <Button text="GET STARTED" color="primary" />
          </Link> */}
        </HomeCourse>

        <HomeStyled className={"modules"}>
          <HomeCourseGridWrapper>
            <h1>Available Modules</h1>
            <p>Get started on the module you are interested in.</p>
            <HomeCourseGrid>
              <Link to={'ocean101/chapter-1'}>
                <CourseBox
                  title={"Ocean 101"}
                  shortDescription={"Learn the fundamentals of Ocean, get your ETH wallet in 10 minutes!"}
                  noChapters={23}
                  completed={false}
                />
              </Link>

              <Link to={'introToDataDefi/chapter-1'} >
                <CourseBox
                  title={"Intro To Data DeFi"}
                  shortDescription={"Introduction to Decentralized Finance with Data"}
                  noChapters={6}
                  completed={false}
                />
              </Link>

            </HomeCourseGrid>
          </HomeCourseGridWrapper>
        </HomeStyled>
    </HomeStyled>
  )
}
