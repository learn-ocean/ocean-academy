import got from 'got';
import {Token, TokenModel } from '../../shared/tokens/Token';
import { UserModel, MintedToken } from '../../shared/user/User'
import { isValidTokenId, fromTokenId } from '../../helpers/tokens';

const Web3 = require('web3')
const mainnet_addr = "0xc6bc8053dD92E4814099C7C28c7035Aa636d0Ba1"
const rinkeby_adrr = "0x2cD36057B261b2d625999D7118b5477D39Da842a"

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
       this.contract_addr =  process.env.NODE_ENV  === 'production' ? mainnet_addr : rinkeby_adrr
       this.web3 = new Web3( process.env.WEB3_WSS_NODE as String);
       console.info("Token robot set up with interval: ", interval)
    }

    /**
     * Main run loop of the robot.
     * Checks the difference between the blockchain minted tokens 
     * and the database assigned ones. If it finds a token that has not been added
     * to the database but exists in the chain, performs the necessary action
     * to update the db.
     */
    run = async() => {
        this.robotLog("Firing up.")

            const newTokensMap = await this.getChainTokens()
            const newTokensIds = Array.from(newTokensMap.keys())
               
            const dbTokensIds = new Set((await TokenModel.find()).map(x => x.tokenId))
            
            const oddTokens = newTokensIds.filter(x => !dbTokensIds.has(x) && isValidTokenId(x))
    
            if(oddTokens.length > 0){
                this.robotLog(`New token ids are: ${oddTokens.toString()}`)
                try{
                    await this.writeTokensToDb(oddTokens, newTokensMap)
                }catch(e){
                    this.robotLog("The following error occurred while writing to db: " + e)
                }
            } else{
              this.robotLog("No new tokens.")
            }

        //Set next timer.
        setTimeout(this.run, this.interval)
    }

    /**
     * Writes the token minted information to the user model and the token model. 
     * @param oddtokens: the tokens ids to be written.
     * @param tokensMap: a map of tokens ids and token content.
     */
    writeTokensToDb = async(tokensIds: number[], tokensMap: Map<number, Token>) => {

        //Prepare the db token write operations.
        const bulkWriteToken = await Promise.all(tokensIds.map(async(x) => {
    
            const tokenObj = tokensMap.get(x)

            return {updateOne: {        
                filter: { tokenId : x },
                update: { $set: tokenObj },
                upsert: true} 
            }
        }))

        //Prepare the db user write operations.
        const bulkWriteUser= await Promise.all(tokensIds.map(async(x) => {

            const tokenObj = tokensMap.get(x)

            if(tokenObj && tokenObj.tx && tokenObj.mintedAt){
                
                const {courseObj, userId} = fromTokenId(x);
                console.log("Token Obj: ", tokenObj)
                const tokenObjUser = await this.getTxInput(tokenObj.tx, tokenObj.mintedAt)
                
                if(tokenObjUser.tokenId >= 0){
                    return {updateOne: {        
                        filter: { userId : userId },
                        update: { $set: { [`tokens.${courseObj.title}`] : tokenObjUser } } 
                    }}
                }
            }
        return {}
        }
        ))

        //Write to the tb.
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