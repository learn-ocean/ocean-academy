import { Button } from 'app/App.components/Button/Button.controller'
import * as React from 'react'

//prettier-ignore
import { AboutContainer, Section, MemberName, MemberDescription, TeamListContainer, TeamMemberPicture, TeamMemberContainer, AboutPage, AboutStyled, ButtonContainer } from './About.style'

export const AboutView = () => {
  return (
    <AboutStyled>
      <img alt="waves-animated" src="/waves-animated.svg" />
      <AboutPage>
        <AboutContainer>
          <h1>About Ocean Academy</h1>
          <Section>
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
          </Section>
          <Section>
            <h1>Who we are</h1>
            <ul>
              <TeamListContainer>
                <TeamMemberContainer>
                  <TeamMemberPicture>
                    <img width="250" src="/about/LaurentRochat.jpg" />
                  </TeamMemberPicture>
                  <li>
                    <MemberName>
                      <a href="https://www.linkedin.com/in/laurentrochat/" target="_blank" rel="noopener noreferrer">
                        Laurent Rochat
                      </a>
                    </MemberName>
                    <MemberDescription>
                      Insights & Analytics Director. Advisor to international brands on their marketing and innovation strategies. Passionate about people and technology, he is an early-days Ambassador for Ocean Protocol, and a founder of Ocean Academy. Off-piste snowboarder and wine lover.
                    </MemberDescription>

                  </li>
                </TeamMemberContainer>
                <TeamMemberContainer>
                  <TeamMemberPicture>
                    <img width="250" src="/about/FredMartin.jpg" />
                  </TeamMemberPicture>
                  <li>
                    <MemberName>
                      <a href="https://www.linkedin.com/in/lattagher/" target="_blank" rel="noopener noreferrer">
                        Fred Martin
                      </a>
                    </MemberName>
                    <MemberDescription>
                      Marketing Manager for Twitter Fred Martin has a lot communications experience originally from being an artist and musician.
                      Now he is bringing his creative ways to to the crypto world and wants to create more awareness for Data resources.
                    </MemberDescription>
                  </li>
                </TeamMemberContainer>
                <TeamMemberContainer>
                  <TeamMemberPicture>
                    <img width="200" src="/about/BenjaminScotti.jpg" />
                  </TeamMemberPicture>
                  <li>
                    <MemberName>
                      <a href="https://www.linkedin.com/in/ludovicgrandclement/" target="_blank" rel="noopener noreferrer">
                        Benjamin Scotti
                      </a>
                    </MemberName>
                    <MemberDescription>
                      Product Manager with focus on user centric services. Excited about everything digital that alleviates everyday life and that's not controlled by a corporate entity.
                      In his freetime he is an ambitious climber and outdoor adventurer who is always keen to push the limits further ahead.                    </MemberDescription>
                  </li>
                </TeamMemberContainer>
              </TeamListContainer>
            </ul>
          </Section>
        </AboutContainer>
      </AboutPage>
    </AboutStyled>
  )
}
