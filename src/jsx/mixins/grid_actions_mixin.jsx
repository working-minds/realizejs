var GridActionsMixin = {
  propTypes: {
    actionButtons: React.PropTypes.object,
    actionUrls: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      actionButtons: null,
      actionUrls: {
        index: ':url.json',
        show: ':url/:id',
        add: ':url/new',
        edit: ':url/:id/edit',
        destroy: ':url/:id'
      }
    };
  },

  getMemberActionButtons: function() {
    if($.isPlainObject(this.props.actionButtons)) {
      return this.props.actionButtons.member;
    } else {
      return this.getDefaultMemberActionButtons();
    }
  },

  getDefaultMemberActionButtons: function() {
    return [
      {
        icon: 'edit',
        onClick: this.editAction
      },
      {
        icon: 'destroy',
        style: 'danger',
        onClick: this.destroyAction
      }
    ]
  },

  getCollectionActionButtons: function() {
    if($.isPlainObject(this.props.actionButtons)) {
      return this.props.actionButtons.collection;
    } else {
      return this.getDefaultCollectionActionButtons();
    }
  },

  getDefaultCollectionActionButtons: function() {
    return [
      {
        icon: 'add',
        themeClassKey: "button.floating",
        onClick: this.addAction
      }
    ]
  },

  addAction: function(event) {
    window.location = this.getActionUrl('add');
  },

  editAction: function(event, id) {
    window.location = this.getActionUrl('edit', id);
  },

  destroyAction: function(event, id) {
    var destroyUrl = this.getActionUrl('destroy', id);

    $.ajax({
      url: destroyUrl,
      method: 'DELETE',
      success: this.handleDestroy,
      error: this.handleDestroyError
    });
  },

  getActionUrl: function(action, id) {
    var actionUrl = this.props.actionUrls[action];
    actionUrl = actionUrl.replace(/:url/, this.props.url);
    if(!!id) {
      actionUrl = actionUrl.replace(/:id/, id);
    }

    return actionUrl;
  },

  handleDestroy: function(data) {
    this.loadData(data);
  },

  handleDestroyError: function(xhr, status, error) {
    console.log(error);
  }

};