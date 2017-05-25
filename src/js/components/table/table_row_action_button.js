import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import i18n from '../../i18n/i18n';
import { autobind, mixin } from '../../utils/decorators';

import { CssClassMixin, RequestHandlerMixin } from '../../mixins';
import Button from '../../components/button/button';

@mixin(
  CssClassMixin,
  RequestHandlerMixin
)
export default class TableRowActionButton extends Component {
  static propTypes = {
    data: PropTypes.object,
    dataIdParam: PropTypes.string,
    dataRowIdField: PropTypes.string,
    count: PropTypes.number,
    actionUrl: PropTypes.string,
    method: PropTypes.string,
    disabled: PropTypes.bool,
    href: PropTypes.string,
    confirmsWith: PropTypes.string,
    onClick: PropTypes.func,
    conditionToShowActionButton: PropTypes.func,
  };

  static defaultProps = {
    themeClassKey: 'button.flat',
    data: {},
    dataIdParam: 'id',
    dataRowIdField: 'id',
    method: null,
    disabled: false,
    href: null,
    confirmsWith: null,
    onClick: () => true,
    conditionToShowActionButton: () => true,
  };

  replaceUrlDataRowId(url) {
    const { data, dataRowIdField } = this.props;
    const dataRowId = data[dataRowIdField];

    return (url)
      ? url.replace(/:id/, dataRowId)
      : null;
  }

  getParsedHref() {
    return this.replaceUrlDataRowId(this.props.href);
  }

  getParsedActionUrl() {
    return this.replaceUrlDataRowId(this.props.actionUrl);
  }

  getActionData() {
    const dataIdParam = this.props.dataIdParam;
    const dataRowId = this.props.data[this.props.dataRowIdField];
    const actionData = {};

    actionData[dataIdParam] = dataRowId;
    return actionData;
  }

  executeAction() {
    const parsedActionUrl = this.getParsedActionUrl();
    const actionData = this.getActionData(this.props);
    this.performRequest(parsedActionUrl, actionData, (this.props.method || 'POST'));
  }

  @autobind
  handleActionButtonClick(event) {
    const { onClick, data, dataRowIdField, confirmsWith } = this.props;
    if (confirmsWith && !confirm(i18n.t(confirmsWith))) return;
    if (typeof onClick === 'function') {
      onClick(event, data[dataRowIdField], data);
    } else if (this.props.actionUrl) {
      this.executeAction();
    }

    event.stopPropagation();
  }

  render() {
    if (!this.props.conditionToShowActionButton(this.props.data)) {
      return <span />;
    }

    return (
      <Button
        {...this.props}
        href={this.getParsedHref()}
        onClick={this.handleActionButtonClick}
      />
    );
  }
}
