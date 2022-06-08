import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "reducers";
import { ReferralView } from "./Referral.view";
import { PrivateUser } from "shared/user/PrivateUser";
import { startReferral, getReferralInfo, claimReward } from "./Referral.actions";
import { ReferralInfoOutputs } from "shared/referral/ReferralInfo";
import { ReferralState } from "reducers/referral";

export type ReferralProps = {
    user : PrivateUser
}

export const Referral = ({user}: ReferralProps) => {
    const dispatch = useDispatch()
    const loading = useSelector((state: State) => state.loading)
    const started = useSelector((state: State) => state.referral.started)
    const data = useSelector((state: State) => state.referral.data)


    const startReferralCallback = () => {
        dispatch(startReferral({}))
      }

    const claimRewardCallback = (publicAddress: string) => {
        dispatch(claimReward({publicAddress, signedNonce: "1000"}))
    }

    useEffect(() => {
        dispatch(getReferralInfo({}))
      }, [dispatch])

    return <ReferralView 
    invited={data?.invited ? data?.invited : 0}
    completed={data?.completed ? data?.completed : 0}
    //@ts-ignore
    started={started}
    referralCode={data?.referralCode ? data?.referralCode : ''}
    loading={loading}
    startReferralCallback={startReferralCallback}
    claimRewardCallback={claimRewardCallback}
    />
}