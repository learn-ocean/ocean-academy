import { showToaster } from 'app/App.components/Toaster/Toaster.actions'
import { SUCCESS } from 'app/App.components/Toaster/Toaster.constants'
import { COURSES, getNbProgressForCourse, isCourseCompletedFromTitle } from 'helpers/courses'
import { getUser } from 'pages/User/User.actions'
import * as React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { State } from 'reducers'

import { CourseData } from '../Course/Course.controller'
import { chaptersByCourse, courseData } from '../Course/Course.data'
import { addProgress } from './Chapter.actions'
import { PENDING, RIGHT, WRONG } from './Chapter.constants'
import { ChapterLocked } from './Chapter.style'
import { ChapterView } from './Chapter.view'
import { ChapterFooter } from './Footer/ChapterFooter.controller'

export interface ChapterData {
  pathname: string
  name: string
  data: Data
}

export type Question = {
  question: string
  answers: string[]
  responses: string[]
  proposedResponses?: string[]
}

export interface Data {
  course: string | undefined
  exercise: string | undefined
  solution: string | undefined
  supports: Record<string, string | undefined>
  questions: Question[]
}

export const Chapter = () => {
  const [validatorState, setValidatorState] = useState(PENDING)
  const [showDiff, setShowDiff] = useState(false)
  const { pathname } = useLocation()
  const [data, setData] = useState<Data>({
    course: undefined,
    exercise: undefined,
    solution: undefined,
    supports: {},
    questions: [],
  })
  const dispatch = useDispatch()
  const user = useSelector((state: State) => state.auth.user)

  let badgeUnlocked = false
  let counter = 0
  user?.progress?.forEach((chapter) => {
    counter++
  })
  if (user && isCourseCompletedFromTitle("ocean101", user?.progress!)) badgeUnlocked = true

  useEffect(() => {
    if (user) dispatch(getUser({ username: user.username }))

    courseData.forEach((course: CourseData) => {
      const index = course.path!
      chaptersByCourse[index].forEach((chapter: ChapterData) => {
        if (pathname === chapter.pathname)
          setData({
            course: chapter.data.course,
            exercise: chapter.data.exercise,
            solution: chapter.data.solution,
            supports: chapter.data.supports,
            questions: chapter.data.questions.map((question) => {
              return { ...question, proposedResponses: [] }
            }),
          })
      })
    })
  }, [pathname])

  const validateCallback = () => {
    if (data.questions.length > 0) {
      let ok = true
      data.questions.forEach((question) => {
        if (!question.proposedResponses) ok = false
        else {
          question.responses.forEach((response) => {
            if (!(question.proposedResponses && question.proposedResponses.indexOf(response) >= 0)) ok = false
          })
          question.proposedResponses.forEach((proposedResponse) => {
            if (!(question.responses.indexOf(proposedResponse) >= 0)) ok = false
          })
        }
        if (question.responses.length === 0) ok = true
      })
      if (ok) {
        setValidatorState(RIGHT)
        if (user) dispatch(addProgress({ chapterDone: pathname }))
        else dispatch(showToaster(SUCCESS, 'Register to save progress', 'and get your completion certificate'))
      } else setValidatorState(WRONG)
    } else {
      if (showDiff) {
        setShowDiff(false)
        setValidatorState(PENDING)
      } else {
        setShowDiff(true)
        if (data.exercise && data.solution) {
          if (
            // @ts-ignore
            data.exercise.replace(/\s+|\/\/ Type your solution below/g, '') ===
            // @ts-ignore
            data.solution.replace(/\s+|\/\/ Type your solution below/g, '')
          ) {
            setValidatorState(RIGHT)
            if (user) dispatch(addProgress({ chapterDone: pathname }))
            else dispatch(showToaster(SUCCESS, 'Register to save progress', 'and get your completion certificate'))
          } else if (data.exercise.indexOf('0x') > 0) {
            setShowDiff(false)
            setValidatorState(RIGHT)
            if (user) dispatch(addProgress({ chapterDone: pathname }))
            else dispatch(showToaster(SUCCESS, 'Register to save progress', 'and get your completion certificate'))
          } else setValidatorState(WRONG)
        } else setValidatorState(WRONG)
      }
    }
  }

  const proposedSolutionCallback = (e: string) => {
    // @ts-ignore
    setData({ ...data, exercise: e })
  }

  const proposedQuestionAnswerCallback = (e: Question[]) => {
    // @ts-ignore
    setData({ ...data, questions: e })
  }

  return (
    <>
      {pathname === '/ocean101/chapter-24' && user?.progress && getNbProgressForCourse(COURSES.OCEAN_101, user?.progress) != 23 ? (
        <ChapterLocked>Chapter locked. Please complete all previous chapters to see this chapter.</ChapterLocked>
      ) : (
        <ChapterView
          validatorState={validatorState}
          validateCallback={validateCallback}
          solution={data.solution}
          proposedSolution={data.exercise}
          proposedSolutionCallback={proposedSolutionCallback}
          showDiff={showDiff}
          course={data.course}
          supports={data.supports}
          questions={data.questions}
          proposedQuestionAnswerCallback={proposedQuestionAnswerCallback}
        />
      )}
      <ChapterFooter />
    </>
  )
}
