import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import $ from 'jquery';
import { isEmpty } from 'lodash';
import { mixin } from '../../utils/decorators';

import { Button } from '../../components';
import { CssClassMixin } from '../../mixins';

@mixin(CssClassMixin)
export default class FormButtonGroup extends Component {
  static propTypes = {
    inputs: PropTypes.object,
    submitButton: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    otherButtons: PropTypes.array,
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    themeClassKey: 'form.buttonGroup',
    inputs: {},
    submitButton: {
      name: 'actions.send',
      icon: 'send',
    },
    otherButtons: [],
    isLoading: false,
  };

  renderOtherButtons() {
    if (!isEmpty(this.props.inputs) && this.isAllInputsHidden()) {
      return '';
    }

    var otherButtonsProps = this.props.otherButtons;
    var otherButtons = [];

    for (var i = 0; i < otherButtonsProps.length; i++) {
      var otherButtonProps = otherButtonsProps[i];
      otherButtons.push(<Button {...otherButtonProps} key={otherButtonProps.name} />);
    }

    return otherButtons;
  }

  renderSubmitButton() {
    if ((!isEmpty(this.props.inputs) && this.isAllInputsHidden()) || !this.props.submitButton) {
      return '';
    }

    return (
      <Button
        {...this.submitButtonProps()}
        ref={ref => { this.submitButton = ref; }}
        key="submit_button"
      />
    );
  }

  render() {
    return (
      <div className={this.className()}>
        {this.renderOtherButtons()}
        {this.renderSubmitButton()}
      </div>
    );
  }

  isAllInputsHidden() {
    var allHidden = true;
    var inputs = this.props.inputs;

    for (var property in inputs) {
      if (inputs.hasOwnProperty(property)) {
        var input = inputs[property];
        if (input.component !== 'hidden')
          return allHidden = false;
      }
    }

    return allHidden;
  }

  submitButtonProps() {
    var isLoading = this.props.isLoading;
    return $.extend({}, this.props.submitButton, {
      type: 'submit',
      disabled: isLoading,
      isLoading,
    });
  }
}
