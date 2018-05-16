import Realize from '../../realize';
import React from 'react';
import PropTypes from '../../prop_types';
import { mixin } from '../../utils/decorators';

import { CssClassMixin } from '../../mixins';
import { Label } from '../../components';

import { InputComponentsMap, InputsWithMaxlength, InputsWithoutLabel } from '../../enums/input';
import InputError from './input_error';
import InputGridForm from './grid_form/input_grid_form';

@mixin(CssClassMixin)
export default class Input extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    value: PropTypes.any,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.component]),
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
    maxLength: undefined,
    renderLabel: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  labelIsActive(inputValue) {
    const { component } = this.props;
    return (component === 'checkbox_group') || (component === 'radio_group') ||
      ((component !== 'checkbox') &&
       (inputValue !== null && inputValue !== undefined && String(inputValue).length > 0));
  }

  canRenderLabel() {
    return this.props.renderLabel && this.inputAllowsLabel();
  }

  inputAllowsLabel() {
    return InputsWithoutLabel.indexOf(this.props.component) < 0;
  }

  /* Props parsers and getters */

  getInputWrapperClassName() {
    const { className, formStyle } = this.props;
    const formStyleClass = Realize.themes.getCssClass(`input.grid.${formStyle}`);
    return this.className() + (!className ? ` ${formStyleClass}` : '');
  }

  getInputWrapperContainerId() {
    return `input__${this.props.id}`;
  }

  getInputComponent(component) {
    return (InputComponentsMap[component] || component);
  }

  getInputId() {
    const { id, resource, scope } = this.props;

    return (resource && scope === 'resource')
      ? `${resource}_${id}`
      : id;
  }

  getInputName() {
    const { name, id, resource, scope } = this.props;
    const inputName = name || id;

    return (resource && scope === 'resource')
      ? `${resource}[${inputName}]`
      : inputName;
  }

  getInputValue() {
    const { value, data, resource, id } = this.props;

    if (value) return value;
    return (data[resource] && data[resource][id])
      ? data[resource][id]
      : data[id];
  }

  getMaxLength() {
    const { component, maxLength } = this.props;

    return (InputsWithMaxlength.indexOf(component) < 0)
      ? undefined
      : maxLength;
  }

  getInputErrors() {
    const { errors, resource, id } = this.props;

    return (errors[resource] && errors[resource][id])
      ? errors[resource][id]
      : errors[id];
  }

  /* Serializer functions */

  serialize() {
    const inputComponentRef = this.inputComponent;
    if (typeof inputComponentRef.serialize === 'function') {
      return inputComponentRef.serialize();
    }

    const value = typeof inputComponentRef.getValue === 'function'
      ? inputComponentRef.getValue()
      : this.getInputValue();

    return { [this.getInputName()]: value };
  }

  /* Validator */

  validate() {
    const inputComponentRef = this.inputComponent;
    if (typeof inputComponentRef.validate === 'function') {
      return inputComponentRef.validate();
    }

    return null;
  }

  /* Renderization */

  renderInputErrors() {
    return (<InputError errors={this.getInputErrors()} />);
  }

  renderInput() {
    const { id, name, errors } = this.props;
    const InputComponent = this.getInputComponent(this.props.component);
    const isGrid = (InputComponent === InputGridForm);

    return (
      <InputComponent
        {...this.propsWithoutCSS()}
        originalId={id}
        originalName={name}
        id={this.getInputId()}
        name={this.getInputName()}
        errors={isGrid ? errors : this.getInputErrors()}
        value={this.getInputValue()}
        maxLength={this.getMaxLength()}
        ref={ref => { this.inputComponent = ref; }}
      />
    );
  }

  renderLabel() {
    const inputValue = this.getInputValue();
    const isActive = this.labelIsActive(inputValue);

    return (
      <Label {...this.propsWithoutCSS()} id={this.getInputId()} active={isActive} />
    );
  }

  render() {
    return (
      <div className={this.getInputWrapperClassName()} id={this.getInputWrapperContainerId()}>
        {this.renderInput()}
        {this.canRenderLabel() ? this.renderLabel() : <span />}
        {this.renderInputErrors()}
      </div>
    );
  }
}
