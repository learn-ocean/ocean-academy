import axios from "axios"
import { getOceanUSDQuotation } from "./resolvers/referral/helpers/getOceanQuote"

export const checkSecureWallet = async() => {
    if(!process.env.SECURE_WALLET_ADDR)
        throw new Error("Secure wallet env address not set.")

    if(!process.env.SECRET_B)
        throw new Error("Secret B env is not set.")

    try{
    console.log("Pinging secure wallet at:", process.env.SECURE_WALLET_ADDR)
    const response = await axios.get(process.env.SECURE_WALLET_ADDR,{timeout: 4000})
    console.log("Got response for secure wallet: ", response.data)
    }
    catch(e){
        console.error(`Check error: Secure wallet check api call at address ${process.env.SECURE_WALLET_ADDR} did not work.`)
    }
    try{
        const check = await axios.post(process.env.SECURE_WALLET_ADDR + "/check",
        {secretB: process.env.SECRET_B}, 
        {timeout:4000}
        )
        console.log("Got response for secret check: ", check.data)
    }
    catch(e){
        console.error("Check error: Secure wallet check did not work.")
    }

}

export const checkCoinMarketCap = async() => {
    if(!process.env.COINMARKETCAP_API_KEY)
        throw new Error("Coin market cap wallet api key not set")

    try{
    console.log("Getting current ocean quotation.")
    const oceanQuotation = await getOceanUSDQuotation();
    console.log(`Got response by coin market cap api. Reward is ${oceanQuotation} or around ${oceanQuotation / 10**18} mOCEAN.`)
    }
    catch(e){
        console.error(`Check error: coin market cap did not work.`)
    }
}