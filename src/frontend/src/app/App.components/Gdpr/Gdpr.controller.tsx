import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'reducers'

import { hideGdpr } from './Gdpr.actions'
import { GdprView } from './Gdpr.view'

export const Gdpr = () => {
  const dispatch = useDispatch()
  const showing = useSelector((state: State) => state.gdpr && state.gdpr.showing)

  const hideCallback = () => {
    dispatch(hideGdpr())
  }

  return <GdprView showing={showing} hideCallback={hideCallback} />
}
