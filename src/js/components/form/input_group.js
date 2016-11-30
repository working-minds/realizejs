import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import $ from 'jquery';
import filter from 'lodash/filter';
import merge from 'lodash/merge';
import { mixin } from '../../utils/decorators';

import { Input } from '../../components';
import { CssClassMixin } from '../../mixins';

@mixin(CssClassMixin)
export default class InputGroup extends Component {
  static propTypes = {
    inputs: PropTypes.object,
    data: PropTypes.object,
    errors: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    resource: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    label: PropTypes.string,
    separator: PropTypes.bool,
    formStyle: PropTypes.string,
    wrapperClassName: PropTypes.string,
    inputWrapperComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element, PropTypes.string])
  };

  static defaultProps = {
    inputs: {},
    data: {},
    errors: {},
    formStyle: 'default',
    label: null,
    separator: false,
    disabled: false,
    readOnly: false,
    themeClassKey: 'form.inputGroup',
    wrapperClassName: 'wrapper_input_group',
    inputWrapperComponent: null
  };

  renderInputs () {
    var inputsProps = this.props.inputs;
    var inputComponents = [];
    var inputIndex = 0;
    var InputWrapperComponent = this.getInputWrapperComponent();

    for(var inputId in inputsProps) {
      if(inputsProps.hasOwnProperty(inputId)) {
        var inputProps = inputsProps[inputId];
        if(!inputProps.id) {
          inputProps.id = inputId;
        }

        inputComponents.push(
          <InputWrapperComponent
            disabled={this.props.disabled}
            readOnly={this.props.readOnly}
            formStyle={this.props.formStyle}
            inputWrapperComponent={this.props.inputWrapperComponent}
            key={"input_" + inputIndex}
            {...inputProps}
            data={this.props.data}
            errors={this.props.errors}
            resource={this.props.resource}
            ref={"input_" + inputIndex}
          />
        );

        inputIndex++;
      }
    }

    return inputComponents;
  }

  renderLabel () {
    if(this.props.label === null) {
      return '';
    }

    return (<h5>{this.props.label}</h5>);
  }

  renderDivider () {
    if(!this.props.separator) {
      return '';
    }

    //TODO: refatorar para um componente
    var className = Realize.themes.getCssClass('form.inputGroup.divider');
    return (
      <div className={className}>
        <hr />
      </div>
    );
  }

  render () {
    return (
      <div className={this.props.wrapperClassName}>
        <div className={this.inputGroupClassName()}>
          {this.renderLabel()}
          {this.renderInputs()}
          {this.props.children}
        </div>
        {this.renderDivider()}
      </div>
    );
  }

  inputGroupClassName () {
    var className = this.className();
    if(this.props.label !== null) {
      className += ' ' + Realize.themes.getCssClass('form.inputGroup.section');
    }

    return className;
  }

  getInputWrapperComponent() {
    let inputWrapperComponent = this.props.inputWrapperComponent;
    if(typeof inputWrapperComponent == "string") {
      return window[inputWrapperComponent];
    }
    else if(typeof inputWrapperComponent == "function") {
      return inputWrapperComponent;
    }
    else {
      return Input;
    }
  }

  serialize () {
    var inputRefs = filter(this.refs, function(ref, refName) {
      return refName.match(/^input_/);
    });

    var inputValues = {};
    inputRefs.forEach(function(inputRef) {
      merge(inputValues, inputRef.serialize());
    });

    return inputValues;
  }
}
