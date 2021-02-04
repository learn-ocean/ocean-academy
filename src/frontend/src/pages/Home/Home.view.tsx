import { Button } from 'app/App.components/Button/Button.controller'
import { CourseBox } from 'app/App.components/CourseBox/CourseBox.controller'
import * as React from 'react'
import { Link } from 'react-router-dom'

import { HomeContainer, HomeCourse, HomeCourseGrid, HomePage, HomeStyled } from './Home.style'

export const HomeView = () => {
  return (
    <HomeStyled>
      <img className={"mantaray"} alt="mantaray-animated" src="/mantaray-full.svg" />
      <HomePage>
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
            <h1>About</h1>
            <p> Through an interactive experience, you will learn to use Ocean Protocol to create value from data science in
              the Web3 space.</p>
            <p>You will get your own Ethereum wallet in the first 10 minutes or so.
            At the end of the 23 modules, you will be handed a completion certificate which grants access to the Ocean
            Ambassador community.</p>
            <Link to="/ocean101/chapter-1">
              <Button text="GET STARTED" color="primary" />
            </Link>
        </HomeCourse>

        <HomeStyled className={"modules"}>
          <HomeCourse>
            <h1>Available Modules</h1>
            <p>Get started on the module you are interested in.</p>
            <HomeCourseGrid>
              <CourseBox
                title={"Ocean 101"}
                shortDescription={"Learn the fundamentals of Ocean, get your ETH wallet in 10 minutes!"}
                noChapters={23}
                completed={true}
              />

              <CourseBox
                title={"Intro To Data Defi"}
                shortDescription={"Introduction to Decentralized Finance with Data"}
                noChapters={5}
                completed={false}
              />

            </HomeCourseGrid>
          </HomeCourse>
        </HomeStyled>
      </HomePage>
    </HomeStyled>
  )
}
