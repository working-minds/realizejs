import React, { Component } from 'react';
import PropTypes from 'prop_types';
import i18n from 'i18n';
import { mixin } from 'utils/decorators';

import {
  InputHidden,
  Label,
} from 'components';

import {
  CssClassMixin,
  InputComponentMixin,
  CheckboxComponentMixin,
} from 'mixins';

@mixin(
  CssClassMixin,
  InputComponentMixin,
  CheckboxComponentMixin,
)
export default class InputSwitch extends Component {
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
              onChange={this._handleCheckboxChange}
              type="checkbox"
              ref="input"
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
