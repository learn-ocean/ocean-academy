import * as React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { State } from 'reducers'

import { addProgress } from './Chapter.actions'
import { Footer } from './Footer/Footer.controller'
import { chapterData } from './Chapter.data'
import { ChapterView } from './Chapter.view'
import { PENDING, RIGHT, WRONG } from './Chapter.constants'

interface Data {
  course: string | undefined
  exercise: string | undefined
  solution: string | undefined
  supports: Record<string, string | undefined>
}

export const Chapter = () => {
  const [validatorState, setValidatorState] = useState(PENDING)
  const [showDiff, setShowDiff] = useState(false)
  const { pathname } = useLocation()
  const [data, setData] = useState<Data>({ course: undefined, exercise: undefined, solution: undefined, supports: {} })
  const dispatch = useDispatch()
  const user = useSelector((state: State) => state.auth.user)

  useEffect(() => {
    chapterData.forEach((chapter) => {
      if (pathname === chapter.pathname)
        setData({
          course: chapter.data.course,
          exercise: chapter.data.exercise,
          solution: chapter.data.solution,
          supports: chapter.data.supports,
        })
    })
  }, [pathname])

  const validateCallback = () => {
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
        } else setValidatorState(WRONG)
      } else setValidatorState(WRONG)
    }
  }

  const proposedSolutionCallback = (e: string) => {
    // @ts-ignore
    setData({ ...data, exercise: e })
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
      />
      <Footer />
    </>
  )
}
