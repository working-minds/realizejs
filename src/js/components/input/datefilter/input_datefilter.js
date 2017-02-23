import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from '../../../prop_types';
import $ from 'jquery';
import { autobind, mixin } from '../../../utils/decorators';

import InputBase from '../input_base';
import InputDatefilterSelect from './input_datefilter_select';
import InputDatefilterBody from './input_datefilter_body';
import {
  CssClassMixin,
} from '../../../mixins';

@mixin(CssClassMixin)
export default class InputDatefilter extends InputBase {
  static propTypes = {
    originalId: PropTypes.string,
    originalName: PropTypes.string,
    resource: PropTypes.string,
    fromFilterInput: PropTypes.object,
    toFilterInput: PropTypes.object,
    okButton: PropTypes.object,
  };

  static defaultProps = {
    themeClassKey: 'input.datefilter',
  };

  state = {
    ...this.state,
    selectedDates: [],
  };

  getInputFormNode() {
    const container = ReactDOM.findDOMNode(this.refs.container);
    return container.querySelector('input').form;
  }

  hideFilterBody() {
    $(document).off('click', this.handleDocumentClick);
    const $bodyNode = $(ReactDOM.findDOMNode(this.refs.body));
    $bodyNode.hide();
  }

  @autobind
  handleDocumentClick(event) {
    const $containerNode = $(ReactDOM.findDOMNode(this.refs.container));
    if ($containerNode.find(event.target).length === 0) {
      this.hideFilterBody();
    }
  }

  @autobind
  handleSelectDate(selectedDates) {
    this.setState({
      selectedDates,
    });

    this.hideFilterBody();
  }

  @autobind
  handleReset() {
    this.setState({
      selectedDates: [],
    });
  }

  @autobind
  handleFocus() {
    if (this.props.disabled) {
      return;
    }

    $(document).on('click', this.handleDocumentClick);
    const $bodyNode = $(ReactDOM.findDOMNode(this.refs.body));
    const firstFilterInput = $bodyNode.find('input[type=text]')[0];

    $bodyNode.show();
    firstFilterInput.focus();
  }

  // TODO: InputDatefilterBody não limpa campos no evento de form#reset.
  render() {
    return (
      <div className={this.className()} ref="container">
        <InputDatefilterSelect
          {...this.propsWithoutCSS()}
          selectedDates={this.state.selectedDates}
          onFocus={this.handleFocus}
        />

        <InputDatefilterBody
          {...this.propsWithoutCSS()}
          id={this.props.originalId}
          name={this.props.originalName}
          onSelectDate={this.handleSelectDate}
          ref="body"
        />
      </div>
    );
  }
}
