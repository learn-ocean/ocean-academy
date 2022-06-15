import {verifyContextId} from "brightid_sdk"
import { ObjectId } from "mongodb"
import { ReferralModel } from "../../../shared/referral/Referral"
import { ResponseError } from "../../../shared/mongo/ResponseError"
import { ethers } from "ethers"

export const OCEAN_DAO_CONTEXT = "OceanDAO"

export const verifyBrightId = async(userId: ObjectId, publicAddress:string)=>{
        const resp: any = await verifyContextId(OCEAN_DAO_CONTEXT, publicAddress);
        if(resp.data && resp.data.error)
            throw new ResponseError(400, "BrightID error: " + resp.data.errorMessage)
        
        for(const addr of resp.contextIds){
            let addrChecksum = ethers.utils.getAddress(addr);
            const referralsQuery = await ReferralModel.find(
                {$and: [
                {publicAddress: addrChecksum}, 
                {referrerId:{$ne:userId}}]
            })
            if(referralsQuery.length > 0)
                throw new ResponseError(400, 'Not elligible to reward.')
        }
        return;
}

export const verifyNonce = async(publicAddress: string, signedNonce: string, nonce: number) => {
    try {
        const from = publicAddress;
        const recoveredAddr = ethers.utils.verifyMessage(nonce.toString(), signedNonce);
        if (recoveredAddr.toLowerCase() === from.toLowerCase()) {
            console.log(`Successfully Recovered signer as ${recoveredAddr}`);
        } else {
            console.log(
                `Failed to verify signer when comparing ${recoveredAddr} to ${from}`,
            );
        }
    } catch (err) {
        console.error(err);
    }
}