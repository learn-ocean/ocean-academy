import * as React from 'react'

import { CourseBoxView, CourseBoxViewProps } from './CourseBox.view'

export const CourseBox = ({ title, shortDescription, noChapters, completed, completionTime }: CourseBoxViewProps) => {
    return (
        <CourseBoxView 
            title={title}
            shortDescription={shortDescription}
            noChapters={noChapters}
            completed={completed}
            completionTime={completionTime}
        />
    )
}