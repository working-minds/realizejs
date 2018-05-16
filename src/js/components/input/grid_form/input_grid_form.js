import React from 'react';
import _ from 'lodash';
import PropTypes from '../../../prop_types';
import { autobind, mixin } from '../../../utils/decorators';
import { uuid } from '../../../utils';

import GridForm from '../../grid_form/grid_form';
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
    clientSideIdField: PropTypes.string,
    inputWrapperComponent: PropTypes.component,
    onSuccess: PropTypes.func,
    onDestroySuccess: PropTypes.func,
  };

  static defaultProps = {
    themeClassKey: 'input.gridForm',
    className: '',
    fields: {},
    form: {},
    clientSide: true,
    clientSideIdField: '_clientSideId',
    inputWrapperComponent: null,
    onSuccess() {},
    onDestroySuccess() {},
  };

  getDefaultFormProps() {
    return {
      formStyle: 'filter',
      inputWrapperComponent: this.props.inputWrapperComponent,
    };
  }

  parseFormProp() {
    const formProp = _.merge(this.getDefaultFormProps(), this.props.form);
    formProp.inputs = Object.assign({}, this.props.inputs);

    return formProp;
  }

  parseColumnsProp() {
    const { columns } = this.props;

    return _.mapValues(columns, (column, key) => Object.assign(column, {
      name: column.name || key,
    }));
  }

  buildGridData() {
    const { value, clientSideIdField } = this.props;
    const dataRows = !value || value === ''
      ? []
      : value.map((v) => { return { ...v, [clientSideIdField]: uuid.v4() }; });

    return { dataRows };
  }

  /* GridForm Result serializer */

  serialize() {
    return { [this.props.name]: this.state.value };
  }

  /* Event handling functions */

  @autobind
  handleOnSuccess() {
    const gridFormValue = this.gridForm.serialize();

    this.setState({ value: gridFormValue }, () => (
      this.props.onSuccess(gridFormValue)
    ));
  }

  @autobind
  handleOnDestroySuccess() {
    const gridFormValue = this.gridForm.serialize();

    this.setState({ value: gridFormValue }, () => (
      this.props.onDestroySuccess(gridFormValue)
    ));
  }

  /* Renderers */

  renderLabel() {
    const label = this.props.label;
    if (typeof label === 'boolean' && !label) {
      return [];
    }

    return (
      <h5 className={this.themedClassName('input.gridForm.label')}>
        {label}
      </h5>
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
          data={this.buildGridData()}
          onSuccess={this.handleOnSuccess}
          onDestroySuccess={this.handleOnDestroySuccess}
          errors={this.props.errors}
          ref={ref => { this.gridForm = ref; }}
        />
        <InputHidden
          {...this.propsWithoutCSS()}
          value={this.serialize()}
          ref={ref => { this.input = ref; }}
        />
      </div>
    );
  }
}
