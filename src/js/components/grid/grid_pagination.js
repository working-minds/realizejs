var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.GridPagination = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    count: React.PropTypes.number,
    page: React.PropTypes.number,
    perPage: React.PropTypes.number,
    window: React.PropTypes.number,
    onPagination: React.PropTypes.func,
    onChangePerPage: React.PropTypes.func,
    pageRowsCount: React.PropTypes.number,
    type: React.PropTypes.string,
    perPageOptions: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'grid.pagination',
      onPagination: function(page) {
        return true;
      },
      onChangePerPage: function(perPage) { return true }
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
               options={this.props.perPageOptions}
               onChange={this.changePerPage}
          />
      </div>
    );
  },

  renderPagination: function() {
    var totalRowsCount = this.props.count;
    var pageRowsCount = this.props.pageRowsCount;
    if (totalRowsCount <= pageRowsCount) {
      return null;
    }

    return (
      <div>
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

  changePerPage: function(event) {
    var perPage = parseInt(event.currentTarget.value);
    this.props.onChangePerPage(perPage);
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
