import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from '../../../prop_types';
import i18n from '../../../i18n';
import { autobind, mixin } from '../../../utils/decorators';
import { compact } from 'lodash';

import {
  Button,
  Input,
} from '../../../components';

import { CssClassMixin } from '../../../mixins';

@mixin(CssClassMixin)
export default class InputDatefilterBody extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    hidden: PropTypes.bool,
    resource: PropTypes.string,
    fromFilterInput: PropTypes.object,
    toFilterInput: PropTypes.object,
    okButton: PropTypes.object,
  };

  static defaultProps = {
    themeClassKey: 'input.datefilter.body',
    id: null,
    name: null,
    hidden: false,
    resource: null,
    fromFilterInput: {},
    toFilterInput: {},
    okButton: {
      name: 'ok',
    },
  };

  applyFilterTypeSuffix(key, filterType) {
    return `${key}_${filterType}`;
  }

  getFilterInputId(filterType) {
    const inputId = this.props.id;
    return inputId ? this.applyFilterTypeSuffix(inputId, filterType) : null;
  }

  getFilterInputName(filterType) {
    const inputName = this.props.name;
    return inputName ? this.applyFilterTypeSuffix(inputName, filterType) : null;
  }

  getFilterInputLabel(filterType) {
    return i18n.t(`inputs.datefilter.${filterType}`);
  }

  filterInputProps(filterType) {
    const inputProps = {
      formStyle: 'oneLine',
      resource: this.props.resource,
      id: this.getFilterInputId(filterType),
      name: this.getFilterInputName(filterType),
      label: this.getFilterInputLabel(filterType),
    };

    const filterTypeInputProps = this.props[`${filterType}FilterInput`];
    return { ...inputProps, ...filterTypeInputProps };
  }

  fromInputProps() {
    return this.filterInputProps('from');
  }

  toInputProps() {
    return this.filterInputProps('to');
  }

  get filterBodyNode() {
    return ReactDOM.findDOMNode(this.filterBody);
  }

  get fromInputNode() {
    return ReactDOM.findDOMNode(this.fromInput);
  }

  get toInputNode() {
    return ReactDOM.findDOMNode(this.toInput);
  }

  @autobind
  handleFilterBodyClick(event) {
    const fromInput = this.fromInputNode.querySelector('input');

    if (event.target === this.filterBodyNode) {
      fromInput.focus();
    }
  }

  @autobind
  handleInputKeypress(event) {
    const keyCode = event.keyCode;

    if (keyCode === 13 || keyCode === 9) {
      this.handleInputTabKeypress(event);
    } else if (keyCode === 27) {
      event.preventDefault();
      this.handleSelectDate();
    }
  }

  @autobind
  handleInputTabKeypress(event) {
    event.preventDefault();
    const fromInput = this.fromInputNode.querySelector('input');
    const toInput = this.toInputNode.querySelector('input');

    if (event.target === fromInput) {
      toInput.focus();
    } else {
      this.handleSelectDate();
    }
  }

  @autobind
  handleSelectDate() {
    const fromInput = this.fromInputNode.querySelector('input');
    const toInput = this.toInputNode.querySelector('input');
    const selectedDates = compact([fromInput.value, toInput.value]);

    this.props.onSelectDate(selectedDates);
  }

  renderUpdateButton() {
    return (
      <div className="input-datefilter__button">
        <Button
          {...this.props.okButton}
          element="a"
          onClick={this.handleSelectDate}
        />
      </div>
    );
  }

  renderFromInput() {
    return (
      <div className="input-datefilter__filter">
        <Input
          {...this.fromInputProps()}
          onKeyDown={this.handleInputKeypress}
          component="datepicker"
          ref={ref => { this.fromInput = ref; }}
        />
      </div>
    );
  }

  renderToInput() {
    return (
      <div className="input-datefilter__filter">
        <Input
          {...this.toInputProps()}
          onKeyDown={this.handleInputKeypress}
          component="datepicker"
          ref={ref => { this.toInput = ref; }}
        />
      </div>
    );
  }

  render() {
    return (
      <div
        className={this.className()}
        style={{ display: this.props.hidden ? 'none' : 'block' }}
        onClick={this.handleFilterBodyClick}
        ref={ref => { this.filterBody = ref; }}
      >
        {this.renderFromInput()}
        {this.renderToInput()}
        {this.renderUpdateButton()}
      </div>
    );
  }
}
