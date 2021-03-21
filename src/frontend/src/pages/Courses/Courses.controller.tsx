import { courseData } from 'pages/Course/Course.data'
import * as React from 'react'

import { CoursesView } from './Courses.view'

export const Courses = () => {

    const filterItems = (filterText: string, searchFor: 'courseName' | 'description') => {
        console.log(`e = `)
        console.log(filterText)
        if (searchFor === 'courseName') {
            courseData.filter(item => item.title.toLocaleLowerCase().includes(filterText))
        }
    }
    
    return (
        <>
            <CoursesView
                courses={courseData}
                filterItems={filterItems}
                searchFor={'courseName'}
            />
        </>
    )
}