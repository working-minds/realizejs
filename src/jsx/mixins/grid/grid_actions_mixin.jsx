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
    if($.isPlainObject(this.props.actionButtons) && !!this.props.actionButtons.member) {
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
        onClick: this.destroyAction
      }
    ];
  },

  getCollectionActionButtons: function() {
    if($.isPlainObject(this.props.actionButtons) && !!this.props.actionButtons.collection) {
      return this.props.actionButtons.collection;
    } else {
      return this.getDefaultCollectionActionButtons();
    }
  },

  getDefaultCollectionActionButtons: function() {
    return [
      {
        name: 'Novo',
        context: 'none',
        onClick: this.addAction
      }
    ];
  },

  renderActions: function() {
    var collectionActionButtons = this.getCollectionActionButtons();

    return (
      <GridActions
        dataRows={this.state.dataRows}
        selectedDataRowIds={this.state.selectedDataRowIds}
        onRemoveSelection={this.removeSelection}
        actionButtons={collectionActionButtons}
      />
    );
  },

  removeSelection: function() {
    this.setState({
      selectedDataRowIds: []
    });
  },

  addAction: function(event) {
    window.location = this.getActionUrl('add');
  },

  editAction: function(event, id) {
    window.location = this.getActionUrl('edit', id);
  },

  destroyAction: function(event, id) {
    var destroyUrl = this.getActionUrl('destroy', id);
    var destroyMethod = this.getActionMethod('destroy');

    if(!this.props.destroyConfirm || confirm(this.props.destroyConfirm)) {
      this.setState({isLoading: true});

      $.ajax({
        url: destroyUrl,
        method: destroyMethod,
        success: this.handleDestroy,
        error: this.handleDestroyError
      });
    }
  },

  handleDestroy: function(data) {
    this.loadData(data);
  },

  handleDestroyError: function(xhr, status, error) {
    this.setState({isLoading: false});
    console.log(error);
  }
};