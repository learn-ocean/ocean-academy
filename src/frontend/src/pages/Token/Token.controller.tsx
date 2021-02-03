import { getUser } from 'pages/User/User.actions'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { State } from 'reducers'
import { PublicUser } from 'shared/user/PublicUser'
import Web3 from 'web3'

import Certificate from '../../abis/Certificate.json'
import { TokenView } from './Token.view'

declare global {
  interface Window {
    ethereum: any
    web3: any
  }
}

export const Token = () => {
  const dispatch = useDispatch()
  let { username } = useParams<{ username: string }>()
  const user = useSelector((state: State) => (state.users as Record<string, PublicUser | undefined>)[username])
  const [loading, setLoading] = useState(false)
  const [account, setAccount] = useState(undefined)
  const [certificateContract, setCertificateContract] = useState(undefined)

  useEffect(() => {
    dispatch(getUser({ username }))
  }, [dispatch, username])

  useEffect(() => {
    ;(async function asyncLoadWeb3() {
      await loadWeb3()
      await loadContracts()
    })()
  }, [])

  const mintCallback = () => {
    setLoading(true)
    if (certificateContract) {
      //@ts-ignore
      certificateContract.methods
        .mintUniqueTokenTo(account, user?.tokenId, `https://api.oceanacademy.io/user/token-uri/${user?.username}`)
        .send({ from: account })
        .on('transactionHash', (hash: any) => {
          console.log(hash)
          setLoading(false)
        })
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

    const networkId = await web3.eth.net.getId()

    //@ts-ignore
    const certificateData = Certificate.networks[networkId]
    if (certificateData) {
      const certificateContract = new web3.eth.Contract(Certificate.abi, certificateData.address)
      setCertificateContract(certificateContract)
    } else {
      window.alert('Certificate contract not deployed to detected network.')
    }

    setLoading(false)
  }

  return <TokenView loading={loading} user={user} mintCallback={mintCallback} />
}
