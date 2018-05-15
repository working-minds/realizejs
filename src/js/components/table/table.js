import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PropTypes from '../../prop_types';

import Realize from '../../realize';
import i18n from '../../i18n';
import themes from '../../theme';
import { mixin } from '../../utils/decorators';

import { CssClassMixin } from '../../mixins';

import TableActions from './table_actions';
import TableSelectCell from './table_select_cell';
import TableHeader from './table_header';
import TableRow from './table_row';

@mixin(CssClassMixin)
export default class Table extends Component {
  static propTypes = {
    resource: PropTypes.string,
    columns: PropTypes.object,
    dataRowIdField: PropTypes.string,
    selectedRowIdsParam: PropTypes.string,
    selectable: PropTypes.oneOf(['multiple', 'none', 'one']),
    sortConfigs: PropTypes.object,
    sortData: PropTypes.object,
    dataRows: PropTypes.array,
    count: PropTypes.number,
    selectedRowIds: PropTypes.array,
    allSelected: PropTypes.bool,
    allSelectedData: PropTypes.object,
    emptyMessage: PropTypes.localizedString,
    actionButtons: PropTypes.object,
    onSort: PropTypes.func,
    onSelect: PropTypes.func,
    onRemoveSelection: PropTypes.func,
    onSelectAll: PropTypes.func,
    rowSelectableFilter: PropTypes.func,
    forceShowSelectAllButton: PropTypes.bool,
    onClickRow: PropTypes.func,
    rowHref: PropTypes.string,
    tableRowCssClass: PropTypes.func,
  };

