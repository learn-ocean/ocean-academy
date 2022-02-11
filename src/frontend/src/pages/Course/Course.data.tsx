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
        description: 'A 23-module introduction and gives an official completion certificate writable on the blockchain (NFT).',
        noChapters: 23,
        data: Ocean101,
        title: 'Ocean 101',
        completionTime: 3
    },
    {
        path: IntroToDataDefi.path,
        pathname: `/${IntroToDataDefi.path}/info`,
        name: 'Intro to Data Defi',
        description: 'A 6-module overview of Decentralized Finance with tokenized data assets.',
        noChapters: 6,
        data: IntroToDataDefi,
        title: 'Intro to Data Defi',
        completionTime: 1
    },
    {
        path: ComputeToData.path,
        pathname: `/${ComputeToData.path}/info`,
        name: 'ComputeToData',
        description: 'The first introduction course to use Compute-to-Data on Ocean Protocol.',
        noChapters: 7,
        data: ComputeToData,
        title: 'Intro to ComputeToData',
        completionTime: 2
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
