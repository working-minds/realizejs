var _merge = require('lodash/merge');

window.RestActionsMixin = {
  propTypes: {
    actionUrls: React.PropTypes.object,
    actionMethods: React.PropTypes.object,
    destroyConfirm: React.PropTypes.node
  },

  getDefaultProps: function() {
    return {
      actionUrls: {},
      actionMethods: null,
      destroyConfirm: Realize.i18n.t('table.destroyConfirm')
    };
  },

  getRestActionUrl: function(action, id) {
    var actionUrls = _merge(Realize.config.restUrls, this.props.actionUrls);
    var actionUrl = actionUrls[action];
    var actionBaseUrl = this.getActionBaseUrl();
    var actionQueryString = this.getActionQueryString();

    actionUrl = actionUrl.replace(/:url/, actionBaseUrl);
    if(!!id) {
      actionUrl = actionUrl.replace(/:id/, id);
    }

    return actionUrl + actionQueryString;
  },

  getRestActionMethod: function(action) {
    var actionMethods = _merge(Realize.config.restMethods, this.props.actionMethods);
    return actionMethods[action];
  },

  getActionBaseUrl: function() {
    var baseUrlMatches = this.props.url.match(/^(.*)\?/);
    if(!!baseUrlMatches) {
      return baseUrlMatches[1];
    } else {
      return this.props.url;
    }
  },

  getActionQueryString: function() {
    var queryStringMatches = this.props.url.match(/\?.*$/);
    if(!!queryStringMatches) {
      return queryStringMatches[0];
    } else {
      return "";
    }
  }
};

module.exports = RestActionsMixin;