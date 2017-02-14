import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import Realize from '../../realize';
import { mixin } from '../../utils/decorators';

import { CssClassMixin, LocalizedResourceFieldMixin } from '../../mixins';

const validFormats = [
  'text',
  'currency',
  'number',
  'percentage',
  'boolean',
  'date',
  'datetime',
  'time',
];

@mixin(
  CssClassMixin,
  LocalizedResourceFieldMixin
)
export default class TableHeader extends Component {
  static propTypes = {
    label: PropTypes.localizedString,
    format: PropTypes.oneOf([validFormats]),
    sortable: PropTypes.bool,
    sortDirection: PropTypes.string,
    sortFieldName: PropTypes.string,
    onSort: PropTypes.func,
  };

  static defaultProps = {
    themeClassKey: 'table.header',
    sortable: true,
    sortDirection: null,
    sortFieldName: null,
    onSort() { return true; },
  };

  constructor(props) {
    super(props);
    this.sortColumn = this.sortColumn.bind(this);
  }

  getLabel() {
    if (!!this.props.label && this.props.label.length > 0) {
      return Realize.i18n.t(this.props.label);
    }

    return this.localizeResourceField();
  }

  labelClassName() {
    let className = '';

    if (!this.props.clearTheme) {
      className += Realize.themes.getCssClass('table.header.label');
    }

    if (this.props.sortable) {
      className += ' sortable';

      if (this.props.sortDirection !== null) {
        className += ` ${sortDirection}`;
      }
    }

    return className;
  }

  sortColumn() {
    return this.props.sortable
      ? this.props.onSort(this.buildSortData())
      : null;
  }

  buildSortData() {
    const sortField = this.getSortFieldName();
    const sortDirection = this.getSortDirection();

    return {
      field: sortField,
      direction: sortDirection,
    };
  }

  getSortFieldName() {
    return this.props.sortFieldName || this.props.name;
  }

  getSortDirection() {
    const currentSortDirection = this.props.sortDirection;
    return (currentSortDirection === null || currentSortDirection === 'desc')
      ? 'asc'
      : 'desc';
  }

  headerClassName() {
    let className = this.className();
    if (!!this.props.format) {
      className += ` table-header--${this.props.format}`;
    }

    return className;
  }

  render() {
    return (
      <th className={this.headerClassName()}>
        <span onClick={this.sortColumn} className={this.labelClassName()}>
          {this.getLabel()}
        </span>
      </th>
    );
  }
}
