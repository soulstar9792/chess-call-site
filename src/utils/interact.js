import React from 'react';

import { ethers } from 'ethers'
import {chainId} from './address';

require("dotenv").config()
// const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY
// const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
// const web3 = createAlchemyWeb3(alchemyKey)
// const web3 = new Web3('https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161')
// const clanCount = 5

export const connectWallet = async () => {
  // Call the widget's trigger function instead of direct MetaMask connection
  if (window.triggerMaskModal) {
    window.triggerMaskModal();
    return {
      address: "",
      status: "👆🏽 Opening MetaMask widget...",
    };
  } else {
    console.log("Widget not loaded yet");
    return {
      address: "",
      status: "😥 Widget not loaded yet.",
    };
  }
}

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      })
      const chain = await window.ethereum.request({
        method: "eth_chainId",
      })
      if (addressArray.length > 0 && chain === chainId) {
        return {
          address: addressArray[0],
          status: "👆🏽 You can play now.",
        }
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask and choose the correct chain using the top right button.",
        }
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      }
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            {/* <a target="_blank" href={`https://metamask.io/download.html`}> */}
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.(https://metamask.io/download.html)
            {/* </a> */}
          </p>
        </span>
      ),
    }
  }
}

// async function loadContract() {
//   return new web3.eth.Contract(contractABI, contractAddress)
// }

// Contract can be used to write Contract
export  const getContractWithSigner = (contractAddress, contractABI) => {
    let infuraProvider = new ethers.providers.Web3Provider(window.ethereum)
    let signer = infuraProvider.getSigner()

    let contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
    )

    return contract
}

  // Contract can be used to read Contract
export  const getContractWithoutSigner = (contractAddress, contractABI) => {
    let infuraProvider = new ethers.providers.Web3Provider(window.ethereum)

    let contract = new ethers.Contract(
        contractAddress,
        contractABI,
        infuraProvider
    )

    return contract
}

export  const getContract = (contractAddress, contractABI) => {
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let signer = provider.getSigner();

    let contract = new ethers.Contract(contractAddress, contractABI, signer)
    return contract
}