var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var UtilsMixin = require('realize/mixins/utils_mixin.jsx');
var RestActionsMixin = require('realize/mixins/rest_actions_mixin.jsx');

var _merge = require('lodash/merge');
var _findIndex = require('lodash/findIndex');

window.GridForm = React.createClass({
  mixins: [
    CssClassMixin,
    UtilsMixin,
    RestActionsMixin
  ],

  propTypes: {
    clientSide: React.PropTypes.bool,
    clientSideIdField: React.PropTypes.string,
    url: React.PropTypes.string,
    paginationConfigs: React.PropTypes.object,
    sortConfigs: React.PropTypes.object,
    sortData: React.PropTypes.object,
    filter: React.PropTypes.object,
    columns: React.PropTypes.object,
    data: React.PropTypes.object,
    dataRowsParam: React.PropTypes.string,
    countParam: React.PropTypes.string,
    actionButtons: React.PropTypes.object,
    form: React.PropTypes.object,
    createButton: React.PropTypes.object,
    updateButton: React.PropTypes.object,
    cancelButton: React.PropTypes.object,
    isLoading: React.PropTypes.bool,
    selectable: React.PropTypes.oneOf(['multiple', 'none', 'one']),
    eagerLoad: React.PropTypes.bool,
    readOnly: React.PropTypes.bool,
    formComponent: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    onReset: React.PropTypes.func,
    onSuccess: React.PropTypes.func,
    onError: React.PropTypes.func,
    onLoadSuccess: React.PropTypes.func,
    onLoadError: React.PropTypes.func,
    onDestroySuccess: React.PropTypes.func,
    onDestroyError: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      clientSide: false,
      clientSideIdField: '_clientSideId',
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
      selectable: 'multiple',
      eagerLoad: true,
      readOnly: false,
      formComponent: Form,
      onSubmit: function(event, postData) {},
      onReset: function(event) {},
      onSuccess: function(data, status, xhr) { return true; },
      onError: function(xhr, status, error) { return true; },
      onLoadSuccess: function(data) {},
      onLoadError: function(xhr, status, error) {},
      onDestroySuccess: function(data) {},
      onDestroyError: function(xhr, status, error) {}
    };
  },

  getInitialState: function() {
    return {
      formAction: 'create',
      selectedDataRow: null,
      selectedRowId: null,
      isLoading: this.props.isLoading,
      clientSideData: []
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
            {...this.getGridProps()}
            actionButtons={this.getActionButtons()}
            ref="grid"
          />
        </div>
      </div>
    );
  },

  /* Form renderer */

  renderForm: function() {
    if(this.props.readOnly) {
      return;
    }

    var formProps = _merge({style: 'filter'}, this.props.form, {
      action: this.getFormAction(),
      data: this.state.selectedDataRow,
      method: this.getFormMethod(),
      resource: !!this.props.clientSide ? null : this.props.form.resource,
      inputs: this.getFormInputs(),
      errors: this.props.errors,
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
    if(!!this.props.clientSide) {
      return null;
    }

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
        type: "reset",
        onClick: this.handleResetClick
      });

      return [cancelButtonProps];
    }

    return [];
  },

  getFormInputs: function() {
    var formInputs = this.props.form.inputs;
    if(!!this.props.clientSide) {
      formInputs[this.props.clientSideIdField] = { component: 'hidden' };
    }

    return formInputs;
  },

  /* Default action buttons parser */

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
      this.getDefaultEditActionProps(),
      this.getDefaultDestroyActionProps()
    ];
  },

  getDefaultCollectionActionButtons: function() {
    return [];
  },

  getDefaultEditActionProps: function() {
    return $.extend({}, {
      icon: 'edit',
      onClick: this.editAction
    }, this.props.editActionButton);
  },

  getDefaultDestroyActionProps: function() {
    return $.extend({}, {
      icon: 'destroy',
      onClick: this.destroyAction
    }, this.props.destroyActionButton);
  },

  /* Form Submit event handlers */

  onSubmit: function(event, postData) {
    this.props.onSubmit(event, postData);
    if(!!this.props.clientSide) {
      this.handleClientSideSubmit(event, postData);
    }
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

  /* Form Reset event handlers */

  onReset: function(event) {
    this.setState({
      formAction: 'create',
      selectedRowId: null,
      selectedDataRow: null
    });

    this.clearFormErrors();
    this.props.onReset(event);
  },

  handleResetClick: function(event) {
    var formRef = this.refs.form;
    if(!(typeof formRef.haveNativeReset == "function" && !!formRef.haveNativeReset())) {
      this.onReset(event);
    }
  },

  resetForm: function() {
    var formRef = this.refs.form;
    if(typeof formRef.reset == "function") {
      formRef.reset();
    }
  },

  /* Grid member actions */

  editAction: function(event, id, data) {
    this.setState({
      formAction: 'update',
      selectedRowId: id,
      selectedDataRow: data
    });

    this.clearFormErrors();
  },

  destroyAction: function(event, id) {
    if(!!this.props.clientSide) {
      this.destroyActionClientSide(event, id);
    }
    else {
      this.destroyActionServerSide(event, id);
    }
  },

  destroyActionServerSide: function(event, id) {
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

  /* Destroy event handlers */

  handleDestroy: function(data, status, xhr) {
    this.props.onDestroySuccess(data, status, xhr);
    this.loadGridData();
  },

  handleDestroyError: function(xhr, status, error) {
    this.setState({isLoading: false});
    this.props.onDestroyError(xhr, status, error);
  },

  /* Client side mode handlers */

  getGridProps: function() {
    var gridProps = _merge({}, this.propsWithoutCSS());
    if(!!this.props.clientSide) {
      _merge(gridProps, {
        url: '',
        pagination: false,
        selectable: 'none',
        eagerLoad: false,
        key: this.generateUUID(),
        dataRowIdField: this.props.clientSideIdField,
        data: {
          dataRows: this.state.clientSideData
        },
        sortConfigs: {
          sortable: false
        }
      });
    }

    return gridProps;
  },

  handleClientSideSubmit: function(event, postData) {
    event.preventDefault();

    var submittedDataRow = _merge({}, postData);
    var submittedDataRowIndex = this.findClientSideDataIndex(submittedDataRow[this.props.clientSideIdField]);

    if(submittedDataRowIndex >= 0) {
      this.state.clientSideData.splice(submittedDataRowIndex, 1, submittedDataRow);
    } else {
      submittedDataRow[this.props.clientSideIdField] = this.generateUUID();
      this.state.clientSideData.push(submittedDataRow);
    }

    this.setState({
      formAction: 'create',
      selectedRowId: null,
      selectedDataRow: null
    }, this.props.onSuccess);
  },

  destroyActionClientSide: function(event, id) {
    var itemIndex = this.findClientSideDataIndex(id);

    this.state.clientSideData.splice(itemIndex, 1);
    this.forceUpdate(this.props.onDestroySuccess);
  },

  findClientSideDataIndex: function(id) {
    return _findIndex(this.state.clientSideData, function(item) {
      return item[this.props.clientSideIdField] == id;
    }.bind(this));
  },

  serialize: function() {
    var gridRef = this.refs.grid;
    return gridRef.serialize();
  },

  /* Utilities */

  loadGridData: function() {
    var gridRef = this.refs.grid;
    gridRef.loadData();
  },

  clearFormErrors: function() {
    var formRef = this.refs.form;
    if(typeof formRef.clearErrors == "function") {
      formRef.clearErrors();
    }
  }

});
