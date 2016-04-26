import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop_types';
import $ from 'jquery';
import { autobind, mixin } from 'utils/decorators';

import {
  InputDatefilterSelect,
  InputDatefilterBody,
} from 'components';

import {
  CssClassMixin,
  InputComponentMixin,
} from 'mixins';

@mixin(
  CssClassMixin,
  InputComponentMixin
)
export default class InputDatefilter extends Component {
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
    selectedDates: [],
  };

  componentDidMount() {
    const $containerNode = $(ReactDOM.findDOMNode(this.refs.container));
    const $form = $($containerNode.find('input')[0].form);
    $form.on('reset', this.clearSelection);
  }

  componentWillUnmount() {
    const $containerNode = $(ReactDOM.findDOMNode(this.refs.container));
    const $form = $($containerNode.find('input')[0].form);
    $form.off('reset', this.clearSelection);
  }

  clearSelection() {
    this.setState({
      selectedDates: [],
    });
  }

  showFilterBody() {
    if (this.props.disabled) {
      return;
    }

    $(document).on('click', this.handleDocumentClick);
    const $bodyNode = $(ReactDOM.findDOMNode(this.refs.body));
    const firstFilterInput = $bodyNode.find('input[type=text]')[0];

    $bodyNode.show();
    firstFilterInput.focus();
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

  render() {
    return (
      <div className={this.className()} ref="container">
        <InputDatefilterSelect
          {...this.propsWithoutCSS()}
          selectedDates={this.state.selectedDates}
          onFocus={this.showFilterBody}
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
