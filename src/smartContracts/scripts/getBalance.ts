import { ethers } from "hardhat";
import { JsonRpcProvider } from "@ethersproject/providers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

const oceanTokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
const referralAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"

async function main(){
    const accounts = await ethers.getSigners();
    const deployer = accounts[0];
    const owner = accounts[1];
    const admin = accounts[2];
    

    const provider = new JsonRpcProvider("http://127.0.0.1:8545/");
    const OceanToken = await ethers.getContractFactory("OceanToken");
    const oceanToken =  new ethers.Contract(oceanTokenAddress, OceanToken.interface, provider)
    const balance = await oceanToken.balanceOf("0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc");
    console.log("Balance is: ", balance)
  }


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  