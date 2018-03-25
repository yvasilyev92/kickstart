const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data : compiledFactory.bytecode })
    .send({ from : accounts[0], gas: '1000000' });

  //  Use the factory to create instance of campaign.For testing set the minimumContribution to 100 Wei.
  await factory.methods.createCampaign('100').send({
    from: accounts[0],
    gas: '1000000'
  });

  // Take the 1st element out of the array returned by getDeployedCampaigns() & assign it to campaignAddress.
  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
  // Instruct web3 to create a Javscript Representation of the Contract at the campaign address.
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface), campaignAddress
  );
});
