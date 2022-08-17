import { BigNumber, BigNumberish, utils } from 'ethers';
import 'dotenv/config';

interface Config {
  contractAddr: string;
  logLevel: string;
  minimumProfit: number;
  gasPrice: BigNumber;
  gasLimit: BigNumberish;
  bscScanUrl: string;
  concurrency: number;
}

const contractAddr = '0xc8727553d2c28E55f8a37C98614bb49779fE72B1'; // flash bot contract address
const gasPrice = utils.parseUnits('10', 'gwei');
const gasLimit = 300000;

const bscScanApiKey = process.env.BSC_SCAN_API_KEY; // bscscan API key
const bscScanUrl = `https://api.bscscan.com/api?module=stats&action=bnbprice&apikey=${bscScanApiKey}`;

const config: Config = {
  contractAddr: contractAddr,
  logLevel: 'info',
  concurrency: 50,
  minimumProfit: 50, // in USD
  gasPrice: gasPrice,
  gasLimit: gasLimit,
  bscScanUrl: bscScanUrl,
};

export default config;
