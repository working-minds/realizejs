'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mixin;

var _reactMixin = require('react-mixin');

var _reactMixin2 = _interopRequireDefault(_reactMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mixin() {
  for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
    mixins[_key] = arguments[_key];
  }

  return function (cls) {
    return mixins.reduce(function (c, m) {
      return _reactMixin2.default.onClass(c, m);
    }, cls);
  };
}