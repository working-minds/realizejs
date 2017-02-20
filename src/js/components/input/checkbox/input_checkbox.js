import React from 'react';
import { mixin } from '../../../utils/decorators';

import InputBase from '../input_base';

import {
  CssClassMixin,
  CheckboxComponentMixin,
} from '../../../mixins';

@mixin(
  CssClassMixin,
  CheckboxComponentMixin
)
export default class InputCheckbox extends InputBase {
  static propTypes = {};
  static defaultProps = {
    themeClassKey: 'input.checkbox',
  };

  constructor(props) {
    super(props);

    this._handleCheckboxChange = this._handleCheckboxChange.bind(this);
  }

  render() {
    return (
      <input
        {...this.props}
        checked={this.state.checked}
        className={this.inputClassName()}
        onChange={this._handleCheckboxChange}
        type="checkbox"
        ref="input"
      />
    );
  }
}
