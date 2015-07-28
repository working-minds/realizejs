var Pagination = React.createClass({
  propTypes: {
    count: React.PropTypes.number,
    page: React.PropTypes.number,
    perPage: React.PropTypes.number,
    window: React.PropTypes.number,
    onPagination: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
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
      <ul className="pagination">
        {this.renderPreviousButton()}
        {this.renderPageButtons()}
        {this.renderNextButton()}
      </ul>
    );
  },

  renderPreviousButton: function() {
    var liClass = "waves-effect";
    if(this.props.page <= 1) {
      liClass= "disabled";
    }

    return (
      <li className={liClass} onClick={this.navigateToPrevious}>
        <a href="#!">
          <i className="material-icons">chevron_left</i>
        </a>
      </li>
    );
  },

  renderNextButton: function() {
    var liClass = "waves-effect";
    if(this.props.page >= this.lastPage()) {
      liClass= "disabled";
    }

    return (
      <li className={liClass} onClick={this.navigateToNext}>
        <a href="#!">
          <i className="material-icons">chevron_right</i>
        </a>
      </li>
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
    var liClass = "waves-effect";
    if(this.props.page == page) {
      liClass = "active";
    }

    return (
      <li className={liClass} key={"page_" + page} onClick={this.navigateTo.bind(this, page)}>
        <a href="#!">{page}</a>
      </li>
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
