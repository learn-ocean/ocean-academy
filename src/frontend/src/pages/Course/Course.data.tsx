
import { course as Ocean101 } from '../Courses/ocean101'
import { chapterData as Ocean101Chapters } from '../Courses/ocean101/Chapters/Chapters.data'

import { course as IntroToDataDefi } from '../Courses/introToDataDefi'
import { chapterData as IntroToDataDefiChapters } from '../Courses/introToDataDefi/Chapters/Chapters.data'

import { Course } from 'pages/Course/Course.controller'

// courseData: used to render general course details. 
type CourseData = {
    path: string | undefined;
    pathname: string;
    name: string;
    data: Course;
}

export const courseData: CourseData[] = [
    {
        path: Ocean101.path,
        pathname: `/${Ocean101.path}/info`,
        name: 'Ocean 101',
        data: Ocean101,
    },
    {
        path: IntroToDataDefi.path,
        pathname: `/${IntroToDataDefi.path}/info`,
        name: 'Compute to Data',
        data: IntroToDataDefi,
    }
]


// chaptersByCourse: Used to render chapter data of each course.
type ChapterDataDictionary = {
    [key: string]: any,
}

export const chaptersByCourse: ChapterDataDictionary = {
    "ocean101": Ocean101Chapters,
    "introToDataDefi": IntroToDataDefiChapters
}