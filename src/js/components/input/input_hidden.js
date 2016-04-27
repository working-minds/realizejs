import React, { Component } from 'react';
import { mixin } from 'utils/decorators';

import { InputComponentMixin } from 'mixins';

@mixin(InputComponentMixin)
export default class InputHidden extends Component {
  render() {
    return (
      <input {...this.props} type="hidden" ref="input" />
    );
  }
}
