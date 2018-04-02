'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../ethereum/factory.js');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../components/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes.js');

var _campaign = require('../ethereum/campaign.js');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Yevgeniy\\Desktop\\ether_practice\\kickstart\\pages\\index.js?entry';


var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      arr: [{ header: 'Loading...', meta: '', description: '', fluid: true }]
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: 'renderCampaigns',
    value: function renderCampaigns() {
      var _this2 = this;

      var results = this.props.campaigns.map(function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(address) {
          var campaign;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  campaign = (0, _campaign2.default)(address);
                  _context.next = 3;
                  return campaign.methods.campaignTitle().call();

                case 3:
                  _context.t0 = _context.sent;
                  _context.t1 = address;
                  _context.t2 = _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 26
                    }
                  }, _react2.default.createElement('a', {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 27
                    }
                  }, 'View Campaign'));
                  return _context.abrupt('return', {
                    header: _context.t0,
                    meta: _context.t1,
                    description: _context.t2,
                    fluid: true
                  });

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
      _promise2.default.all(results).then(function (completed) {
        _this2.setState({ arr: completed });
      }).catch(function (e) {
        console.log(e);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, 'SmartKickStarter is managed by Yevgeniy Vasilyev & deployed on the Rinkeby Network via Contract: ', _react2.default.createElement('b', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, '0xdf46CB2afE1F939138aDd2b53Bd36209826123Ad')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'Metamask is required to interact with this application.'), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, 'Open Campaigns'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { floated: 'right', content: 'Create Campaign', icon: 'add circle', primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }))), this.renderCampaigns(), _react2.default.createElement(_semanticUiReact.Card.Group, { items: this.state.arr, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var campaigns;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 2:
                campaigns = _context2.sent;
                return _context2.abrupt('return', { campaigns: campaigns });

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps() {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJmYWN0b3J5IiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduIiwiQ2FtcGFpZ25JbmRleCIsInN0YXRlIiwiYXJyIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJyZXN1bHRzIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJhZGRyZXNzIiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiY2FtcGFpZ25UaXRsZSIsImNhbGwiLCJhbGwiLCJ0aGVuIiwiY29tcGxldGVkIiwic2V0U3RhdGUiLCJjYXRjaCIsImUiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyQ2FtcGFpZ25zIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFNOztBQUNkLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFXOztBQUNuQixBQUFPLEFBQWM7Ozs7Ozs7OztJQUVmLEE7Ozs7Ozs7Ozs7Ozs7OzBOQUVKLEE7V0FDTyxDQUFDLEVBQUMsUUFBRCxBQUFRLGNBQWMsTUFBdEIsQUFBNEIsSUFBSSxhQUFoQyxBQUE2QyxJQUFJLE9BRGpELEFBQ0QsQSxBQUFDLEFBQXVEO0FBRHZELEFBQ047Ozs7O3NDQVFnQjttQkFDaEI7O1VBQU0sZUFBVSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLGdCQUFyQjs2RkFBeUIsaUJBQUEsQUFBTyxTQUFQO2NBQUE7d0VBQUE7c0JBQUE7K0NBQUE7cUJBQ25DO0FBRG1DLDZCQUN4Qix3QkFEd0IsQUFDeEIsQUFBUztrQ0FEZTt5QkFHdkIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsZ0JBSE0sQUFHdkIsQUFBaUM7O3FCQUhWO3lDQUFBO2dDQUFBLEFBSS9CO2dEQUVKLEFBQUMsOEJBQUssdUJBQU4sQUFBMkI7Z0NBQTNCO2tDQUFBLEFBQ0U7QUFERjttQkFBQSxrQkFDRSxjQUFBOztnQ0FBQTtrQ0FBQTtBQUFBO0FBQUEscUJBUGlDLEFBTW5DLEFBQ0U7O0FBUGlDLHFDQUlyQztBQUpxQyxtQ0FLckM7QUFMcUMsMENBVXJDO0FBVnFDLDJCQUFBLEFBVS9CO0FBUE47O3FCQUhxQztxQkFBQTtrQ0FBQTs7QUFBQTtzQkFBQTtBQUF6Qjs7NkJBQUE7bUNBQUE7QUFBQTtBQUFoQixBQWFBLFNBYmdCO3dCQWFoQixBQUFRLElBQVIsQUFBWSxTQUFaLEFBQXFCLEtBQUssVUFBQSxBQUFDLFdBQWMsQUFDdkM7ZUFBQSxBQUFLLFNBQVMsRUFBQyxLQUFmLEFBQWMsQUFBSyxBQUNwQjtBQUZELFNBQUEsQUFFRyxNQUFNLFVBQUEsQUFBQyxHQUFNLEFBQ2Q7Z0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDYjtBQUpELEFBS0Q7Ozs7NkJBRVEsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBRUU7QUFGRjtBQUFBLHlCQUVFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFzRyxxSEFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGeEcsQUFFRSxBQUFzRyxBQUN0RyxnRUFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FIRixBQUdFLEFBQ0EsNEVBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSkYsQUFJRSxBQUVBLG1DQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFNBQVIsQUFBZ0IsU0FBUSxTQUF4QixBQUFnQyxtQkFBa0IsTUFBbEQsQUFBdUQsY0FBYSxTQUFwRSxBQUE2RTtvQkFBN0U7c0JBUk4sQUFNRSxBQUNFLEFBQ0UsQUFJSDtBQUpHO2lCQVJOLEFBWUcsQUFBSyxBQUVOLGlEQUFBLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQU8sS0FBQSxBQUFLLE1BQXhCLEFBQThCO29CQUE5QjtzQkFoQk4sQUFDRSxBQUNFLEFBY0UsQUFLUDtBQUxPOzs7Ozs7Ozs7Ozs7O3VCQTFDa0Isa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCQUFoQixBQUF1QyxBOzttQkFBekQ7QTtrREFDQyxFQUFFLFdBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVJpQixBLEFBeUQ1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9ZZXZnZW5peS9EZXNrdG9wL2V0aGVyX3ByYWN0aWNlL2tpY2tzdGFydCJ9