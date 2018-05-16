import React, { Component } from 'react';
import PropTypes from '../../../prop_types';
import i18n from '../../../i18n';
import { mixin } from '../../../utils/decorators';

import {
  Icon,
  InputText,
  InputAutocompleteList,
} from '../../../components';

import { CssClassMixin } from '../../../mixins';

@mixin(CssClassMixin)
export default class InputAutocompleteResult extends Component {
  static propTypes = {
    id: PropTypes.string,
    options: PropTypes.array,
    selectedOptions: PropTypes.array,
    active: PropTypes.number,
    searchValue: PropTypes.string,
    actionButtons: PropTypes.array,
    onKeyDown: PropTypes.func,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    onClear: PropTypes.func,
    onOptionMouseEnter: PropTypes.func,
  };

  static defaultProps = {
    themeClassKey: 'input.autocomplete.result',
    options: [],
    selectedOptions: [],
  };

  renderSearchInput() {
    return (
      <div className="input-autocomplete__search">
        <Icon type="search" className="prefix" />
        <InputText
          onKeyDown={this.props.onKeyDown}
          value={this.props.searchValue}
          onChange={this.props.onChange}
          autoComplete="off"
        />
      </div>
    );
  }

  renderClearButton() {
    return (
      <a
        href="#!"
        className="input-autocomplete__clear-button"
        onClick={this.props.onClear}
      >
        {i18n.t('inputs.autocomplete.clear')}
      </a>
    );
  }

  renderResult() {
    const { options } = this.props;

    if (options.length > 0) {
      return this.renderList();
    }

    return this.renderEmptyMessage();
  }

  renderList() {
    return (
      <InputAutocompleteList
        id={this.props.id}
        selectedOptions={this.props.selectedOptions}
        options={this.props.options}
        active={this.props.active}
        onSelect={this.props.onSelect}
        onOptionMouseEnter={this.props.onOptionMouseEnter}
        ref={ref => { this.list = ref; }}
      />
    );
  }

  renderEmptyMessage() {
    return (
      <div className="input-autocomplete__empty-message">
        {i18n.t('inputs.autocomplete.emptyResult')}
      </div>
    );
  }

  renderActionButtons() {
    const actionButtons = [];
    const actionButtonsProps = this.props.actionButtons;

    for (let i = 0; i < actionButtonsProps.length; i++) {
      const actionButtonProps = actionButtonsProps[i];
      actionButtons.push(this.renderActionButton(actionButtonProps, i));
    }

    return (
      <div className="input-autocomplete__action-buttons">
        {actionButtons}
      </div>
    );
  }

  renderActionButton(actionButtonProps, i) {
    const buttonComponent = (actionButtonProps.component || 'Button');
    const buttonProps = {
      ...actionButtonProps,
      themeClassKey: 'input.autocomplete.actionButton',
      element: 'a',
      key: (`action_${i}`),
    };

    return React.createElement(eval(buttonComponent), buttonProps);
  }

  render() {
    return (
      <div className={this.className()}>
        {this.renderSearchInput()}
        {this.renderClearButton()}
        {this.renderResult()}
        {this.renderActionButtons()}
      </div>
    );
  }
}
