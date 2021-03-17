import { CourseBox } from 'app/App.components/CourseBox/CourseBox.controller'
import { ScrollBox } from 'app/App.components/ScrollBox/ScrollBox.controller'
import { SearchBar } from 'app/App.components/SearchBar/SearchBar.controller'
import { CourseData } from 'pages/Course/Course.controller'
import { courseData } from 'pages/Course/Course.data'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'

import { CoursesContainer, CoursesGrid } from './Courses.style'

type CoursesViewProps = {
    courses: CourseData[]
}

export const CoursesView = ({ courses }: CoursesViewProps) => (
    <>
        <CoursesContainer>
            <>
            <h1>Browse Courses</h1>
            <SearchBar 
                searchFor={'Courses'}
            />
            <ScrollBox>
                <CoursesGrid>
                    <>
                        {courses.map((course, i) => {
                            return (
                                <Link key={i} to={`${course.path}/chapter-1`}>
                                    <CourseBox
                                        title={course.title}
                                        shortDescription={course.description}
                                        noChapters={course.noChapters}
                                        completed={false}
                                    />
                                </Link> 
                            )}
                        )}
                    </>
                </CoursesGrid>
            </ScrollBox>
            </>
        </CoursesContainer>
    </>
)

CoursesView.propTypes = {
    courses: PropTypes.array.isRequired
}

CoursesView.defaultProps = {
    courses: courseData
}