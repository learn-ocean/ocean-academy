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
          <p> Ocean Academy 101 is a community initiative which aims to provide a simple and practical introduction to Ocean Protocol starting from zero. For free.</p>
          <span>You’ll be set-up with your own Ethereum digital wallet in less than 10 minutes.</span>
          <span>Through an interactive experience, you will get familiar with the main concepts of Web3, how data science fits in, and how you can use Ocean Protocol to create value in the New Data Economy.</span> 
          <span>At the end of the 24 modules, you will be handed a completion certificate which grants access to the Ocean Ambassador community. We look forward to see you here.</span>
          <Link to="/chapter-1">
            <Button text="GET STARTED" color="primary" />
          </Link>
        </HomeContainer>
      </HomePage>
    </HomeStyled>
  )
}
