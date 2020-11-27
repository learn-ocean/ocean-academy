import { showToaster } from 'app/App.components/Toaster/Toaster.actions'
import { SUCCESS } from 'app/App.components/Toaster/Toaster.constants'
import * as React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { State } from 'reducers'

// We need to find a new solution that generalizes over all the courses. 
// import { ChapterData } only worked when there was one ChapterData.
import { chapterData } from '../Courses/ocean101/Chapters/Chapters.data'
import { courseData } from '../Course/Course.data'

import { addProgress } from './Chapter.actions'
import { PENDING, RIGHT, WRONG } from './Chapter.constants'
import { ChapterView } from './Chapter.view'
import { Footer } from './Footer/Footer.controller'

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

  // courseData.forEach((course) => {

  useEffect(() => {
    chapterData.forEach((chapter) => {
      if (pathname === chapter.pathname)
        setData({
          course: chapter.data.course,
          exercise: chapter.data.exercise,
          solution: chapter.data.solution,
          supports: chapter.data.supports,
          questions: chapter.data.questions,
        })
    })
  }, [pathname])

  const validateCallback = () => {
    if (data.questions.length > 0) {
      let ok = true
      data.questions.forEach((question) => {
        console.log(question)
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
      <Footer />
    </>
  )
}
