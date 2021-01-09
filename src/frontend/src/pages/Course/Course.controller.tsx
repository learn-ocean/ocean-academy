import * as React from 'react'
<<<<<<< HEAD
=======

>>>>>>> Add-ITDF
import { Data } from '../Chapter/Chapter.controller'
import { CourseView } from './Course.view'

export interface Course {
<<<<<<< HEAD
    path: string | undefined
    description: string | undefined
}

export interface ChapterData {
    pathname: string
    name: string
    data: Data
}

=======
    path: string
    description: string | undefined
}

export type CourseData = {
    path: string;
    pathname: string;
    name: string;
    data: Course;
}


>>>>>>> Add-ITDF
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