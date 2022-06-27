import React, {useEffect} from "react";
import { SUCCESS } from "app/App.components/Toaster/Toaster.constants";
import { useDispatch, useSelector } from "react-redux";
import { State } from "reducers";
import { ReferralView } from "./Referral.view";
import { PrivateUser } from "shared/user/PrivateUser";
import { startReferral, getReferralInfo, claimReward } from "./Referral.actions";
import { showToaster } from "app/App.components/Toaster/Toaster.actions";


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

    const copyLinkToClipboard = async(referralLink: string) => {
      if ('clipboard' in navigator) {
        await navigator.clipboard.writeText(referralLink);
        dispatch(showToaster(SUCCESS, 'Referral link copied to clipboard', 'Share it with your friends!'));
        return;
    } else {
      return document.execCommand('copy', true, referralLink);
    }    
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
    copyLinkToClipboard={copyLinkToClipboard}
    //@ts-ignore
    started={started}
    loading={loading}
    startReferralCallback={startReferralCallback}
    claimRewardCallback={claimRewardCallback}
    tx={tx ? tx : ""}
    />
}