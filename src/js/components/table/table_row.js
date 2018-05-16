import React, { Component } from 'react';
import $ from 'jquery';
import PropTypes from '../../prop_types';
import { mixin } from '../../utils/decorators';

import { CssClassMixin } from '../../mixins';

import TableSelectCell from './table_select_cell';
import TableCell from './table_cell';
import TableRowActions from './table_row_actions';

@mixin(CssClassMixin)
export default class TableRow extends Component {
  static propTypes = {
    columns: PropTypes.object,
    data: PropTypes.object,
    dataRowIdField: PropTypes.string,
    selectable: PropTypes.oneOf(['multiple', 'none', 'one']),
    selected: PropTypes.bool,
    actionButtons: PropTypes.array,
    rowSelectableFilter: PropTypes.func,
    onSelectToggle: PropTypes.func,
    onClickRow: PropTypes.func,
    rowHref: PropTypes.string,
    tableRowCssClass: PropTypes.func,
  };

  static defaultProps = {
    columns: {},
    data: {},
    dataRowIdField: 'id',
    selectable: 'multiple',
    selected: false,
    actionButtons: [],
    themeClassKey: 'table.row',
    rowSelectableFilter: null,
    onClickRow: null,
    rowHref: null,
    tableRowCssClass: null,
    onSelectToggle() {},
  };

  constructor(props) {
    super(props);

    this.handleSelectToggle = this.handleSelectToggle.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
  }

  handleSelectToggle(e, dataRowsIds, selected) {
    this.props.onSelectToggle(e, dataRowsIds, selected, this.props.data);
  }

  getClassName() {
    let className = this.className();

    if (!!this.props.onClickRow || !!this.props.rowHref) {
      className += ` clickable-row`;
    }

    if (!!this.props.tableRowCssClass) {
      const cssClass = this.props.tableRowCssClass(this.props.data);
      if (!!cssClass) {
        className += ` ${cssClass}`;
      }
    }

    if (this.props.selected) {
      className += ` selected`;
    }

    return className;
  }

  handleRowClick(event) {
    if (event.isPropagationStopped()) {
      return;
    }

    const { onClickRow, rowHref } = this.props;

    if (!!onClickRow && typeof onClickRow === 'function') {
      onClickRow(event, this.props.data);
    } else if (!!rowHref && typeof rowHref === 'string') {
      this.goToRowHref(event);
    }
  }

  goToRowHref() {
    const { rowHref } = this.props;
    const dataRowId = this.props.data[this.props.dataRowIdField];

    window.location.href = rowHref.replace(/:id/, dataRowId);
  }

  getDataRowId() {
    return this.props.data[this.props.dataRowIdField];
  }

  /* Renderers */

  renderSelectCell() {
    const { rowSelectableFilter, data, selectable } = this.props;

    if (selectable === 'none') {
      return <td className={"table-select"} />;
    }

    if (typeof rowSelectableFilter === 'function' && !rowSelectableFilter(data)) {
      return <td className={"table-select"} />;
    }

    return (
      <TableSelectCell
        onSelectToggle={this.handleSelectToggle}
        dataRowIds={[this.getDataRowId()]}
        rowId={String(this.getDataRowId())}
        selected={this.props.selected}
        key="select"
      />
    );
  }

  renderCells() {
    const { columns } = this.props;
    const cellComponents = [];

    $.each(columns, (columnKey, columnProps) => {
      const columnName = columnProps.name || columnKey;
      cellComponents.push(
        <TableCell
          {...columnProps}
          {...this.propsWithoutCSS()}
          name={columnName}
          key={columnName}
        />
      );
    });

    return cellComponents;
  }

  renderActionsCell() {
    if (!Array.isArray(this.props.actionButtons) || this.props.actionButtons.length === 0) {
      return <td />;
    }

    return <TableRowActions {...this.propsWithoutCSS()} ref={ref => { this.actions = ref; }} />;
  }

  render() {
    return (
      <tr
        className={this.getClassName()}
        ref={ref => { this.row = ref; }}
        onClick={this.handleRowClick}
      >
        {this.renderSelectCell()}
        {this.renderCells()}
        {this.renderActionsCell()}
      </tr>
    );
  }
}
