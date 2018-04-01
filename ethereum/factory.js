// Tell web3 that a deployed copy of CampaignFactory exists.
import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

// Pass in Contract ABI & Address of already deployed contract.
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  ' 0xaA843b9fef2Db21c27b5EB810844d32267A3510E'
);

export default instance;
