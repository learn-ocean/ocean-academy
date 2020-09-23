import * as React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { hideToaster } from './Toaster.actions'
import { ToasterView } from './Toaster.view'
import { State } from 'reducers'

export const Toaster = () => {
  const dispatch = useDispatch()
  const toaster = useSelector((state: State) => state.toaster)

  const closeCallback = () => {
    dispatch(hideToaster())
  }

  return (
    <ToasterView
      showing={toaster.showing}
      status={toaster.status}
      title={toaster.title}
      message={toaster.message}
      closeCallback={closeCallback}
    />
  )
}
