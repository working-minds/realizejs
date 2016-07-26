import React, { Component } from 'react';
import PropTypes from '../../../prop_types';
import merge from 'lodash/merge';
import mapValues from 'lodash/mapValues';
import { mixin } from '../../../utils/decorators';

import GridForm from '../../../grid_form';
import InputGridFormFields from './input_grid_form_fields';
import InputHidden from '../input_hidden';
import InputBase from '../input_base';
import {
  CssClassMixin,
} from '../../../mixins';

@mixin(CssClassMixin)
export default class InputGridForm extends InputBase {
  static propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    fields: PropTypes.object,
    form: PropTypes.object,
    clientSide: PropTypes.bool,
    inputWrapperComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element, PropTypes.string]),
    onSuccess: PropTypes.func,
    onDestroySuccess: PropTypes.func
  };

  static defaultProps = {
    themeClassKey: 'input.gridForm',
    className: '',
    fields: {},
    form: {},
    clientSide: true,
    inputWrapperComponent: null,
    onSuccess: function() {},
    onDestroySuccess: function() {}
  };

  getDefaultFormProps() {
    return {
      formStyle: 'filter',
      inputWrapperComponent: this.props.inputWrapperComponent
    };
  }

  getColumnName(column, columnKey) {
    let columnName = column.name || columnKey;
    if (this.columnHaveDisplayValueKey(columnName)) {
      columnName += 'Display';
    }

    return columnName;
  }

  getSerializedValue() {
    return JSON.stringify(this.state.value);
  }

  parseFormProp() {
    const formProp = merge(this.getDefaultFormProps(), this.props.form);
    const fieldsProp = merge({}, this.props.fields);
    formProp.inputs = mapValues(fieldsProp, (field) => {
      delete field.format;
      return field;
    });

    return formProp;
  }

  parseColumnsProp() {
    let columnsProp = merge({}, this.props.fields);
    columnsProp = mapValues(columnsProp, (column, columnKey) => {
      delete column.component;
      delete column.className;
      delete column.value;
      column.name = this.getColumnName(column, columnKey);
      return column;
    });

    return columnsProp;
  }

  columnHaveDisplayValueKey(columnName) {
    const value = this.state.value;
    const firstValueRow = value == null ? null : value[0];
    if (firstValueRow == null) {
      return false;
    }

    const valueKeys = Object.keys(firstValueRow);
    return valueKeys.indexOf(`${columnName}Display`) >= 0;
  }

  /* GridForm Result serializer */

  serializeGridForm() {
    const gridFormRef = this.refs.gridForm;
    this.setState({
      value: gridFormRef.serialize()
    });
  }

  _getValue() {
    return JSON.stringify(this.state.value);
  }

  /* Event handling functions */

  handleOnSuccess() {
    let gridFormValue = this.refs.gridForm.serialize();

    this.props.onSuccess(gridFormValue);
    this.serializeGridForm();
  }

  handleOnDestroySuccess() {
    let gridFormValue = this.refs.gridForm.serialize();

    this.props.onDestroySuccess(gridFormValue);
    this.serializeGridForm();
  }

  /* Renderers */

  renderLabel() {
    const label = this.props.label;
    if (typeof label === 'boolean' && !label) {
      return [];
    }

    return (
      <h3 className={this.themedClassName('input.gridForm.label')}>
        {label}
      </h3>
    );
  }

  render() {
    return (
      <div className={this.className()}>
        {this.renderLabel()}
        <GridForm
          {...this.propsWithoutCSS()}
          formComponent={InputGridFormFields}
          form={this.parseFormProp()}
          columns={this.parseColumnsProp()}
          onSuccess={this.handleOnSuccess}
          onDestroySuccess={this.handleOnDestroySuccess}
          errors={this.props.errors}
          ref="gridForm"
        />
        <InputHidden
          {...this.propsWithoutCSS()}
          value={this.getSerializedValue()}
          ref="input"
        />
      </div>
    );
  }
}
