import * as React from 'react'
import { courseData } from 'pages/Course/Course.data'
import { CoursesView } from './Courses.view'

export const Courses = () => {
    return (
        <>
            <CoursesView
                courses={courseData}
            />
        </>
    )
}