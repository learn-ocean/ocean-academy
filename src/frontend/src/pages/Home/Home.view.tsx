import { Button } from 'app/App.components/Button/Button.controller'
import { CourseBox } from 'app/App.components/CourseBox/CourseBox.controller'
import * as React from 'react'
import { Link } from 'react-router-dom'

import { HomeContainer, HomeCourseGrid, HomeCourseGridWrapper, HomeDescription, HomeStyled, HomeTestimonials } from './Home.style'

export const HomeView = () => {
  return (
    <HomeStyled>
      <img className={"mantaray"} alt="mantaray-animated" src="/mantaray-full.svg" />
      <HomeContainer>
        {/*Removed "and analytic services", analytics is also data. providing clear and concise header */}
        <h1>Learn to monetize data using blockchain technology</h1>
        <p>
          Ocean Academy 101 is a community initiative providing a simple and practical introduction to Ocean Protocol starting from zero. For free. Anyone who successfully completes Ocean 101 can go on to become and Ocean Ambassador.
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

      <HomeDescription>
        <div className={"row"}>
          <div className={"column"}>
            <img className={"top-animation"} src="/mantis.svg" alt="ocean_mantis" height="250" />
          </div>
          <div className={"column"}>
            <p>Our interactive modules cover a range of topics and difficulties. Whether you're a web3 expert or someone completely new to crypto, there is something for you.</p>
            <p><b>Ocean101</b> provides a 23-module introduction and gives an official completion certificate writable on the blockchain (NFT).</p>
            <p><b>Data DeFi</b> is a 6-module overview of Decentralized Finance with tokenized data assets.</p>
          </div>
        </div>
        <div className={"row"}>
          <div className={"column"}>
            <img className={"bottom-animation"} src="/squid.svg" alt="ocean_mantis" height="250" />
          </div>
          <div className={"column"}>
            <p>Anyone can join the Ocean Academy community, but becoming a contributor to the academy requires slightly more commitment. Ultimately, you control your path to growth in the web3 data economy.</p>
            <p>An Ocean Academy Sailor is a proactive self-employed team player who is eager to demonstrate their dedication to the project. We will support your growth and development by helping you with the tools and training to succeed.</p>
          </div>
        </div>
      </HomeDescription>

      <HomeTestimonials>
        <h2>How did you like the Academy? Our graduates enriched:</h2>
        <div className={"row"}>
          <div className={"column"}>
            <p className={"quote"}>The Ocean Academy provides participants the foundation to think of data more like an asset, rather than information. Currently, businesses use their data to optimize their operations, but rarely use it to create additional revenue streams. The Ocean Academy is the stepping stone for investors, stakeholders, data-scientists and other stakeholders to learn how to monetize data and take part in a new data economy.
</p>
            <p>Twitter: <a href="https://twitter.com/realdatawhale" target="_blank" rel="noopener noreferrer">@realdatawhale</a></p>
          </div>
          <div className={"column"}>
            <p className={"quote"}>A new data economy is being built. It can be hard to find quality content about many of the concepts that Ocean protocol seeks to facilitate; now and in the future. Where people, data and technology meet is being (re)discovered at an increasingly fast pace. How to keep up? Education! Ocean Academy gives easy-to-understand information and a longer term vision to a broad audience. Blockchain will be used by the masses when Ocean protocol expands as the 'internet of data'.</p>
            <p>Twitter: <a href="https://twitter.com/bridging_tech" target="_blank" rel="noopener noreferrer">@bridging_tech</a></p>
          </div>
        </div>
      </HomeTestimonials>

      <HomeStyled className={"modules"}>
        <HomeCourseGridWrapper>
          <h1>Available Modules</h1>
          <p>Get started on the module you are interested in.</p>
          <HomeCourseGrid>
            <Link to={'ocean101/chapter-1'}>
              <CourseBox
                title={"Ocean 101"}
                shortDescription={"Learn the fundamentals of Ocean, get your ETH wallet in 10 minutes!"}
                noChapters={23}
                completed={false}
              />
            </Link>

            <Link to={'introToDataDefi/chapter-1'} >
              <CourseBox
                title={"Intro To Data DeFi"}
                shortDescription={"Introduction to Decentralized Finance with Data"}
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
