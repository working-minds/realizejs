var Pagination = React.createClass({displayName: "Pagination",
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
      page: 1,
      perPage: 20,
      window: 4,
      onPagination: function(page) {
        return true;
      }
    };
  },

  getInitialState: function() {
    return {
      themeClassKey: 'pagination'
    };
  },

  render: function() {
    return (
      React.createElement("ul", {className: this.className()}, 
        this.renderPreviousButton(), 
        this.renderPageButtons(), 
        this.renderNextButton()
      )
    );
  },

  renderPreviousButton: function() {
    var disabled = this.props.page <= 1;

    return (
      React.createElement(PaginationItem, {disabled: disabled, iconType: "icon.left", onClick: this.navigateToPrevious})
    );
  },

  renderNextButton: function() {
    var disabled = this.props.page >= this.lastPage();

    return (
      React.createElement(PaginationItem, {disabled: disabled, iconType: "icon.right", onClick: this.navigateToNext})
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
    var active = this.props.page == page;

    return (
      React.createElement(PaginationItem, {active: active, text: page, onClick: this.navigateTo.bind(this, page)})
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
