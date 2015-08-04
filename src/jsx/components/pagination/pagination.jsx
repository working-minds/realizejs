var Pagination = React.createClass({
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
      themeClassKey: 'pagination',
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
      <ul className={this.className()}>
        {this.renderPreviousButton()}
        {this.renderFirstButton()}
        {this.renderPageButtons()}
        {this.renderLastButton()}
        {this.renderNextButton()}
      </ul>
    );
  },

  renderPreviousButton: function() {
    var disabled = (this.props.page <= 1);

    return (
      <PaginationItem disabled={disabled} iconType="left" onClick={this.navigateToPrevious} />
    );
  },

  renderFirstButton: function() {
    if(this.props.page <= 1) {
      return '';
    }

    return (
      <PaginationItem text="..." onClick={this.navigateTo.bind(this, 1)} />
    );
  },

  renderNextButton: function() {
    var disabled = (this.props.page >= this.lastPage());

    return (
      <PaginationItem disabled={disabled} iconType="right" onClick={this.navigateToNext} />
    );
  },

  renderLastButton: function() {
    var lastPage = this.lastPage();
    if(this.props.page >= lastPage) {
      return '';
    }

    return (
      <PaginationItem text="..." onClick={this.navigateTo.bind(this, lastPage)} />
    );
  },

  renderPageButtons: function() {
    var window = this.props.window;
    var firstWindowPage = Math.max(1, this.props.page - window);
    var lastWindowPage = Math.min(this.lastPage(), this.props.page + window);

    var pageButtons = [];
    for(var i = firstWindowPage; i <= lastWindowPage; i++) {
      pageButtons.push(this.renderPageButton(i));
    }

    return pageButtons;
  },

  renderPageButton: function(page) {
    var active = (this.props.page === page);

    return (
      <PaginationItem active={active} text={String(page)} onClick={this.navigateTo.bind(this, page)} key={"page_" + page} />
    );
  },

  lastPage: function() {
    return Math.ceil(this.props.count / this.props.perPage);
  },

  navigateToPrevious: function() {
    var pageToNavigate = Math.max(1, this.props.page - 1);
    this.navigateTo(pageToNavigate);
  },

  navigateToNext: function() {
    var pageToNavigate = Math.min(this.lastPage(), this.props.page + 1);
    this.navigateTo(pageToNavigate);
  },

  navigateTo: function(page) {
    this.props.onPagination(page);
  }
});
