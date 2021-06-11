import { Option } from "../../app/App.components/Select/Select.view";
import { course as IntroToDataDefi } from '../Courses/introToDataDefi'
import { chapterData as IntroToDataDefiChapters } from '../Courses/introToDataDefi/Chapters/Chapters.data'
import { course as Ocean101 } from '../Courses/ocean101'
import { chapterData as Ocean101Chapters } from '../Courses/ocean101/Chapters/Chapters.data'
import { CourseData } from './Course.controller'

// chaptersByCourse: Used to render chapter data of each course.
// the key in chaptersByCourse == the path in courseData 
export type ChapterDataDictionary = {
    [key: string]: any
}

type CategoryDictionary = {
    [key: string]: ChapterDataDictionary
}

export type CategoryArray = {
    name: string
    data: any
}


export const categoryOptions: Option[] = [
    {
        name: 'category 1',
        path: 'category1'
    },
    {
        name: 'category 2',
        path: 'category2'
    }
]


/************************/
/*** CATEGORIZED DATA ***/
/************************/
const category1ChaptersByCourse: CategoryArray[] = [
    { 
        name: "ocean101", 
        data: Ocean101Chapters
    },
]

const category2ChaptersByCourse: CategoryArray[] = [
    { 
        name: "introToDataDefi", 
        data: IntroToDataDefiChapters 
    },
]


type CategoryDataDictionary = {
    [category: string]: CourseData
}

const category1CourseData: any = {
    "ocean101": {
        path: Ocean101.path,
        infoPath: `/${Ocean101.path}/info`,
        title: 'Ocean 101',
        description: 'Learn the fundamentals of Ocean, get your ETH wallet in 10 minutes!',
        noChapters: 23,
        data: Ocean101,
    }
}

const category2CourseData: any = {
    "introToDataDefi": {
        path: IntroToDataDefi.path,
        infoPath: `/${IntroToDataDefi.path}/info`,
        title: 'Intro to Data Defi',
        description: 'Introduction to Decentralized Finance with Data',
        noChapters: 6,
        data: IntroToDataDefi,
    }
}

export const courseCategoriesDictionaries: any = {
    "category 1": category1ChaptersByCourse,
    "category 2": category2ChaptersByCourse
}

export const courseCategoriesData: any = {
    "category 1": category1CourseData,
    "category 2": category2CourseData
}


/********************/
/*** GENERAL DATA ***/
/********************/
export const courseData: CourseData[] = [
    {
        path: Ocean101.path,
        infoPath: `/${Ocean101.path}/info`,
        title: 'Ocean 101',
        description: 'Learn the fundamentals of Ocean, get your ETH wallet in 10 minutes!',
        noChapters: 23,
        data: Ocean101,
    },
    {
        path: IntroToDataDefi.path,
        infoPath: `/${IntroToDataDefi.path}/info`,
        title: 'Intro to Data Defi',
        description: 'Introduction to Decentralized Finance with Data.',
        noChapters: 6,
        data: IntroToDataDefi,
    }
]

export const chaptersByCourse: ChapterDataDictionary = {
    "ocean101": Ocean101Chapters,
    "introToDataDefi": IntroToDataDefiChapters
}
