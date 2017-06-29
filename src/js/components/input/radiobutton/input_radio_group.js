import React from 'react';
import PropTypes from '../../../prop_types';
import { mixin, autobind } from '../../../utils/decorators';
import { CssClassMixin, SelectComponentMixin } from '../../../mixins';

import InputBase from '../input_base';
import InputRadio from './input_radio';

@mixin(CssClassMixin, SelectComponentMixin)
export default class InputRadioGroup extends InputBase {
  static propTypes = {
    ...InputBase.propTypes,
    align: PropTypes.oneOf(['vertical', 'horizontal']),
    withGap: PropTypes.bool,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    ...InputBase.defaultProps,
    themeClassKey: 'input.radiogroup',
    align: 'vertical',
    withGap: false,
    readOnly: false,
    disabled: false,
    onClick() {},
  };

  @autobind
  handleClick(event) {
    const value = event.target.value;
    this.props.onClick(event);

    if (!event.isDefaultPrevented()) {
      this.setState({ value });
    }
  }

  radioIsChecked(radioValue, groupValue) {
    return groupValue !== null && radioValue !== null &&
      groupValue !== undefined && radioValue !== undefined &&
      radioValue.toString() === groupValue.toString();
  }

  renderOptions() {
    const { options, value } = this.state;
    const { id, name, readOnly, disabled } = this.props;
    const groupValue = Array.isArray(value) ? value[0] : value;

    return options.map((option, i) => (
      <InputRadio
        key={`${id}_radio_${i}`}
        {...option}
        id={`${id}_${i}`}
        name={name}
        label={option.label || option.name}
        checked={this.radioIsChecked(option.value, groupValue)}
        disabled={disabled}
        readOnly={readOnly}
        onClick={this.handleClick}
      />
    ));
  }

  render() {
    return (
      <div className={`${this.inputClassName()} align-${this.props.align}`}>
        {this.renderOptions()}
      </div>
    );
  }
}
