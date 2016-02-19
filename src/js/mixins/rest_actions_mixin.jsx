var RestActionsMixin = {
  propTypes: {
    actionUrls: React.PropTypes.object,
    actionMethods: React.PropTypes.object,
    destroyConfirm: React.PropTypes.node
  },

  getDefaultProps: function() {
    return {
      actionUrls: null,
      actionMethods: null,
      destroyConfirm: 'Tem certeza que deseja remover este item?'
    };
  },

  getRestActionUrl: function(action, id) {
    var actionUrls = this.props.actionUrls || Realize.config.restUrls;
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
    var actionMethods = this.props.actionMethods || Realize.config.restMethods;
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