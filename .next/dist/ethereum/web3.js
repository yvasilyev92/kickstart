'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0; // Configure web3 with a provider from metamask.


if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  // We are on the server OR the user is not running metamask.
  // We create our own provider that is accessing the network on this URL.
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/HVB3TKGffxRXAzLMp9vh');
  // Pass our provider to web3.
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLEFBQU87Ozs7OztBQUVQLElBQUksWUFBSixHQUhBOzs7QUFLQSxJQUFJLE9BQUEsQUFBTyxXQUFQLEFBQWtCLGVBQWUsT0FBTyxPQUFQLEFBQWMsU0FBbkQsQUFBNEQsYUFBYSxBQUN2RTtBQUNBO1NBQU8sQUFBSSxrQkFBSyxPQUFBLEFBQU8sS0FBdkIsQUFBTyxBQUFxQixBQUM3QjtBQUhELE9BR08sQUFDTDtBQUNBO0FBQ0E7TUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLFVBQVQsQUFBbUIsYUFBcEMsQUFBaUIsQUFDZixBQUVGO0FBQ0E7U0FBTyxBQUFJLGtCQUFYLEFBQU8sQUFBUyxBQUNqQjtBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvWWV2Z2VuaXkvRGVza3RvcC9ldGhlcl9wcmFjdGljZS9raWNrc3RhcnQifQ==