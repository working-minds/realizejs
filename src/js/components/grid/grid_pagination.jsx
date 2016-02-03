var GridPagination = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    count: React.PropTypes.number,
    page: React.PropTypes.number,
    perPage: React.PropTypes.number,
    window: React.PropTypes.number,
    onPagination: React.PropTypes.func,
    pageRowsCount: React.PropTypes.number,
    type: React.PropTypes.string,
    perPageOptions: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'grid.pagination',
      page: 1,
      perPage: 20,
      window: 4,
      perPageOptions: [
        {name: 10, value: 10},
        {name: 20, value: 20},
        {name: 50, value: 50},
        {name: 100, value: 100}
      ],
      onPagination: function(page) {
        return true;
      }
    };
  },

  render: function() {
    return (
      <div className={this.className()}>
        {this.renderPagination()}
        {this.renderRangePagination()}
        {this.renderPerPage()}
      </div>
    );
  },

  renderRangePagination: function() {
    return (
      <div className='range_pagination'>
        <span>{this.rangePaginationText()}</span>
      </div>
    );
  },

  renderPerPage: function() {
    return (
      <div className='per_page'>
        <Input value={this.props.perPage} component='select'
               includeBlank={false} clearTheme={true}
               className='form__input input-field'
               options={this.props.perPageOptions} />
      </div>
    );
  },

  renderPagination: function() {
    return (
      <div className=''>
        <Pagination
          page={this.props.page}
          count={this.props.count}
          perPage={this.props.perPage}
          window={this.props.window}
          onPagination={this.props.onPagination}
          type={this.props.type}
          />
      </div>
    )
  },

  rangePaginationText: function() {
    var perPage = this.props.perPage;
    var page = this.props.page;
    var pageRowsCount = this.props.pageRowsCount;

    var firstElement = (perPage*page-(perPage-1));
    var lastElement = (pageRowsCount < perPage) ? this.props.count : perPage*page;
    var totalElement = this.props.count;

    return firstElement+' - '+lastElement+' de '+totalElement;
  }

});
