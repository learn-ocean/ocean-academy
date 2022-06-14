import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "reducers";
import { ReferralView } from "./Referral.view";
import { PrivateUser } from "shared/user/PrivateUser";
import { startReferral, getReferralInfo, claimReward } from "./Referral.actions";


export type ReferralProps = {
    user : PrivateUser
}

export const Referral = ({user}: ReferralProps) => {
    const dispatch = useDispatch()
    const loading = useSelector((state: State) => state.loading)
    const started = useSelector((state: State) => state.referral.started)
    const data = useSelector((state: State) => state.referral.data)
    const tx = useSelector((state: State) => state.referral.tx)

    let referralCode = useSelector((state: State) => state.referral.referralCode)
    if(!referralCode && data)
      referralCode = data.referralCode

    const startReferralCallback = () => {
        dispatch(startReferral({}))
      }

    const claimRewardCallback = (publicAddress: string) => {
        dispatch(claimReward({publicAddress, signedNonce: "1000"}))
    }

    useEffect(() => {
        dispatch(getReferralInfo({}))
      }, [dispatch, referralCode])

    return <ReferralView 
    invited={data?.invited ? data?.invited : 0}
    completed={data?.completed ? data?.completed : 0}
    referralCode={referralCode ? referralCode : ""}
    //@ts-ignore
    started={started}
    loading={loading}
    startReferralCallback={startReferralCallback}
    claimRewardCallback={claimRewardCallback}
    tx={tx ? tx : ""}
    />
}