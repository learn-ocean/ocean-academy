import { CourseBox } from 'app/App.components/CourseBox/CourseBox.controller'
import { SearchInput } from 'app/App.components/Input/Input.controller'
import { ScrollBox } from 'app/App.components/ScrollBox/ScrollBox.controller'
import { CourseData } from 'pages/Course/Course.controller'
import { courseData } from 'pages/Course/Course.data'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'

import { CoursesContainer, CoursesGrid, CoursesHeader } from './Courses.style'

type CoursesViewProps = {
    courses: CourseData[]
    filterItems: (filter: string, searchFor: 'courseName' | 'description') => void
    searchFor: 'courseName' | 'description'
}

export const CoursesView = ({ courses, filterItems, searchFor }: CoursesViewProps) => (
    <>
        <CoursesContainer>
            <>            
            <CoursesHeader>
                <h1>Browse Courses</h1>
                <SearchInput
                    icon="search"
                    name="Course Search"
                    placeholder={"Search for a course"}
                    onBlur={() => { }}
                    type="text"
                    onChange={(e) => {
                        filterItems(e.target.value, searchFor)
                    }}
                    inputStatus={undefined}
                    errorMessage={undefined}
                />
            </CoursesHeader>

            <ScrollBox>
                <CoursesGrid>
                    <>
                        {courses.map((course, i) => {
                            return (
                                <Link key={i} to={`${course.path}/chapter-1`}>
                                    <CourseBox
                                        completionTime={course.completionTime}
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