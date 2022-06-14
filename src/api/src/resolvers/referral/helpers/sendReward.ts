import axios from "axios"
import { ResponseError } from "../../../shared/mongo/ResponseError";

const OceanMarketCapId = 3911;
const USDMarketCapId = 2781;
export const sendReward = async(publicAddress: string, userId: number) => {
    let res;
    try{
    //Get OCEAN in USD
    res = await axios.get('https://pro-api.coinmarketcap.com/v2/tools/price-conversion', {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API_KEY,
          },
        params: {
            amount: 15,
            id: USDMarketCapId,
            convert_id: OceanMarketCapId
        }
    })

    const data = res.data.data;
    const oceanQuote = data.quote[OceanMarketCapId].price
    const rewardFactor: number = process.env.REWARD_FACTOR ? parseFloat(process.env.REWARD_FACTOR) : 0.00001;
    const oceanRewardValue = Math.floor(oceanQuote * 10**8 * rewardFactor);
    let txRes: any;
    console.log("Sending reward value of: ", oceanRewardValue, " to: ", publicAddress)
    console.log("Ocean quote: ", oceanQuote)
    console.log("Reward factor: ", rewardFactor)

    //Check the amounts that are sent
    if(process.env.NODE_ENV == "development" && oceanRewardValue > 10**8){
        throw new Error(`Trying to send ${oceanRewardValue} more than allowed reward in development mode.`)
    }

    if(oceanRewardValue > 15*10**8){
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