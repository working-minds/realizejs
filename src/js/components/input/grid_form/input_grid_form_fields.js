import React, { Component } from 'react';
import PropTypes from '../../../prop_types';
import $ from 'jquery';
import { mixin } from '../../../utils/decorators';

import {
  Button,
  InputGroup,
} from '../../../components';

import { CssClassMixin } from '../../../mixins';

@mixin(CssClassMixin)
export default class InputGridFormFields extends Component {
  static propTypes = {
    id: PropTypes.string,
    inputs: PropTypes.object,
    data: PropTypes.object,
    formStyle: PropTypes.string,
    resource: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    submitButton: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    otherButtons: PropTypes.array,
    onSubmit: PropTypes.func,
    onReset: PropTypes.func,
  };

  static defaultProps = {
    themeClassKey: 'form',
    id: null,
    inputs: {},
    data: {},
    formStyle: 'default',
    resource: null,
    disabled: false,
    readOnly: false,
    submitButton: {
      name: 'actions.send',
      icon: 'send'
    },
    otherButtons: [],
    onSubmit: () => {},
    onReset: () => {}
  };

  state = {
    errors: this.props.errors
  };

  submitFormFields(event) {
    const inputGroupRef = this.refs.inputGroup;
    const fieldsData = inputGroupRef.serialize();

    this.props.onSubmit(event, fieldsData);
    this.clearErrors();
  }

  clearErrors() {
    //TODO implementar uma forma de limpar os errors do form nos campos do gridform.
  }

  reset() {
    console.log('reset!');
  }

  renderInputs() {
    if (!this.props.inputs || $.isEmptyObject(this.props.inputs)) {
      return [];
    }

    return (
      <InputGroup
        {...this.propsWithoutCSS()}
        errors={this.state.errors}
        formStyle={this.props.formStyle}
        ref="inputGroup"
      />
    );
  }

  renderButtons() {
    return (
      <div className={this.themedClassName('form.buttonGroup')}>
        {this.renderOtherButtons()}
        {this.renderSubmitButton()}
      </div>
    );
  }

  renderOtherButtons() {
    const otherButtonsProps = this.props.otherButtons;
    const otherButtons = [];

    for (let i = 0; i < otherButtonsProps.length; i++) {
      const otherButtonProps = otherButtonsProps[i];
      otherButtons.push(
        <Button
          {...otherButtonProps}
          element="a"
          key={otherButtonProps.name}
        />
      );
    }

    return otherButtons;
  }

  renderSubmitButton() {
    if (!this.props.submitButton) {
      return [];
    }

    return (
      <Button
        {...this.props.submitButton}
        element="a"
        onClick={this.submitFormFields}
      />
    );
  }

  render() {
    return (
      <div id={this.props.id} className={this.className()} ref="form">
        {this.renderInputs()}
        {this.renderButtons()}
      </div>
    );
  }
}
