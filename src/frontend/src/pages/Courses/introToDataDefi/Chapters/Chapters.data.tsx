import { data as data1 } from './Chapter1'
import { data as data2 } from './Chapter2'
import { data as data3 } from './Chapter3'
import { data as data4 } from './Chapter4'
import { data as data5 } from './Chapter5'
import { course } from '..'

// To be filled with content
export const chapterData = [
    {
        pathname: `/${course.path}/chapter-1`,
        name: '1 - [Insert Name Here]',
        data: data1,
    },
    {
        pathname: `/${course.path}/chapter-2`,
        name: '2 - [Insert Name Here]',
        data: data2,
    },
    {
        pathname: `/${course.path}/chapter-3`,
        name: '3 - [Insert Name Here]',
        data: data3,
    },
    {
        pathname: `/${course.path}/chapter-4`,
        name: '4 - [Insert Name Here]',
        data: data4,
    },
    {
        pathname: `/${course.path}/chapter-5`,
        name: '5 - [Insert Name Here]',
        data: data5,
    }
]