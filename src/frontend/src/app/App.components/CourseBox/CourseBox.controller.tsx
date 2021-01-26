import * as React from 'react'

import { CourseBoxView, CourseBoxViewProps } from './CourseBox.view'

export const CourseBox = ({title, shortDescription}: CourseBoxViewProps) => {
    return (
        <CourseBoxView 
            title={title}
            shortDescription={shortDescription}
        />
    )
}