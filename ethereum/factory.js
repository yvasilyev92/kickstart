// Tell web3 that a deployed copy of CampaignFactory exists.
import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

// Pass in Contract ABI & Address of already deployed contract.
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xdf46CB2afE1F939138aDd2b53Bd36209826123Ad'
);

export default instance;
