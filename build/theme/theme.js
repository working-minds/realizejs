'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

var _default = require('./mappings/default');

var _default2 = _interopRequireDefault(_default);

var _materialize = require('./mappings/materialize');

var _materialize2 = _interopRequireDefault(_materialize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var themes = {
  themes: {},
  defaultTheme: 'default',
  currentTheme: 'materialize',

  registerTheme: function registerTheme(newThemeObj, theme) {
    if (!_lodash2.default.isPlainObject(newThemeObj)) {
      throw 'Invalid Theme Object.';
    }

    if (!theme) {
      throw 'Invalid Theme Name.';
    }

    var currentThemeObj = this.themes[theme] || {};
    this.themes[theme] = _lodash2.default.merge({}, currentThemeObj, newThemeObj);
  },
  getCurrent: function getCurrent() {
    var defaultThemeObj = this.themes[this.defaultTheme];
    var currentThemeObj = this.themes[this.currentTheme];

    return $.extend({}, defaultThemeObj, currentThemeObj);
  },
  getProp: function getProp(key) {
    if (!key) {
      return '';
    }

    var currentTheme = this.getCurrent();
    return _utils2.default.getProp(key, currentTheme);
  },
  getCssClass: function getCssClass(keys) {
    var keysArr = keys.split(' ');
    var themeClass = "";

    while (keysArr.length > 0) {
      var key = keysArr.shift();
      var classKey = key + '.cssClass';

      themeClass += this.getProp(classKey) + ' ';
    }

    return themeClass.trim();
  }
};

themes.registerTheme(_default2.default, 'default');
themes.registerTheme(_materialize2.default, 'materialize');

exports.default = themes;