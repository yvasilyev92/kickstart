import web3 from './web3.js';
import Campaign from './build/Campaign.json';

// Function uses web3 to create an instance of a contract with address passed.
export default (address) => {
  return new web3.eth.Contract(
    JSON.parse(Campaign.interface),
    address
  );
};
