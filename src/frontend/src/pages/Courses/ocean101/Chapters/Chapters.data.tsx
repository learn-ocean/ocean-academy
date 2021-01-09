import { ChapterData } from 'pages/Chapter/Chapter.controller'

import { course } from '..'
import { data as data1 } from '../Chapters/Chapter1'
import { data as data2 } from '../Chapters/Chapter2'
import { data as data3 } from '../Chapters/Chapter3'
import { data as data4 } from '../Chapters/Chapter4'
import { data as data5 } from '../Chapters/Chapter5'
import { data as data6 } from '../Chapters/Chapter6'
import { data as data7 } from '../Chapters/Chapter7'
import { data as data8 } from '../Chapters/Chapter8'
import { data as data9 } from '../Chapters/Chapter9'
import { data as data10 } from '../Chapters/Chapter10'
import { data as data11 } from '../Chapters/Chapter11'
import { data as data12 } from '../Chapters/Chapter12'
import { data as data13 } from '../Chapters/Chapter13'
import { data as data14 } from '../Chapters/Chapter14'
import { data as data15 } from '../Chapters/Chapter15'
import { data as data16 } from '../Chapters/Chapter16'
import { data as data17 } from '../Chapters/Chapter17'
import { data as data18 } from '../Chapters/Chapter18'
import { data as data19 } from '../Chapters/Chapter19'
import { data as data20 } from '../Chapters/Chapter20'
import { data as data21 } from '../Chapters/Chapter21'
import { data as data22 } from '../Chapters/Chapter22'
import { data as data23 } from '../Chapters/Chapter23'
import { data as data24 } from '../Chapters/Chapter24'

export const chapterData: ChapterData[] = [
    {
        pathname: `/${course.path}/chapter-1`,
        name: '1 - Why should you Care?',
        data: data1,
    },
    {
        pathname: `/${course.path}/chapter-2`,
        name: '2 - Key Concepts of Blockchain',
        data: data2,
    },
    {
        pathname: `/${course.path}/chapter-3`,
        name: '3 - Install Metamask',
        data: data3,
    },
    {
        pathname: `/${course.path}/chapter-4`,
        name: '4 - Get Play Money',
        data: data4,
    },
    {
        pathname: `/${course.path}/chapter-5`,
        name: '5 - Intro to Smart Contracts and Web3',
        data: data5,
    },
    {
        pathname: `/${course.path}/chapter-6`,
        name: '6 - Data and Web3',
        data: data6,
    },
    {
        pathname: `/${course.path}/chapter-7`,
        name: '7 -  New Data Workflows for Enterprises',
        data: data7,
    },
    {
        pathname: `/${course.path}/chapter-8`,
        name: '8 - Smart Contracts and an Open Source Cloud Computer',
        data: data8,
    },
    {
        pathname: `/${course.path}/chapter-9`,
        name: '9 - Hello World Smart Contract',
        data: data9,
    },
    {
        pathname: `/${course.path}/chapter-10`,
        name: '10 - Exploring the OCEAN Token Contract',
        data: data10,
    },
    {
        pathname: `/${course.path}/chapter-11`,
        name: '11 - Smart Contract for Storing and Reading Data',
        data: data11,
    },
    {
        pathname: `/${course.path}/chapter-12`,
        name: '12 - Buying and Selling Data using Ocean Protocol',
        data: data12,
    },
    {
        pathname: `/${course.path}/chapter-13`,
        name: '13 - What is Ocean Protocol?',
        data: data13,
    },
    {
        pathname: `/${course.path}/chapter-14`,
        name: '14 - Ocean Market and Ocean Protocol Infrastructure',
        data: data14,
    },
    {
        pathname: `/${course.path}/chapter-15`,
        name: '15 - Identity and Metadata',
        data: data15,
    },
    {
        pathname: `/${course.path}/chapter-16`,
        name: '16 - Who is a Data Provider?',
        data: data16,
    },
    {
        pathname: `/${course.path}/chapter-17`,
        name: '17 -  Who is an Algorithm Provider?',
        data: data17,
    },
    {
        pathname: `/${course.path}/chapter-18`,
        name: '18 - Who is a Data/Compute Consumer?',
        data: data18,
    },
    {
        pathname: `/${course.path}/chapter-19`,
        name: '19 - Access Control Flow',
        data: data19,
    },
    {
        pathname: `/${course.path}/chapter-20`,
        name: '20 - Compute to Data Flow',
        data: data20,
    },
    {
        pathname: `/${course.path}/chapter-21`,
        name: '21 - Use cases by vertical',
        data: data21,
    },
    {
        pathname: `/${course.path}/chapter-22`,
        name: '22 - Vision of a New Data Economy',
        data: data22,
    },
    {
        pathname: `/${course.path}/chapter-23`,
        name: '23 - Recap',
        data: data23,
    },
    {
        pathname: `${course.path}/chapter-24`,
        name: '24 - Coming Soon',
        data: data24
    }
]