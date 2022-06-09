import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../reducers'
import { ReferralView } from './Referral.view'

export const Referral = () => {
    const dispatch = useDispatch()
    const loading = useSelector((state: State) => state.loading)

    return <ReferralView />
}