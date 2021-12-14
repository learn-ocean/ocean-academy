import { COURSES, COURSE_TYPE, getProgressForCourse } from 'helpers/courses'
import * as React from 'react'
import { CourseView } from './Course.view'
import { chapterData as chapterComputeToData } from '../Courses/ComputeToData/Chapters/Chapters.data'
import { chapterData as chapterDataDefi } from '../Courses/introToDataDefi/Chapters/Chapters.data'
import { chapterData as chapterOcean101 } from '../Courses/ocean101/Chapters/Chapters.data'
import { ChapterData } from 'pages/Chapter/Chapter.controller'
import { State } from 'reducers'
import { Creature } from './Course.style'
import { useSelector } from 'react-redux'

export interface Course {
    path: string
    description: string | undefined
}

export type CourseData = {
    path: string;
    pathname: string;
    name: string;
    description: string;
    noChapters: number;
    data: Course;
    title: string;
    completionTime: number;
}


export type CourseViewProps = {
    course: COURSE_TYPE
    chapterData: ChapterData[]
    description: JSX.Element
    takeaways: string[]
    courseProgress: string[] | undefined
    seaCreature:  JSX.Element
    completionLink: string
}

export type CourseProps = {
    course: COURSE_TYPE
    chapterData: ChapterData[]
    description: JSX.Element
    takeaways: string[]
    seaCreature:  JSX.Element

}



export const Course = ({course, chapterData, description, takeaways, seaCreature}: CourseProps) => {

  const authUser = useSelector((state: State) => state.auth.user)
  const courseProgress = authUser?.progress ? getProgressForCourse(course, authUser?.progress) : []
  const completionLink = `/user/${authUser?.username}/`

    return (
        <>
            <CourseView
                course={course}
                chapterData={chapterData}
                description={description}
                takeaways={takeaways}
                courseProgress={courseProgress}
                seaCreature={seaCreature}
                completionLink={completionLink}
            />
        </>
    )
}

const ocean101Description = <div>
    <p>Ocean 101 is an interactive introduction to Ocean Protocol. </p>
<p>Course completion provides a certificate that can be minted as a NFT. </p>

<p>Ocean 101 is a prerequisite to becoming an Ocean Ambassador. </p>

</div>

const ocean101Takeways = [
"🤔 What is blockchain and why it is useful in data workflows", 
"🏄‍♂️ How to interact with the blockchain with Metamask and play money (optional)",
"🎯 What is Ocean Protocol and how it unlocks data",
"💵 How to safely earn revenue from data and algorithms with Ocean Protocol",
"🛍 How to effectively use Ocean Protocol to create data products"
]

export const Ocean101Course = () =>
     <Course 
     course={COURSES.OCEAN_101} 
     chapterData={chapterOcean101} 
     description={ocean101Description}
     takeaways={ocean101Takeways}
     seaCreature={<Creature src="/creatures/whale-full.svg" width="400px" /> }
     />

const introToDataDefiDescription = <div>

    <p>
    Data DeFi is a 6-module overview of Decentralized Finance with tokenized data assets.
    </p> 

    <p>
    It issues a completion certificate that can be minted as a NFT.
    </p>
</div>

const introToDatasTakeways = [
    "🤔 What is data tokenization and how it works", 
    "🏄‍♂️ What are liquidity pools and how they relate to Datatokens",
    "💵 How to safely earn revenue on Ocean Market",
    ]


export const IntroToDataDefiCourse = () =>
    <Course 
    course={COURSES.INTRO_TO_DATA_DEFI}
    chapterData={chapterDataDefi}
    description={introToDataDefiDescription}
    takeaways={introToDatasTakeways}
    seaCreature={<Creature src="/creatures/dolphin-full.svg" width="400px" /> }

    />

const computeToDataDesc = <div>
    <p>Compute-to-Data is a 7-module introduction to private data and algorithms monetization.</p>
    <p>It issues a completion certificate that can be minted as a NFT.</p>
</div>

const computeToDataTakeways = [
    "🤔 Current blockers in sharing data and how Ocean Protocol addresses them", 
    "🏄‍♂️ How the Compute-to-Data privacy layer works",
    "🤑 How to sell private data safely",
    "💰 How to buy private data compute"
    ]
                            
export const ComputeToDataCourse = () => 
    <Course 
    course={COURSES.COMPUTE_TO_DATA}
    chapterData={chapterComputeToData}
    description={computeToDataDesc}
    takeaways={computeToDataTakeways}
    seaCreature={<Creature src="/creatures/octopus-full.svg" width="435px" /> }

    />