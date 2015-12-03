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
    actionUrl = actionUrl.replace(/:url/, this.props.url);
    if(!!id) {
      actionUrl = actionUrl.replace(/:id/, id);
    }

    return actionUrl;
  },

  getRestActionMethod: function(action) {
    var actionMethods = this.props.actionMethods || Realize.config.restMethods;
    return actionMethods[action];
  }
};