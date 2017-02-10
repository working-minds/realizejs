import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from '../../prop_types';
import $ from 'jquery';
import { mixin } from '../../utils/decorators';
import Realize from '../../realize'
import {getProp} from '../../utils';

import {
  CssClassMixin,
  RequestHandlerMixin,
  RestActionsMixin,
  GridActionsMixin
} from '../../mixins';

import {
  GridFilter,
  GridTable,
  GridPagination
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
    onFilterSubmit:  PropTypes.func,
    onSelectDataRow: PropTypes.func,
    onRemoveSelection: PropTypes.func,
    onSelectAllRows: PropTypes.func
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
    onLoadSuccess: function(data) {},
    onLoadError: function(xhr, status, error) {},
    onFilterSubmit: function(event, postData) {},
    onSelectDataRow: function(event, selectedRowIds) {},
    onRemoveSelection: function(event) {},
    onSelectAllRows: function(event) {},
    data: {
      dataRows: [],
      count: 0
    }
  };

  constructor (props) {
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
      gridIsLoading: this.props.isLoading
    };
  }

  componentDidMount () {
    this.setState({
      filterData: this.getInitialFilterData()
    }, function() {
      if(!!this.props.eagerLoad) {
        this.loadData();
      }
    }.bind(this));
  }

  renderPaginationOnTop () {
    if(!!this.props.paginationOnTop)
      return this.renderPagination()
  }

  renderFilter () {
    if($.isEmptyObject(this.props.filter)) {
      return '';
    }

    return (
      <GridFilter
        action={this.props.url}
        {...this.props.filter}
        isLoading={this.state.gridIsLoading}
        onSubmit={this.onFilterSubmit}
        ref="filter"
      />
    );
  }

  renderTable () {
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
        onSort={this.onSort}
        onSelect={this.selectDataRows}
        onRemoveSelection={this.removeSelection}
        onSelectAll={this.selectAllRows}
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

  renderPagination () {
    if (this.props.pagination) {
      return (
        <GridPagination
          {...this.paginationConfigs()}
          perPage={this.state.perPage}
          page={this.state.page}
          count={this.state.count}
          onPagination={this.onPagination}
          onChangePerPage={this.onChangePerPage}
          pageRowsCount={this.state.dataRows.length}
        />
      );
    }
  }

  render () {
    return (
      <div className={this.gridClassName()} ref="grid">
        {this.renderFilter()}

        {this.renderPaginationOnTop()}
        {this.renderTable()}
        {this.renderPagination()}
      </div>
    );
  }

  backToInitialState () {
    this.setState({
      selectedRowIds: [],
      allSelected: false,
      page: 1
    });

    this.setState({
      filterData: this.getInitialFilterData()
    }, function() {
      this.loadData();
    }.bind(this));
  }

  initialPerPage () {
    return this.paginationConfigs().perPage;
  }

  gridClassName () {
    let className = this.className();
    if(this.state.gridIsLoading) {
      className += ' loading';
    }

    return className;
  }

  paginationConfigs () {
    return $.extend({}, Realize.config.grid.pagination, this.props.paginationConfigs);
  }

  sortConfigs () {
    return $.extend({}, Realize.config.grid.sort, this.props.sortConfigs);
  }

  getInitialFilterData () {
    let gridFilterNode = ReactDOM.findDOMNode(this.refs.filter);
    let filterForm = $(gridFilterNode).find('form');

    return filterForm.serializeObject();
  }

  onPagination = (page) => {
    this.state.page = page;
    if(this.state.allSelected) {
      this.state.selectedRowIds = [];
    }

    this.state.allSelected = false;
    this.loadData();
  }

  onChangePerPage = (perPage) => {
    this.state.perPage = perPage;
    this.paginationConfigs().perPage = perPage;

    if(this.state.allSelected)
      this.state.selectedRowIds = [];

    this.state.allSelected = false;
    this.loadData();
  }

  onFilterSubmit = (event, postData) => {
    this.props.onFilterSubmit(event, postData);

    if(!event.isDefaultPrevented()) {
      event.preventDefault();

      this.state.selectedRowIds = [];
      this.state.allSelected = false;
      this.state.filterData = postData;
      this.state.page = 1;
      this.loadData();
    }
  }

  onSort = (sortData) => {
    this.state.sortData = sortData;
    this.state.page = 1;
    this.loadData();
  }

  loadData () {
    this.setState({gridIsLoading: true});
    let postData = this.buildPostData();
    let filterProps = this.props.filter;
    let filterMethod = filterProps.method || 'GET';
    let filterDataType = filterProps.dataType || 'json';

    $.ajax({
      url: this.getRestActionUrl('index'),
      method: filterMethod,
      dataType: filterDataType,
      data: postData,
      success: this.handleLoad,
      error: this.handleLoadError
    });
  }

  handleLoad = (data) => {
    let dataRows = getProp(this.props.dataRowsParam, data);
    let count = getProp(this.props.countParam, data);

    this.setState({
      gridIsLoading: false,
      dataRows: dataRows,
      count: count
    }, function() {
      this.props.onLoadSuccess(data);
    }.bind(this));
  }

  handleLoadError = (xhr, status, error) => {
    this.props.onLoadError(xhr, status, error);
    this.setState({gridIsLoading: false});
    console.log('Grid Load Error:' + error);
  }

  buildPostData () {
    var postData = $.extend({}, this.state.filterData);

    $.extend(postData, this.buildPaginationPostData());
    if(!$.isEmptyObject(this.state.sortData)) {
      $.extend(postData, this.buildSortPostData());
    }

    return postData;
  }

  buildPaginationPostData () {
    const paginationConfigs = this.paginationConfigs();
    const paginationPostData = {};

    const paginationParam = paginationConfigs.param;
    const paginationParamPerPage = paginationConfigs.perPageParam;

    paginationPostData[paginationParam] = this.state.page;
    paginationPostData[paginationParamPerPage] = this.state.perPage;

    return paginationPostData;
  }

  buildSortPostData () {
    var sortConfigs = this.sortConfigs();

    var sortParam = sortConfigs.param;
    var sortDirectionParam = sortConfigs.directionParam;
    var sortPostData = {};
    sortPostData[sortParam] = this.parseSortPostDataValue();
    sortPostData[sortDirectionParam] = this.state.sortData.direction;

    return sortPostData;
  }

  parseSortPostDataValue () {
    var sortValueFormat = this.sortConfigs().fieldValueFormat;
    var field = this.state.sortData.field;
    var direction = this.state.sortData.direction;

    if(!sortValueFormat) {
      return field;
    }

    return sortValueFormat.replace(/%\{field}/, field).replace(/%\{direction}/, direction);
  }

  /* Selection handlers */

  selectDataRows = (event, selectedRowIds, selectedData) => {
    this.props.onSelectDataRow(event, selectedRowIds);
    if(!event.isDefaultPrevented()) {
      event.preventDefault();

      var nextState = this.getSelectDataRowsState(selectedRowIds, selectedData);
      this.setState(nextState);
    }
  }

  getSelectDataRowsState = (selectedRowIds, selectedData) => {
    let nextState = {selectedRowIds: selectedRowIds, allSelected: false};

    if (!!selectedData && this.props.selectable === 'one')
      nextState.selectedData = selectedData;

    return nextState;
  }

  removeSelection = (event) => {
    this.props.onRemoveSelection(event);
    if(!event.isDefaultPrevented()) {
      event.preventDefault();

      this.setState({
        selectedRowIds: [],
        allSelected: false
      });
    }
  }

  selectAllRows = (event) => {
    this.props.onSelectAllRows(event);
    if(!event.isDefaultPrevented()) {
      event.preventDefault();

      this.setState({
        allSelected: true
      });
    }
  }

  serialize () {
    return this.state.dataRows;
  }
}
