import { course } from '..'
import { data as data1 } from './Chapter1'
import { data as data2 } from './Chapter2'
import { data as data3 } from './Chapter3'
import { data as data4 } from './Chapter4'
import { data as data5 } from './Chapter5'
import { data as data6 } from './Chapter6'

// To be filled with content
export const chapterData = [
    {
        pathname: `/${course.path}/chapter-1`,
        name: '1 - What is data DeFi?',
        data: data1,
    },
    {
        pathname: `/${course.path}/chapter-2`,
        name: '2 - Introduction to Ocean Market',
        data: data2,
    },
    {
        pathname: `/${course.path}/chapter-3`,
        name: '3 - Creation of a datatoken on Ocean Market',
        data: data3,
    },
    {
        pathname: `/${course.path}/chapter-4`,
        name: '4 - Zooming into Liquidity Pools',
        data: data4,
    },
    {
        pathname: `/${course.path}/chapter-5`,
        name: '5 - How to earn on Ocean Market',
        data: data5,
    },
    {
        pathname: `/${course.path}/chapter-6`,
        name: '6 - Due diligence for liquidity providers',
        data: data6,
    }
]