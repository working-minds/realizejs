var GridActionsMixin = {
  propTypes: {
    actionButtons: React.PropTypes.object,
    actionUrls: React.PropTypes.object,
    destroyConfirm: React.PropTypes.node
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
      },
      destroyConfirm: 'Tem certeza que deseja remover este item?'
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

  addAction: function(event) {
    window.location = this.getActionUrl('add');
  },

  editAction: function(event, id) {
    window.location = this.getActionUrl('edit', id);
  },

  destroyAction: function(event, id) {
    var destroyUrl = this.getActionUrl('destroy', id);

    if(!this.props.destroyConfirm || confirm(this.props.destroyConfirm)) {
      this.setState({isLoading: true});

      $.ajax({
        url: destroyUrl,
        method: 'DELETE',
        success: this.handleDestroy,
        error: this.handleDestroyError
      });
    }
  },

  removeSelection: function() {
    this.setState({
      selectedDataRowIds: []
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
    this.setState({isLoading: false});
    console.log(error);
  }

};