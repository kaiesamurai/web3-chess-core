

require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
const fs = require('fs');



task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    core_testnet: {
      url: 'https://rpc.test.btcs.network',
      accounts:  [process.env.WALLET_KEY],
      chainId: 1115,
   },
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts:  [process.env.WALLET_KEY]
    },
    frxTestnet: {
      url: "https://rpc.testnet.frax.com",
      chainId: 2522,
      accounts:  [process.env.WALLET_KEY]
    },

    //goerli: {
      //url: "",
      //accounts: [ process.env.privateKey ]
    //}
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};