import { data as data1 } from './Chapter1'
import { data as data2 } from './Chapter2'
import { data as data3 } from './Chapter3'
import { data as data4 } from './Chapter4'
import { data as data5 } from './Chapter5'
import { data as data6 } from './Chapter6'
import { data as data7 } from './Chapter7'
import { course } from '..'

// To be filled with content
export const chapterData = [
    {
        pathname: `/${course.path}/chapter-1`,
        name: '1 - Challenges of Collaborating with Data',
        data: data1,
    },
    {
        pathname: `/${course.path}/chapter-2`,
        name: '2 - The Ocean Protocol Compute Layer',
        data: data2,
    },
    {
        pathname: `/${course.path}/chapter-3`,
        name: '3 - Selling Access to Data Compute with CtD',
        data: data3,
    },
    {
        pathname: `/${course.path}/chapter-4`,
        name: '4 - Consuming a Data Asset with CtD',
        data: data4,
    },
    {
        pathname: `/${course.path}/chapter-5`,
        name: '5 - Inner Workings of CtD',
        data: data5,
    },
    {
        pathname: `/${course.path}/chapter-6`,
        name: '6 - Use Cases & Vision',
        data: data6,
    },
    {
        pathname: `/${course.path}/chapter-7`,
        name: '7 - Extras',
        data: data7,
    }
]
