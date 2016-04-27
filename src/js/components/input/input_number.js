import React, { Component } from 'react';
import { mixin } from 'utils/decorators';

import {
  InputMasked,
  Label,
} from 'components';

import {
  CssClassMixin,
  InputComponentMixin,
} from 'mixins';

@mixin(
  CssClassMixin,
  InputComponentMixin,
)
export default class InputNumber extends Component {
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
