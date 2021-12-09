import got from 'got';
import {Token, TokenModel } from '../../shared/tokens/Token';
import { UserModel, MintedToken } from '../../shared/user/User'
import { ObjectId } from 'mongodb';

const Web3 = require('web3')

interface ApiTokenResult {
    tokenID: string;
    hash: string;
    timeStamp: string
}

export class TokenRobot{
    interval: number;
    web3: any;
    api_url: string;
    contract_addr: string;

    /**
     * Set up a token robot with interval input used in the timeout.
     * @param interval 
     */
    constructor(interval: number){
       this.interval = interval;
       this.api_url = process.env.NODE_ENV  === 'production' ? "https://api.etherscan.io" : "https://api-rinkeby.etherscan.io"
       this.contract_addr =  process.env.NODE_ENV  === 'production' ? "0x2cd36057b261b2d625999d7118b5477d39da842a" : "0x2cD36057B261b2d625999D7118b5477D39Da842a"
       this.web3 = new Web3( process.env.WEB3_WSS_NODE as String);
       console.info("Token robot set up with interval: ", interval)
    }

    /**
     * Main run loop of the robot.
     * Checks the difference between the blockchain minted tokens 
     * and the database assigned ones. If it finds a token that has not been
     * updated on the user database but exists in the chain, performs the necessary action
     * to update the db.
     */
    run = async() => {
        this.robotLog("Firing up.")

        const newTokensMap = await this.getChainTokens()
        const newTokensIds = Array.from(newTokensMap.keys())
           
        const dbTokens = await TokenModel.find()
        const dbTokenssNotSet: Map<number, ObjectId> = new Map(dbTokens.filter(x => x.userId && !x.tx).map(x => [x.tokenId, x.userId]))
        const dbTokensSet: Set<number> = new Set(dbTokens.filter(x => x.userId && x.tx).map(x => x.tokenId))
        const oddTokens = newTokensIds.filter(x => dbTokenssNotSet.get(x) && !dbTokensSet.has(x))
    
        if(oddTokens.length > 0){
            this.robotLog(`New token ids are: ${oddTokens.toString()}`)
            await this.writeTokensToDb(oddTokens, dbTokenssNotSet, newTokensMap)
        } else{
            this.robotLog("No new tokens.")
        }
    
        //Set next timer.
        setTimeout(this.run, this.interval)
    }

    /**
     * Updates the Token collection with the new mintedAt and tx info 
     * and update the corresponding User document with the Token info.
     * @param oddTokens the new tokens that are not set in the db yet.
     * @param tokensUserMap a map with tokens tokenId as keys and the associated
     * user object id as value.
     * @param newTokensMap a map with the tokens tokenId as keys and the token object
     * as value.
     */
    writeTokensToDb = async(oddTokens: number[], tokensUserMap: Map<number, ObjectId>, newTokensMap: Map<number, Token>) => {

        //Prepare the db token write operations.
        const bulkWriteToken= await Promise.all(oddTokens.map(async(x) => {
    
            const tokenObj = newTokensMap.get(x)

            return {updateOne: {        
                filter: { tokenId : x },
                update: { $set: tokenObj },
                upsert: true} 
            }
        }))

        //Prepare the db user write operations.
        const bulkWriteUser= await Promise.all(oddTokens.map(async(x) => {

            const tokenObj = newTokensMap.get(x)

            if(tokenObj && tokenObj.tx && tokenObj.mintedAt){

                const tokenObjUser = await this.getTxInput(tokenObj.tx, tokenObj.mintedAt)
                const userId = tokensUserMap.get(x)
    
                return {updateOne: {        
                    filter: { _id : tokenObjUser.tokenId > 0 ? userId : "" },
                    update: { $set: { [`tokens.${tokenObjUser.course}`] : tokenObjUser } } 
                }
            }
        }
           
            return {}

        }))

        await TokenModel.bulkWrite(bulkWriteToken)
        await UserModel.bulkWrite(bulkWriteUser)
    }

    /**
     * Gets the input parameter for a given transaction hash
     * and outputs the correct Token format for the db.
     * @param tx 
     * @returns 
     */
    getTxInput = async(tx: string, mintedAt: Date): Promise<MintedToken> => {
        try{
            const transaction = await this.web3.eth.getTransaction(tx)
    
            //@ts-ignore
            const input = (transaction.input)
        
            const input_data = '0x' + input.slice(10);  // get only data without function selector
            this.robotLog(`Token robot got transaction for hash ${tx}: ${input_data.toString()}`)
        
            const params = this.web3.eth.abi.decodeParameters([{type:'address', name: "_to"}, {type:'uint', name: "_tokenId"}, {type:'string', name: "_tokenURI"}], input_data);
        
            const splittedURI = params._tokenURI.split("/")
            const tokenUri = params._tokenURI
            const account = params._to
            const tokenId = params._tokenId
            const course = splittedURI[splittedURI.length - 1]
        
            return {course:course, account: account, tokenUri: tokenUri, tx: tx, mintedAt: mintedAt, tokenId: tokenId}
        }catch(error){
            console.log(`The error: ${error} ocurred while dealing with ${tx} and transaction:`)
            return {course:"", account: "", tokenUri: "", tx: "", mintedAt: mintedAt, tokenId: -1}
        }
    
    }

    /**
     * Api call for getting the contract new token mints.
     * @returns a map with enries {tokenId -> Token}
     */
    getChainTokens = async() : Promise<Map<number, Token>>  => { 
        const req: any  = await got(this.api_url + 
        `/api?module=account&action=tokennfttx&contractaddress=${this.contract_addr}`
        +`&page=1`
        + `&offset=10000`
        + `&startblock=0`
        + `&endblock=27025780`
        + `&sort=desc`
        +`&apikey=${process.env.ETHERSCAN_API_KEY as String}`
        ).json();

        if(req.result){
            const data: ApiTokenResult[] = process.env.NODE_ENV  == 'production' ? req.result : req.result.slice(0,100)
            
            return new Map(
                data.map(x => [parseInt(x.tokenID), {tokenId: parseInt(x.tokenID), tx: x.hash, mintedAt: new Date(parseInt(x.timeStamp) * 1000)}])
                )
         }else{
             console.error("Api etherscan request failing.")
             return new Map();
         }
    }

    /**
     * Helper function for logging
     * @param log the log text.
     */
    robotLog = async(log: string) => console.info("Token robot:", log)

}