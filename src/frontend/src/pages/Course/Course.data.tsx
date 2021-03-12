import { course as IntroToDataDefi } from '../Courses/introToDataDefi'
import { chapterData as IntroToDataDefiChapters } from '../Courses/introToDataDefi/Chapters/Chapters.data'
import { course as Ocean101 } from '../Courses/ocean101'
import { chapterData as Ocean101Chapters } from '../Courses/ocean101/Chapters/Chapters.data'
import { CourseData } from './Course.controller'

export const courseData: CourseData[] = [
    {
        path: Ocean101.path,
        pathname: `/${Ocean101.path}/info`,
        title: 'Ocean 101',
        description: 'Learn the fundamentals of Ocean, get your ETH wallet in 10 minutes!',
        noChapters: 23,
        data: Ocean101,
    },
    {
        path: IntroToDataDefi.path,
        pathname: `/${IntroToDataDefi.path}/info`,
        title: 'Intro to Data Defi',
        description: 'Introduction to Decentralized Finance with Data',
        noChapters: 6,
        data: IntroToDataDefi,
    }
]


// chaptersByCourse: Used to render chapter data of each course.
// the key in chaptersByCourse == the path in courseData
type ChapterDataDictionary = {
    [key: string]: any,
}

export const chaptersByCourse: ChapterDataDictionary = {
    "ocean101": Ocean101Chapters,
    "introToDataDefi": IntroToDataDefiChapters
}
