var GridPagination = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    count: React.PropTypes.number,
    page: React.PropTypes.number,
    perPage: React.PropTypes.number,
    window: React.PropTypes.number,
    onPagination: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'grid.pagination grid.row',
      page: 1,
      perPage: 20,
      window: 4,
      onPagination: function(page) {
        return true;
      }
    };
  },

  render: function() {
    return (
      <div className={this.className()}>
        <Pagination
          page={this.props.page}
          count={this.props.count}
          perPage={this.props.perPage}
          window={this.props.window}
          onPagination={this.props.onPagination}
        />
      </div>
    );
  }
});
