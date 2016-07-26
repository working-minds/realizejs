import React, { Component } from 'react';
import { mixin } from '../../utils/decorators';

import InputMasked from './input_masked';
import Label from '../label';
import InputBase from './input_base';
import {
  CssClassMixin
} from '../../mixins';

@mixin(CssClassMixin)
export default class InputNumber extends InputBase {
  static defaultProps = {
    themeClassKey: 'input.number',
    maskType: 'integer',
  };

  componentDidMount () {
    Materialize.updateTextFields();
  }

  render() {
    return (
      <span>
        <InputMasked
          {...this.props}
          className={this.className()}
          onChange={this._handleChange}
          onFocus={this._handleFocus}
          type="text"
          ref="input"
        />
        <Label {...this.propsWithoutCSS()} />
      </span>
    );
  }
}
