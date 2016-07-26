import React, { Component } from 'react';
import { mixin } from '../../utils/decorators';

import { InputDatefilterBody } from '../../mixins';
import InputBase from './input_base';
export default class InputHidden extends InputBase {
  render() {
    return (
      <input {...this.props} type="hidden" ref="input" />
    );
  }
}
