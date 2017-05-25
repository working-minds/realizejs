import React, { Component } from 'react';
import PropTypes from '../../prop_types';
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
  };

  static defaultProps = {
    data: {},
    dataRowIdField: 'id',
    actionButtons: [],
    themeClassKey: 'table.row.actions',
  };

  renderButtons() {
    const tableRowActionsProps = this.props;

    return this.props.actionButtons.map((actionButtonProps, i) => (
      <TableRowActionButton
        key={`action_${i}`}
        {...actionButtonProps}
        dataRowIdField={tableRowActionsProps.dataRowIdField}
        data={tableRowActionsProps.data}
      />
    ));
  }

  render() {
    return (
      <td className={this.className()}>
        {this.renderButtons()}
      </td>
    );
  }
}
