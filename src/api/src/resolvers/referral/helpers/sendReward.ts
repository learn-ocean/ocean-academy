import axios from "axios"
import { ResponseError } from "../../../shared/mongo/ResponseError";
import { getOceanUSDQuotation } from "./getOceanQuote";

export const sendReward = async(publicAddress: string, userId: number) => {
    try{
    //Get OCEAN in USD
    const oceanRewardValue = await getOceanUSDQuotation();
    let txRes: any;
    console.log("Sending reward value of: ", oceanRewardValue, " to: ", publicAddress)

    //Check the amounts that are sent
    if(process.env.NODE_ENV == "development" && oceanRewardValue > 10**8){
        throw new Error(`Trying to send ${oceanRewardValue} more than allowed reward in development mode.`)
    }

    if(oceanRewardValue > 10**10){
        throw new Error(`Trying to send ${oceanRewardValue} more than allowed reward in production mode.`)
    }

    if( 0 < oceanRewardValue){
        txRes = await axios.post(process.env.SECURE_WALLET_ADDR + "/sendReward",
        {
          referrer: userId,
          refferrerWallet: publicAddress,
          secretB: process.env.SECRET_B,
          reward: oceanRewardValue
        })
        return txRes.data.tx.hash;
    }

    }catch(e){
        if(e.response){
            throw new ResponseError(e.response.status, e.response.data.error)
        }
        console.log("Following error occurred while sending the reward: ", e);
        throw new ResponseError(500, "An error occured. Please try again later.")
    }
}