import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from '../../../prop_types';
import $ from 'jquery';
import i18n from '../../../i18n';
import { autobind, mixin } from '../../../utils/decorators';

import { InputSelectOption } from '../../../components';

import {
  CssClassMixin,
  InputComponentMixin,
  SelectComponentMixin,
  InputSelectActionsListenerMixin,
  MaterializeSelectMixin
} from '../../../mixins';

@mixin(
  CssClassMixin,
  InputComponentMixin,
  SelectComponentMixin,
  InputSelectActionsListenerMixin,
  MaterializeSelectMixin
)
export default class InputSelect extends Component {
  static propTypes = {
    includeBlank: PropTypes.bool,
    blankText: PropTypes.localizedString,
  };

  static defaultProps = {
    includeBlank: true,
    themeClassKey: 'input.select',
    blankText: 'select',
  };

  componentDidMount() {
    const valuesSelect = ReactDOM.findDOMNode(this.refs.select);
    const $form = $(valuesSelect.form);
    $form.on('reset', this.clearSelection);
  }

  componentWillUnmount() {
    const valuesSelect = ReactDOM.findDOMNode(this.refs.select);
    const $form = $(valuesSelect.form);
    $form.off('reset', this.clearSelection);
  }

  clearSelection() {
    this.setState({
      value: [],
    }, this.triggerDependableChanged);
  }

  selectedValue() {
    let value = this.state.value;
    Console.log(value);
    if (!this.props.multiple) {
      value = value[0];
    }

    return value;
  }

  @autobind
  handleChange(event) {
    const selectElement = ReactDOM.findDOMNode(this.refs.select);
    const newValue = this.ensureIsArray(selectElement.value);
    this.props.onChange(event, newValue, this);

    if(!event.isDefaultPrevented()) {
      this.setState({
        value: newValue
      }, this.triggerDependableChanged);
    }
  }

  renderOptions() {
    const selectOptions = [];
    const options = this.state.options;

    if (this.props.includeBlank) {
      selectOptions.push(
        <InputSelectOption
          name={i18n.t(this.props.blankText)}
          value=""
          key="empty_option"
        />
      );
    }

    for (let i = 0; i < options.length; i++) {
      const optionProps = options[i];
      selectOptions.push(<InputSelectOption {...optionProps} key={optionProps.name} />);
    }

    return selectOptions;
  }

  render() {
    return (
      <select
        id={this.props.id}
        name={this.props.name}
        value={this.selectedValue()}
        onChange={this.handleChange}
        disabled={this.isDisabled() || this.props.readOnly}
        className={this.className()}
        ref="select"
      >
        {this.renderOptions()}
      </select>
    );
  }
}
