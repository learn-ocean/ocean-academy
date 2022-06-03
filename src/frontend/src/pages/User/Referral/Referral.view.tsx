import React, {useState} from "react"
import { ProfileCard, Highlight } from "../User.style"
import { CopyIcon, Referral, ReferralNotStarted,ClaimStep,RewardAvailableSubtitle, FriendStat, PeopleIcon, FriendStats, ShareLink, CopyLink, CopyButton, ClaimStepTitle, RewardAvailableTitle, ClaimMessage } from "./Referral.style"
import { Button } from "app/App.components/Button/Button.controller"
import { verifyContextId } from "brightid_sdk"
import Web3 from "web3"

export type ReferralViewProps = {
    loading: boolean
    invited: number
    completed: number
    referralCode: string
    started: boolean
    startReferralCallback: () => void
    claimRewardCallback: (publicAddress: string) => void
}

export const ReferralView = ({started, invited, completed, referralCode, startReferralCallback, claimRewardCallback}: ReferralViewProps) => {
    const [account, setAccount] = useState("");
    const [resp, setResp] = useState("");
    const [brightIdError, setBrightIdError] = useState(false);
    const [step1Completed, setStep1] = useState(false);
    const referralLink = `oceanacademy.io/referral/${referralCode}`;

    const copyLinkToClipboard = async() => {
        if ('clipboard' in navigator) {
          return await navigator.clipboard.writeText(referralLink);
        } else {
          return document.execCommand('copy', true, referralLink);
        }
      }

      const checkBrightIdStatus = async(account: string) =>
      { 
          const resp = await verifyContextId("OceanDAO", account);
          if(resp.data && resp.data.error){
              await setResp(resp.data.errorMessage)
              await setBrightIdError(true);
          }
          else{
              await setStep1(true);
              await setResp(`BrightId linked to account ${account} was successfully verified.`)
          }
      }

      const claimReward = async() =>
      { 
        await claimRewardCallback(account);
      }
  
      const verifyBrightIdCallback = async() => {

          if (window.ethereum) {
             window.ethereum.on('chainChanged', (chainId: number) => {
                window.location.reload();
              });
              const chainId = await window.ethereum.request({ method: 'eth_chainId' });
              if(chainId != 137)
                throw alert("Please connect to Polygon Network.")
              window.web3 = new Web3(window.ethereum)
              await window.ethereum.enable()
              window.web3 = new Web3(window.web3.currentProvider)
              const web3 = window.web3
              const accounts = await web3.eth.getAccounts()
              await checkBrightIdStatus(accounts[0]);
              await setAccount(accounts[0])
            } else {
              window.alert('Please install Metamask for this')
            }
      }

    return(
        <ProfileCard>
                {started ? 
                <Referral>
                    <ShareLink>
                    <h1>Share your referral link:</h1>
                    <CopyLink className="copyLink" onClick={copyLinkToClipboard}>
                    {`oceanacademy.io/referral/${referralCode}`}
                    <CopyButton>
                        Copy
                        <CopyIcon>
                        <use xlinkHref={`/icons/sprites.svg#copy`} />
                    </CopyIcon>
                    </CopyButton>
                    </CopyLink>
                    </ShareLink>
                    <FriendStats>
                        <FriendStat><PeopleIcon>
                        <use xlinkHref={`/icons/sprites.svg#people`} />
                        </PeopleIcon> {invited} {invited == 1 ? 'person' : 'people'} joined</FriendStat>
                        <FriendStat>    <PeopleIcon>
                        <use xlinkHref={`/icons/sprites.svg#checkmark-circle`} />
                        </PeopleIcon>{completed} completed Ocean101</FriendStat>
                        <div style={{padding: "15px 0 0 0"}}>
                    {completed >= 0 ?
                    <RewardAvailableView 
                        resp={resp} 
                        brightIdError={brightIdError}
                        step1Completed={step1Completed} 
                        claimRewardCallback={claimReward} 
                        verifyBrightIdCallback={verifyBrightIdCallback} 
                    />
                    :
                    <p style={{fontSize: "20px"}}><Highlight>Invite {3 - completed} more friends</Highlight> and earn 15 USD in mOCEAN</p>
                    }
                    </div>
                    </FriendStats>
                </Referral>
                            :
                <ReferralNotStarted>
                    <p><Highlight>Invite 3 friends </Highlight> and earn 15 USD in mOCEAN</p>
                    <div style={{width: "150px"}}>
                    <Button
                        type="button"
                        text="Invite"
                        icon="referral"
                        onClick={startReferralCallback}
                        />
                    </div>
                </ReferralNotStarted>
                }
    </ProfileCard>
)}

type RewardAvailableViewProps = {
    resp: string
    brightIdError: boolean
    step1Completed: boolean
    verifyBrightIdCallback: () => void
    claimRewardCallback: () => void
}

const RewardAvailableView = ({resp,brightIdError, step1Completed,verifyBrightIdCallback,claimRewardCallback}: RewardAvailableViewProps) => (
    <>
        <RewardAvailableTitle>Congratulations! Your reward is available.</RewardAvailableTitle>
        <RewardAvailableSubtitle>Please follow the following steps to claim your reward.</RewardAvailableSubtitle>
        <ClaimStep>
            <ClaimStepTitle>Step 1: Verify your bright ID</ClaimStepTitle>
            <div style={{width: "150px"}}>
            <Button
                type="button"
                text="Verify bright id"
                icon="people"
                onClick={verifyBrightIdCallback}
                />
            </div>
        </ClaimStep>
        {resp && 
        <ClaimStep>
            <ClaimMessage style={{color: "grey", fontSize: "14px"}}>
            {resp}
            </ClaimMessage>
        </ClaimStep>
        }
        {step1Completed && 
        <ClaimStep>
        <ClaimStepTitle>Step 2: Claim your reward</ClaimStepTitle>
        <div style={{width: "150px"}}>
        <Button
            type="button"
            text="Claim reward"
            icon="wallet"
            onClick={claimRewardCallback}
            />
        </div>
    </ClaimStep>                            
    }
    </>
)