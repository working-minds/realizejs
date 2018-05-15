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
export default class InputText extends InputBase {
  static propTypes = {
    ...InputBase.propTypes,
    type: PropTypes.string,
  };

  static defaultProps = {
    ...InputBase.defaultProps,
    type: 'text',
    themeClassKey: 'input.text',
  };

  render() {
    const { children, ...props } = this.propsWithoutCSS(); // eslint-disable-line no-unused-vars

    return (
      <input
        {...props}
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
