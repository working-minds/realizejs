'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.autobind = exports.mixin = undefined;

var _coreDecorators = require('core-decorators');

Object.defineProperty(exports, 'autobind', {
  enumerable: true,
  get: function get() {
    return _coreDecorators.autobind;
  }
});

var _mixin2 = require('./mixin');

var _mixin3 = _interopRequireDefault(_mixin2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.mixin = _mixin3.default;