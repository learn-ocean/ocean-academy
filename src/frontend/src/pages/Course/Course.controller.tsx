import * as React from 'react'

// import { CourseView } from '../Chapter/Chapter.controller'
import { CourseView } from './Course.view'

export interface Course {
    path: string
    description: string | undefined
}

export type CourseData = {
    path: string;
    infoPath: string;
    title: string;
    description: string;
    noChapters: number;
    data: Course;
}


export const Course = () => {

    // bandaid 
    const course = 'ocean101'

    return (
        <>
            <CourseView
                course={course}
            />
        </>
    )
}