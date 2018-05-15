import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from '../../../prop_types';
import { autobind, mixin } from '../../../utils/decorators';

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
    errors: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
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
      icon: 'send',
    },
    otherButtons: [],
    onSubmit() {},
    onReset() {},
  };

  state = {
    errors: this.props.errors,
  };

  @autobind
  submitFormFields(event) {
    const inputGroupRef = this.inputGroup;
    const fieldsData = inputGroupRef.serialize();

    this.props.onSubmit(event, fieldsData);
  }

  @autobind
  handleKeyPressSubmit(event) {
    const { keyCode } = event;

    if (keyCode === 13) {
      event.stopPropagation();
      this.submitFormFields(event);
    }
  }

  renderInputs() {
    if (!this.props.inputs || _.isEmpty(this.props.inputs)) {
      return <span />;
    }

    return (
      <InputGroup
        {...this.propsWithoutCSS()}
        errors={this.state.errors}
        onKeyDown={this.handleKeyPressSubmit}
        ref={ref => { this.inputGroup = ref; }}
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
      <div id={this.props.id} className={this.className()} ref={ref => { this.form = ref; }}>
        {this.renderInputs()}
        {this.renderButtons()}
      </div>
    );
  }
}
