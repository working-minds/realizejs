var GridActionsMixin = {
  propTypes: {
    actionButtons: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      actionButtons: null
    };
  },

  getDefaultMemberActionButtons: function() {
    return [
      {
        icon: 'edit',
        onClick: this.getEditActionUrl
      },
      {
        icon: 'destroy',
        style: 'danger',
        onClick: this.getDestroyActionUrl
      }
    ]
  },

  getEditActionUrl: function(event, id) {
    window.location = this.props.url + '/' + id + '/edit';
  },

  getDestroyActionUrl: function(event, id) {
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