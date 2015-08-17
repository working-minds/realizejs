var Grid = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    url: React.PropTypes.string,
    paginationConfigs: React.PropTypes.object,
    sortConfigs: React.PropTypes.object,
    sortData: React.PropTypes.object,
    filterForm: React.PropTypes.object,
    columns: React.PropTypes.object,
    data: React.PropTypes.object,
    dataRowsParam: React.PropTypes.string,
    countParam: React.PropTypes.string,
    actionButtons: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
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
      filterForm: {
        inputs: {
          name: { label: 'Nome' }
        }
      },
      columns: {
        name: { label: 'Nome' }
      },
      dataRowsParam: 'data',
      countParam: 'count',
      data: {
        dataRows: [],
        count: 0
      },
      actionButtons: null
    };
  },

  getInitialState: function() {
    return {
      dataRows: this.props.data.dataRows,
      selectedDataRows: [],
      count: this.props.data.count,
      page: 1,
      filterData: {},
      sortData: this.props.sortData,
      themeClassKey: 'grid',
      isLoading: false
    };
  },

  render: function() {
    return (
      <div className={this.className()}>
        {this.renderFilter()}

        {this.renderPagination()}
        {this.renderTable()}
        {this.renderPagination()}
      </div>
    );
  },

  renderFilter: function() {
    return (
      <GridFilter
        {...this.props.filterForm}
        url={this.props.url}
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
        selectedDataRows={this.state.selectedDataRows}
        actionButtons={this.getMemberActionButtons()}
        onSort={this.onSort}
        onSelect={this.onSelectDataRow}
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

  getMemberActionButtons: function() {
    if($.isPlainObject(this.props.actionButtons)) {
      return this.props.actionButtons.member;
    } else {
      return this.getDefaultMemberActionButtons();
    }
  },

  getDefaultMemberActionButtons: function() {
    return [
      {
        name: 'Editar',
        href: 'http://www.google.com'
      },
      {
        name: 'Remover',
        href: 'http://www.lipsum.com'
      }
    ]
  },

  onPagination: function(page) {
    this.setState({isLoading: true});
    this.state.page = page;
    this.loadData();
  },

  onFilterSubmit: function(event, postData) {
    event.preventDefault();

    this.setState({isLoading: true});
    this.state.filterData = postData;
    this.state.page = 1;
    this.loadData();
  },

  onSort: function(sortData) {
    this.setState({isLoading: true});
    this.state.sortData = sortData;
    this.state.page = 1;
    this.loadData();
  },

  onSelectDataRow: function(event, selectedDataRows) {
    event.preventDefault();

    this.setState({
      selectedDataRows: selectedDataRows
    });
  },

  loadData: function() {
    var postData = this.buildPostData();

    $.ajax({
      url: this.props.url,
      method: 'GET',
      dataType: 'json',
      data: postData,
      success: function(data) {
        this.handleLoad(data);
      }.bind(this),
      error: function(xhr, status, error) {
        this.handleLoadError(xhr, status, error);
      }.bind(this)
    });
  },

  handleLoad: function(data) {
    this.setState({
      isLoading: false,
      dataRows: data[this.props.dataRowsParam],
      count: data[this.props.countParam]
    });
  },

  handleLoadError: function(xhr, status, error) {
    this.setState({isLoading: false});
    console.log('Grid Load error:' + error);
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
  }

});
