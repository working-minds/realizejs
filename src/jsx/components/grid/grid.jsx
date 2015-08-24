var Grid = React.createClass({
  mixins: [
    CssClassMixin,
    RestActionsMixin,
    GridActionsMixin
  ],

  propTypes: {
    url: React.PropTypes.string,
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
    onLoadSuccess: React.PropTypes.func,
    onLoadError: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'grid',
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
      onLoadError: function(xhr, status, error) {}
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

  render: function() {
    return (
      <div className={this.gridClassName()}>
        {this.renderFilter()}

        {this.renderPagination()}
        {this.renderTable()}
        {this.renderPagination()}
      </div>
    );
  },

  gridClassName: function() {
    var className = this.className();
    if(this.state.isLoading) {
      className += ' loading';
    }

    return className;
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
      />
    );
  },

  renderTable: function() {
    return (
      <GridTable
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
        onSort={this.onSort}
        onSelect={this.selectDataRows}
        onRemoveSelection={this.removeSelection}
        onSelectAll={this.selectAllRows}
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
    this.props.onLoadSuccess(data);
    this.setState({
      isLoading: false,
      dataRows: data[this.props.dataRowsParam],
      count: data[this.props.countParam]
    });
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
