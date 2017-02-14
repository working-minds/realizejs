import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import $ from 'jquery';
import { mixin } from '../../utils/decorators';
import Realize from '../../realize';
import { getProp } from '../../utils';

import {
  CssClassMixin,
  RequestHandlerMixin,
  RestActionsMixin,
  GridActionsMixin,
} from '../../mixins';

import {
  GridFilter,
  GridTable,
  GridPagination,
} from '../../components';

@mixin(
  CssClassMixin,
  RequestHandlerMixin,
  RestActionsMixin,
  GridActionsMixin
)
export default class Grid extends Component {
  static propTypes = {
    url: PropTypes.string,
    eagerLoad: PropTypes.bool,
    resource: PropTypes.string,
    paginationConfigs: PropTypes.object,
    sortConfigs: PropTypes.object,
    sortData: PropTypes.object,
    filter: PropTypes.object,
    columns: PropTypes.object,
    data: PropTypes.object,
    emptyMessage: PropTypes.localizedString,
    dataRowsParam: PropTypes.string,
    countParam: PropTypes.string,
    selectedRowIdsParam: PropTypes.string,
    dataRowIdField: PropTypes.string,
    isLoading: PropTypes.bool,
    selectable: PropTypes.oneOf(['multiple', 'none', 'one']),
    tableClassName: PropTypes.string,
    onLoadSuccess: PropTypes.func,
    onLoadError: PropTypes.func,
    rowSelectableFilter: PropTypes.func,
    customTableHeader: PropTypes.string,
    forceShowSelectAllButton: PropTypes.bool,
    onClickRow: PropTypes.func,
    tableRowCssClass: PropTypes.func,
    paginationOnTop: PropTypes.bool,
    clearThemeTable: PropTypes.bool,
    pagination: PropTypes.bool,
    perPageOptions: PropTypes.array,
    onFilterSubmit: PropTypes.func,
    onSelectDataRow: PropTypes.func,
    onRemoveSelection: PropTypes.func,
    onSelectAllRows: PropTypes.func,
  };

  static defaultProps = {
    themeClassKey: 'grid',
    eagerLoad: false,
    paginationConfigs: {},
    sortConfigs: {},
    sortData: {},
    filter: {},
    columns: {},
    dataRowsParam: 'data',
    countParam: 'count',
    selectedRowIdsParam: 'rowIds',
    dataRowIdField: 'id',
    isLoading: false,
    selectable: 'multiple',
    rowSelectableFilter: null,
    customTableHeader: null,
    forceShowSelectAllButton: false,
    onClickRow: null,
    tableRowCssClass: null,
    paginationOnTop: true,
    clearThemeTable: false,
    pagination: true,
    onLoadSuccess() {},
    onLoadError() {},
    onFilterSubmit() {},
    onSelectDataRow() {},
    onRemoveSelection() {},
    onSelectAllRows() {},
    data: {
      dataRows: [],
      count: 0,
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      dataRows: this.props.data.dataRows,
      selectedData: {},
      selectedRowIds: [],
      allSelected: false,
      count: this.props.data.count,
      page: 1,
      perPage: this.initialPerPage(),
      filterData: {},
      sortData: this.props.sortData,
      gridIsLoading: this.props.isLoading,
    };

    this.handlePagination = this.handlePagination.bind(this);
    this.handleChangePerPage = this.handleChangePerPage.bind(this);
    this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
    this.handleLoadError = this.handleLoadError.bind(this);
    this.handleSelectDataRows = this.handleSelectDataRows.bind(this);
    this.handleRemoveSelection = this.handleRemoveSelection.bind(this);
    this.handleSelectAllRows = this.handleSelectAllRows.bind(this);
  }

  /* Lifecycle */

  componentDidMount() {
    if (this.props.eagerLoad) {
      this.loadData();
    }
  }

  backToInitialState() {
    this.setState({
      selectedRowIds: [],
      allSelected: false,
      page: 1,
      filterData: {},
    }, () => {
      this.loadData();
    });
  }

  /* Configs */

  initialPerPage() {
    return this.paginationConfigs().perPage;
  }

  paginationConfigs() {
    return Object.assign({}, Realize.config.grid.pagination, this.props.paginationConfigs);
  }

  sortConfigs() {
    return Object.assign({}, Realize.config.grid.sort, this.props.sortConfigs);
  }

  /* Data load handlers */

  loadData() {
    this.setState({ gridIsLoading: true });
    const postData = this.buildPostData();
    const filterProps = this.props.filter;
    const filterMethod = filterProps.method || 'GET';
    const filterDataType = filterProps.dataType || 'json';

    $.ajax({
      url: this.getRestActionUrl('index'),
      method: filterMethod,
      dataType: filterDataType,
      data: postData,
      success: this.handleLoad,
      error: this.handleLoadError,
    });
  }

  handleLoad(data) {
    const dataRows = getProp(this.props.dataRowsParam, data);
    const count = getProp(this.props.countParam, data);

    this.setState({
      gridIsLoading: false,
      dataRows,
      count,
    }, () => {
      this.props.onLoadSuccess(data);
    });
  }

  handleLoadError(xhr, status, error) {
    this.props.onLoadError(xhr, status, error);
    this.setState({ gridIsLoading: false });

    console.log(`Grid Load Error: ${error}`);
  }

  buildPostData() {
    const postData = Object.assign({},
      this.state.filterData,
      this.buildPaginationPostData()
    );

    if (typeof this.state.sortData === 'object' && !!this.state.sortData.field) {
      Object.assign(postData, this.buildSortPostData());
    }

    return postData;
  }

