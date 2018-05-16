import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import _ from 'lodash';
import { uuid } from '../../utils';
import { autobind, mixin } from '../../utils/decorators';
import { RestClient } from '../../services/http';
import { Grid } from '../grid';
import { Form } from '../form';

import { CssClassMixin, RestActionsMixin } from '../../mixins';

@mixin(CssClassMixin, RestActionsMixin)
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
    editActionButton: PropTypes.object,
    destroyActionButton: PropTypes.object,
    isLoading: PropTypes.bool,
    selectable: PropTypes.oneOf(['multiple', 'none', 'one']),
    eagerLoad: PropTypes.bool,
    readOnly: PropTypes.bool,
    errors: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    formComponent: PropTypes.component,
    onSubmit: PropTypes.func,
    onReset: PropTypes.func,
    onSuccess: PropTypes.func,
    onError: PropTypes.func,
    onLoadSuccess: PropTypes.func,
    onLoadError: PropTypes.func,
    onEdit: PropTypes.func,
    onDestroySuccess: PropTypes.func,
    onDestroyError: PropTypes.func,
  };

  static defaultProps = {
    url: '',
    clientSide: false,
    clientSideIdField: '_clientSideId',
    form: {},
    actionButtons: null,
    themeClassKey: 'gridForm',
    isLoading: false,
    editActionButton: {},
    destroyActionButton: {},
    createButton: {
      name: 'actions.add',
      icon: 'add',
    },
    updateButton: {
      name: 'actions.update',
      icon: 'edit',
    },
    cancelButton: {
      name: 'actions.cancel',
      buttonStyle: 'cancel',
    },
    selectable: 'multiple',
    eagerLoad: true,
    readOnly: false,
    formComponent: Form,
    data: {
      dataRows: [],
    },
    onSubmit() {},
    onReset() {},
    onSuccess() { return true; },
    onError() { return true; },
    onLoadSuccess() {},
    onLoadError() {},
    onEdit() {},
    onDestroySuccess() {},
    onDestroyError() {},
  };

  state = {
    formAction: 'create',
    selectedDataRow: {},
    selectedRowId: null,
    isLoading: this.props.isLoading,
    clientSideData: this.props.data.dataRows,
  };

  constructor(props) {
    super(props);

    this.restClient = new RestClient({
      baseUrl: this.props.url,
      actionUrls: this.props.actionUrls,
      actionMethods: this.props.actionMethods,
    });
  }

  getFormAction() {
    if (this.props.clientSide) return null;
    return this.getRestActionUrl(this.state.formAction, this.state.selectedRowId);
  }

  getFormMethod() {
    return this.getRestActionMethod(this.state.formAction);
  }

  getFormSubmitButton() {
    if (this.state.formAction === 'create') {
      return this.props.createButton;
    }

    if (this.state.formAction === 'update') {
      return this.props.updateButton;
    }

    return '';
  }

  getFormOtherButtons() {
    if (this.state.formAction === 'update') {
      return [
        Object.assign({}, this.props.cancelButton, {
          type: 'reset',
          onClick: this.handleResetClick,
        }),
      ];
    }

    return [];
  }

  getFormInputs() {
    const { clientSide, clientSideIdField } = this.props;
    const { inputs: formInputs } = this.props.form;
    if (clientSide) {
      formInputs[clientSideIdField] = { component: 'hidden' };
    }

    return formInputs;
  }

  getActionButtons() {
    const actionButtons = this.props.actionButtons || {};

    if (!actionButtons.member) {
      actionButtons.member = this.getDefaultMemberActionButtons();
    }

    if (!actionButtons.collection) {
      actionButtons.collection = [];
    }

    return actionButtons;
  }

  getDefaultMemberActionButtons() {
    if (this.props.readOnly) {
      return [];
    }

    return [
      this.getDefaultEditActionProps(),
      this.getDefaultDestroyActionProps(),
    ];
  }

  getDefaultEditActionProps() {
    return Object.assign({}, {
      icon: 'edit',
      onClick: this.editAction,
    }, this.props.editActionButton);
  }

  getDefaultDestroyActionProps() {
    return Object.assign({}, {
      icon: 'destroy',
      onClick: this.destroyAction,
    }, this.props.destroyActionButton);
  }

  @autobind
  onSubmit(event, postData) {
    this.props.onSubmit(event, postData);
    if (this.props.clientSide) {
      this.handleClientSideSubmit(event, postData);
    }
  }

  @autobind
  onSuccess(data, status, xhr) {
    if (this.props.onSuccess(data, status, xhr)) {
      this.loadGridData();
      this.resetForm();
    }
  }

  @autobind
  onError(xhr, status, error) {
    return this.props.onError(xhr, status, error);
  }

  @autobind
  onReset(event) {
    this.setState({
      formAction: 'create',
      selectedRowId: null,
      selectedDataRow: null,
    });

    this.clearFormErrors();
    this.props.onReset(event);
  }

  @autobind
  handleResetClick(event) {
    if (!(typeof this.form.haveNativeReset === 'function' && !!this.form.haveNativeReset())) {
      this.onReset(event);
    }
  }

  resetForm() {
    if (typeof this.form.reset === 'function') {
      this.form.reset();
    }
  }

  @autobind
  editAction(event, id, data) {
    this.setState({
      formAction: 'update',
      selectedRowId: id,
      selectedDataRow: data,
    }, () => this.props.onEdit(event, id, data));

    this.clearFormErrors();
  }

  @autobind
  destroyAction(event, id) {
    return (this.props.clientSide)
      ? this.destroyActionClientSide(event, id)
      : this.destroyActionServerSide(event, id);
  }

  destroyActionServerSide(event, id) {
    const { destroyConfirm } = this.props;

    if (!destroyConfirm || confirm(destroyConfirm)) {
      this.setState({ isLoading: true }, () => {
        this.resetForm();
        this.restClient.destroy(id)
          .then(this.handleDestroy)
          .catch(this.handleDestroyError);
      });
    }
  }

  @autobind
  handleDestroy(data, status, xhr) {
    this.props.onDestroySuccess(data, status, xhr);
    this.loadGridData();
  }

  @autobind
  handleDestroyError(xhr, status, error) {
    this.setState({ isLoading: false }, () =>
      this.props.onDestroyError(xhr, status, error)
    );
  }

  @autobind
  handleClientSideSubmit(event, postData) {
    event.preventDefault();
    const { clientSideIdField } = this.props;
    const submittedDataRow = Object.assign({}, postData);
    const submittedDataRowIndex = this.findClientSideDataIndex(submittedDataRow[clientSideIdField]);

    if (submittedDataRowIndex >= 0) {
      this.state.clientSideData.splice(submittedDataRowIndex, 1, submittedDataRow);
    } else {
      submittedDataRow[this.props.clientSideIdField] = uuid.v4();
      this.state.clientSideData.push(submittedDataRow);
    }

    this.setState({
      formAction: 'create',
      selectedRowId: null,
      selectedDataRow: {},
    }, this.props.onSuccess);
  }

  destroyActionClientSide(event, id) {
    const itemIndex = this.findClientSideDataIndex(id);

    this.state.clientSideData.splice(itemIndex, 1);
    this.forceUpdate(this.props.onDestroySuccess);
  }

  findClientSideDataIndex(id) {
    const { clientSideData } = this.state;
    const { clientSideIdField } = this.props;

    return _.findIndex(clientSideData, (item) => item[clientSideIdField] === id);
  }

  serialize() {
    return this.grid.serialize();
  }

  loadGridData() {
    this.grid.loadData();
  }

  clearFormErrors() {
    if (typeof this.form.clearErrors === 'function') {
      this.form.clearErrors();
    }
  }

  getGridProps() {
    const gridProps = Object.assign({}, this.propsWithoutCSS());
    if (this.props.clientSide) {
      Object.assign(gridProps, {
        pagination: false,
        selectable: 'none',
        eagerLoad: false,
        key: uuid.v4(),
        selectedRowIds: [this.state.selectedRowId],
        dataRowIdField: this.props.clientSideIdField,
        data: {
          dataRows: this.state.clientSideData,
        },
        sortConfigs: {
          sortable: false,
        },
      });
    }

    return gridProps;
  }

  renderForm() {
    if (this.props.readOnly) return <span />;

    const formProps = Object.assign({ formStyle: 'filter' }, this.props.form, {
      action: this.getFormAction(),
      data: this.state.selectedDataRow || {},
      method: this.getFormMethod(),
      resource: this.props.clientSide ? null : this.props.form.resource,
      inputs: this.getFormInputs(),
      errors: this.props.errors,
      submitButton: this.getFormSubmitButton(),
      otherButtons: this.getFormOtherButtons(),
      onSubmit: this.onSubmit,
      onReset: this.onReset,
      onSuccess: this.onSuccess,
      onError: this.onError,
      key: `form_${uuid.v4()}`,
      ref: ref => { this.form = ref; },
    });

    return React.createElement(this.props.formComponent, formProps, null);
  }

  renderGrid() {
    return (
      <Grid
        {...this.getGridProps()}
        actionButtons={this.getActionButtons()}
        ref={ref => { this.grid = ref; }}
      />
    );
  }

  render() {
    const className = this.className();

    return (
      <div className={className}>
        <div className={`${className}__form`}>
          {this.renderForm()}
        </div>

        <div className={`${className}__grid`}>
          {this.renderGrid()}
        </div>
      </div>
    );
  }
}
