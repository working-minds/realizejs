var GridForm = React.createClass({
  mixins: [
    CssClassMixin,
    RestActionsMixin,
    GridFormActionsMixin
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
      themeClassKey: 'gridForm',
      isLoading: false,
      createButton: {
        name: 'Adicionar',
        icon: 'add'
      },
      updateButton: {
        name: 'Atualizar',
        icon: 'edit'
      },
      cancelButton: {
        name: 'Cancelar',
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
              ref="form"
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <Grid
              {...this.propsWithoutCSS()}
              actionButtons={this.getGridFormActionButtons()}
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
