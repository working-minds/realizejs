var Grid = React.createClass({
  mixins: [
    CssClassMixin,
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
    clearThemeTable: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'grid',
      eagerLoad: false,
      paginationConfigs: {
        param: 'p',
        perPage: 20,
        window: 4
      },
      sortConfigs: {
        param: 's',
        valueFormat: '%{field} %{direction}'
      },
      sortData: {},
      filter: {},
      columns: {
        name: { label: 'Nome' }
      },
      dataRowsParam: 'data',
      countParam: 'count',
      selectedRowIdsParam: 'rowIds',
      data: {
        dataRows: [],
        count: 0
      },
      isLoading: false,
      selectable: true,
      onLoadSuccess: function(data) {},
      onLoadError: function(xhr, status, error) {},
      rowSelectableFilter: null,
      customTableHeader: null,
      forceShowSelectAllButton: false,
      onClickRow: null,
      tableRowCssClass: null,
      paginationOnTop: true,
      clearThemeTable: false
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
      isLoading: this.props.isLoading
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
    if(this.state.isLoading) {
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
        isLoading={this.state.isLoading}
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
        sortConfigs={this.props.sortConfigs}
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
    var totalRowsCount = this.state.count;
    var pageRowsCount = this.state.dataRows.length;
    if(totalRowsCount <= pageRowsCount) {
      return null;
    }

    return (
      <GridPagination
        {...this.props.paginationConfigs}
        page={this.state.page}
        count={this.state.count}
        onPagination={this.onPagination}
      />
    );
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
    this.setState({isLoading: true});
    var postData = this.buildPostData();

    $.ajax({
      url: this.getActionUrl('index'),
      method: 'GET',
      dataType: 'json',
      data: postData,
      success: this.handleLoad,
      error: this.handleLoadError
    });
  },

  handleLoad: function(data) {
    this.setState({
      isLoading: false,
      dataRows: data[this.props.dataRowsParam],
      count: data[this.props.countParam]
    }, function() {
      this.props.onLoadSuccess(data);
    }.bind(this));
  },

  handleLoadError: function(xhr, status, error) {
    this.props.onLoadError(xhr, status, error);
    this.setState({isLoading: false});
    console.log('Grid Load Error:' + error);
  },

  buildPostData: function() {
    var postData = $.extend({}, this.state.filterData);
    postData[this.props.paginationConfigs.param] = this.state.page;
    if(!$.isEmptyObject(this.state.sortData)) {
      $.extend(postData, this.buildSortPostData());
    }

    return postData;
  },

  buildSortPostData: function() {
    var sortParam = this.props.sortConfigs.param;
    var sortPostData = {};
    sortPostData[sortParam] = this.parseSortPostDataValue();

    return sortPostData;
  },

  parseSortPostDataValue: function() {
    var sortValueFormat = this.props.sortConfigs.valueFormat;
    var field = this.state.sortData.field;
    var direction = this.state.sortData.direction;

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
