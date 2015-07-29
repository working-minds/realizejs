var Pagination = React.createClass({displayName: "Pagination",
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
      React.createElement("ul", {className: "pagination"}, 
        this.renderPreviousButton(), 
        this.renderPageButtons(), 
        this.renderNextButton()
      )
    );
  },

  renderPreviousButton: function() {
    var liClass = "waves-effect";
    if(this.props.page <= 1) {
      liClass= "disabled";
    }

    return (
      React.createElement("li", {className: liClass, onClick: this.navigateToPrevious}, 
        React.createElement("a", {href: "#!"}, 
          React.createElement("i", {className: "material-icons"}, "chevron_left")
        )
      )
    );
  },

  renderNextButton: function() {
    var liClass = "waves-effect";
    if(this.props.page >= this.lastPage()) {
      liClass= "disabled";
    }

    return (
      React.createElement("li", {className: liClass, onClick: this.navigateToNext}, 
        React.createElement("a", {href: "#!"}, 
          React.createElement("i", {className: "material-icons"}, "chevron_right")
        )
      )
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
      React.createElement("li", {className: liClass, key: "page_" + page, onClick: this.navigateTo.bind(this, page)}, 
        React.createElement("a", {href: "#!"}, page)
      )
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
