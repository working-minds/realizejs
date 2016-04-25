import React, { Component } from 'react';
import PropTypes from 'prop_types';
import $ from 'jquery';
import merge from 'lodash/merge';
import findIndex from 'lodash/findIndex';
import { mixin } from 'utils/decorators';

import {
  CssClassMixin,
  UtilsMixin,
  RestActionsMixin
} from 'mixins';

@mixin(
  CssClassMixin,
  UtilsMixin,
  RestActionsMixin
)
export default class GridForm extends Component {
  static propTypes = {
    clientSide: PropTypes.bool,
    clientSideIdField: PropTypes.string,
    url: PropTypes.string,
    paginationConfigs: PropTypes.object,
    sortConfigs: PropTypes.object,
    sortData: PropTypes.object,
    filter: PropTypes.object,
    columns: PropTypes.object,
    data: PropTypes.object,
    dataRowsParam: PropTypes.string,
    countParam: PropTypes.string,
    actionButtons: PropTypes.object,
    form: PropTypes.object,
    createButton: PropTypes.object,
    updateButton: PropTypes.object,
    cancelButton: PropTypes.object,
    isLoading: PropTypes.bool,
    selectable: PropTypes.oneOf(['multiple', 'none', 'one']),
    eagerLoad: PropTypes.bool,
    readOnly: PropTypes.bool,
    formComponent: PropTypes.func,
    onSubmit: PropTypes.func,
    onReset: PropTypes.func,
    onSuccess: PropTypes.func,
    onError: PropTypes.func,
    onLoadSuccess: PropTypes.func,
    onLoadError: PropTypes.func,
    onDestroySuccess: PropTypes.func,
    onDestroyError: PropTypes.func
  };

  static defaultProps = {
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

  state = {
    formAction: 'create',
    selectedDataRow: null,
    selectedRowId: null,
    isLoading: this.props.isLoading,
    clientSideData: []
  };

  renderForm () {
    if(this.props.readOnly) {
      return;
    }

    var formProps = merge({style: 'filter'}, this.props.form, {
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
  }

  render () {
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
  }

  getFormAction () {
    if(!!this.props.clientSide) {
      return null;
    }

    return this.getRestActionUrl(this.state.formAction, this.state.selectedRowId);
  }

  getFormMethod () {
    return this.getRestActionMethod(this.state.formAction);
  }

  getFormSubmitButton () {
    if(this.state.formAction == 'create') {
      return this.props.createButton;
    } else if(this.state.formAction == 'update') {
      return this.props.updateButton;
    }

    return '';
  }

  getFormOtherButtons () {
    if(this.state.formAction == 'update') {
      var cancelButtonProps = $.extend({}, this.props.cancelButton, {
        type: "reset",
        onClick: this.handleResetClick
      });

      return [cancelButtonProps];
    }

    return [];
  }

  getFormInputs () {
    var formInputs = this.props.form.inputs;
    if(!!this.props.clientSide) {
      formInputs[this.props.clientSideIdField] = { component: 'hidden' };
    }

    return formInputs;
  }

  getActionButtons () {
    var actionButtons = this.props.actionButtons || {};

    if(!actionButtons.member) {
      actionButtons.member = this.getDefaultMemberActionButtons();
    }

    if(!actionButtons.collection) {
      actionButtons.collection = this.getDefaultCollectionActionButtons();
    }

    return actionButtons;
  }

  getDefaultMemberActionButtons () {
    if(this.props.readOnly) {
      return [];
    }

    return [
      this.getDefaultEditActionProps(),
      this.getDefaultDestroyActionProps()
    ];
  }

  getDefaultCollectionActionButtons () {
    return [];
  }

  getDefaultEditActionProps () {
    return $.extend({}, {
      icon: 'edit',
      onClick: this.editAction
    }, this.props.editActionButton);
  }

  getDefaultDestroyActionProps () {
    return $.extend({}, {
      icon: 'destroy',
      onClick: this.destroyAction
    }, this.props.destroyActionButton);
  }

  onSubmit (event, postData) {
    this.props.onSubmit(event, postData);
    if(!!this.props.clientSide) {
      this.handleClientSideSubmit(event, postData);
    }
  }

  onSuccess (data, status, xhr) {
      if(this.props.onSuccess(data, status, xhr)) {
      this.loadGridData();
      this.resetForm();
    }
  }

  onError (xhr, status, error) {
    return this.props.onError(xhr, status, error);
  }

  onReset (event) {
    this.setState({
      formAction: 'create',
      selectedRowId: null,
      selectedDataRow: null
    });

    this.clearFormErrors();
    this.props.onReset(event);
  }

  handleResetClick = (event) => {
    var formRef = this.refs.form;
    if(!(typeof formRef.haveNativeReset == "function" && !!formRef.haveNativeReset())) {
      this.onReset(event);
    }
  }

  resetForm () {
    var formRef = this.refs.form;
    if(typeof formRef.reset == "function") {
      formRef.reset();
    }
  }

  editAction (event, id, data) {
    this.setState({
      formAction: 'update',
      selectedRowId: id,
      selectedDataRow: data
    });

    this.clearFormErrors();
  }

  destroyAction (event, id) {
    if(!!this.props.clientSide) {
      this.destroyActionClientSide(event, id);
    }
    else {
      this.destroyActionServerSide(event, id);
    }
  }

  destroyActionServerSide (event, id) {
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
  }

  handleDestroy = (data, status, xhr) => {
    this.props.onDestroySuccess(data, status, xhr);
    this.loadGridData();
  }

  handleDestroyError = (xhr, status, error) => {
    this.setState({isLoading: false});
    this.props.onDestroyError(xhr, status, error);
  }

  getGridProps () {
    var gridProps = merge({}, this.propsWithoutCSS());
    if(!!this.props.clientSide) {
      merge(gridProps, {
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
  }

  handleClientSideSubmit = (event, postData) => {
    event.preventDefault();

    var submittedDataRow = merge({}, postData);
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
  }

  destroyActionClientSide (event, id) {
    var itemIndex = this.findClientSideDataIndex(id);

    this.state.clientSideData.splice(itemIndex, 1);
    this.forceUpdate(this.props.onDestroySuccess);
  }

  findClientSideDataIndex (id) {
    return _findIndex(this.state.clientSideData, function(item) {
      return item[this.props.clientSideIdField] == id;
    }.bind(this));
  }

  serialize () {
    var gridRef = this.refs.grid;
    return gridRef.serialize();
  }

  loadGridData () {
    var gridRef = this.refs.grid;
    gridRef.loadData();
  }

  clearFormErrors () {
    var formRef = this.refs.form;
    if(typeof formRef.clearErrors == "function") {
      formRef.clearErrors();
    }
  }
}
