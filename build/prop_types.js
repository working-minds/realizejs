'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _i18n = require('./i18n/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _react.PropTypes, {
  localizedString: function localizedString(props, propName, componentName) {
    var value = props[propName];
    if (value === null || value === undefined || typeof value === "string" && value.length === 0) {
      return null;
    }

    var translatedValue = _i18n2.default.t(value);
    if (typeof value !== "string" || typeof translatedValue !== "string" || translatedValue.length === 0) {
      return new Error('Property ' + propName + ' from ' + componentName + ' is not a localized string.');
    }
  }
});