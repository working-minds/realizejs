'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prop_types = require('../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

var _realize = require('../realize');

var _realize2 = _interopRequireDefault(_realize);

var _i18n = require('../i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  propTypes: {
    actionUrls: _prop_types2.default.object,
    actionMethods: _prop_types2.default.object,
    destroyConfirm: _prop_types2.default.node
  },

  getDefaultProps: function getDefaultProps() {
    return {
      actionUrls: {},
      actionMethods: null,
      destroyConfirm: _i18n2.default.t('table.destroyConfirm')
    };
  },
  getRestActionUrl: function getRestActionUrl(action, id) {
    var actionUrls = (0, _merge2.default)(_realize2.default.config.restUrls, this.props.actionUrls);
    var actionUrl = actionUrls[action];
    var actionBaseUrl = this.getActionBaseUrl();
    var actionQueryString = this.getActionQueryString();

    actionUrl = actionUrl.replace(/:url/, actionBaseUrl);
    if (!!id) {
      actionUrl = actionUrl.replace(/:id/, id);
    }

    return actionUrl + actionQueryString;
  },
  getRestActionMethod: function getRestActionMethod(action) {
    var actionMethods = (0, _merge2.default)(_realize2.default.config.restMethods, this.props.actionMethods);
    return actionMethods[action];
  },
  getActionBaseUrl: function getActionBaseUrl() {
    var baseUrlMatches = this.props.url.match(/^(.*)\?/);
    if (!!baseUrlMatches) {
      return baseUrlMatches[1];
    } else {
      return this.props.url;
    }
  },
  getActionQueryString: function getActionQueryString() {
    var queryStringMatches = this.props.url.match(/\?.*$/);
    if (!!queryStringMatches) {
      return queryStringMatches[0];
    } else {
      return "";
    }
  }
};