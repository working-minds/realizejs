var RestActionsMixin = {
  propTypes: {
    actionUrls: React.PropTypes.object,
    actionMethods: React.PropTypes.object,
    destroyConfirm: React.PropTypes.node
  },

  getDefaultProps: function() {
    return {
      actionUrls: WRF.config.restUrls,
      actionMethods: WRF.config.restMethods,
      destroyConfirm: 'Tem certeza que deseja remover este item?'
    };
  },

  getActionUrl: function(action, id) {
    var actionUrl = this.props.actionUrls[action];
    actionUrl = actionUrl.replace(/:url/, this.props.url);
    if(!!id) {
      actionUrl = actionUrl.replace(/:id/, id);
    }

    return actionUrl;
  },

  getActionMethod: function(action) {
    return this.props.actionMethods[action];
  }

};