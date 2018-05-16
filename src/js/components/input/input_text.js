import React from 'react';
import PropTypes from '../../prop_types';
import { mixin } from '../../utils/decorators';

import InputBase from './input_base';

import {
  CssClassMixin,
} from '../../mixins';
import InputMasked from './input_masked';

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

  static ommitedProps = [
    'originalName', 'originalId', 'renderLabel', 'formStyle',
    'clearTheme',
  ];

  prepareProps() {
    return _.omit(this.propsWithoutCSS(), InputText.ommitedProps);
  }

  render() {
    const { children, ...props } = this.propsWithoutCSS(); // eslint-disable-line no-unused-vars

    return (
      <input
        {...this.prepareProps()}
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
