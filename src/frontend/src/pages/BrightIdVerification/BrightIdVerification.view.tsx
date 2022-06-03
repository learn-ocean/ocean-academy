import { Button } from 'app/App.components/Button/Button.controller'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { useState, useEffect } from 'react'
import QRCode from 'qrcode.react';
import {verifyContextId} from "brightid_sdk"
import Web3 from 'web3';

//prettier-ignore
import { BrightIdVerifCard, BrightIdVerifStyled, CodeInputCard, BrightIdVerifTitle, QRCodeCard } from './BrightIdVerification.style'

type EmailVerificationViewProps = {
}

export const BrightIdVerifView = ({}: EmailVerificationViewProps) => {
    const [resp, setResp] = useState("");
    const [account, setAccount] = useState("");

    const checkStatus = async() =>
    { 
        const resp = await verifyContextId("OceanDAO", account);
        console.log("Response for:", account, ": ",resp)
        setResp(resp.statusData);

    }

    const loadSignerAccount = async() => {

        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
            window.web3 = new Web3(window.web3.currentProvider)
            const web3 = window.web3

            const accounts = await web3.eth.getAccounts()
            
            await setAccount(accounts[0])
            checkStatus()
          } else if (window.web3) {
          } else {
            window.alert('Please install Metamask for this')
          }

    }

    useEffect(() => {
            checkStatus()
    })

    return (
        <BrightIdVerifStyled>
            <BrightIdVerifTitle>
                <h1>BrightId Verification</h1>
            </BrightIdVerifTitle>
            {!account ?  <Button type="submit" onClick={loadSignerAccount} text="Connect with metamask" icon="forgotPassword" /> : <BrightIdVerifCard>
                <p style={{fontSize: 16, margin: 'auto'}}>Connected to account: {account}</p>
                <p>Please scan the QR code below with your brightID app: </p>
                <QRCodeCard>
                <QRCode 
                style={{display: "block", margin: "auto"}}
                size={200}
                renderAs={"svg"}
                value="brightid://link-verification/http:%2f%2fnode.brightid.org/OceanDAO/5f2007fe-b44c-4a63-88c0-748c15fc09c2" />
                </QRCodeCard>
            <p>{resp && resp}</p>
            </BrightIdVerifCard> }
        </BrightIdVerifStyled>
    )
}

BrightIdVerifView.propTypes = {
    loading: PropTypes.bool,
}

BrightIdVerifView.defaultProps = {
    loading: false,
}