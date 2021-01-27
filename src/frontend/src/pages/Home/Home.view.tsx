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

          <Link to="/chapter-1">
            <Button text="GET STARTED" color="primary" />
          </Link>
        </HomeContainer>

        <HomeCourse>
            <h1>About</h1>
            <p> Through an interactive experience, you will learn to use Ocean Protocol to create value from data science in
              the Web3 space.</p>
            <p>You will get your own Ethereum wallet in the first 10 minutes or so.
            At the end of the 23 modules, you will be handed a completion certificate which grants access to the Ocean
            Ambassador community.</p>
        </HomeCourse>

        <HomeStyled>
          <img alt="waves-animated" src="/waves-animated.svg" />
          <HomeCourse>
            <h1>Available Modules</h1>
            <p>Get started on the module you are interested in.</p>
            <HomeCourseGrid>
              <CourseBox
                title={"Ocean 101"}
                shortDescription={"[Someone write info about Ocean101 here]"}
              />

              <CourseBox
                title={"Intro To Data Defi"}
                shortDescription={"[Someone write info about intro to data defi here."}
              />

            </HomeCourseGrid>
          </HomeCourse>
        </HomeStyled>
      </HomePage>
    </HomeStyled>
  )
}
