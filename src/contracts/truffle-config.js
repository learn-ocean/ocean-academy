const HDWalletProvider = require('@truffle/hdwallet-provider')
require('dotenv').config()

const Web3 = require('web3');
const web3 = new Web3();
const gasPrice = web3.utils.toWei('50', 'gwei');

module.exports = {
  contracts_build_directory: '../frontend/src/abis',
  // gasPrice: 250000000000,
  compilers: {
    solc: {
      version: '^0.6.0',
    },
  },
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
      gasPrice
    },
    test: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
      gasPrice
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(process.env.MNEMONIC, `https://rinkeby.infura.io/v3/${process.env.INFURA_ID}`)
      },
      network_id: 4,
      gasPrice
    },
    mainnet: {
      provider: function () {
        return new HDWalletProvider(process.env.MNEMONIC, `https://mainnet.infura.io/v3/${process.env.INFURA_ID}`)
      },
      network_id: 1,
      gasPrice
    },
  },
}
