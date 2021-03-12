import { CourseBox } from 'app/App.components/CourseBox/CourseBox.controller'
import { ScrollBox } from 'app/App.components/ScrollBox/ScrollBox.controller'
import { CourseData } from 'pages/Course/Course.controller'
import { courseData } from 'pages/Course/Course.data'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { CoursesContainer, CoursesGrid } from './Courses.style'

type CoursesViewProps = {
    courses: CourseData[]
}

export const CoursesView = ({ courses }: CoursesViewProps) => (
    <>
        <CoursesContainer>
            <>
                SCROLLBOX SHOULD BE HERE
            <ScrollBox>
                    <>
                        GRID SHOULD BE HERE
                <CoursesGrid>
                            <>
                                {courses.forEach(course => {
                                    return (
                                        <CourseBox
                                            title={course.title}
                                            shortDescription={course.description}
                                            noChapters={course.noChapters}
                                            completed={false}
                                        />
                                    )
                                })}
                            </>
                        </CoursesGrid>
                    </>
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