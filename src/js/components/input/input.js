import Realize from '../../realize';
import React from 'react';
import PropTypes from '../../prop_types';
import capitalize from 'lodash/capitalize';
import { mixin } from '../../utils/decorators';

import { CssClassMixin } from '../../mixins';
import { Label } from '../../components';

import InputComponentsMap from './input_components_map';
import InputError from './input_error';
import InputGridForm from './grid_form/input_grid_form';

@mixin(CssClassMixin)
export default class Input extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    value: PropTypes.any,
    component: PropTypes.string,
    formStyle: PropTypes.oneOf(['default', 'filter', 'oneLine']),
    data: PropTypes.object,
    errors: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    resource: PropTypes.string,
    scope: PropTypes.oneOf(['resource', 'global']),
    maxLength: PropTypes.number,
    renderLabel: PropTypes.bool,
  };

  static defaultProps = {
    themeClassKey: 'input',
    value: null,
    component: 'text',
    formStyle: 'default',
    data: {},
    errors: {},
    resource: null,
    scope: 'resource',
    maxLength: null,
    renderLabel: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  renderInput() {
    return (
      <div className={this.inputClassName()} id={this.getInputContainerId()}>
        {this.renderComponentInput()}
        {this.renderLabel()}
        {this.renderInputErrors()}
      </div>
    );
  }

  renderInputWithoutLabel() {
    return (
      <div className={this.inputClassName()} id={this.getInputContainerId()}>
        {this.renderComponentInput()}
        {this.renderInputErrors()}
      </div>
    );
  }

  renderAutocompleteInput() {
    return this.renderInputWithoutLabel();
  }

  renderDatefilterInput() {
    return this.renderInputWithoutLabel();
  }

  renderDatepickerInput() {
    return this.renderInputWithoutLabel();
  }

  renderNumberInput() {
    return this.renderInputWithoutLabel();
  }

  renderSwitchInput() {
    return this.renderInputWithoutLabel();
  }

  renderFileInput() {
    return this.renderInputWithoutLabel();
  }

  renderColorpickerInput() {
    return this.renderInputWithoutLabel();
  }

  renderGridformInput() {
    return this.renderInputWithoutLabel();
  }

  renderHiddenInput() {
    return this.renderComponentInput();
  }

  renderComponentInput() {
    const componentInputClass = this.getInputComponentClass(this.props.component);
    const isGrid = (componentInputClass === InputGridForm);

    const componentInputProps = Object.assign(this.propsWithoutCSS(), {
      originalId: this.props.id,
      originalName: this.props.name,
      id: this.getInputComponentId(),
      name: this.getInputComponentName(),
      errors: isGrid ? this.props.errors : this.getInputErrors(),
      value: this.getInputComponentValue(),
      maxLength: this.getMaxLength(),
      ref: 'inputComponent',
    });

    return React.createElement(componentInputClass, componentInputProps);
  }

  renderLabel() {
    const inputValue = this.getInputComponentValue();
    const isActive = this.labelIsActive(inputValue);

    return (
      <Label {...this.propsWithoutCSS()} id={this.getInputComponentId()} active={isActive} />
    );
  }

  labelIsActive(inputValue) {
    if (this.props.component === 'checkbox')
      return false;

    return (inputValue !== null && inputValue !== undefined && String(inputValue).length > 0);
  }

  renderInputErrors() {
    return (<InputError errors={this.getInputErrors()} />);
  }

  render() {
    const renderFunction = 'render' + capitalize(this.props.component) + 'Input';
    const renderLabel = this.props.renderLabel;

    if (this.hasOwnProperty(renderFunction)) {
      return this[renderFunction]();
    } else if (!renderLabel) {
      return this.renderInputWithoutLabel();
    } else {
      return this.renderInput();
    }
  }

  inputClassName() {
    const className = this.props.className;
    const formStyle = Realize.themes.getCssClass('input.grid.' + this.props.formStyle);
    return this.className() + (className ? ' ' + formStyle : '');
  }

  getInputContainerId() {
    return 'input__' + this.props.id;
  }

  getInputComponentClass(component) {
    return (InputComponentsMap[component] || window[component] || component);
  }

  getInputComponentId() {
    const inputId = this.props.id;
    const hasResource = this.props.resource !== null && this.props.scope === 'resource';
    const resource = this.props.resource;

    return hasResource ? `${resource}_${inputId}` : inputId;
  }

  getInputComponentName() {
    const inputName = this.props.name || this.props.id;
    const hasResource = this.props.resource !== null && this.props.scope === 'resource';
    const resource = this.props.resource;

    return hasResource ? `${resource}[${inputName}]` : inputName;
  }

  getInputComponentValue() {
    if (!!this.props.value) return this.props.value;

    const data = this.props.data || {};
    const dataValue = data[this.props.id];
    const isBooleanData = typeof dataValue === 'boolean';

    return isBooleanData ? (dataValue ? 1 : 0) : dataValue;
  }

  getMaxLength() {
    const acceptComponents = ['text', 'masked', 'number', 'textarea'];
    const isComponentAccepted = acceptComponents.includes(this.props.component);
    const maxLength = this.props.maxLength;

    return ('maxLength' in this.props) && isComponentAccepted ? maxLength : undefined;
  }

  getInputErrors() {
    if (this.props.errors[this.props.resource] && this.props.errors[this.props.resource][this.props.id])
      return this.props.errors[this.props.resource][this.props.id];
    return this.props.errors[this.props.id];
  }

  /* Serializer functions */

  getName() {
    return this.getInputComponentName();
  }

  getValue() {
    const inputComponentRef = this.refs.inputComponent;
    const isValueFunction = typeof inputComponentRef.getValue == 'function';

    return isValueFunction ? inputComponentRef.getValue() : this.getInputComponentValue();
  }

  serialize() {
    const inputComponentRef = this.refs.inputComponent;
    if (typeof inputComponentRef.serialize == 'function') {
      return inputComponentRef.serialize();
    }

    const name = this.getName();
    const value = this.getValue();

    return { [name]: value };
  }
}
