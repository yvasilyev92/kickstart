// Configure web3 with a provider from metamask.
import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server OR the user is not running metamask.
  // We create our own provider that is accessing the network on this URL.
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/HVB3TKGffxRXAzLMp9vh'
  );
  // Pass our provider to web3.
  web3 = new Web3(provider);
}

export default web3;
