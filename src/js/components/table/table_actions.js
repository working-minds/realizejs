import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import { mixin } from '../../utils/decorators';

import CssClassMixin from '../../mixins/css_class_mixin';
import TableActionButton from './table_action_button';
import TableSelectionIndicator from './table_selection_indicator';

@mixin(CssClassMixin)
export default class TableActions extends Component {
  static propTypes = {
    dataRows: PropTypes.array,
    selectable: PropTypes.oneOf(['multiple', 'none', 'one']),
    selectedRowIds: PropTypes.array,
    selectedRowIdsParam: PropTypes.string,
    actionButtons: PropTypes.array,
    allSelected: PropTypes.bool,
    count: PropTypes.number,
    onRemoveSelection: PropTypes.func,
    onSelectAll: PropTypes.func,
    rowSelectableFilter: PropTypes.func,
    forceShowSelectAllButton: PropTypes.bool,
  };

  static defaultProps = {
    themeClassKey: 'table.actions',
    actionButtons: [],
    selectable: 'multiple',
    selectedRowIds: [],
    allSelected: false,
    rowSelectableFilter: null,
    forceShowSelectAllButton: false,
    onRemoveSelection() {},
    onSelectAll() {},
  };

  renderButtons() {
    const actionButtons = [];
    const actionButtonsProps = this.props.actionButtons;

    for (let i = 0; i < actionButtonsProps.length; i++) {
      const actionButtonProps = actionButtonsProps[i];
      actionButtons.push(
        <TableActionButton
          {...actionButtonProps}
          {...this.propsWithoutCSS()}
          themeClassKey={"button.flat"}
          key={`action_${i}`}
        />
      );
    }

    return actionButtons;
  }

  render() {
    return (
      <div className={this.className()}>
        <div>
          <TableSelectionIndicator {...this.propsWithoutCSS()} />
          {this.renderButtons()}
        </div>
      </div>
    );
  }
}
