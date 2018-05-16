import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from '../../../prop_types';
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
    bodyOpen: false,
  };

  getInputFormNode() {
    const container = ReactDOM.findDOMNode(this.container);
    return container.querySelector('input').form;
  }

  focusBody() {
    const bodyNode = ReactDOM.findDOMNode(this.body);
    const firstFilterInput = bodyNode.querySelector('input[type=text]');
    firstFilterInput.focus();
  }

  render() {
    return (
      <div className={this.className()} ref={ref => { this.container = ref; }}>
        <InputDatefilterSelect
          {...this.propsWithoutCSS()}
          selectedDates={this.state.selectedDates}
          onFocus={this.handleFocus}
        />

        <InputDatefilterBody
          {...this.propsWithoutCSS()}
          hidden={!this.state.bodyOpen}
          id={this.props.originalId}
          name={this.props.originalName}
          onSelectDate={this.handleSelectDate}
          ref={ref => { this.body = ref; }}
        />
      </div>
    );
  }

  @autobind
  handleDocumentClick(event) {
    const container = ReactDOM.findDOMNode(this.container);
    const containerHasTargetNode = container.contains(event.target);

    if (!containerHasTargetNode) this.handleHideBody();
  }

  @autobind
  handleSelectDate(selectedDates) {
    this.setState({ selectedDates });
    this.handleHideBody();
  }

  @autobind
  handleReset() {
    this.setState({ selectedDates: [] });
  }

  @autobind
  handleFocus() {
    if (this.props.disabled) return;

    document.addEventListener('click', this.handleDocumentClick);
    this.setStatePromise({ bodyOpen: true })
      .then(() => this.focusBody());
  }

  @autobind
  handleHideBody() {
    document.removeEventListener('click', this.handleDocumentClick);
    this.setStatePromise({ bodyOpen: false });
  }
}
