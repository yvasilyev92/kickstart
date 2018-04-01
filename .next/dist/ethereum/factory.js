'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Pass in Contract ABI & Address of already deployed contract.
// Tell web3 that a deployed copy of CampaignFactory exists.
var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0xaA843b9fef2Db21c27b5EB810844d32267A3510E');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbkZhY3RvcnkiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFxQjs7Ozs7O0FBRTVCO0FBSkE7QUFLQSxJQUFNLFdBQVcsSUFBSSxjQUFBLEFBQUssSUFBVCxBQUFhLFNBQzVCLEtBQUEsQUFBSyxNQUFNLDBCQURJLEFBQ2YsQUFBMkIsWUFEN0IsQUFBaUIsQUFFZixBQUdGOztrQkFBQSxBQUFlIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvWWV2Z2VuaXkvRGVza3RvcC9ldGhlcl9wcmFjdGljZS9raWNrc3RhcnQifQ==