import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import { mixin } from '../../utils/decorators';

import {
  CssClassMixin,
  InputComponentMixin,
} from '../../mixins';

@mixin(
  CssClassMixin,
  InputComponentMixin
)
export default class InputPassword extends Component {
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
        onChange={this._handleChange}
        onFocus={this._handleFocus}
        type="password" ref="input"
      />
    );
  }
}
