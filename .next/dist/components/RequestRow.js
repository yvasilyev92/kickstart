'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _web = require('../ethereum/web3.js');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign.js');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Yevgeniy\\Desktop\\ether_practice\\kickstart\\components\\RequestRow.js';


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);
              _context.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context.sent;
              _context.next = 6;
              return campaign.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          approversCount = _props.approversCount;

      return _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, request.recipient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, request.approvalCount, ' / ', approversCount), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, 'Approve')));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIndlYjMiLCJDYW1wYWlnbiIsIlJlcXVlc3RSb3ciLCJvbkFwcHJvdmUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwiUm93IiwiQ2VsbCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiLCJhcHByb3ZhbENvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFNOztBQUNkLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWM7Ozs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7Ozs7OztvTixBQUVKLHFGQUFZLG1CQUFBO29CQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUNGO0FBREUseUJBQ1Msd0JBQVMsTUFBQSxBQUFLLE1BRHZCLEFBQ1MsQUFBb0I7OEJBRDdCO3FCQUVlLGNBQUEsQUFBSyxJQUZwQixBQUVlLEFBQVM7O2lCQUExQjtBQUZFLGtDQUFBOzhCQUFBOzhCQUdGLEFBQVMsUUFBVCxBQUFpQixlQUFlLE1BQUEsQUFBSyxNQUFyQyxBQUEyQyxJQUEzQyxBQUErQztzQkFDN0MsU0FKQSxBQUdGLEFBQW9ELEFBQ2xELEFBQVM7QUFEeUMsQUFDeEQsZUFESTs7aUJBSEU7aUJBQUE7OEJBQUE7O0FBQUE7a0JBQUE7QTs7Ozs7NkJBUUg7VUFBQSxBQUNBLE1BREEsQUFDWSx1QkFEWixBQUNBO1VBREEsQUFDSSxPQURKLEFBQ1ksdUJBRFosQUFDSTttQkFDeUIsS0FGN0IsQUFFa0M7VUFGbEMsQUFFQSxZQUZBLEFBRUE7VUFGQSxBQUVHLGlCQUZILEFBRUc7VUFGSCxBQUVXLHdCQUZYLEFBRVcsQUFDbEI7OzZCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsU0FERixBQUNFLEFBQ0EscUJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsaUJBRkYsQUFFRSxBQUFlLEFBQ2YsOEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsdUJBQU8sQUFBSyxNQUFMLEFBQVcsUUFBUSxRQUFuQixBQUEyQixPQUhwQyxBQUdFLEFBQU8sQUFBaUMsQUFDeEMsMkJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsaUJBSkYsQUFJRSxBQUFlLEFBQ2YsNEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsaUJBQUEsQUFBZSxlQUFrQixPQUxuQyxBQUtFLEFBQ0EsaUNBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTTtBQUFOO0FBQUEseUJBQU0sQUFBQyx5Q0FBTyxPQUFSLEFBQWMsU0FBUSxPQUF0QixNQUE0QixTQUFTLEtBQXJDLEFBQTBDO29CQUExQztzQkFBQTtBQUFBO1NBUFYsQUFDRSxBQU1FLEFBQU0sQUFHWDs7Ozs7QUF2QnNCLEEsQUEwQnpCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlJlcXVlc3RSb3cuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvWWV2Z2VuaXkvRGVza3RvcC9ldGhlcl9wcmFjdGljZS9raWNrc3RhcnQifQ==