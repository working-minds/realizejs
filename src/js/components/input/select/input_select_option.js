import React, { Component } from 'react';
import PropTypes from 'prop_types';

export default class InputSelectOption extends Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.node,
  };

  render() {
    return <option value={this.props.value}>{this.props.name}</option>;
  }
}
