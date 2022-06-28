import axios from "axios";
import { USDMarketCapId, OceanMarketCapId, COINMARKETCAP_API_URL, REAWRD_USD_AMOUNT } from "./constants";

/**
 * Gets OCEAN USD quotation using the coin market cap api.
 * @returns OCEAN USD quotation for reward
 */
export const getOceanUSDQuotation = async(): Promise<number> => {
    const res = await axios.get(COINMARKETCAP_API_URL, {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API_KEY,
          },
        params: {
            amount: REAWRD_USD_AMOUNT,
            id: USDMarketCapId,
            convert_id: OceanMarketCapId
        }
    })

    const data = res.data.data;
    const oceanQuote = data.quote[OceanMarketCapId].price
    const rewardFactor: number = process.env.REWARD_FACTOR ? parseFloat(process.env.REWARD_FACTOR) : 0.00001;
    const oceanRewardValue = Math.floor(oceanQuote * 10**18 * rewardFactor);
    return oceanRewardValue;
}