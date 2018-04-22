'SmartKickStarter' aka kickstart, is an Ethereum Blockchain dapp that is written in Solidity.js with a React.js/Next.js
front-end.

Deployed on Heroku: https://floating-waters-95712.herokuapp.com/
Stack: Node.js, Solidity.js, Mocha, Next.js, ganache-cli, react.js, semantic-ui, truffle, web3.

This application acts as the Blockchain equivalent of the popular crowdfunding platform KickStarter.com.

On SmartKickStarter users, those with Metamask installed & ether on the Rinkeby test network, may create project Campaigns
 and specify a minimum contribution amount just as one would do on KickStarter.

 1) Creating a Campaign designates a user as the manager of that campaign.
 2) Any user who donates to a campaign the minimum amount specified is designated an Approver for that campaign.
 3) All Ether donated to a Campaign remains in the Contract for that campaign until dispersed by majority vote.
 4) Managers may create Requests to ask approvers for permission on payments relevant to that campaign.
 5) Managers may only finalize & process payments when at least > 50% of all Approvers for that contract campaign have voted.  
