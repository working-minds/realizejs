import React, { Component } from 'react';
import PropTypes from 'prop_types';
import { mixin } from 'utils/decorators';

import { CssClassMixin } from 'mixins';
import { Input, Pagination } from 'components';

@mixin(CssClassMixin)
export default class GridPagination extends Component {
  static propTypes = {
    count: PropTypes.number,
    page: PropTypes.number,
    perPage: PropTypes.number,
    window: PropTypes.number,
    onPagination: PropTypes.func,
    onChangePerPage: PropTypes.func,
    pageRowsCount: PropTypes.number,
    type: PropTypes.string,
    perPageOptions: PropTypes.array
  };

  static defaultProps = {
    themeClassKey: 'grid.pagination',
    onPagination: function(page) {
      return true;
    },
    onChangePerPage: function(perPage) { return true }
  };

  renderRangePagination () {
    return (
      <div className='range_pagination'>
        <span>{this.rangePaginationText()}</span>
      </div>
    );
  }

  renderPerPage () {
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
  }

  renderPagination () {
    let totalRowsCount = this.props.count;
    let pageRowsCount = this.props.pageRowsCount;
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
  }

  render () {
    return (
      <div className={this.className()}>
        {this.renderPagination()}
        {this.renderRangePagination()}
        {this.renderPerPage()}
      </div>
    );
  }

  changePerPage (event) {
    let perPage = parseInt(event.currentTarget.value);
    this.props.onChangePerPage(perPage);
  }

  rangePaginationText () {
    let perPage = this.props.perPage;
    let page = this.props.page;
    let pageRowsCount = this.props.pageRowsCount;

    let firstElement = (perPage*page-(perPage-1));
    let lastElement = (pageRowsCount < perPage) ? this.props.count : perPage*page;
    let totalElement = this.props.count;

    return firstElement+' - '+lastElement+' de '+totalElement;
  }
}
