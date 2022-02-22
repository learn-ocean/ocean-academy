import { getUser } from 'pages/User/User.actions'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { State } from 'reducers'
import { PublicUser } from 'shared/user/PublicUser'
import { getCourseByTitle, toTokenId } from 'helpers/courses'
import Web3 from 'web3'
import Certificate from '../../abis/Certificate.json'
import { TokenView } from './Token.view'

const mainnet_addr = "0xc6bc8053dD92E4814099C7C28c7035Aa636d0Ba1"
const rinkeby_adrr = "0x2cD36057B261b2d625999D7118b5477D39Da842a"
//Certificate main net contract address
const CERTIF_ADDR = process.env.NODE_ENV == "development" || "test" ? rinkeby_adrr : mainnet_addr

declare global {
  interface Window {
    ethereum: any
    web3: any
  }
}

export const Token = () => {
  const dispatch = useDispatch()
  let { username, course } = useParams<{ username: string, course: string }>()
  const courseobj = getCourseByTitle(course);
  const user = useSelector((state: State) => (state.users as Record<string, PublicUser | undefined>)[username])
  const [loading, setLoading] = useState(false)
  const [account, setAccount] = useState(undefined)
  const [certificateContract, setCertificateContract] = useState(undefined)
  const [certificate, setCertificate] = useState(undefined)

  useEffect(() => {
    dispatch(getUser({ username }))
  }, [dispatch, username])

  useEffect(() => {
    ; (async function asyncLoadWeb3() {
      const res = await checkIfCertificateExists();
      if (!res) {
        await loadWeb3()
        await loadContracts()
      }
    })()
  }, [])

  const mintCallback = () => {
    setLoading(true)
    if (certificateContract) {
      if (courseobj && user) {
        const tokenId = toTokenId(user?.userId, courseobj)
        //@ts-ignore
        certificateContract.methods
          .mintUniqueTokenTo(account, tokenId, `https://api.oceanacademy.io/user/token-uri/${user?.username}/${courseobj.title}`)
          .send({ from: account, gas: 210000 })
          .on('transactionHash', (hash: any) => {
            console.log(hash)
            setLoading(false)
          })
      }
    }
  }

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    } else {
      window.alert('Please install Metamask for this')
    }
  }

  const loadContracts = async () => {
    setLoading(true)

    const web3 = window.web3

    const accounts = await web3.eth.getAccounts()
    setAccount(accounts[0])
    //Current chain id of provider
    const chainIdHex = await window.ethereum.request({ method: 'eth_chainId' });
    //Rinkeby chain id if testing env.
    const expectedChainId = process.env.NODE_ENV == "development" || "test" ? "0x4" : "0x1";
    console.log("Env is", process.env.NODE_ENV)

    //Check if chaind id is ethereum main net
    if (chainIdHex !== expectedChainId) {
      window.alert("Please connect metamask ethereum to main net and reload the page.")
    } else {
      //@ts-ignore
      const certificateContract = new web3.eth.Contract(Certificate.abi, CERTIF_ADDR)
      setCertificateContract(certificateContract)
    }

    setLoading(false)
  }

  const checkIfCertificateExists = async () => {
    let certificate = ""
    if (user?.tokens && courseobj?.title! in user.tokens) {
      //@ts-ignore
      setCertificate(user?.tokens[courseobj?.title!])
      setLoading(false)
      return true
    }
    return false
  }

  return <TokenView loading={loading} user={user} certificate={certificate} mintCallback={mintCallback} />
}
