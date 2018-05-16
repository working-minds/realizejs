import React from 'react';

import InputBase from './input_base';

export default class InputHidden extends InputBase {
  render() {
    return (
      <input {...this.props} type="hidden" ref={ref => { this.input = ref; }} />
    );
  }
}
