import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop_types';
import $ from 'jquery';
import i18n from 'i18n';
import { autobind, mixin } from 'utils/decorators';

import {
  Button,
  Input,
} from 'components';

import { CssClassMixin } from 'mixins';

@mixin(CssClassMixin)
export default class InputDatefilterBody extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    fromFilterInput: PropTypes.object,
    toFilterInput: PropTypes.object,
    okButton: PropTypes.object,
  };

  static defaultProps = {
    themeClassKey: 'input.datefilter.body',
    id: null,
    name: null,
    resource: null,
    fromFilterInput: {},
    toFilterInput: {},
    okButton: {
      name: 'ok',
    },
  };

  getFilterInputId(filterType) {
    const inputId = this.props.id;
    if (!!inputId) {
      return `${inputId}_${filterType}`;
    }

    return null;
  }

  getFilterInputName(filterType) {
    const inputName = this.props.name;
    if (!!inputName) {
      return `${inputName}_${filterType}`;
    }

    return null;
  }

  getFilterInputLabel(filterType) {
    return i18n.t(`inputs.datefilter.${filterType}`);
  }

  selectDate() {
    const $fromInput = $(ReactDOM.findDOMNode(this.refs.fromInput)).find('input');
    const $toInput = $(ReactDOM.findDOMNode(this.refs.toInput)).find('input');
    const selectedDates = $.grep(
      [$fromInput.val(), $toInput.val()],
      (date) => !!date
    );

    this.props.onSelectDate(selectedDates);
  }

  filterInputProps(filterType) {
    const inputProps = {
      formStyle: 'oneLine',
      resource: this.props.resource,
      id: this.getFilterInputId(filterType),
      name: this.getFilterInputName(filterType),
      label: this.getFilterInputLabel(filterType),
    };

    $.extend(inputProps, this.props[`${filterType}FilterInput`]);
    return inputProps;
  }

  fromInputProps() {
    return this.filterInputProps('from');
  }

  toInputProps() {
    return this.filterInputProps('to');
  }

  @autobind
  handleFilterBodyClick(event) {
    const filterBody = ReactDOM.findDOMNode(this.refs.filterBody);
    const fromInput = $(ReactDOM.findDOMNode(this.refs.fromInput)).find('input')[0];

    if (event.target === filterBody) {
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
      this.selectDate();
    }
  }

  @autobind
  handleInputTabKeypress(event) {
    event.preventDefault();
    const fromInput = $(ReactDOM.findDOMNode(this.refs.fromInput)).find('input')[0];
    const toInput = $(ReactDOM.findDOMNode(this.refs.toInput)).find('input')[0];

    if (event.target === fromInput) {
      toInput.focus();
    } else {
      this.selectDate();
    }
  }

  renderUpdateButton() {
    return (
      <div className="input-datefilter__button">
        <Button
          {...this.props.okButton}
          element="a"
          onClick={this.selectDate}
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
          ref="fromInput"
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
          ref="toInput"
        />
      </div>
    );
  }

  render() {
    return (
      <div className={this.className()} onClick={this.handleFilterBodyClick} ref="filterBody">
        {this.renderFromInput()}
        {this.renderToInput()}
        {this.renderUpdateButton()}
      </div>
    );
  }
}
