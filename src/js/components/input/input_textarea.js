import React, { Component } from 'react';
import PropTypes from 'prop_types';
import { mixin } from 'utils/decorators';

import {
  CssClassMixin,
  InputComponentMixin,
} from 'mixins';

@mixin(
  CssClassMixin,
  InputComponentMixin,
)
export default class InputTextarea extends Component {
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
        onChange={this._handleChange}
        onFocus={this._handleFocus}
        ref="input"
      />
    );
  }
}
