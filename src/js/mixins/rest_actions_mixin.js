import PropTypes from 'prop_types';
import merge from 'lodash/merge';
import { config, i18n } from 'realize';

export default {
  propTypes: {
    actionUrls: PropTypes.object,
    actionMethods: PropTypes.object,
    destroyConfirm: PropTypes.node
  },

  getDefaultProps () {
    return {
      actionUrls: {},
      actionMethods: null,
      destroyConfirm: i18n.t('table.destroyConfirm')
    };
  },

  getRestActionUrl (action, id) {
    var actionUrls = merge(config.restUrls, this.props.actionUrls);
    var actionUrl = actionUrls[action];
    var actionBaseUrl = this.getActionBaseUrl();
    var actionQueryString = this.getActionQueryString();

    actionUrl = actionUrl.replace(/:url/, actionBaseUrl);
    if(!!id) {
      actionUrl = actionUrl.replace(/:id/, id);
    }

    return actionUrl + actionQueryString;
  },

  getRestActionMethod (action) {
    var actionMethods = merge(config.restMethods, this.props.actionMethods);
    return actionMethods[action];
  },

  getActionBaseUrl () {
    var baseUrlMatches = this.props.url.match(/^(.*)\?/);
    if(!!baseUrlMatches) {
      return baseUrlMatches[1];
    } else {
      return this.props.url;
    }
  },

  getActionQueryString () {
    var queryStringMatches = this.props.url.match(/\?.*$/);
    if(!!queryStringMatches) {
      return queryStringMatches[0];
    } else {
      return "";
    }
  }
}
