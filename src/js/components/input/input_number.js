import React from 'react';
import { mixin } from '../../utils/decorators';

import InputMasked from './input_masked';
import { Label } from '../label';
import InputBase from './input_base';

import {
  CssClassMixin,
} from '../../mixins';

@mixin(CssClassMixin)
export default class InputNumber extends InputBase {
  static defaultProps = {
    themeClassKey: 'input.number',
    maskType: 'integer',
  };

  componentDidMount() {
    super.componentDidMount();
  }

  render() {
    return (
      <span>
        <InputMasked
          {...this.props}
          className={this.className()}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          type="text"
          ref={ref => { this.input = ref; }}
        />
        <Label {...this.propsWithoutCSS()} />
      </span>
    );
  }
}
