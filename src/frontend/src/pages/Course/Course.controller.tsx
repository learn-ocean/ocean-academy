import { Data } from '../Chapter/Chapter.controller'

export interface Course {
    path: string | undefined
    description: string | undefined
}

export interface ChapterData {
    pathname: string
    name: string
    data: Data
}