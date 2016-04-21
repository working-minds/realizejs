var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.Pagination = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    count: React.PropTypes.number,
    page: React.PropTypes.number,
    perPage: React.PropTypes.number,
    window: React.PropTypes.number,
    onPagination: React.PropTypes.func,
    type: React.PropTypes.string
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
        {this.renderPaginationByType()}
        {this.renderNextButton()}
      </ul>
    );
  },

  renderPaginationByType: function() {
    if (this.props.type == 'default')
      return (
        <span>
          {this.renderFirstButton()}
          {this.renderPageButtons()}
          {this.renderLastButton()}
        </span>
      );
    else if (this.props.type == 'input')
      return (
        <span>{this.renderPageInput()}</span>
      );
  },

  renderPreviousButton: function() {
    var disabled = (this.props.page <= 1);

    return (
      <PaginationItem disabled={disabled} iconType="left" onClick={this.navigateToPrevious} />
    );
  },

  renderFirstButton: function() {
    if(this.firstWindowPage() <= 1) {
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
    if(this.lastWindowPage() >= lastPage) {
      return '';
    }

    return (
      <PaginationItem text="..." onClick={this.navigateTo.bind(this, lastPage)} />
    );
  },

  renderPageButtons: function() {
    var pageButtons = [];
    for(var i = this.firstWindowPage(); i <= this.lastWindowPage(); i++) {
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

  renderPageInput: function() {
    var page = this.props.page;
    return (
      <Input value={page} clearTheme={true} className='form__input input-field col s3' />
    )
  },

  lastPage: function() {
    return Math.ceil(this.props.count / this.props.perPage);
  },

  firstWindowPage: function() {
    return Math.max(1, this.props.page - this.props.window);
  },

  lastWindowPage: function() {
    return Math.min(this.lastPage(), this.props.page + this.props.window);
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
