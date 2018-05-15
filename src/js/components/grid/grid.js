import React, { Component } from 'react';

import { mixin } from '../../utils/decorators';
import { getProp } from '../../utils';
import { setState } from '../../utils/react';
import { autobind } from '../../utils/decorators';
import { isEmpty } from 'lodash';

import PropTypes from '../../prop_types';
import Realize from '../../realize';
import { RestClient } from '../../services/http';
import I18n from '../../i18n';

import {
  CssClassMixin,
  RequestHandlerMixin,
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
  GridActionsMixin
)
export default class Grid extends Component {
  static propTypes = {
    hidden: PropTypes.bool,
    actionUrls: PropTypes.object,
    actionMethods: PropTypes.object,
    destroyConfirm: PropTypes.node,
    url: PropTypes.string.isRequired,
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
    selectedRowIds: PropTypes.array,
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
    url: '',
    actionUrls: {},
    actionMethods: null,
    destroyConfirm: I18n.t('table.destroyConfirm'),
    themeClassKey: 'grid',
    eagerLoad: false,
    paginationConfigs: {},
    sortConfigs: {},
    sortData: {},
    filter: {},
    columns: {},
    dataRowsParam: 'data',
    countParam: 'count',
    selectedRowIds: [],
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
      selectedRowIds: this.props.selectedRowIds,
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

    this.restClient = new RestClient({
      baseUrl: this.props.url,
      actionUrls: this.props.actionUrls,
      actionMethods: this.props.actionMethods,
    });

    this.setStatePromise = setState.bind(null, this);
  }

  /* Lifecycle */

  componentDidMount() {
    if (this.props.eagerLoad) {
      this.loadData();
    }
  }

  backToInitialState() {
    const initialState = {
      selectedRowIds: [],
      allSelected: false,
      page: 1,
      filterData: {},
    };

    return this.setStatePromise(initialState)
      .then(() => this.loadData());
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
    const postData = this.buildPostData();
    const filterProps = this.props.filter;
    const method = filterProps.method || 'GET';
    const dataType = filterProps.dataType || 'json';

    return this.setStatePromise({ gridIsLoading: true })
      .then(() => this.restClient.index(postData, { dataType, method }))
      .then(this.handleLoad)
      .catch(this.handleLoadError);
  }

  handleLoad(data) {
    const dataRows = getProp(this.props.dataRowsParam, data);
    const count = getProp(this.props.countParam, data);
    const loadedState = {
      gridIsLoading: false,
      dataRows,
      count,
    };

    return this.setStatePromise(loadedState)
      .then(() => this.props.onLoadSuccess(data));
  }

  handleLoadError(xhr, status, error) {
    return this.setStatePromise({ gridIsLoading: false })
      .then(() => this.props.onLoadError(xhr, status, error));
  }

  buildPostData() {
    return {
      ...this.state.filterData,
      ...this.buildPaginationPostData(),
      ...this.buildSortPostData(),
    };
  }

  buildPaginationPostData() {
    const { param, perPageParam } = this.paginationConfigs();

    return {
      [param]: this.state.page,
      [perPageParam]: this.state.perPage,
    };
  }

  buildSortPostData() {
    const { sortData } = this.state;
    const hasField = typeof sortData === 'object' && sortData.field;

    if (!hasField) return {};

    const sortConfigs = this.sortConfigs();
    const { param, directionParam } = sortConfigs;

    return {
      [param]: this.parseSortPostDataValue(sortConfigs),
      [directionParam]: sortData.direction,
    };
  }

  parseSortPostDataValue(sortConfigs) {
    const sortValueFormat = sortConfigs.fieldValueFormat;
    const { field, direction } = this.state.sortData;

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

  reconfigureGrid(config = {}, resetSelection = false) {
    const selectedRowIds = resetSelection ? [] : this.state.selectedRowIds;
    const nextState = {
      ...config,
      selectedRowIds,
      allSelected: resetSelection ? false : this.state.allSelected,
    };

    return this.setStatePromise(nextState)
      .then(() => this.loadData());
  }

  /* Event handlers */

  @autobind
  handlePagination(page) {
    return this.reconfigureGrid({ page }, this.state.allSelected);
  }

  handleChangePerPage(perPage) {
    return this.reconfigureGrid({ perPage }, this.state.allSelected);
  }

  handleFilterSubmit(event, postData) {
    event.persist();
    return Promise.resolve()
      .then(() => this.props.onFilterSubmit(event, postData))
      .then(() => {
        if (!event.isDefaultPrevented()) {
          event.preventDefault();
          return this.reconfigureGrid({ filterData: postData, page: 1 }, true);
        }
        return Promise.resolve();
      });
  }

  handleSort(sortData) {
    return this.reconfigureGrid({ sortData, page: 1 });
  }

  /* Selection event handlers */

  handleSelectDataRows(event, selectedRowIds, selectedData) {
    event.persist();
    return Promise.resolve()
      .then(() => this.props.onSelectDataRow(event, selectedRowIds))
      .then(() => {
        if (!event.isDefaultPrevented()) {
          event.preventDefault();

          const setCurrentSelected = selectedData && this.props.selectable === 'one';
          const nextState = {
            selectedRowIds,
            selectedData: setCurrentSelected ? selectedData : this.state.selectedData,
            allSelected: false,
          };

          return this.setStatePromise(nextState);
        }
        return Promise.resolve();
      });
  }

  handleRemoveSelection(event) {
    event.persist();
    return Promise.resolve()
      .then(() => this.props.onRemoveSelection(event))
      .then(() => {
        if (!event.isDefaultPrevented()) {
          event.preventDefault();
          return this.reconfigureGrid({}, true);
        }

        return Promise.resolve();
      });
  }

  handleSelectAllRows(event) {
    event.persist();
    return Promise.resolve()
      .then(() => this.props.onSelectAllRows(event))
      .then(() => {
        if (!event.isDefaultPrevented()) {
          event.preventDefault();
          return this.setStatePromise({ allSelected: true });
        }

        return Promise.resolve();
      });
  }

  /* Renderers */

  // TODO: ao adicionar store, remover refs
  renderFilter(extraProps) {
    return (
      <GridFilter
        action={this.props.url}
        {...this.props.filter}
        isLoading={this.state.gridIsLoading}
        onSubmit={this.handleFilterSubmit}
        ref={ref => { this.filter = ref; }}
        {...extraProps}
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

  renderPagination(extraProps) {
    return (
      <GridPagination
        {...this.paginationConfigs()}
        perPage={this.state.perPage}
        page={this.state.page}
        count={this.state.count}
        onPagination={this.handlePagination}
        onChangePerPage={this.handleChangePerPage}
        pageRowsCount={this.state.dataRows.length}
        {...extraProps}
      />
    );
  }

  render() {
    if (this.props.hidden) return null;

    return (
      <div className={this.buildGridClassName()}>
        {this.renderFilter({ hidden: isEmpty(this.props.filter) })}
        {this.renderPagination({ hidden: !this.props.pagination || !this.props.paginationOnTop })}
        {this.renderTable()}
        {this.renderPagination({ hidden: !this.props.pagination })}
      </div>
    );
  }
}
