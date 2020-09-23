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
          <p> Ocean 101 Academy provides a simple and practical introduction to anyone interested in monetizing data or analytic services on the blockchain, starting from zero.
          You’ll be set-up with your own Ethereum digital wallet in less than 10 minutes.
          Through an interactive experience, you will gain a deep understanding of what is Ocean Protocol, how its technology stack works, and what it can do for you. By the last module, participants are handed a completion certificate which grants access to the Ocean Ambassador community.
          </p>
          <p>
            The Ocean 101 consists of 24 modules to guide data scientists through the realm of blockchain and data science. At the end of 101, not only you will be familiar with the basic concepts of Web3, but also regarding the architecture of Ocean Protocol and how it can be leveraged for an Open Data Economy. Through a gamified experience, you will be guided into the three different main chunks of the course. The first chapters are about Web3 and smart contracts. The next  chapters explore what is a data market and how a Web3 data market differs from a traditional data market. In the he last chapters you will learn about Ocean infrastructure, features and use cases.
          </p>
          <Link to="/chapter-1">
            <Button text="GET STARTED" color="primary" />
          </Link>
        </HomeContainer>
      </HomePage>
    </HomeStyled>
  )
}
