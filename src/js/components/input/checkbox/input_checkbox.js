import React, { Component } from 'react';
import PropTypes from '../../../prop_types';
import { mixin } from '../../../utils/decorators';

import {
  CssClassMixin,
  InputComponentMixin,
  CheckboxComponentMixin
} from '../../../mixins';

@mixin(
  CssClassMixin,
  InputComponentMixin,
  CheckboxComponentMixin
)
export default class InputCheckbox extends Component {
  static propTypes = {};
  static defaultProps = {
    themeClassKey: 'input.checkbox'
  };

  render () {
    return (
      <input {...this.props}
        checked={this.state.checked}
        className={this.inputClassName()}
        onChange={this._handleCheckboxChange}
        type="checkbox"
        ref="input"
      />
    );
  }
}
