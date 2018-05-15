import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from '../../../prop_types';
import i18n from '../../../i18n';
import { autobind, mixin } from '../../../utils/decorators';

import InputBase from '../input_base';
import InputSelectOption from './input_select_option';

import {
  CssClassMixin,
  SelectComponentMixin,
  InputSelectActionsListenerMixin,
  MaterializeSelectMixin,
} from '../../../mixins';

@mixin(
  CssClassMixin,
  SelectComponentMixin,
  InputSelectActionsListenerMixin,
  MaterializeSelectMixin
)
export default class InputSelect extends InputBase {
  static propTypes = {
    includeBlank: PropTypes.bool,
    blankText: PropTypes.localizedString,
  };

  static defaultProps = {
    includeBlank: true,
    themeClassKey: 'input.select',
    blankText: 'select',
  };

  getInputFormNode() {
    return ReactDOM.findDOMNode(this.select);
  }

  selectedValue() {
    const value = this.state.value;
    return !this.props.multiple ? value[0] : value;
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
        ref={ref => { this.select = ref; }}
      >
        {this.renderOptions()}
      </select>
    );
  }

  @autobind
  handleChange(event) {
    const selectElement = ReactDOM.findDOMNode(this.select);
    const newValue = this.ensureIsArray(selectElement.value);
    this.props.onChange(event, newValue, this);

    if (!event.isDefaultPrevented()) {
      this.setState({
        value: newValue,
      }, this.triggerDependableChanged);
    }
  }

  @autobind
  handleReset() {
    this.setStatePromise({ value: [] })
      .then(() => this.triggerDependableChanged);
  }
}
