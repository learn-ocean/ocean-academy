import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../reducers'
import { ReferralView } from './Referral.view'

export const Referral = () => {
    const dispatch = useDispatch()
    const authUser = useSelector((state: State) => state.auth.user)
    const loading = useSelector((state: State) => state.loading)

    return <ReferralView 
    authUser={authUser}
    />
}