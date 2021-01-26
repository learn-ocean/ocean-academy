import { Button } from 'app/App.components/Button/Button.controller'
<<<<<<< Updated upstream
=======
import { CourseBox } from 'app/App.components/CourseBox/CourseBox.controller'
>>>>>>> Stashed changes
import * as React from 'react'
import { Link } from 'react-router-dom'

//prettier-ignore
<<<<<<< Updated upstream
import { HomeContainer, HomePage, HomeStyled } from './Home.style'
=======
import { HomeContainer, HomeCourse, HomeCourseGrid, HomePage, HomeStyled } from './Home.style'
>>>>>>> Stashed changes

export const HomeView = () => {
  return (
    <HomeStyled>
      <img alt="waves-animated" src="/waves-animated.svg" />
      <HomePage>
        <HomeContainer>
          <h1>Learn to monetize data and analytic services using blockchain technology</h1>
          <p>
            Ocean Academy 101 is a community initiative providing a simple and practical introduction to Ocean Protocol
            starting from zero. For free.
          </p>
          <span>
            Through an interactive experience, you will learn to use Ocean Protocol to create value from data science in
            the Web3 space.
          </span>
          <span>You will get your own Ethereum wallet in the first 10 minutes or so.</span>
<<<<<<< Updated upstream
          <span>
            At the end of the 23 modules, you will be handed a completion certificate which grants access to the Ocean
            Ambassador community.
          </span>
          <Link to="/ocean101/chapter-1">
=======
          <span>At the end of the 23 modules, you will be handed a completion certificate which grants access to the Ocean Ambassador community.</span>
          
          <Link to="/chapter-1">
>>>>>>> Stashed changes
            <Button text="GET STARTED" color="primary" />
          </Link>

        </HomeContainer>

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

      </HomePage>
    </HomeStyled>
  )
}
