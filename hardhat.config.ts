import { task, HardhatUserConfig } from 'hardhat/config';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-waffle';
import 'dotenv/config';

// const BSC_RPC = 'https://bsc-dataseed.binance.org/';
const BSC_RPC = 'https://bsc-dataseed1.defibit.io/';
const BSC_Tetsnet_RPC = 'https://data-seed-prebsc-1-s1.binance.org:8545/';
if (!process.env.PRIVATE_KEY) throw new Error('Missing PRIVATE_KEY');
const config: HardhatUserConfig = {
  solidity: { version: '0.7.6' },
  networks: {
    hardhat: {
      // loggingEnabled: true,
      forking: {
        url: BSC_RPC,
        enabled: true,
      },
      accounts: {
        accountsBalance: '1000000000000000000000000', // 1 mil ether
      },
    },
    bscTestnet: {
      url: BSC_Tetsnet_RPC,
      chainId: 0x61,
      accounts: [process.env.PRIVATE_KEY],
    },
    bsc: {
      url: BSC_RPC,
      chainId: 0x38,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  mocha: {
    timeout: 40000,
  },
};

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = config;
