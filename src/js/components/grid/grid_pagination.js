import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import { mixin } from '../../utils/decorators';

import { CssClassMixin } from '../../mixins';
import { Input, Pagination } from '../../components';

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
    perPageOptions: PropTypes.array,
  };

  static defaultProps = {
    themeClassKey: 'grid.pagination',
    onPagination() { return true; },
    onChangePerPage() { return true; },
  };

  constructor(props) {
    super(props);

    this.handleChangePerPage = this.handleChangePerPage.bind(this);
  }

  renderRangePagination() {
    return (
      <div className="range_pagination">
        <span>{this.rangePaginationText()}</span>
      </div>
    );
  }

  renderPerPage() {
    return (
      <div className="per_page">
        <Input
          value={this.props.perPage}
          component="select"
          includeBlank={false}
          clearTheme
          className="form__input input-field"
          options={this.props.perPageOptions}
          onChange={this.handleChangePerPage}
        />
      </div>
    );
  }

  renderPagination() {
    const { count, pageRowsCount } = this.props;
    if (count <= pageRowsCount) {
      return <span />;
    }

    return (
      <div>
        <Pagination
          page={this.props.page}
          count={count}
          perPage={this.props.perPage}
          window={this.props.window}
          onPagination={this.props.onPagination}
          type={this.props.type}
        />
      </div>
    );
  }

  render() {
    return (
      <div className={this.className()}>
        {this.renderPagination()}
        {this.renderRangePagination()}
        {this.renderPerPage()}
      </div>
    );
  }

  handleChangePerPage(event) {
    const perPage = parseInt(event.currentTarget.value);
    this.props.onChangePerPage(perPage);
  }

  rangePaginationText() {
    const { perPage, page, pageRowsCount } = this.props;

    const firstElement = (perPage * page - (perPage - 1));
    const lastElement = (pageRowsCount < perPage) ? this.props.count : perPage * page;
    const totalElement = this.props.count;

    return `${firstElement} - ${lastElement} de ${totalElement}`;
  }
}
