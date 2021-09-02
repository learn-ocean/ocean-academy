import * as React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from 'app/App.components/Button/Button.controller'
import { CourseBox } from 'app/App.components/CourseBox/CourseBox.controller'
import { SearchInput } from 'app/App.components/Input/Input.controller'
import { CourseData } from 'pages/Course/Course.controller'
import { courseData } from 'pages/Course/Course.data'

import { HomeContainer, HomeCourse, HomeCourseGrid, HomeCourseGridWrapper, HomeTestimonials, HomeStyled } from './Home.style'

export const HomeView = () => {

  const [courses, setCourses] = useState<CourseData[]>(courseData)

  const filterItems = (
    filter: string,
  ) => {
    const courses = courseData.filter(item => item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) || item.description.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
    setCourses(courses)
  }

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
        <div className={"row"}>
          <div className={"column"}>
            <p>Whether you are completely new to Blockchain or a Web3 expert, there is something new for you here.</p>
            <p><b>Ocean101</b> is a introduction to Ocean Protocol and it gives a completion certificate as a NFT.</p>
            <p><b>Data DeFi</b> is a 6-module overview of Decentralized Finance with tokenized data assets.</p>
            <p><b>Compute-to-Data</b> is a 7-module introduction to private data and algorithms monetization.</p>
          </div>
        </div>
      </HomeCourse>

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
          <SearchInput
            icon="search"
            name="Course Search"
            placeholder={"Search for a course"}
            onBlur={() => { }}
            type="text"
            onChange={(e) => {
              filterItems(
                e.target.value,
                // searchFor
              )
            }}
            inputStatus={undefined}
            errorMessage={undefined}
          />

          <HomeCourseGrid>
            {courses.map((course) => {
              return (
                <Link key={course.path} to={`${course.path}/chapter-1`}>
                  <CourseBox
                    title={course.name}
                    shortDescription={course.description}
                    noChapters={course.noChapters}
                    completed={false}
                  />
                </Link>
              )
            })}

          </HomeCourseGrid>
        </HomeCourseGridWrapper>
      </HomeStyled>
    </HomeStyled>
  )
}
