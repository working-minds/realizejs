import React from 'react';
import PropTypes from '../../prop_types';
import i18n from '../../i18n';
import { mixin } from '../../utils/decorators';

import InputCheckboxBase from './checkbox/input_checkbox_base';
import InputHidden from './input_hidden';
import { Label } from '../label';

import {
  CssClassMixin,
} from '../../mixins';

@mixin(
  CssClassMixin,
)
export default class InputSwitch extends InputCheckboxBase {
  static propTypes = {
    label: PropTypes.string,
    offLabel: PropTypes.localizedString,
    onLabel: PropTypes.localizedString,
  };

  static defaultProps = {
    themeClassKey: 'input.switch',
    offLabel: 'false',
    onLabel: 'true',
    label: null,
  };

  checkboxProps() {
    if (this.valueIsBoolean()) {
      return {};
    }

    return this.props;
  }

  serialize() {
    return { [this.props.name]: this.state.checked };
  }

  renderLabel() {
    if (!this.props.label) {
      return null;
    }

    return <Label name={this.props.label} active />;
  }

  renderInputHidden() {
    if (this.valueIsBoolean()) {
      return <InputHidden {...this.props} value={this.state.value} />;
    }

    return null;
  }

  render() {
    return (
      <div>
        <div className={this.className()}>
          <label>
            {i18n.t(this.props.offLabel)}
            <input
              {...this.checkboxProps()}
              checked={this.state.checked}
              value={this.state.value}
              disabled={this.props.disabled || this.props.readOnly}
              className={this.inputClassName()}
              onChange={this.handleChange}
              type="checkbox"
              ref={ref => { this.input = ref; }}
            />
            <span className="lever"></span>
            {i18n.t(this.props.onLabel)}
          </label>

          {this.renderInputHidden()}
        </div>
        {this.renderLabel()}
      </div>
    );
  }
}
