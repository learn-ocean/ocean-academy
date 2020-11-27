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
          <h1>Learn to monetize data and analytic services using blockchain technology</h1>
          <p>Ocean Academy 101 is a community initiative providing a simple and practical introduction to Ocean Protocol starting from zero. For free.</p>
          <span>Through an interactive experience, you will learn to use Ocean Protocol to create value from data science in the Web3 space.</span>
          <span>You will get your own Ethereum wallet in the first 10 minutes or so.</span>
          <span>At the end of the 23 modules, you will be handed a completion certificate which grants access to the Ocean Ambassador community.</span>
          <Link to="/chapter-1">
            <Button text="GET STARTED" color="primary" />
          </Link>
        </HomeContainer>
      </HomePage>
    </HomeStyled>
  )
}
