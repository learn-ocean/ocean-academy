import { Button } from 'app/App.components/Button/Button.controller'
import * as React from 'react'

//prettier-ignore
import { AboutContainer, AboutPage, AboutStyled, ButtonContainer } from './About.style'

export const AboutView = () => {
  return (
    <AboutStyled>
      <img alt="waves-animated" src="/waves-animated.svg" />
      <AboutPage>
        <AboutContainer>
          <h1>About Ocean Academy</h1>
          <p>
            Ocean Academy is a community initiative started by Ocean Ambassadors to help with the onboarding of new
            ambassadors. Many people, including data owners and data scientists, are not familiar with blockchain and
            smart contracts yet. And we wanted to have the broadest reach possible, not only address Web3 natives.
          </p>
          <p>
            As we started working on the project, we realized it could serve as an outreach platform for Web3 and Ocean
            Protocol. So was born Ocean Academy.
          </p>
          <ButtonContainer>
          <a href="https://discord.gg/BPPHQksyPd">
              <Button text="JOIN US ON DISCORD" color="primary" />
            </a>
            <a href="https://github.com/learn-ocean/ocean-academy" target="_blank" rel="noopener noreferrer">
              <Button text="VIEW CODE ON GITHUB" color="primary" />
            </a>
            <a href="https://oceanprotocol.com/" target="_blank" rel="noopener noreferrer">
              <Button text="READ ABOUT OCEAN PROTOCOL" color="primary" />
            </a>
          </ButtonContainer>
          <h1>Who we are</h1>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/lattagher/" target="_blank" rel="noopener noreferrer">
                Gherardo Lattanzi
              </a>
              . AI and Privacy Analyst, China - Italy. By observing how China observed me I learned how to analyse. Tech
              dystopias adversarial thinker.
            </li>
            <li>
              <a href="https://www.linkedin.com/in/albert-peci-65932413b/" target="_blank" rel="noopener noreferrer">
                Albert Peci
              </a>
              . Full Stack Web3 Developer (Rust, Javascript, Solidity), Berlin, Germany. Novel author and lucid dreamer.
            </li>
            <li>
              <a href="https://www.linkedin.com/in/laurentrochat/" target="_blank" rel="noopener noreferrer">
                Laurent Rochat
              </a>
              . Analytics and Insights Director, Geneva, Switzerland. Off-piste snowboarder and fine wine lover.
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ludovicgrandclement/" target="_blank" rel="noopener noreferrer">
              Ludovic Grandclement
              </a>
              . Data Engineer/Technical Project Manager. Hong Kong. Avid lifelong learner and part-time baker.
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kaimeinke/" target="_blank" rel="noopener noreferrer">
               Kai Meinke
              </a>
              . Product Owner. Kiel, Germany.
            </li>
            <li>
              <a href="https://www.linkedin.com/in/frederic-schwill" target="_blank" rel="noopener noreferrer">
               Frederic Schwill
              </a>
              . Security & Privacy Engineer. Freiburg, Germany.
            </li>
          </ul>
        </AboutContainer>
      </AboutPage>
    </AboutStyled>
  )
}
