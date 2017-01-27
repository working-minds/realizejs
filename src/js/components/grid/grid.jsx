var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var RequestHandlerMixin = require('realize/mixins/request_handler_mixin.jsx');
var RestActionsMixin = require('realize/mixins/rest_actions_mixin.jsx');
var GridActionsMixin = require('realize/mixins/grid/grid_actions_mixin.jsx');

var utils = require('../../utils.js');

window.Grid = React.createClass({
  mixins: [
    CssClassMixin,
    RequestHandlerMixin,
    RestActionsMixin,
    GridActionsMixin
  ],

  propTypes: {
    url: React.PropTypes.string,
    eagerLoad: React.PropTypes.bool,
    resource: React.PropTypes.string,
    paginationConfigs: React.PropTypes.object,
    sortConfigs: React.PropTypes.object,
    sortData: React.PropTypes.object,
    filter: React.PropTypes.object,
    columns: React.PropTypes.object,
    data: React.PropTypes.object,
    emptyMessage: Realize.PropTypes.localizedString,
    dataRowsParam: React.PropTypes.string,
    countParam: React.PropTypes.string,
    selectedRowIdsParam: React.PropTypes.string,
    dataRowIdField: React.PropTypes.string,
    isLoading: React.PropTypes.bool,
    selectable: React.PropTypes.oneOf(['multiple', 'none', 'one']),
    tableClassName: React.PropTypes.string,
    onLoadSuccess: React.PropTypes.func,
    onLoadError: React.PropTypes.func,
    rowSelectableFilter: React.PropTypes.func,
    customTableHeader: React.PropTypes.string,
    forceShowSelectAllButton: React.PropTypes.bool,
    onClickRow: React.PropTypes.func,
    tableRowCssClass: React.PropTypes.func,
    paginationOnTop: React.PropTypes.bool,
    clearThemeTable: React.PropTypes.bool,
    pagination: React.PropTypes.bool,
    perPageOptions: React.PropTypes.array,
    onFilterSubmit:  React.PropTypes.func,
    onSelectDataRow: React.PropTypes.func,
    onRemoveSelection: React.PropTypes.func,
    onSelectAllRows: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
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
  },

  getInitialState: function() {
    return {
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
  },

  componentDidMount: function() {
    this.setState({
      filterData: this.getInitialFilterData()
    }, function() {
      if(!!this.props.eagerLoad) {
        this.loadData();
      }
    }.bind(this));
  },

  backToInitialState: function() {
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
  },

  initialPerPage: function() {
    return this.paginationConfigs().perPage;
  },

  render: function() {
    return (
      <div className={this.gridClassName()} ref="grid">
        {this.renderFilter()}

        {this.renderPaginationOnTop()}
        {this.renderTable()}
        {this.renderPagination()}
      </div>
    );
  },

  renderPaginationOnTop: function() {
    if(!!this.props.paginationOnTop)
      return this.renderPagination()
  },

  gridClassName: function() {
    var className = this.className();
    if(this.state.gridIsLoading) {
      className += ' loading';
    }

    return className;
  },

  paginationConfigs: function() {
    return $.extend({}, Realize.config.grid.pagination, this.props.paginationConfigs);
  },

  sortConfigs: function() {
    return $.extend({}, Realize.config.grid.sort, this.props.sortConfigs);
  },

  /* Initializers */

  getInitialFilterData: function() {
    var gridFilterNode = ReactDOM.findDOMNode(this.refs.filter);
    var filterForm = $(gridFilterNode).find('form');

    return filterForm.serializeObject();
  },

  /* Rendering functions */

  renderFilter: function() {
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
  },

  renderTable: function() {
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
  },

  renderPagination: function() {
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
  },

  /* Event handlers */

  onPagination: function(page) {
    this.state.page = page;
    if(this.state.allSelected) {
      this.state.selectedRowIds = [];
    }

    this.state.allSelected = false;
    this.loadData();
  },

  onChangePerPage: function(perPage) {
    this.state.perPage = perPage;
    this.paginationConfigs().perPage = perPage;

    if(this.state.allSelected)
      this.state.selectedRowIds = [];

    this.state.allSelected = false;
    this.loadData();
  },

  onFilterSubmit: function(event, postData) {
    this.props.onFilterSubmit(event, postData);

    if(!event.isDefaultPrevented()) {
      event.preventDefault();

      this.state.selectedRowIds = [];
      this.state.allSelected = false;
      this.state.filterData = postData;
      this.state.page = 1;
      this.loadData();
    }
  },

  onSort: function(sortData) {
    this.state.sortData = sortData;
    this.state.page = 1;
    this.loadData();
  },

  /* Server-side data load handler */

  loadData: function() {
    this.setState({gridIsLoading: true});
    var postData = this.buildPostData();
    var filterProps = this.props.filter;
    var filterMethod = filterProps.method || 'GET';
    var filterDataType = filterProps.dataType || 'json';

    $.ajax({
      url: this.getRestActionUrl('index'),
      method: filterMethod,
      dataType: filterDataType,
      data: postData,
      success: this.handleLoad,
      error: this.handleLoadError
    });
  },

  handleLoad: function(data) {
    var dataRows = utils.getProp(this.props.dataRowsParam, data);
    var count = utils.getProp(this.props.countParam, data);

    this.setState({
      gridIsLoading: false,
      dataRows: dataRows,
      count: count
    }, function() {
      this.props.onLoadSuccess(data);
    }.bind(this));
  },

  handleLoadError: function(xhr, status, error) {
    this.props.onLoadError(xhr, status, error);
    this.setState({gridIsLoading: false});
    console.log('Grid Load Error:' + error);
  },

  buildPostData: function() {
    var postData = $.extend({}, this.state.filterData);

    $.extend(postData, this.buildPaginationPostData());
    if(!$.isEmptyObject(this.state.sortData)) {
      $.extend(postData, this.buildSortPostData());
    }

    return postData;
  },

  buildPaginationPostData: function() {
    const paginationConfigs = this.paginationConfigs();
    var paginationPostData = {};

    var paginationParam = paginationConfigs.param;
    var paginationParamPerPage = paginationConfigs.perPageParam;

    paginationPostData[paginationParam] = this.state.page;
    paginationPostData[paginationParamPerPage] = this.state.perPage;

    return paginationPostData;
  },

  buildSortPostData: function() {
    var sortConfigs = this.sortConfigs();

    var sortParam = sortConfigs.param;
    var sortDirectionParam = sortConfigs.directionParam;
    var sortPostData = {};
    sortPostData[sortParam] = this.parseSortPostDataValue();
    sortPostData[sortDirectionParam] = this.state.sortData.direction;

    return sortPostData;
  },

  parseSortPostDataValue: function() {
    var sortValueFormat = this.sortConfigs().fieldValueFormat;
    var field = this.state.sortData.field;
    var direction = this.state.sortData.direction;

    if(!sortValueFormat) {
      return field;
    }

    return sortValueFormat.replace(/%\{field}/, field).replace(/%\{direction}/, direction);
  },

  /* Selection handlers */

  selectDataRows: function(event, selectedRowIds, selectedData) {
    this.props.onSelectDataRow(event, selectedRowIds);
    if(!event.isDefaultPrevented()) {
      event.preventDefault();

      var nextState = this.getSelectDataRowsState(selectedRowIds, selectedData);
      this.setState(nextState);
    }
  },

  getSelectDataRowsState: function(selectedRowIds, selectedData) {
    var nextState = {selectedRowIds: selectedRowIds, allSelected: false};

    if (!!selectedData && this.props.selectable === 'one')
      nextState.selectedData = selectedData;

    return nextState;
  },

  removeSelection: function(event) {
    this.props.onRemoveSelection(event);
    if(!event.isDefaultPrevented()) {
      event.preventDefault();

      this.setState({
        selectedRowIds: [],
        allSelected: false
      });
    }
  },

  selectAllRows: function(event) {
    this.props.onSelectAllRows(event);
    if(!event.isDefaultPrevented()) {
      event.preventDefault();

      this.setState({
        allSelected: true
      });
    }
  },

  /* Serializer function */

  serialize: function() {
    return this.state.dataRows;
  }
});
