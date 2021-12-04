import { Button } from 'app/App.components/Button/Button.controller'
import * as React from 'react'

//prettier-ignore
import { AboutContainer,Section, MemberName,MemberDescription, TeamListContainer,TeamMemberPicture, TeamMemberContainer, AboutPage, AboutStyled, ButtonContainer } from './About.style'

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
                <img width="165" src="https://media-exp1.licdn.com/dms/image/C5103AQF-J-NXQOuTFw/profile-displayphoto-shrink_800_800/0/1528971762519?e=1643846400&v=beta&t=1OJDkQh_uTLcYJsopOLPyLeYSeP_ch7lGYAJJPnTQ98"/>
                </TeamMemberPicture>
            <li>
            <MemberName>
              <a href="https://www.linkedin.com/in/lattagher/" target="_blank" rel="noopener noreferrer">
                Gherardo Lattanzi
              </a>
              </MemberName>
              <MemberDescription>
              AI and Privacy Analyst, China - Italy. By observing how China observed me I learned how to analyse. Tech
              dystopias adversarial thinker.
              </MemberDescription>
            </li>
            </TeamMemberContainer>
            <TeamMemberContainer>
            <TeamMemberPicture>
                <img width="165" src="https://media-exp1.licdn.com/dms/image/C4E03AQF_MoFxuE-d0w/profile-displayphoto-shrink_800_800/0/1516233413839?e=1643846400&v=beta&t=ALAvfq4jlLlgOKK5Lw-sPCRokRjLKrsImRBpQ39oDNo"/>
                </TeamMemberPicture>
            <li>
              <MemberName>
              <a href="https://www.linkedin.com/in/laurentrochat/" target="_blank" rel="noopener noreferrer">
                Laurent Rochat
              </a>
              </MemberName>
              <MemberDescription>
              Analytics and Insights Director, Geneva, Switzerland. Off-piste snowboarder and fine wine lover.
              </MemberDescription>

            </li>
            </TeamMemberContainer>
            <TeamMemberContainer>
            <TeamMemberPicture>
                <img width="165" src="https://media-exp1.licdn.com/dms/image/C5603AQF-0AYH3l6KpA/profile-displayphoto-shrink_800_800/0/1610892210181?e=1643846400&v=beta&t=XChqkle62pikDb3E9wJaUuNV45TemdJT_9ZG3coxbv4"/>
                </TeamMemberPicture>
            <li>
            <MemberName>
              <a href="https://www.linkedin.com/in/ludovicgrandclement/" target="_blank" rel="noopener noreferrer">
                Ludovic Grandclement
              </a>
              </MemberName>
              <MemberDescription>
              Data Engineer/Technical Project Manager. Hong Kong. Avid lifelong learner and part-time baker.
              </MemberDescription>

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
