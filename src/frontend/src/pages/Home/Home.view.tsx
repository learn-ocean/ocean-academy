import * as React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'app/App.components/Button/Button.controller'
import { CourseBox } from 'app/App.components/CourseBox/CourseBox.controller'
import { CourseData } from 'pages/Course/Course.controller'
import { courseData } from 'pages/Course/Course.data'

import { HomeContainer,ReferralSeaCreatureContainer, ReferralButtonsContainer, CoursesSection, CoursesDescription, CommunityContentContainer, CoursesContainer, CommunitySection, HomeCourseGrid, SeaCreatureContainer, HomeTestimonials, HomeStyled, ReferralSection } from './Home.style'

export const HomeView = () => {

  const [courses, setCourses] = useState<CourseData[]>(courseData)

  return (
    <HomeStyled>

      <img className={"mantaray"} alt="mantaray-animated" src="/mantaray-full.svg" />
      <HomeContainer>
        {/*Removed "and analytic services", analytics is also data. providing clear and concise header */}
        <h1>Learn to monetize data using blockchain technology</h1>
        <p>
          Ocean Academy 101 is a community initiative providing a simple and practical introduction to Ocean Protocol
          starting from zero. For free.
        </p>
        <div className={"communityButton"}>
          <Link to="/ocean101/chapter-1">
            <Button text="GET STARTED" color="primary" />
          </Link>
        </div>
      </HomeContainer>

      <CoursesSection>
        <CoursesContainer>
          <h1>Available Courses</h1>
          <CoursesDescription>
            <p>Our interactive modules cover a range of topics and difficulties. Whether you're a web3 expert or
              completely new to crypto, there is something for you.</p>
          </CoursesDescription>
          <HomeCourseGrid>
            {courses.map((course) => {
              return (
                <Link key={course.path} to={`${course.path}`}>
                  <CourseBox
                    title={course.name}
                    shortDescription={course.description}
                    noChapters={course.noChapters}
                    completed={false}
                    completionTime={course.completionTime}
                  />
                </Link>
              )
            })}
          </HomeCourseGrid>
        </CoursesContainer>
      </CoursesSection>

      <CommunitySection>
        <SeaCreatureContainer>
          <img alt="Ocean Turtle Drawing" src="creatures/turtle-full.svg" />
        </SeaCreatureContainer>
        <CommunityContentContainer>
          <h1>Join as an Ocean Ambassador</h1>
          <p>Completing Ocean 101 is a prerequisite to becoming an Ambassador for Ocean Protocol. </p>
          <p>Ocean Ambassadors work at the core of the Ocean Protocol ecosystem to make the vision of an open and fair data economy come true. </p>
          <p>Ambassadors are talented and passionate individuals who make a difference in this world, and they get rewarded for it!</p>
          <p>Everyone can contribute: why not you?</p>
          <div className="communityCall">
            <a href="https://discord.gg/SDebzUpYbP">
              <Button text="JOIN NOW" color="primary" />
            </a>
          </div>
        </CommunityContentContainer>
      </CommunitySection>

      <ReferralSection>
        <CommunityContentContainer>
          <h1>Earn with our referral program</h1>
          <p>Get 15 USD by completing Ocean101 and referring Ocean Academy to your friends.</p>
          <p>Simply register with your BrightID profile and claim your reward once you and 3 of your friends have completed Ocean101.</p>
          <p>The program will run as long as funding is available. Rewards are paid in mOcean.</p>
          <div className="communityCall">
          <ReferralButtonsContainer>
            <Link to="/referral-program" style={{width: "150px"}}>
              <Button text="JOIN NOW" color="primary" />
            </Link>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/oceanprotocol/oceandao/wiki/BrightID-Verification-Guide" style={{width: "150px"}}>
              <Button text="BrightID SETUP" color="primary" />
            </a>
            </ReferralButtonsContainer>
          </div>
          </CommunityContentContainer>
        <ReferralSeaCreatureContainer>
          <img alt="Ocean whale image" src="creatures/whale-full-compressed.svg" />
        </ReferralSeaCreatureContainer>
      </ReferralSection>

      <HomeTestimonials>
        <h1>Testimonials</h1>
        <div className={"row"}>
          <div className={"column"}>
            <p className={"quote"}>The Ocean Academy provides participants the foundation to think of data more like an asset, rather than information.
              Currently, businesses use their data to optimize their operations, but rarely use it to create additional revenue streams.
              The Ocean Academy is the stepping stone for investors, stakeholders, data-scientists and other stakeholders to learn how to
              monetize data and take part in a new data economy.</p>
            <p>Twitter: <a href="https://twitter.com/realdatawhale" target="_blank" rel="noopener noreferrer">@realdatawhale</a></p>
          </div>
          <div className={"column"}>
            <p className={"quote"}>A new data economy is being built. It can be hard to find quality content about many of the concepts that Ocean protocol seeks to facilitate; now and in the future. Where people, data and technology meet is being (re)discovered at an increasingly fast pace. How to keep up? Education! Ocean Academy gives easy-to-understand information and a longer term vision to a broad audience. Blockchain will be used by the masses when Ocean protocol expands as the 'internet of data'.</p>
            <p>Twitter: <a href="https://twitter.com/bridging_tech" target="_blank" rel="noopener noreferrer">@bridging_tech</a></p>
          </div>
        </div>
      </HomeTestimonials>

    </HomeStyled>
  )
}
