
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
        name: 'Ocean 101',
        data: Ocean101,
        chapterData: Ocean101Chapters
    },
    {
        path: OceanOutreach.path,
        pathname: `/${OceanOutreach.path}/info`,
        name: 'Ocean Outreach',
        data: OceanOutreach,
        chapterData: OceanOutreachChapters
    },
    {
        path: OceanBusiness.path,
        pathname: `/${OceanBusiness.path}/info`,
        name: 'Ocean Business',
        data: OceanBusiness,
        chapterData: OceanBusinessChapters
    },
    {
        path: ComputeToData.path,
        pathname: `/${ComputeToData.path}/info`,
        name: 'Compute to Data',
        data: ComputeToData,
        chapterData: ComputeToDataChapters
    }
]


