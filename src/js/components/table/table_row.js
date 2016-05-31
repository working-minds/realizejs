import React, { Component } from 'react';
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
    selectable: React.PropTypes.oneOf(['multiple', 'none', 'one']),
    selected: PropTypes.bool,
    actionButtons: PropTypes.array,
    rowSelectableFilter: PropTypes.func,
    onSelectToggle: PropTypes.func,
    onClickRow: PropTypes.func,
    rowHref: PropTypes.string,
    tableRowCssClass: PropTypes.func
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
    onSelectToggle: function(event, dataRows, selected) {}
  };

  renderSelectCell () {
    if(this.props.selectable === 'none') {
      return <td className= {"table-select"}></td>;
    }

    let rowSelectableFilter = this.props.rowSelectableFilter;
    if(typeof rowSelectableFilter === "function" && !rowSelectableFilter(this.props.data)) {
      return <td className= {"table-select"}></td>;
    }

    return (
      <TableSelectCell
        onSelectToggle={this.handleSelectToggle.bind(this)}
        dataRowIds={[this.getDataRowId()]}
        rowId={String(this.getDataRowId())}
        selected={this.props.selected}
        key="select"
      />
    );
  }

  handleSelectToggle(e, dataRowsIds, selected) {
    this.props.onSelectToggle(e, dataRowsIds, selected, this.props.data);
  }

  renderCells () {
    let columns = this.props.columns;
    let cellComponents = [];

    $.each(columns, function(columnKey, columnProps) {
      let columnName = columnProps.name || columnKey;
      cellComponents.push(
        <TableCell
          {...columnProps}
          {...this.propsWithoutCSS()}
          name={columnName}
          key={columnName}
        />
      );
    }.bind(this));

    return cellComponents;
  }

  renderActionsCell () {
    if(!$.isArray(this.props.actionButtons) || this.props.actionButtons.length === 0) {
      return <td></td>;
    }

    return <TableRowActions {...this.propsWithoutCSS()} ref="actions" />;
  }

  render () {
    return (
      <tr className={this.getClassName()} ref="row" onClick={this.rowClick}>
        {this.renderSelectCell()}
        {this.renderCells()}
        {this.renderActionsCell()}
      </tr>
    );
  }

  getClassName () {
    let className = this.className();

    if(!!this.props.onClickRow || !!this.props.rowHref) {
      className = className + ' clickable-row'
    }

    if(!!this.props.tableRowCssClass) {
      var cssClass = this.props.tableRowCssClass(this.props.data);
      if (!!cssClass) {
        className = className + ' ' + cssClass;
      }
    }

    return className;
  }

  rowClick = (event) => {
    if(event.isPropagationStopped()) {
      return;
    }

    let onClickRow = this.props.onClickRow;
    let rowHref = this.props.rowHref;

    if(!!onClickRow && typeof onClickRow === "function") {
      onClickRow(event, this.props.data);
    } else if(!!rowHref && typeof rowHref === "string") {
      this.goToRowHref(event);
    }
  }

  goToRowHref = (event) => {
    let rowHref = this.props.rowHref;
    let dataRowId = this.props.data[this.props.dataRowIdField];

    window.location.href = rowHref.replace(/:id/, dataRowId);
  }

  getDataRowId () {
    return this.props.data[this.props.dataRowIdField];
  }
}
