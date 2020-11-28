import * as React from 'react'
import { Data } from '../Chapter/Chapter.controller'
import { CourseView } from './Course.view'

export interface Course {
    path: string | undefined
    description: string | undefined
}

export interface ChapterData {
    pathname: string
    name: string
    data: Data
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