import { Button } from 'app/App.components/Button/Button.controller'
import { CourseBox } from 'app/App.components/CourseBox/CourseBox.controller'
import * as React from 'react'
import { Link } from 'react-router-dom'

import { HomeContainer, HomeCourse, HomeCourseGrid, HomeCourseGridWrapper, HomeStyled } from './Home.style'

export const HomeView = () => {
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
            <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/P264XprdJy">
              <Button text="JOIN THE COMMUNITY" color="primary" />
            </a>
          </div>
        </HomeContainer>

        <HomeCourse className={"about"}>
          <p>Through a free, interactive experience, you will learn to use Ocean Protocol to create value from data science in the Web3 space.</p>
          <p><b>Ocean101</b> provides a 23-module introduction and gives an official completion certificate writable on the blockchain (NFT).</p>
          <p><b>Data DeFi</b> is a 6-module overview of Decentralized Finance with tokenized data assets.</p>
        </HomeCourse>

        <HomeStyled className={"modules"}>
          <HomeCourseGridWrapper>
            <h1>Available Modules</h1>
            <p>Get started on the module you are interested in.</p>
            <HomeCourseGrid>
              <Link to={'ocean101/chapter-1'}>
                <CourseBox
                  title={"Ocean 101"}
                  shortDescription={"Community initiative providing a simple and practical introduction to Ocean Protocol. Anyone who successfully completes Ocean 101 can become an Ocean Ambassador"}
                  noChapters={23}
                  completed={false}
                />
              </Link>

              <Link to={'introToDataDefi/chapter-1'} >
                <CourseBox
                  title={"Intro To Data DeFi"}
                  shortDescription={"Short course introducing the general concepts of Decentralized Finance and Data Economics."}
                  noChapters={6}
                  completed={false}
                />
              </Link>

            </HomeCourseGrid>
          </HomeCourseGridWrapper>
        </HomeStyled>
    </HomeStyled>
  )
}
