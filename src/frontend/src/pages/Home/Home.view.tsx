import * as React from 'react'
import { Link } from 'react-router-dom'

//prettier-ignore
import { HomeStyled, HomeContainer, HomePage } from './Home.style'
import { Button } from 'app/App.components/Button/Button.controller'

export const HomeView = () => {
  return (
    <HomeStyled>
      <img alt="waves" src="/waves.svg" />
      <HomePage>
        <HomeContainer>
          <h1>Learn How to Build Web3 Apps for the Data Economy</h1>
          <h2>Ocean Academy is a fun gamified platform to lean everything about the Ocean Protocol</h2>
          <Link to="/chapter-1">
            <Button text="GET STARTED" color="primary" />
          </Link>
        </HomeContainer>
      </HomePage>
    </HomeStyled>
  )
}
