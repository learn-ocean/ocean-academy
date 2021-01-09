<<<<<<< HEAD

import { course as Ocean101 } from '../Courses/ocean101'
import { chapterData as Ocean101Chapters } from '../Courses/ocean101/Chapters/Chapters.data'

import { course as OceanOutreach } from '../Courses/oceanOutreach'
import { chapterData as OceanOutreachChapters } from '../Courses/oceanOutreach/Chapters/Chapters.data'

import { course as OceanBusiness } from '../Courses/oceanBusiness'
import { chapterData as OceanBusinessChapters } from '../Courses/oceanBusiness/Chapters/Chapters.data'

import { course as ComputeToData } from '../Courses/computeToData'
import { chapterData as ComputeToDataChapters } from '../Courses/computeToData/Chapters/Chapters.data'

export const courseData = [
    {
        path: Ocean101.path,
        pathname: `/${Ocean101.path}/chapter-1`,
=======
import { course as IntroToDataDefi } from '../Courses/introToDataDefi'
import { chapterData as IntroToDataDefiChapters } from '../Courses/introToDataDefi/Chapters/Chapters.data'
import { course as Ocean101 } from '../Courses/ocean101'
import { chapterData as Ocean101Chapters } from '../Courses/ocean101/Chapters/Chapters.data'
import { CourseData } from './Course.controller'

export const courseData: CourseData[] = [
    {
        path: Ocean101.path,
        pathname: `/${Ocean101.path}/info`,
>>>>>>> Add-ITDF
        name: 'Ocean 101',
        data: Ocean101,
    },
    {
<<<<<<< HEAD
        path: OceanOutreach.path,
        pathname: `/${OceanOutreach.path}/info`,
        name: 'Ocean Outreach',
        data: OceanOutreach,
    },
    {
        path: OceanBusiness.path,
        pathname: `/${OceanBusiness.path}/info`,
        name: 'Ocean Business',
        data: OceanBusiness,
    },
    {
        path: ComputeToData.path,
        pathname: `/${ComputeToData.path}/info`,
        name: 'Compute to Data',
        data: ComputeToData,
    }
]

=======
        path: IntroToDataDefi.path,
        pathname: `/${IntroToDataDefi.path}/info`,
        name: 'Intro to Data Defi',
        data: IntroToDataDefi,
    }
]


// chaptersByCourse: Used to render chapter data of each course.
// the key in chaptersByCourse == the path in courseData
>>>>>>> Add-ITDF
type ChapterDataDictionary = {
    [key: string]: any,
}

export const chaptersByCourse: ChapterDataDictionary = {
    "ocean101": Ocean101Chapters,
<<<<<<< HEAD
    "oceanOutreach": OceanOutreachChapters,
    "oceanBusiness": OceanBusinessChapters,
    "computeToData": ComputeToDataChapters
}


=======
    "introToDataDefi": IntroToDataDefiChapters
}
>>>>>>> Add-ITDF
