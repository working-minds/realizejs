import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import capitalize from 'lodash/capitalize';
import { mixin } from '../../utils/decorators';

import { CssClassMixin } from '../../mixins';
import { Label } from '../../components';
import * as InputComponents from '../../components/input';

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
    renderLabel: PropTypes.bool
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
      renderLabel: true
  };

  constructor (props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }

  renderInput () {
    return (
      <div className={this.inputClassName()} id={this.getInputContainerId()}>
        {this.renderComponentInput()}
        {this.renderLabel()}
        {this.renderInputErrors()}
      </div>
    );
  }

  renderInputWithoutLabel () {
    return (
      <div className={this.inputClassName()} id={this.getInputContainerId()}>
        {this.renderComponentInput()}
        {this.renderInputErrors()}
      </div>
    );
  }

  renderAutocompleteInput () {
    return this.renderInputWithoutLabel();
  }

  renderDatefilterInput () {
    return this.renderInputWithoutLabel();
  }

  renderDatepickerInput () {
    return this.renderInputWithoutLabel();
  }

  renderNumberInput (){
    return this.renderInputWithoutLabel();
  }

  renderSwitchInput (){
    return this.renderInputWithoutLabel();
  }

  renderFileInput () {
    return this.renderInputWithoutLabel();
  }

  renderColorpickerInput () {
    return this.renderInputWithoutLabel();
  }

  renderGridformInput () {
    return this.renderInputWithoutLabel();
  }

  renderHiddenInput () {
    return this.renderComponentInput();
  }

  renderComponentInput () {
    var componentInputClass = this.getInputComponentClass(this.props.component);
    var isGrid = (componentInputClass === InputGridForm);

    var componentInputProps = React.__spread(this.propsWithoutCSS(), {
      originalId: this.props.id,
      originalName: this.props.name,
      id: this.getInputComponentId(),
      name: this.getInputComponentName(),
      errors: isGrid ? this.props.errors : this.getInputErrors(),
      value: this.getInputComponentValue(),
      maxLength: this.getMaxLength(),
      ref: "inputComponent"
    });

    return React.createElement(componentInputClass, componentInputProps);
  }

  renderLabel () {
    var inputValue = this.getInputComponentValue();
    var isActive = this.labelIsActive(inputValue);

    return (
      <Label {...this.propsWithoutCSS()} id={this.getInputComponentId()} active={isActive} />
    );
  }

  labelIsActive(inputValue) {
    if (this.props.component === 'checkbox')
      return false;

    return (inputValue !== null && inputValue !== undefined && String(inputValue).length > 0);
  }

  renderInputErrors () {
    return (<InputComponents.InputError errors={this.getInputErrors()} />);
  }

  render () {
    var renderFunction = 'render' + capitalize(this.props.component) + 'Input';
    var renderLabel = this.props.renderLabel;

    if(this.hasOwnProperty(renderFunction)) {
      return this[renderFunction]();
    } else if(!renderLabel) {
      return this.renderInputWithoutLabel();
    } else {
      return this.renderInput();
    }
  }

  inputClassName () {
    var className = this.className();
    if(!this.props.className) {
      className += ' ' + Realize.themes.getCssClass('input.grid.' + this.props.formStyle);
    }

    return className;
  }

  getInputContainerId () {
    return "input__" + this.props.id;
  }

  getInputComponentClass (component) {
    var mapping = {
      text: InputComponents.InputText,
      autocomplete: InputComponents.InputAutocomplete,
      checkbox: InputComponents.InputCheckbox,
      colorpicker: InputComponents.InputColorpicker,
      datefilter: InputComponents.InputDatefilter,
      datepicker: InputComponents.InputDatepicker,
      number: InputComponents.InputNumber,
      file: InputComponents.InputFile,
      gridform: InputComponents.InputGridForm,
      hidden: InputComponents.InputHidden,
      password: InputComponents.InputPassword,
      select: InputComponents.InputSelect,
      switch: InputComponents.InputSwitch,
      textarea: InputComponents.InputTextarea,
      checkbox_group: InputComponents.InputCheckboxGroup,
      radio_group: InputComponents.InputRadioGroup,
      masked: InputComponents.InputMasked
    };

    return (mapping[component] || window[component] || component);
  }

  getInputComponentId () {
    var inputId = this.props.id;
    if(this.props.resource !== null && this.props.scope === "resource") {
      inputId = this.props.resource + '_' + inputId;
    }

    return inputId;
  }

  getInputComponentName () {
    var inputName = (this.props.name || this.props.id);
    if(this.props.resource !== null && this.props.scope === "resource") {
      inputName = this.props.resource + '[' + inputName + ']';
    }

    return inputName;
  }

  getInputComponentValue () {
    if(!!this.props.value) {
      return this.props.value;
    }

    var data = this.props.data || {};
    var dataValue = data[this.props.id];

    if(typeof dataValue === 'boolean') {
      dataValue = (dataValue ? 1 : 0);
    }

    return dataValue;
  }

  getMaxLength () {
    var acceptComponents = ['text', 'masked', 'number', 'textarea'];

    if (!!this.props.maxLength && (acceptComponents.indexOf(this.props.component) != -1)) {
      return this.props.maxLength;
    }
  }

  getInputErrors () {
    if(this.props.errors[this.props.resource] && this.props.errors[this.props.resource][this.props.id])
      return this.props.errors[this.props.resource][this.props.id];
    return this.props.errors[this.props.id];
  }

  /* Serializer functions */

  getName () {
    return this.getInputComponentName();
  }

  getValue () {
    var inputComponentRef = this.refs.inputComponent;
    if(typeof inputComponentRef.getValue == "function") {
      return inputComponentRef.getValue();
    } else {
      return this.getInputComponentValue();
    }
  }

  serialize () {
    var inputComponentRef = this.refs.inputComponent;
    if(typeof inputComponentRef.serialize == "function") {
      return inputComponentRef.serialize();
    }

    var serializedInput = {};
    serializedInput[this.getName()] = this.getValue();
    return serializedInput;
  }
}