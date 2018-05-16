import React from 'react';
import PropTypes from '../../prop_types';
import { mixin } from '../../utils/decorators';

import InputBase from './input_base';

import {
  CssClassMixin,
} from '../../mixins';

@mixin(
  CssClassMixin,
)
export default class InputPassword extends InputBase {
  static propTypes = {
    confirms: PropTypes.string,
  };

  static defaultProps = {
    themeClassKey: 'input.text',
  };

  render() {
    return (
      <input
        {...this.props}
        value={this.state.value}
        placeholder={this.getPlaceholder()}
        className={this.inputClassName()}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        type="password"
        ref={ref => { this.input = ref; }}
      />
    );
  }
}
