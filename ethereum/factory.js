// Tell web3 that a deployed copy of CampaignFactory exists.
import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

// Pass in Contract ABI & Address of already deployed contract.
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x3229bf26668B483fAB9fe2fd731Bf2f194C67642'
);

export default instance;