  static defaultProps = {
    themeClassKey: 'table',
    columns: {},
    dataRowIdField: 'id',
    selectedRowIdsParam: 'rowIds',
    selectable: 'multiple',
    sortConfigs: {},
    sortData: {},
    dataRows: [],
    count: 0,
    selectedRowIds: null,
    allSelected: null,
    allSelectedData: {},
    emptyMessage: 'table.emptyResult',
    actionButtons: {
      member: [],
      collection: [],
    },
    onSort(sortData) {},
    onSelect(event, selectedRowIds) {},
    onRemoveSelection(event) {},
    onSelectAll(event) {},
    rowSelectableFilter: null,
    forceShowSelectAllButton: false,
    onClickRow: null,
    rowHref: null,
    tableRowCssClass: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedRowIds: this.props.selectedRowIds || [],
      allSelected: this.props.allSelected,
    };
  }

  componentWillReceiveProps(nextProps) {
    let selectedRowIds = nextProps.selectedRowIds;
    let allSelected = nextProps.allSelected;

    if (!!selectedRowIds && $.isArray(selectedRowIds)) {
      this.setState({ selectedRowIds });
    }

    if (allSelected !== null && allSelected !== undefined) {
      this.setState({ allSelected });
    }
  }

  componentDidMount() {
    this.sortConfigs = $.extend({}, Realize.config.grid.sort, this.props.sortConfigs);

    if (!!this.props.customTableHeader) {
      let $thead = $(ReactDOM.findDOMNode(this.thead));
      $thead.prepend(this.props.customTableHeader);
    }
  }

  renderActions() {
    const collectionButtons = this.props.actionButtons.collection || [];
    if (this.props.selectable === 'none' && collectionButtons.length === 0) {
      return <span />;
    }

    return (
      <TableActions
        dataRows={this.state.dataRows}
        selectedRowIds={this.state.selectedRowIds}
        selectedRowIdsParam={this.props.selectedRowIdsParam}
        selectable={this.props.selectable}
        allSelected={this.state.allSelected}
        allSelectedData={this.props.allSelectedData}
        count={this.props.count}
        onRemoveSelection={this.removeSelection}
        onSelectAll={this.selectAllRows}
        actionButtons={collectionButtons}
        rowSelectableFilter={this.props.rowSelectableFilter}
        forceShowSelectAllButton={this.props.forceShowSelectAllButton}
      />
    );
  }

  renderHeaderSelectCell() {
    if (this.props.selectable === 'none' || this.props.selectable === 'one') {
      return <th className={"table-select"}></th>;
    }

    return (
      <TableSelectCell
        onSelectToggle={this.toggleDataRows}
        dataRowIds={this.getDataRowIds()}
        selected={this.isAllDataRowsSelected()}
        rowId={"all"}
        cellElement={"th"}
        key={"header_select"}
      />
    );
  }

  renderTableHeaders() {
    let columns = this.props.columns;
    let headerComponents = [];

    for (var columnName in columns) {
      if (columns.hasOwnProperty(columnName)) {
        let columnProps = columns[columnName];
        headerComponents.push(
          <TableHeader {...columnProps} {...this.sortConfigs}
            name={columnName}
            key={columnName}
            sortDirection={this.sortDirectionForColumn(columnName, columnProps)}
            ref={'header_' + columnName}
            resource={this.props.resource}
            onSort={this.props.onSort}
            clearTheme={this.props.clearTheme}
          />
        );
      }
    }

    return headerComponents;
  }

  renderTableRows() {
    let rowComponents = [];
    let dataRows = this.props.dataRows;

    for (var i = 0; i < dataRows.length; i++) {
      let dataRow = dataRows[i];
      rowComponents.push(
        <TableRow
          {...this.propsWithoutCSS()}
          onSelectToggle={this.toggleDataRows}
          selected={this.dataRowIsSelected(dataRow)}
          data={dataRow}
          dataRowIdField={this.props.dataRowIdField}
          actionButtons={this.props.actionButtons.member || []}
          key={'table_row_' + i}
          rowSelectableFilter={this.props.rowSelectableFilter}
          onClickRow={this.props.onClickRow}
          rowHref={this.props.rowHref}
          tableRowCssClass={this.props.tableRowCssClass}
        />
      );
    }

    return rowComponents;
  }

  renderEmptyMessage() {
    let columnsCount = 1;
    for (let key in this.props.columns) {
      columnsCount++;
    }

    if (this.props.selectable === 'multiple') {
      columnsCount++;
    }

    return (
      <tr>
        <td colSpan={columnsCount} className="empty-message">
          {i18n.t(this.props.emptyMessage)}
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div className={this.wrapperClassName()}>
        {this.renderActions()}
        <table className={this.className()}>
          <thead ref={ref => { this.thead = ref; }}>
          <tr>
            {this.renderHeaderSelectCell()}
            {this.renderTableHeaders()}
          </tr>
          </thead>
          <tbody>
          {(this.props.dataRows.length > 0) ? this.renderTableRows() : this.renderEmptyMessage()}
          </tbody>
        </table>
      </div>
    );
  }

  wrapperClassName() {
    let wrapperClassName = '';
    if (!this.props.clearTheme) {
      wrapperClassName = themes.getCssClass('table.wrapper');
    }

    return wrapperClassName;
  }

  sortDirectionForColumn(columnName, columnProps) {
    let sortFieldName = columnProps.sortFieldName;
    let sortField = sortFieldName || columnName;

    let sortData = this.props.sortData;
    if (!!sortData.field && sortData.field == sortField) {
      return sortData.direction;
    }

    return null;
  }

  getDataRowIds() {
    const { rowSelectableFilter } = this.props;
    return this.props.dataRows
      .filter((dataRow) => !rowSelectableFilter || !!rowSelectableFilter(dataRow))
      .map((dataRow) => dataRow[this.props.dataRowIdField]);
  }

  toggleDataRows = (event, dataRowIds, selected, selectedData) => {
    let selectedRowIds = [];
    if (selected) {
      selectedRowIds = this.getSelectedDataRows(dataRowIds);
    } else {
      selectedRowIds = this.removeSelectedDataRows(dataRowIds);
      selectedData = {};
    }

    this.props.onSelect(event, selectedRowIds, selectedData);
    if (!event.isDefaultPrevented()) {
      this.setState({
        selectedRowIds,
        allSelected: false,
      });
    }
  }

  getSelectedDataRows(dataRowId) {
    if (this.props.selectable === 'one')
      return dataRowId;

    return this.addSelectedDataRow(dataRowId);
  }

  addSelectedDataRow(dataRowId) {
    let selectedRowIds = this.state.selectedRowIds.slice();

    dataRowId
      .filter(dataRowId => selectedRowIds.indexOf(dataRowId) < 0)
      .forEach(dataRowId => selectedRowIds.push(dataRowId));

    return selectedRowIds;
  }

  removeSelectedDataRows(dataRowIds) {
    return $.grep(this.state.selectedRowIds, function (dataRowId) {
      return ($.inArray(dataRowId, dataRowIds) < 0);
    }.bind(this));
  }

  dataRowIsSelected(dataRow) {
    let dataRowId = dataRow[this.props.dataRowIdField];
    return (($.inArray(dataRowId, this.state.selectedRowIds) >= 0) || this.props.allSelected);
  }

  isAllDataRowsSelected() {
    let dataRowIds = this.getDataRowIds();
    let selectedRowIdsInPage = $.grep(this.state.selectedRowIds, function (selectedDataRowId) {
      return ($.inArray(selectedDataRowId, dataRowIds) >= 0);
    });

    return ((dataRowIds.length > 0 && (dataRowIds.length == selectedRowIdsInPage.length)) || this.props.allSelected);
  }

  removeSelection = (event) => {
    this.props.onRemoveSelection(event);

    if (!event.isDefaultPrevented()) {
      this.setState({
        selectedRowIds: [],
        allSelected: false,
      });
    }
  }

  selectAllRows = (event) => {
    this.props.onSelectAll(event);

    if (!event.isDefaultPrevented()) {
      this.setState({
        allSelected: true,
      });
    }
  }
}
