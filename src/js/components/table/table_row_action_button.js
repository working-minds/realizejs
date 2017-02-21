import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import $ from 'jquery';
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
    dataRowIdField: PropTypes.string,
    count: PropTypes.number,
    actionUrl: PropTypes.string,
    method: PropTypes.string,
    disabled: PropTypes.bool,
    conditionToShowActionButton: PropTypes.func,
    component: PropTypes.string,
    element: PropTypes.string
  };

  static defaultProps = {
    data: {},
    dataRowIdField: 'id',
    method: null,
    disabled: false,
    component: null,
    element: 'a',
    themeClassKey: 'button.flat',
    conditionToShowActionButton: function(data) { return true }
  };

  renderButton () {
    let component = [];
    if(!this.props.conditionToShowActionButton(this.props.data)) {
      return component;
    }

    if(!!this.props.component) {
      return React.createElement(eval(this.props.component), this.props)
    }
    else {
      component.push(
        <Button {...this.props}
          method={this.actionButtonMethod()}
          href={this.actionButtonHref()}
          onClick={this.actionButtonClick}
          key="button"
        />
      );
    }

    return component;
  }

  render () {
    return (
      <span>
        {this.renderButton()}
      </span>
    );
  }

  actionButtonMethod () {
    let buttonHref = this.props.href;
    if(!buttonHref) {
      return null;
    }

    return this.props.method;
  }

  actionButtonHref () {
    let buttonHref = this.props.href;
    if(!!buttonHref) {
      let dataRowId = this.props.data[this.props.dataRowIdField];
      buttonHref = buttonHref.replace(/:id/, dataRowId);
    }

    return buttonHref;
  }

  actionButtonUrl () {
    let buttonActionUrl = this.props.actionUrl;
    if(!!buttonActionUrl) {
      let dataRowId = this.props.data[this.props.dataRowIdField];
      buttonActionUrl = buttonActionUrl.replace(/:id/, dataRowId);
    }

    return buttonActionUrl;
  }

  @autobind
  actionButtonClick (event) {
    let buttonOnClick = this.props.onClick;
    let buttonAction = this.actionButtonUrl();

    if($.isFunction(buttonOnClick)) {
      let dataRowId = this.props.data[this.props.dataRowIdField];
      buttonOnClick(event, dataRowId, this.props.data);
    } else if(!!buttonAction) {
      let actionData = this.getActionData(this.props);
      this.performRequest(buttonAction, actionData, (this.props.method || 'POST'));
    }

    event.stopPropagation();
  }

  getActionData () {
    let dataIdParam = this.props.dataIdParam || 'id';
    let dataRowId = this.props.data[this.props.dataRowIdField];
    let actionData = {};

    actionData[dataIdParam] = dataRowId;
    return actionData;
  }
}
