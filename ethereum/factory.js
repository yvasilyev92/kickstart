// Tell web3 that a deployed copy of CampaignFactory exists.
import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

// Pass in Contract ABI & Address of already deployed contract.
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x4831c8AbB48208385d5f82Db8abE39a3839cC643'
);

export default instance;
