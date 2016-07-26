import React, { Component } from 'react';
import { mixin } from '../../utils/decorators';

import { InputDatefilterBody } from '../../mixins';

@mixin(InputBase)
export default class InputHidden extends Component {
  render() {
    return (
      <input {...this.props} type="hidden" ref="input" />
    );
  }
}
