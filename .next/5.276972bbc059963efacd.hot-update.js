webpackHotUpdate(5,{

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(469);

var _factory = __webpack_require__(971);

var _factory2 = _interopRequireDefault(_factory);

var _Layout = __webpack_require__(1140);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(714);

var _campaign = __webpack_require__(1161);

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
        console.log("completed is : ", completed);
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
          lineNumber: 43
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'SmartKickStarter is managed by Yevgeniy Vasilyev & deployed on the Rinkeby Network via Contract: 0xdf46CB2afE1F939138aDd2b53Bd36209826123Ad'), _react2.default.createElement('h3', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJmYWN0b3J5IiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduIiwiQ2FtcGFpZ25JbmRleCIsInN0YXRlIiwiYXJyIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJyZXN1bHRzIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJhZGRyZXNzIiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiY2FtcGFpZ25UaXRsZSIsImNhbGwiLCJhbGwiLCJ0aGVuIiwiY29tcGxldGVkIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiY2F0Y2giLCJlIiwicmVuZGVyQ2FtcGFpZ25zIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFNOztBQUNkLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFXOztBQUNuQixBQUFPLEFBQWM7Ozs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7Ozs7OzBOLEFBRUo7V0FDTyxDQUFDLEVBQUMsUUFBRCxBQUFRLGNBQWMsTUFBdEIsQUFBNEIsSUFBSSxhQUFoQyxBQUE2QyxJQUFJLE9BRGpELEFBQ0QsQUFBQyxBLEFBQXVEO0FBRHZELEFBQ047Ozs7O3NDQVFnQjttQkFDaEI7O1VBQU0sZUFBVSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLGdCQUFyQjs2RkFBeUIsaUJBQUEsQUFBTyxTQUFQO2NBQUE7d0VBQUE7c0JBQUE7K0NBQUE7cUJBQ25DO0FBRG1DLDZCQUN4Qix3QkFEd0IsQUFDeEIsQUFBUztrQ0FEZTt5QkFHdkIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsZ0JBSE0sQUFHdkIsQUFBaUM7O3FCQUhWO3lDQUFBO2dDQUFBLEFBSS9CO2dEQUVKLEFBQUMsOEJBQUssdUJBQU4sQUFBMkI7Z0NBQTNCO2tDQUFBLEFBQ0U7QUFERjttQkFBQSxrQkFDRSxjQUFBOztnQ0FBQTtrQ0FBQTtBQUFBO0FBQUEscUJBUGlDLEFBTW5DLEFBQ0U7O0FBUGlDLHFDQUlyQztBQUpxQyxtQ0FLckM7QUFMcUMsMENBVXJDO0FBVnFDLDJCQUFBLEFBVS9CO0FBUE47O3FCQUhxQztxQkFBQTtrQ0FBQTs7QUFBQTtzQkFBQTtBQUF6Qjs7NkJBQUE7bUNBQUE7QUFBQTtBQUFoQixBQWFBLFNBYmdCO3dCQWFoQixBQUFRLElBQVIsQUFBWSxTQUFaLEFBQXFCLEtBQUssVUFBQSxBQUFDLFdBQWMsQUFDdkM7Z0JBQUEsQUFBUSxJQUFSLEFBQVksbUJBQVosQUFBOEIsQUFDOUI7ZUFBQSxBQUFLLFNBQVMsRUFBQyxLQUFmLEFBQWMsQUFBSyxBQUNwQjtBQUhELFNBQUEsQUFHRyxNQUFNLFVBQUEsQUFBQyxHQUFNLEFBQ2Q7Z0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDYjtBQUxELEFBTUQ7Ozs7NkJBRVEsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBRUU7QUFGRjtBQUFBLHlCQUVFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZGLEFBRUUsQUFDQSxnS0FBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FIRixBQUdFLEFBRUEsbUNBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQU8sU0FBUixBQUFnQixTQUFRLFNBQXhCLEFBQWdDLG1CQUFrQixNQUFsRCxBQUF1RCxjQUFhLFNBQXBFLEFBQTZFO29CQUE3RTtzQkFQTixBQUtFLEFBQ0UsQUFDRSxBQUlIO0FBSkc7aUJBUE4sQUFXRyxBQUFLLEFBRU4saURBQUEsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBTyxLQUFBLEFBQUssTUFBeEIsQUFBOEI7b0JBQTlCO3NCQWZOLEFBQ0UsQUFDRSxBQWFFLEFBS1A7QUFMTzs7Ozs7Ozs7Ozs7Ozt1QkExQ2tCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QkFBaEIsQUFBdUMsQTs7bUJBQXpEO0E7a0RBQ0MsRUFBRSxXQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFSaUIsQSxBQXlENUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvWWV2Z2VuaXkvRGVza3RvcC9ldGhlcl9wcmFjdGljZS9raWNrc3RhcnQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Yevgeniy\\Desktop\\ether_practice\\kickstart\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Yevgeniy\\Desktop\\ether_practice\\kickstart\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4yNzY5NzJiYmMwNTk5NjNlZmFjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MjRkMTYwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDYXJkLCBCdXR0b259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeS5qcyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gJy4uL3JvdXRlcy5qcyc7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi9ldGhlcmV1bS9jYW1wYWlnbi5qcyc7XHJcblxyXG5jbGFzcyBDYW1wYWlnbkluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBhcnI6IFt7aGVhZGVyOidMb2FkaW5nLi4uJywgbWV0YTogJycsIGRlc2NyaXB0aW9uOiAnJywgZmx1aWQ6dHJ1ZX1dXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgIGNvbnN0IGNhbXBhaWducyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZENhbXBhaWducygpLmNhbGwoKTtcclxuICAgIHJldHVybiB7IGNhbXBhaWducyB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ2FtcGFpZ25zKCkge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IHRoaXMucHJvcHMuY2FtcGFpZ25zLm1hcChhc3luYyAoYWRkcmVzcykgPT4ge1xyXG4gICAgICBsZXQgY2FtcGFpZ24gPSBDYW1wYWlnbihhZGRyZXNzKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBoZWFkZXI6IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuY2FtcGFpZ25UaXRsZSgpLmNhbGwoKSxcclxuICAgICAgICBtZXRhOiBhZGRyZXNzLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAoXHJcbiAgICAgICAgICA8TGluayByb3V0ZT17YC9jYW1wYWlnbnMvJHthZGRyZXNzfWB9PlxyXG4gICAgICAgICAgICA8YT5WaWV3IENhbXBhaWduPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICksXHJcbiAgICAgICAgZmx1aWQ6dHJ1ZVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICBQcm9taXNlLmFsbChyZXN1bHRzKS50aGVuKChjb21wbGV0ZWQpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJjb21wbGV0ZWQgaXMgOiBcIixjb21wbGV0ZWQpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHthcnI6Y29tcGxldGVkfSk7XHJcbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPGgzPlNtYXJ0S2lja1N0YXJ0ZXIgaXMgbWFuYWdlZCBieSBZZXZnZW5peSBWYXNpbHlldiAmIGRlcGxveWVkIG9uIHRoZSBSaW5rZWJ5IE5ldHdvcmsgdmlhIENvbnRyYWN0OiAweGRmNDZDQjJhZkUxRjkzOTEzOGFEZDJiNTNCZDM2MjA5ODI2MTIzQWQ8L2gzPlxyXG4gICAgICAgICAgPGgzPk9wZW4gQ2FtcGFpZ25zPC9oMz5cclxuXHJcbiAgICAgICAgICA8TGluayByb3V0ZT1cIi9jYW1wYWlnbnMvbmV3XCI+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gZmxvYXRlZD1cInJpZ2h0XCIgY29udGVudD1cIkNyZWF0ZSBDYW1wYWlnblwiIGljb249XCJhZGQgY2lyY2xlXCIgcHJpbWFyeT17dHJ1ZX0vPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAge3RoaXMucmVuZGVyQ2FtcGFpZ25zKCl9XHJcblxyXG4gICAgICAgICAgPENhcmQuR3JvdXAgaXRlbXM9e3RoaXMuc3RhdGUuYXJyfSAvPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBQUE7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUpBO0FBQUE7QUFJQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBSkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBYUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7Ozs7QUFHQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBRUE7QUFGQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUlBO0FBSkE7QUFNQTtBQUFBO0FBS0E7QUFMQTs7Ozs7Ozs7Ozs7OztBQTFDQTtBQUNBO0FBREE7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==