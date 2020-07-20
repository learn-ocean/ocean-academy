import * as React from 'react'
import { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'reducers'

import { hideProgressBar } from './ProgressBar.actions'
import { DONE, READY, SHOWING } from './ProgressBar.constants'
import { ProgressBarView } from './ProgressBar.view'

export const ProgressBar = () => {
  const progressBarLoading = useSelector((state: State) => state.loading)
  const [status, setStatus] = useState(READY)
  const dispatch = useDispatch()
  let timeout = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (progressBarLoading) {
      setStatus(SHOWING)
      timeout.current = setTimeout(() => {
        dispatch(hideProgressBar())
        setStatus(READY)
      }, 30000)
    } else {
      setStatus(DONE)
      clearTimeout(timeout.current)
      setTimeout(() => setStatus(READY), 500)
    }
  }, [progressBarLoading, dispatch])

  return <ProgressBarView status={status} />
}
