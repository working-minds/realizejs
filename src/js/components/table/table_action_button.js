import React, { Component } from 'react';
import _ from 'lodash';

import PropTypes from '../../prop_types';
import QueryStringParser from '../../utils/query_string_parser';
import { autobind, mixin } from '../../utils/decorators';

import { CssClassMixin, RequestHandlerMixin } from '../../mixins';
import Button from '../button/button';
import { Link } from '../link/link';

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
    conditionParams: PropTypes.object,
    params: PropTypes.object,
    element: PropTypes.component,
    confirmsWith: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    conditionToShowActionButton: PropTypes.func,
  };

  static defaultProps = {
    name: null,
    selectedRowIds: [],
    allSelected: false,
    method: null,
    disabled: false,
    selectionContext: 'none',
    element: Link,
    conditionParams: null,
    params: {},
    confirmsWith: null,
    href: null,
    onClick() {},
    conditionToShowActionButton() { return true; },
  };

  isDisabled() {
    const { selectionContext } = this.props;
    if (this.props.disabled || this.state.isLoading) return true;
    else if (selectionContext === 'none') return false;
    else if (selectionContext === 'atLeastOne') {
      return (this.props.selectedRowIds.length === 0);
    }

    return false;
  }

  getHref() {
    const { href, params } = this.props;
    if (!href) return '#!';

    const selectedData = this.getSelectedData();
    const hrefParams = Object.assign({}, selectedData, params);
    return `${href}?${QueryStringParser.parseFromObject(hrefParams)}`;
  }

  getSelectedData() {
    const { allSelected, allSelectedData, selectedRowIdsParam, selectedRowIds } = this.props;
    return (allSelected && !_.isEmpty(allSelectedData))
      ? allSelectedData
      : { [selectedRowIdsParam]: selectedRowIds };
  }

  @autobind
  handleActionButtonClick(event) {
    const { onClick, actionUrl } = this.props;
    const selectedData = this.getSelectedData();

    if (this.isDisabled()) return;
    else if (typeof onClick === 'function') {
      onClick(event, selectedData);
    } else if (actionUrl) {
      this.performRequest(actionUrl, selectedData, this.props.method);
    }

    event.stopPropagation();
  }

  render() {
    if (!this.props.conditionToShowActionButton(this.props.conditionParams)) {
      return <span />;
    }

    return (
      <Button
        {...this.props}
        isLoading={this.state.isLoading}
        disabled={this.isDisabled()}
        href={this.getHref()}
        onClick={this.handleActionButtonClick}
      />
    );
  }
}
