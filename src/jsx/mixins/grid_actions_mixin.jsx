var GridActionsMixin = {
  propTypes: {
    actionButtons: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      actionButtons: null
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
    window.location = this.props.url + '/new';
  },

  editAction: function(event, id) {
    window.location = this.props.url + '/' + id + '/edit';
  },

  destroyAction: function(event, id) {
    var destroyUrl = this.props.url + '/' + id;

    $.ajax({
      url: destroyUrl,
      method: 'DELETE',
      success: this.loadData,
      error: this.handleDestroyError
    });
  },

  handleDestroyError: function(xhr, status, error) {
    console.log(error);
  }

};