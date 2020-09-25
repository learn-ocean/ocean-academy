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
          <p> Ocean 101 Academy provides a simple and practical introduction to anyone interested in monetizing data or analytic services using blockchain technology, starting from zero.
          <br><br>You’ll be set-up with your own Ethereum digital wallet in less than 10 minutes.<br><br>
          Through an interactive experience, you will get familiar with the main concepts of Web3, gain deep understanding of Ocean Protocol; its inner workings and what it can do for you. 
            <br>At the end of the 24 modules, participants are handed a completion certificate which grants access to the Ocean Ambassador community.
          </p>
          <Link to="/chapter-1">
            <Button text="GET STARTED" color="primary" />
          </Link>
        </HomeContainer>
      </HomePage>
    </HomeStyled>
  )
}
