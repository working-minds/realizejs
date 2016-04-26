import React, { Component } from 'react';
import PropTypes from 'prop_types';
import $ from 'jquery';

import {} from 'components';

export default class InputAutocompleteValues extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    multiple: PropTypes.bool,
    selectedOptions: PropTypes.array,
  };

  static defaultProps = {
    multiple: false,
    selectedOptions: [],
  };

  selectedOptionsValues() {
    return $.map(
      this.props.selectedOptions,
      (selectedOption) => selectedOption.value
    );
  }

  valueInputName() {
    let inputName = this.props.name;

    if (this.props.multiple) {
      inputName += '[]';
    }

    return inputName;
  }

  renderValueInputs() {
    const valueInputs = [];
    const selectedOptions = this.props.selectedOptions;

    for (let i = 0; i < selectedOptions.length; i++) {
      const option = selectedOptions[i];
      valueInputs.push(<option value={option.value} key={option.name} />);
    }

    return valueInputs;
  }

  render() {
    return (
      <select
        multiple
        id={this.props.id}
        name={this.valueInputName()}
        value={this.selectedOptionsValues()}
        readOnly
        style={{ display: 'none' }}
      >
        {this.renderValueInputs()}
      </select>
    );
  }
}
