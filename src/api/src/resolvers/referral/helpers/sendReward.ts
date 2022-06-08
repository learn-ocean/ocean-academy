import axios from "axios"
import { ResponseError } from "../../../shared/mongo/ResponseError";

const OceanMarketCapId = 3911;
const USDMarketCapId = 2781;

export const sendReward = async(publicAddress: string, userId: number) => {

    let res;
    console.log(process.env.COINMARKETCAP_API_KEY)
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
    const oceanRewardValue = Math.floor(data.quote[OceanMarketCapId].price * 10**3);
    let txRes: any;
    if( 0 < oceanRewardValue && oceanRewardValue < 10**5){
        console.log("Before axios")
        txRes = await axios.post(process.env.SECURE_WALLET_ADDR + "/sendReward",
        {
          referrer: userId,
          refferrerWallet: publicAddress,
          secretB: process.env.SECRET_B,
          reward: oceanRewardValue
        } )

        return txRes.tx.hash;
    }

    }catch(e){
        console.log("Following error occurred while getting price conversion: ", e);
        throw new ResponseError(500, "An error occured. Please try again later.")
    }
}