import React, { Component } from 'react';
import PropTypes from 'prop_types';
import { mixin } from 'utils/decorators';

import { CssClassMixin } from 'mixins';
import { Input, PaginationItem } from 'components';

@mixin(CssClassMixin)
export default class Pagination extends Component {
  static propTypes = {
    count: PropTypes.number,
    page: PropTypes.number,
    perPage: PropTypes.number,
    window: PropTypes.number,
    onPagination: PropTypes.func,
    type: PropTypes.string
  };

  static defaultProps = {
    themeClassKey: 'pagination',
    page: 1,
    perPage: 20,
    window: 4,
    onPagination: function(page) {
      return true;
    }
  };

  renderPaginationByType () {
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
  }

  renderPreviousButton () {
    var disabled = (this.props.page <= 1);

    return (
      <PaginationItem disabled={disabled} iconType="left" onClick={this.navigateToPrevious} />
    );
  }

  renderFirstButton () {
    if(this.firstWindowPage() <= 1) {
      return '';
    }

    return (
      <PaginationItem text="..." onClick={this.navigateTo.bind(this, 1)} />
    );
  }

  renderNextButton () {
    var disabled = (this.props.page >= this.lastPage());

    return (
      <PaginationItem disabled={disabled} iconType="right" onClick={this.navigateToNext} />
    );
  }

  renderLastButton () {
    var lastPage = this.lastPage();
    if(this.lastWindowPage() >= lastPage) {
      return '';
    }

    return (
      <PaginationItem text="..." onClick={this.navigateTo.bind(this, lastPage)} />
    );
  }

  renderPageButtons () {
    var pageButtons = [];
    for(var i = this.firstWindowPage(); i <= this.lastWindowPage(); i++) {
      pageButtons.push(this.renderPageButton(i));
    }

    return pageButtons;
  }

  renderPageButton (page) {
    var active = (this.props.page === page);

    return (
      <PaginationItem active={active} text={String(page)} onClick={this.navigateTo.bind(this, page)} key={"page_" + page} />
    );
  }

  renderPageInput () {
    var page = this.props.page;
    return (
      <Input value={page} clearTheme={true} className='form__input input-field col s3' />
    )
  }

  render () {
    return (
      <ul className={this.className()}>
        {this.renderPreviousButton()}
        {this.renderPaginationByType()}
        {this.renderNextButton()}
      </ul>
    );
  }

  lastPage () {
    return Math.ceil(this.props.count / this.props.perPage);
  }

  firstWindowPage () {
    return Math.max(1, this.props.page - this.props.window);
  }

  lastWindowPage () {
    return Math.min(this.lastPage(), this.props.page + this.props.window);
  }

  navigateToPrevious = () => {
    var pageToNavigate = Math.max(1, this.props.page - 1);
    this.navigateTo(pageToNavigate);
  }

  navigateToNext = () => {
    var pageToNavigate = Math.min(this.lastPage(), this.props.page + 1);
    this.navigateTo(pageToNavigate);
  }

  navigateTo (page) {
    this.props.onPagination(page);
  }
}
