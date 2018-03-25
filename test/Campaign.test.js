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

describe('Campaigns', () => {
  // Assert Both Contracts have an address.
  it('should deploy a factory and a campaign', () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

  // Assert Campaign Manager is Accounts[0]
  it('should mark caller as the campaign manager', async () => {
    const manager = await campaign.methods.manager().call();
    assert.equal(accounts[0], manager);
  });

  // Assert people can contribute to the campaign.
  it('should allow people to contribute money and marks them as approvers.', async () => {
    await campaign.methods.contribute().send({
      value: '200',
      from: accounts[1]
    });
    const isContributor = await campaign.methods.approvers(accounts[1]).call();
    assert(isContributor);
  });

  // Assert Campaign has a minimumContribution tied to it.
  it('should require a minimum contribution', async () => {
    try {
      await campaign.methods.contribute().send({
        value: '5', // Too small, should fail.
        from: accounts[1]
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  // Assert that a manager has ability to create payment Request.
  it('should allow manager to make a payment Request.', async () => {
    await campaign.methods
      .createRequest('Buy batteries', '100', accounts[1])
      .send({
        from: accounts[0],
        gas: '1000000'
      });
    // Arrays/Maps are not returned whole, should be accessed by index.
    const request = await campaign.methods.requests(0).call();
    assert.equal('Buy batteries', request.description);
  });

  // Assert a Request can be created-approved-processed.
  it('should process a Request', async () => {
    // Contribute 10 Ether to Contract to become an Approver.
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei('10','ether')
    });
    // Create a Request using 5 of the 10 Ether in the Contract.
    await campaign.methods
      .createRequest('A', web3.utils.toWei('5','ether'), accounts[1])
      .send({
        from: accounts[0],
        gas: '1000000'
      });
    // Approver approves the Request at requests[0].
    await campaign.methods.approveRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    });
    // Manager finalizes the Request.Should disperse $ to accounts[1].
    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    });
    // Get string balance of accounts[1] in Wei. Convert to Ether and Float.
    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance,'ether');
    balance = parseFloat(balance);
    console.log(balance);
    assert(balance > 104);
  });
});
