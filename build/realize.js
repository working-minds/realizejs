'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Realize = undefined;

var _config = require('./init/config');

var _config2 = _interopRequireDefault(_config);

var _theme = require('./theme/theme.js');

var _theme2 = _interopRequireDefault(_theme);

var _i18n = require('./i18n/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Realize = exports.Realize = {
  config: _config2.default,
  themes: _theme2.default,
  i18n: _i18n2.default,

  setConfig: function setConfig(newConfig) {
    (0, _merge2.default)(this.config, newConfig);
  }
};

exports.default = Realize;