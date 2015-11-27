var Grid = React.createClass({
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
    dataRowsParam: React.PropTypes.string,
    countParam: React.PropTypes.string,
    selectedRowIdsParam: React.PropTypes.string,
    isLoading: React.PropTypes.bool,
    selectable: React.PropTypes.bool,
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
    pagination: React.PropTypes.bool
  },

  paginationConfigs: null,
  sortConfigs: null,

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
      isLoading: false,
      selectable: true,
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
      data: {
        dataRows: [],
        count: 0
      }
    };
  },

  getInitialState: function() {
    return {
      dataRows: this.props.data.dataRows,
      selectedRowIds: [],
      allSelected: false,
      count: this.props.data.count,
      page: 1,
      filterData: {},
      sortData: this.props.sortData,
      gridIsLoading: this.props.isLoading
    };
  },

  componentDidMount: function() {
    this.paginationConfigs = $.extend({}, Realize.config.grid.pagination, this.props.paginationConfigs);
    this.sortConfigs = $.extend({}, Realize.config.grid.sort, this.props.sortConfigs);

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

  /* Initializers */

  getInitialFilterData: function() {
    var gridFilterNode = React.findDOMNode(this.refs.filter);
    var filterForm = $(gridFilterNode).find('form');

    return filterForm.serializeObject();
  },

  /* Renderers */

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
        sortConfigs={this.sortConfigs}
        sortData={this.state.sortData}
        dataRows={this.state.dataRows}
        selectable={this.props.selectable}
        selectedRowIds={this.state.selectedRowIds}
        selectedRowIdsParam={this.props.selectedRowIdsParam}
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
        tableRowCssClass={this.props.tableRowCssClass}
        clearThemeTable={this.props.clearThemeTable}
      />
    );
  },

  renderPagination: function() {
    if (this.props.pagination) {
      var totalRowsCount = this.state.count;
      var pageRowsCount = this.state.dataRows.length;
      if (totalRowsCount <= pageRowsCount) {
        return null;
      }

      return (
        <GridPagination
          {...this.paginationConfigs}
          page={this.state.page}
          count={this.state.count}
          onPagination={this.onPagination}
          />
      );
    }
  } ,

  /* Event handlers */

  onPagination: function(page) {
    this.state.page = page;
    if(this.state.allSelected) {
      this.state.selectedRowIds = [];
    }

    this.state.allSelected = false;
    this.loadData();
  },

  onFilterSubmit: function(event, postData) {
    event.preventDefault();

    this.state.selectedRowIds = [];
    this.state.allSelected = false;
    this.state.filterData = postData;
    this.state.page = 1;
    this.loadData();
  },

  onSort: function(sortData) {
    this.state.sortData = sortData;
    this.state.page = 1;
    this.loadData();
  },

  /* Data load handler */

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
    this.setState({
      gridIsLoading: false,
      dataRows: data[this.props.dataRowsParam],
      count: data[this.props.countParam]
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
    var paginationParam = this.paginationConfigs.param;
    postData[paginationParam] = this.state.page;

    if(!$.isEmptyObject(this.state.sortData)) {
      $.extend(postData, this.buildSortPostData());
    }

    return postData;
  },

  buildSortPostData: function() {
    var sortParam = this.sortConfigs.param;
    var sortDirectionParam = this.sortConfigs.directionParam;
    var sortPostData = {};
    sortPostData[sortParam] = this.parseSortPostDataValue();
    sortPostData[sortDirectionParam] = this.state.sortData.direction;

    return sortPostData;
  },

  parseSortPostDataValue: function() {
    var sortValueFormat = this.sortConfigs.fieldValueFormat;
    var field = this.state.sortData.field;
    var direction = this.state.sortData.direction;

    if(!sortValueFormat) {
      return field;
    }

    return sortValueFormat.replace(/%\{field}/, field).replace(/%\{direction}/, direction);
  },

  /* Selection handlers */

  selectDataRows: function(event, selectedRowIds) {
    event.preventDefault();

    this.setState({
      selectedRowIds: selectedRowIds,
      allSelected: false
    });
  },

  removeSelection: function(event) {
    event.preventDefault();

    this.setState({
      selectedRowIds: [],
      allSelected: false
    });
  },

  selectAllRows: function(event) {
    event.preventDefault();

    this.setState({
      allSelected: true
    });
  }
});
