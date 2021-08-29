import * as React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from 'app/App.components/Button/Button.controller'
import { CourseBox } from 'app/App.components/CourseBox/CourseBox.controller'
import { SearchInput } from 'app/App.components/Input/Input.controller'
import { CourseData } from 'pages/Course/Course.controller'
import { courseData } from 'pages/Course/Course.data'

import { HomeContainer, HomeCourse, HomeCourseGrid, HomeCourseGridWrapper, HomeStyled } from './Home.style'

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

      <HomeCourse className={"about"}>
        <div className={"row"}>
          <div className={"column"}>
            <p>Anyone can join the Ocean Academy community, but becoming a contributor to the academy requires slightly more commitment. Ultimately, you control your path to growth in the web3 data economy.</p>
            <p>An Ocean Academy Sailor is a proactive self-employed team player who is eager to demonstrate their dedication to the project. We will support your growth and development by helping you with the tools and training to succeed.</p>
          </div>
        </div>
      </HomeCourse>
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
