import { course as ComputeToData } from '../Courses/ComputeToData'
import { chapterData as ComputeToDataChapters } from '../Courses/ComputeToData/Chapters/Chapters.data'
import { course as IntroToDataDefi } from '../Courses/introToDataDefi'
import { chapterData as IntroToDataDefiChapters } from '../Courses/introToDataDefi/Chapters/Chapters.data'
import { course as Ocean101 } from '../Courses/ocean101'
import { chapterData as Ocean101Chapters } from '../Courses/ocean101/Chapters/Chapters.data'
import { CourseData } from './Course.controller'

export const courseData: CourseData[] = [
    {
        path: Ocean101.path,
        pathname: `/${Ocean101.path}/info`,
        name: 'Ocean 101',
        description: 'Learn the fundamentals of Ocean, get your ETH wallet in 10 minutes!',
        noChapters: 23,
        data: Ocean101,
        title: 'Ocean 101'
    },
    {
        path: IntroToDataDefi.path,
        pathname: `/${IntroToDataDefi.path}/info`,
        name: 'Intro to Data Defi',
        description: 'Introduction to Decentralized Finance with Data.',
        noChapters: 6,
        data: IntroToDataDefi,
        title: 'Intro to Data Defi'
    },
    {
        path: ComputeToData.path,
        pathname: `/${ComputeToData.path}/info`,
        name: 'Intro to ComputeToData',
        description: 'The first introduction course to use Compute-to-Data on Ocean Protocol.',
        noChapters: 7,
        data: ComputeToData,
        title: 'Intro to ComputeToData'
    }
]


// chaptersByCourse: Used to render chapter data of each course.
// the key in chaptersByCourse == the path in courseData
type ChapterDataDictionary = {
    [key: string]: any,
}

export const chaptersByCourse: ChapterDataDictionary = {
    "ocean101": Ocean101Chapters,
    "introToDataDefi": IntroToDataDefiChapters,
    "ComputeToData": ComputeToDataChapters
}
