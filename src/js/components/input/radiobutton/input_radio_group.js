import React, { Component } from 'react';
import PropTypes from 'prop_types';
import { mixin } from 'utils/decorators';

import { Label } from 'components';

import {
  CssClassMixin,
  InputComponentMixin,
  SelectComponentMixin,
} from 'mixins';

@mixin(
  CssClassMixin,
  InputComponentMixin,
  SelectComponentMixin,
)
export default class InputRadioGroup extends Component {
  static propTypes = {
    align: PropTypes.oneOf(['vertical', 'horizontal']),
    currentValue: PropTypes.string,
    withGap: PropTypes.bool,
  };

  static defaultProps = {
    name: '',
    align: 'vertical',
    currentValue: null,
    withGap: false,
  };

  state = {
    currentValue: this.props.currentValue,
  };

  renderOptions() {
    const selectOptions = [];
    const options = this.state.options;

    for (let i = 0; i < options.length; i++) {
      const optionProps = options[i];
      optionProps.id = `${this.props.name}_${i}`;
      optionProps.type = 'radio';

      if (this.state.currentValue === optionProps.value) {
        optionProps.defaultChecked = optionProps.value;
      }

      if (this.props.withGap) {
        optionProps.className = 'with-gap';
      }

      selectOptions.push(
        <p key={`p_input_${i}`} id={`input_${optionProps.value}`}>
          <input
            {...optionProps}
            name={this.props.name}
            onChange={this._handleChange}
          />
          <Label id={optionProps.id} label={optionProps.name} />
        </p>
      );
    }
    return selectOptions;
  }

  render() {
    return (
      <div
        className={`input-checkbox-group align-${this.props.align}`}
        ref="radioGroup"
      >
        {this.renderOptions()}
      </div>
    );
  }
}
