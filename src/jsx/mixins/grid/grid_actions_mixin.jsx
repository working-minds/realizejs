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
        style: 'danger',
        onClick: this.destroyAction
      }
    ]
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
    ]
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
  }
};