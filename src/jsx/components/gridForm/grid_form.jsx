var GridForm = React.createClass({
  mixins: [
    CssClassMixin,
    UtilsMixin,
    RestActionsMixin
  ],

  propTypes: {
    url: React.PropTypes.string,
    paginationConfigs: React.PropTypes.object,
    sortConfigs: React.PropTypes.object,
    sortData: React.PropTypes.object,
    filter: React.PropTypes.object,
    columns: React.PropTypes.object,
    data: React.PropTypes.object,
    dataRowsParam: React.PropTypes.string,
    countParam: React.PropTypes.string,
    actionUrls: React.PropTypes.object,
    actionButtons: React.PropTypes.object,
    form: React.PropTypes.object,
    createButton: React.PropTypes.object,
    updateButton: React.PropTypes.object,
    cancelButton: React.PropTypes.object,
    isLoading: React.PropTypes.bool,
    selectable: React.PropTypes.bool,
    onSubmit: React.PropTypes.func,
    onReset: React.PropTypes.func,
    onSuccess: React.PropTypes.func,
    onError: React.PropTypes.func,
    onLoadSuccess: React.PropTypes.func,
    onLoadError: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      form: {},
      actionButtons: null,
      themeClassKey: 'gridForm',
      isLoading: false,
      createButton: {
        name: Realize.t('actions.add'),
        icon: 'add'
      },
      updateButton: {
        name: Realize.t('actions.update'),
        icon: 'edit'
      },
      cancelButton: {
        name: Realize.t('actions.cancel'),
        style: 'cancel'
      },
      selectable: true,
      onSubmit: function(event, postData) {},
      onReset: function(event) {},
      onSuccess: function(data, status, xhr) { return true; },
      onError: function(xhr, status, error) { return true; },
      onLoadSuccess: function(data) {},
      onLoadError: function(xhr, status, error) {}
    };
  },

  getInitialState: function() {
    return {
      formAction: 'create',
      selectedDataRow: null,
      selectedRowId: null,
      isLoading: this.props.isLoading
    };
  },

  componentDidMount: function() {
    this.loadGridData();
  },

  render: function() {
    //TODO: adicionar os divs de card em um componente separado.
    return (
      <div className={this.className()}>

        <div className="card">
          <div className="card-content">
            <Form
              style={"filter"}
              {...this.props.form}
              action={this.getFormAction()}
              data={this.state.selectedDataRow}
              method={this.getFormMethod()}
              submitButton={this.getFormSubmitButton()}
              otherButtons={this.getFormOtherButtons()}
              onSubmit={this.onSubmit}
              onReset={this.onReset}
              onSuccess={this.onSuccess}
              onError={this.onError}
              key={"form_" + this.generateUUID()}
              ref="form"
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <Grid
              {...this.propsWithoutCSS()}
              actionButtons={this.getActionButtons()}
              ref="grid"
            />
          </div>
        </div>
      </div>
    );
  },

  getFormAction: function() {
    return this.getActionUrl(this.state.formAction, this.state.selectedRowId);
  },

  getFormMethod: function() {
    return this.getActionMethod(this.state.formAction);
  },

  getFormSubmitButton: function() {
    if(this.state.formAction == 'create') {
      return this.props.createButton;
    } else if(this.state.formAction == 'update') {
      return this.props.updateButton;
    }

    return '';
  },

  getFormOtherButtons: function() {
    if(this.state.formAction == 'update') {
      var cancelButtonProps = $.extend({}, this.props.cancelButton, {
        type: "reset"
      });

      return [cancelButtonProps];
    }

    return [];
  },

  getActionButtons: function() {
    var actionButtons = this.props.actionButtons || {};

    if(!actionButtons.member) {
      actionButtons.member = this.getDefaultMemberActionButtons();
    }

    if(!actionButtons.collection) {
      actionButtons.collection = this.getDefaultCollectionActionButtons();
    }

    return actionButtons;
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

  getDefaultCollectionActionButtons: function() {
    return [];
  },

  onSubmit: function(event, postData) {
    this.props.onSubmit(event, postData);
  },

  onReset: function(event) {
    this.setState({
      formAction: 'create',
      selectedRowId: null,
      selectedDataRow: null
    });

    this.clearFormErrors();
    this.props.onReset(event);
  },

  onSuccess: function(data, status, xhr) {
      if(this.props.onSuccess(data, status, xhr)) {
      this.loadGridData();
      this.resetForm();
    }
  },

  onError: function(xhr, status, error) {
    return this.props.onError(xhr, status, error);
  },

  editAction: function(event, id, data) {
    this.setState({
      formAction: 'update',
      selectedRowId: id,
      selectedDataRow: data
    });

    this.clearFormErrors();
  },

  destroyAction: function(event, id) {
    var destroyUrl = this.getActionUrl('destroy', id);
    var destroyMethod = this.getActionMethod('destroy');

    if(!this.props.destroyConfirm || confirm(this.props.destroyConfirm)) {
      this.setState({isLoading: true});
      this.resetForm();

      $.ajax({
        url: destroyUrl,
        method: destroyMethod,
        success: this.handleDestroy,
        error: this.handleDestroyError
      });
    }
  },

  handleDestroy: function(data) {
    this.loadGridData(data);
  },

  handleDestroyError: function(xhr, status, error) {
    this.setState({isLoading: false});
    console.log(error);
  },

  loadGridData: function() {
    var gridRef = this.refs.grid;
    gridRef.loadData();
  },

  resetForm: function() {
    var formNode = React.findDOMNode(this.refs.form);
    formNode.reset();
  },

  clearFormErrors: function() {
    var formRef = this.refs.form;
    formRef.clearErrors();
  }

});
