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
export default class InputTextarea extends InputBase {
  static propTypes = {
    rows: PropTypes.number,
  };

  static defaultProps = {
    rows: 4,
    themeClassKey: 'input.textarea',
  };

  render() {
    return (
      <textarea
        {...this.props}
        value={this.state.value}
        placeholder={this.getPlaceholder()}
        className={this.inputClassName()}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        ref={ref => { this.input = ref; }}
      />
    );
  }
}
