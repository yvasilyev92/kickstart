const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath); // Check that the Directory exists, if not then build it for us.

// Loop through compiled output grabbing keys.
// 'contract' is set to keys ':CampaignFactory' & ':Campaign'.
for (let contract in output) {
  fs.outputJsonSync( // Write out a JSON file to some specified folder.
    path.resolve(buildPath, contract.replace(':','') + '.json'),
    output[contract] // The contents that we write to the JSON file.
  );
}
