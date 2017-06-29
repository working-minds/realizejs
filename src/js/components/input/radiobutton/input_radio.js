import React from 'react';
import PropTypes from '../../../prop_types';
import { mixin } from '../../../utils/decorators';
import InputBase from '../input_base';
import { CssClassMixin } from '../../../mixins';

import { Label } from '../../../components';

@mixin(CssClassMixin)
export default class InputRadio extends InputBase {
  static propTypes = {
    label: PropTypes.string,
    withGap: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    label: null,
    withGap: false,
    onClick() {},
  };

  render() {
    const { id, name, label, withGap } = this.props;

    return (
      <p>
        <input
          type="radio"
          {...this.props}
          disabled={this.props.disabled || this.props.readOnly}
          className={withGap ? 'with-gap' : 'gap'}
        />
        <Label id={id} label={label || name} />
      </p>
    );
  }
}
