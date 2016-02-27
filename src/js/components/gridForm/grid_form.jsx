var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var UtilsMixin = require('realize/mixins/utils_mixin.jsx');
var RestActionsMixin = require('realize/mixins/rest_actions_mixin.jsx');

window.GridForm = React.createClass({
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
    eagerLoad: React.PropTypes.bool,
    readOnly: React.PropTypes.bool,
    formComponent: React.PropTypes.func,
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
        name: 'actions.add',
        icon: 'add'
      },
      updateButton: {
        name: 'actions.update',
        icon: 'edit'
      },
      cancelButton: {
        name: 'actions.cancel',
        style: 'cancel'
      },
      selectable: true,
      eagerLoad: true,
      readOnly: false,
      formComponent: Form,
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

  render: function() {
    return (
      <div className={this.className()}>
        <div className={this.className() + "__form"}>
          {this.renderForm()}
        </div>

        <div className={this.className() + "__grid"}>
          <Grid
            {...this.propsWithoutCSS()}
            actionButtons={this.getActionButtons()}
            ref="grid"
          />
        </div>
      </div>
    );
  },

  renderForm: function() {
    if(this.props.readOnly) {
      return;
    }

    var formProps = React.__spread({style: 'filter'}, this.props.form, {
      action: this.getFormAction(),
      data: this.state.selectedDataRow,
      method: this.getFormMethod(),
      submitButton: this.getFormSubmitButton(),
      otherButtons: this.getFormOtherButtons(),
      onSubmit: this.onSubmit,
      onReset: this.onReset,
      onSuccess: this.onSuccess,
      onError: this.onError,
      key: "form_" + this.generateUUID(),
      ref: "form"
    });

    return React.createElement(this.props.formComponent, formProps, null);
  },

  getFormAction: function() {
    return this.getRestActionUrl(this.state.formAction, this.state.selectedRowId);
  },

  getFormMethod: function() {
    return this.getRestActionMethod(this.state.formAction);
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
    if(this.props.readOnly) {
      return [];
    }

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
    var destroyUrl = this.getRestActionUrl('destroy', id);
    var destroyMethod = this.getRestActionMethod('destroy');

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
    var formNode = ReactDOM.findDOMNode(this.refs.form);
    formNode.reset();
  },

  clearFormErrors: function() {
    var formRef = this.refs.form;
    formRef.clearErrors();
  }

});
