'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _ptBR = require('./locales/pt-BR');

var _ptBR2 = _interopRequireDefault(_ptBR);

var _en = require('./locales/en');

var _en2 = _interopRequireDefault(_en);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('moment/locale/pt-br');

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

var _ptBr = require('numeral/languages/pt-br');

var _ptBr2 = _interopRequireDefault(_ptBr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var i18n = {
  locales: {},
  currentLocale: 'en',

  registerLocale: function registerLocale(newLocaleObj, locale) {
    if (!_lodash2.default.isPlainObject(newLocaleObj)) {
      throw 'Invalid Locale Object.';
    }

    if (!locale) {
      throw 'Invalid Locale Name.';
    }

    var currentLocaleObj = this.locales[locale] || {};
    this.locales[locale] = _lodash2.default.merge(currentLocaleObj, newLocaleObj);
  },

  setLocale: function setLocale(locale) {
    this.currentLocale = locale;
    // TODO normalize the locale key names - neither lib follows the standards
    _numeral2.default.language(locale.toLowerCase());
    _moment2.default.locale(locale.toLowerCase());
  },

  translate: function translate(key, throwsException) {
    if (throwsException === undefined) {
      throwsException = false;
    }

    if (typeof key !== "string") {
      if (throwsException) {
        throw 'Key is not a string';
      }

      return '';
    }

    var currentLocale = this.currentLocale;
    var localeObj = this.locales[currentLocale];

    var translation = (0, _utils.getProp)(key, localeObj);
    if (!translation) {
      if (throwsException) {
        throw 'Key not found in locale object';
      }

      translation = key;
    }

    return translation;
  },

  t: function t(key, throwsException) {
    return this.translate(key, throwsException);
  }
};

i18n.registerLocale(_en2.default, 'en');
i18n.registerLocale(_ptBR2.default, 'pt-BR');
// both numeral and moment load english by default
_numeral2.default.language('pt-br', _ptBr2.default);

i18n.setLocale(i18n.currentLocale);

exports.default = i18n;