import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../reducers'
import { BrightIdVerifView } from './BrightIdVerification.view'

export const BrightIdVerif = () => {
    const dispatch = useDispatch()
    const loading = useSelector((state: State) => state.loading)


    return <BrightIdVerifView />
}