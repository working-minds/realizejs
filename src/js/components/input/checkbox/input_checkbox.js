import React from 'react';
import { mixin } from '../../../utils/decorators';

import InputCheckboxBase from './input_checkbox_base';

import {
  CssClassMixin,
} from '../../../mixins';

@mixin(
  CssClassMixin,
)
export default class InputCheckbox extends InputCheckboxBase {
  static defaultProps = {
    themeClassKey: 'input.checkbox',
  };

  render() {
    return (
      <input
        {...this.props}
        checked={this.state.checked}
        className={this.inputClassName()}
        onChange={this.handleChange}
        disabled={this.props.disabled || this.props.readOnly}
        type="checkbox"
        ref={ref => { this.input = ref; }}
      />
    );
  }
}
