import * as PropTypes from 'prop-types'
import * as React from 'react'
import { CourseStyled, LeftBox,CompletionPercentage,ResumeCourse, CreatureWrapper, CurrentChapter, CourseTitle, SubTitle, Section, Description, ProgressTitle, PreviousNextChapter, ChapterProgression } from './Course.style'
import { CourseViewProps } from './Course.controller'
import { Link } from 'react-router-dom'
import { ChapterData } from 'pages/Chapter/Chapter.controller'
import { COURSE_TYPE, getRemainingChaters } from 'helpers/courses'
import {Button} from "app/App.components/Button/Button.controller"

type ProgressProps = {
    courseProgress: string[]
    allChapters: ChapterData[]
    completionLink: string
    course: COURSE_TYPE
}

const ProgressView = ({courseProgress,allChapters, completionLink, course}: ProgressProps) => {
    const completionPercentage = Math.trunc((courseProgress.length / allChapters.length) * 100)
    const remainingChapters = getRemainingChaters(course, courseProgress)
    //Check if we are in the last chapter
    const isLastChapter = remainingChapters.length == 0;
    const currentChapterNb = !isLastChapter ? remainingChapters[0] - 1 : allChapters.length - 1
    const currentChapter = allChapters[currentChapterNb]
    const last2Chapter = allChapters[currentChapterNb - 2]
    const lastChapter = allChapters[currentChapterNb - 1]
    const nextChapter = allChapters[currentChapterNb + 1]
    const next2Chapter = allChapters[currentChapterNb + 2]

    let buttonText;

    if(isLastChapter){
        buttonText = "GET CERTIFICATE"
    }
    else{
        buttonText = completionPercentage == 0 ? "START COURSE" : "RESUME COURSE"
    }

    return (
            <>
            <ProgressTitle>
            <SubTitle>Progress</SubTitle>
            <CompletionPercentage>
                {completionPercentage}%
            </CompletionPercentage>
            </ProgressTitle>
                <Description>
                    <ChapterProgression>
                    {!nextChapter && <PreviousNextChapter>
                        {last2Chapter.name}
                    </PreviousNextChapter>}
                    {lastChapter && <PreviousNextChapter>
                        {lastChapter.name}
                    </PreviousNextChapter>}
                    <CurrentChapter>
                        {currentChapter.name}
                    </CurrentChapter>
                    {nextChapter && <PreviousNextChapter>
                        {nextChapter.name}
                    </PreviousNextChapter>}
                    {!lastChapter && <PreviousNextChapter>
                        {next2Chapter.name}
                    </PreviousNextChapter>}
                    {!isLastChapter && <PreviousNextChapter>
                        ...
                    </PreviousNextChapter>}
                    </ChapterProgression>
                    <ResumeCourse>
                        <Link to={!isLastChapter ? currentChapter.pathname : completionLink} style={{marginTop: "50px"}}>
                            <Button text={buttonText} color="primary"  />
                        </Link>
                    </ResumeCourse>
                </Description>
            </>
        )
    }


export const CourseView = ({ course, chapterData, description, takeaways, courseProgress, seaCreature, completionLink }: CourseViewProps) => (
    <>
        <CourseStyled>
            <LeftBox>
                <CourseTitle>
                    {course.name}
                </CourseTitle>
                <Section>
                    <SubTitle>
                        About the course
                    </SubTitle>
                    <Description>
                        {description}
                    </Description>
                </Section>
                <Section>
                    <SubTitle>
                        What you will learn
                    </SubTitle>
                    <Description>
                    {takeaways.map(t => <p key={t}>{t}</p>)}
                    </Description>
                </Section>
            </LeftBox>
            <LeftBox>
                <CreatureWrapper>
                    {seaCreature}
                </CreatureWrapper>
                <Section>
                    <ProgressView 
                    course={course}
                    allChapters={chapterData} 
                    courseProgress={courseProgress!} 
                    completionLink={completionLink}
                    />
                </Section>
            </LeftBox>
        </CourseStyled>
    </>
)

CourseView.propTypes = {
    course: PropTypes.string
}