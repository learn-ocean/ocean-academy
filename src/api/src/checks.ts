import axios from "axios"


export const checkSecureWallet = async() => {

    if(!process.env.SECURE_WALLET_ADDR)
        throw new Error("Secure wallet env address not set.")

    try{
    const response = await axios.get(process.env.SECURE_WALLET_ADDR,{timeout: 4000})
    console.log("Got response for secure wallet: ", response)
    }
    catch(e){
        console.log(`Error: Secure wallet test api call at address ${process.env.SECURE_WALLET_ADDR} did not work.`)
    }
}