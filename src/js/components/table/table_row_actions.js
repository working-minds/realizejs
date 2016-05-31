import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import $ from 'jquery';
import { mixin } from '../../utils/decorators';

import { CssClassMixin, RequestHandlerMixin } from '../../mixins';
import TableRowActionButton from './table_row_action_button';

@mixin(
  CssClassMixin,
  RequestHandlerMixin
)
export default class TableRowActions extends Component {
  static propTypes = {
    data: PropTypes.object,
    dataRowIdField: PropTypes.string,
    actionButtons: PropTypes.array,
    conditionParams: PropTypes.object,
    component: PropTypes.string,
    paramsToComponent: PropTypes.object
  };

  static defaultProps = {
    data: {},
    dataRowIdField: 'id',
    actionButtons: [],
    themeClassKey: 'table.row.actions',
    conditionParams: {},
    component: null,
    paramsToComponent: {}
  };

  renderButtons () {
    let actionButtons = [];
    let actionButtonsProps = this.props.actionButtons;

    for(let i = 0; i < actionButtonsProps.length; i++) {
      let actionButtonProps = actionButtonsProps[i];

      if(!!actionButtonProps.component) {
        return React.createElement(eval(actionButtonProps.component), $.extend({}, this.props, actionButtonProps.paramsToComponent))
      } else {
        actionButtons.push(
          <TableRowActionButton key={"action_" + i} {...actionButtonProps} dataRowIdField={this.props.dataRowIdField} data={this.props.data} />
        );
      }
    }

    return actionButtons;
  }

  render () {
    return (
      <td className={this.className()}>
        {this.renderButtons()}
      </td>
    );
  }
}
