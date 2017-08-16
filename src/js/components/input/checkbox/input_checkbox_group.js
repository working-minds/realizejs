import React from 'react';
import PropTypes from '../../../prop_types';
import { mixin } from '../../../utils/decorators';
import { ensureIsArray } from '../../../utils/array';
import InputBase from '../input_base';
import {
  CssClassMixin,
  SelectComponentMixin
} from '../../../mixins';

import { InputCheckbox, Label } from '../../../components';

@mixin(CssClassMixin, SelectComponentMixin)
export default class InputCheckboxGroup extends InputBase {
  static propTypes = {
    align: PropTypes.oneOf(['vertical', 'horizontal']),
    value: PropTypes.array,
  };

  static defaultProps = {
    themeClassKey: 'input.checkboxgroup',
    name: '',
    align: 'vertical',
    value: [],
  };

  renderCheckboxes() {
    const { options } = this.state;
    const { id, name, value: groupValues } = this.props;

    return options.map((option, i) => (
      <p key={`${id}_checkbox_${i}`}>
        <InputCheckbox
          {...option}
          id={`${id}_${i}`}
          name={name}
          className={option.filled ? 'filled-in' : ''}
          checked={ensureIsArray(groupValues).includes(option.value)}
        />
        <Label {...option} />
      </p>
    ));
  }

  render() {
    return (
      <div className={`${this.inputClassName()} align-${this.props.align}`}>
        {this.renderCheckboxes()}
      </div>
    );
  }
}
