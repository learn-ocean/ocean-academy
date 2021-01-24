const HDWalletProvider = require('@truffle/hdwallet-provider')
require('dotenv').config()

module.exports = {
  contracts_build_directory: '../frontend/src/abis',
  compilers: {
    solc: {
      version: "^0.6.0"
    }
  },
  networks: {
   development: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*"
   },
   test: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*"
   },
   rinkeby: {
    provider: function () {
      return new HDWalletProvider(process.env.MNEMONIC, `https://rinkeby.infura.io/v3/${process.env.INFURA_ID}`)
    },
    network_id: 4,
  },
  }
};
