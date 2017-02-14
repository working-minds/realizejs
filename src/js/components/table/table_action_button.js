import React, { Component } from 'react';
import $ from 'jquery';
import Button from '../button/button';
import PropTypes from '../../prop_types';
import { mixin } from '../../utils/decorators';

import { CssClassMixin, RequestHandlerMixin } from '../../mixins';

@mixin(CssClassMixin, RequestHandlerMixin)
export default class TableActionButton extends Component {
  static propTypes = {
    name: PropTypes.string,
    selectedRowIds: PropTypes.array,
    selectedRowIdsParam: PropTypes.string,
    allSelected: PropTypes.bool,
    allSelectedData: PropTypes.object,
    count: PropTypes.number,
    actionUrl: PropTypes.string,
    method: PropTypes.string,
    disabled: PropTypes.bool,
    selectionContext: PropTypes.oneOf(['none', 'atLeastOne']),
    conditionToShowActionButton: PropTypes.func,
    component: PropTypes.func,
    params: PropTypes.object,
  };

  static defaultProps = {
    name: null,
    selectedRowIds: [],
    allSelected: false,
    method: null,
    conditionParams: null,
    disabled: false,
    selectionContext: 'none',
    component: Button,
    params: null,
    conditionToShowActionButton() { return true; },
  };

  renderButton() {
    const component = [];
    if (!this.props.conditionToShowActionButton(this.props.conditionParams)) {
      return component;
    }

    const buttonProps = Object.assign({}, this.props, {
      isLoading: this.state.isLoading,
      disabled: this.isDisabled(),
      method: this.actionButtonMethod(),
      href: this.actionButtonHref(),
      onClick: this.actionButtonClick,
      key: this.props.name,
    });

    const buttonComponent = React.createElement(this.props.component, buttonProps);
    component.push(buttonComponent);

    return component;
  }

  render() {
    return (
      <span>
        {this.renderButton()}
      </span>
    );
  }

  isDisabled() {
    if (!!this.props.disabled || !!this.state.isLoading) {
      return true;
    }

    let selectionContext = this.props.selectionContext;
    if (selectionContext === 'none') {
      return false;
    } else if (selectionContext === 'atLeastOne') {
      return (this.props.selectedRowIds.length === 0);
    }

    return false;
  }

  actionButtonMethod() {
    let buttonHref = this.props.href;
    if (!buttonHref) {
      return null;
    }

    return this.props.method;
  }

  actionButtonHref() {
    let buttonHref = this.props.href;
    if (!buttonHref) {
      return '#!';
    }

    let selectedData = this.getSelectedData();
    buttonHref = (buttonHref + '?' + $.param(selectedData));

    if (!!this.props.params) {
      for (let property in this.props.params) {
        buttonHref = buttonHref + '&' + property + '=' + this.props.params[property];
      }
    }

    return buttonHref;
  }

  actionButtonClick = (event) => {
    if (this.isDisabled()) {
      return;
    }

    let buttonOnClick = this.props.onClick;
    let buttonAction = this.props.actionUrl;
    let selectedData = this.getSelectedData();

    if ($.isFunction(buttonOnClick)) {
      buttonOnClick(event, selectedData);
    } else if (!!buttonAction) {
      this.performRequest(buttonAction, selectedData, this.props.method);
    }
  }

  getSelectedData() {
    let selectedData = {};
    if (this.props.allSelected && !!this.props.allSelectedData && !$.isEmptyObject(this.props.allSelectedData)) {
      selectedData = this.props.allSelectedData;
    } else {
      selectedData[this.props.selectedRowIdsParam] = this.props.selectedRowIds;
    }

    return selectedData;
  }
}
