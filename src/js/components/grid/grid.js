var Grid = React.createClass({displayName: "Grid",
  propTypes: {
    url: React.PropTypes.string,
    paginationConfigs: React.PropTypes.object,
    sortConfigs: React.PropTypes.object,
    sortData: React.PropTypes.object,
    filterForm: React.PropTypes.object,
    columns: React.PropTypes.object,
    data: React.PropTypes.object,
    dataRowsKey: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      dataRowsKey: 'data',
      paginationConfigs: {
        pageParam: 'p'
      },
      sortConfigs: {
        param: 's',
        valueFormat: '%{field} %{direction}'
      },
      sortData: {}
    };
  },

  getInitialState: function() {
    return {
      dataRows: this.props.data.dataRows,
      count: this.props.data.count,
      page: 1,
      filterData: {},
      sortData: this.props.sortData
    };
  },

  render: function() {
    return (
      React.createElement("div", {className: "grid"}, 
        this.renderFilter(), 

        this.renderPagination(), 
        this.renderTable(), 
        this.renderPagination()
      )
    );
  },

  renderFilter: function() {
    return (
      React.createElement("div", {className: "grid__filter row"}, 
        React.createElement(GridFilter, {
          form: this.props.filterForm, 
          url: this.props.url, 
          onSubmit: this.onFilterSubmit, 
          ref: "gridFilter"})
      )
    );
  },

  renderTable: function() {
    return (
      React.createElement("div", {className: "grid__table row"}, 
        React.createElement(GridTable, {
          columns: this.props.columns, 
          sortConfigs: this.props.sortConfigs, 
          sortData: this.state.sortData, 
          dataRows: this.state.dataRows, 
          onSort: this.onSort, 
          ref: "gridTable"})
      )
    );
  },

  renderPagination: function() {
    return (
      React.createElement("div", {className: "grid__pagination row"}, 
        React.createElement(Pagination, React.__spread({}, 
          this.props.paginationConfigs, 
          {page: this.state.page, 
          count: this.state.count, 
          onPagination: this.onPagination})
        )
      )
    );
  },

  onPagination: function(page) {
    this.state.page = page;
    this.loadData();
  },

  onFilterSubmit: function(event) {
    this.state.filterData = this.refs.gridFilter.serialize();
    this.state.page = 1;
    this.loadData();

    return false;
  },

  onSort: function(sortData) {
    this.state.sortData = sortData;
    this.state.page = 1;
    this.loadData();
  },

  loadData: function() {
    var postData = this.buildPostData();

    $.ajax({
      url: this.props.url,
      method: 'GET',
      dataType: 'json',
      data: postData,
      success: function(data) {
        this.dataLoaded(data);
      }.bind(this),
      error: function(xhr, status, error) {
        console.log('Grid Load error:' + error);
      }.bind(this)
    });
  },

  dataLoaded: function(data) {
    this.setState({
      dataRows: data[this.props.dataRowsKey],
      count: data.count
    });
  },

  buildPostData: function() {
    var postData = $.extend({}, this.state.filterData);
    postData[this.props.paginationConfigs.pageParam] = this.state.page;
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