  buildPaginationPostData() {
    const paginationConfigs = this.paginationConfigs();
    const paginationPostData = {};

    const paginationParam = paginationConfigs.param;
    const paginationParamPerPage = paginationConfigs.perPageParam;

    paginationPostData[paginationParam] = this.state.page;
    paginationPostData[paginationParamPerPage] = this.state.perPage;

    return paginationPostData;
  }

  buildSortPostData() {
    const sortConfigs = this.sortConfigs();
    const sortParam = sortConfigs.param;
    const sortDirectionParam = sortConfigs.directionParam;
    const sortPostData = {};
    sortPostData[sortParam] = this.parseSortPostDataValue(sortConfigs);
    sortPostData[sortDirectionParam] = this.state.sortData.direction;

    return sortPostData;
  }

  parseSortPostDataValue(sortConfigs) {
    const sortValueFormat = sortConfigs.fieldValueFormat;
    const field = this.state.sortData.field;
    const direction = this.state.sortData.direction;

    return !sortValueFormat
      ? field
      : sortValueFormat.replace(/%\{field}/, field).replace(/%\{direction}/, direction);
  }

  /* props parsers */

  buildGridClassName() {
    let className = this.className();
    if (this.state.gridIsLoading) {
      className += ' loading';
    }

    return className;
  }

  /* Serializing */

  serialize() {
    return this.state.dataRows;
  }

  /* Event handlers */

  handlePagination(page) {
    this.state.page = page;
    if (this.state.allSelected) {
      this.state.selectedRowIds = [];
    }

    this.state.allSelected = false;
    this.loadData();
  }

  handleChangePerPage(perPage) {
    this.state.perPage = perPage;
    this.paginationConfigs().perPage = perPage;

    if (this.state.allSelected) {
      this.state.selectedRowIds = [];
    }

    this.state.allSelected = false;
    this.loadData();
  }

  handleFilterSubmit(event, postData) {
    this.props.onFilterSubmit(event, postData);

    if (!event.isDefaultPrevented()) {
      event.preventDefault();

      this.state.selectedRowIds = [];
      this.state.allSelected = false;
      this.state.filterData = postData;
      this.state.page = 1;
      this.loadData();
    }
  }

  handleSort(sortData) {
    this.state.sortData = sortData;
    this.state.page = 1;
    this.loadData();
  }

  /* Selection event handlers */

  handleSelectDataRows(event, selectedRowIds, selectedData) {
    this.props.onSelectDataRow(event, selectedRowIds);
    if (!event.isDefaultPrevented()) {
      event.preventDefault();

      this.setState(this.getSelectDataRowsState(selectedRowIds, selectedData));
    }
  }

  getSelectDataRowsState(selectedRowIds, selectedData) {
    const nextState = { selectedRowIds, allSelected: false };

    if (!!selectedData && this.props.selectable === 'one') {
      nextState.selectedData = selectedData;
    }

    return nextState;
  }

  handleRemoveSelection(event) {
    this.props.onRemoveSelection(event);
    if (!event.isDefaultPrevented()) {
      event.preventDefault();

      this.setState({
        selectedRowIds: [],
        allSelected: false,
      });
    }
  }

  handleSelectAllRows(event) {
    this.props.onSelectAllRows(event);
    if (!event.isDefaultPrevented()) {
      event.preventDefault();

      this.setState({
        allSelected: true,
      });
    }
  }

  /* Renderers */

  renderPaginationOnTop() {
    if (this.props.paginationOnTop) {
      return this.renderPagination();
    }

    return <span />;
  }

  renderFilter() {
    if ($.isEmptyObject(this.props.filter)) {
      return '';
    }

    return (
      <GridFilter
        action={this.props.url}
        {...this.props.filter}
        isLoading={this.state.gridIsLoading}
        onSubmit={this.handleFilterSubmit}
        ref="filter"
      />
    );
  }

  renderTable() {
    return (
      <GridTable
        resource={this.props.resource}
        columns={this.props.columns}
        sortConfigs={this.sortConfigs()}
        sortData={this.state.sortData}
        dataRows={this.state.dataRows}
        selectable={this.props.selectable}
        selectedRowIds={this.state.selectedRowIds}
        selectedRowIdsParam={this.props.selectedRowIdsParam}
        dataRowIdField={this.props.dataRowIdField}
        allSelected={this.state.allSelected}
        allSelectedData={this.state.filterData}
        count={this.state.count}
        actionButtons={this.getActionButtons()}
        tableClassName={this.props.tableClassName}
        onSort={this.handleSort}
        onSelect={this.handleSelectDataRows}
        onRemoveSelection={this.handleRemoveSelection}
        onSelectAll={this.handleSelectAllRows}
        rowSelectableFilter={this.props.rowSelectableFilter}
        customTableHeader={this.props.customTableHeader}
        forceShowSelectAllButton={this.props.forceShowSelectAllButton}
        onClickRow={this.props.onClickRow}
        rowHref={this.getRowHref()}
        tableRowCssClass={this.props.tableRowCssClass}
        clearThemeTable={this.props.clearThemeTable}
        emptyMessage={this.props.emptyMessage}
      />
    );
  }

  renderPagination() {
    if (this.props.pagination) {
      return (
        <GridPagination
          {...this.paginationConfigs()}
          perPage={this.state.perPage}
          page={this.state.page}
          count={this.state.count}
          onPagination={this.handlePagination}
          onChangePerPage={this.handleChangePerPage}
          pageRowsCount={this.state.dataRows.length}
        />
      );
    }

    return <span />;
  }

  render() {
    return (
      <div className={this.buildGridClassName()} ref="grid">
        {this.renderFilter()}

        {this.renderPaginationOnTop()}
        {this.renderTable()}
        {this.renderPagination()}
      </div>
    );
  }
}
