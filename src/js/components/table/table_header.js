import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import { mixin } from '../../utils/decorators';

import { CssClassMixin, LocalizedResourceFieldMixin } from '../../mixins';

@mixin(
  CssClassMixin,
  LocalizedResourceFieldMixin
)
export default class TableHeader extends Component {
  static propTypes = {
    label: PropTypes.localizedString,
    format: PropTypes.oneOf(['text', 'currency', 'number', 'percentage', 'boolean', 'date', 'datetime', 'time']),
    sortable: PropTypes.bool,
    sortDirection: PropTypes.string,
    sortFieldName: PropTypes.string,
    onSort: PropTypes.func
  };

  static defaultProps = {
    themeClassKey: 'table.header',
    sortable: true,
    sortDirection: null,
    sortFieldName: null,
    onSort: function(sortData) { return true; }
  };

  render () {
    return (
      <th className={this.headerClassName()}>
        <span onClick={this.sortColumn} className={this.labelClassName()}>
          {this.getLabel()}
        </span>
      </th>
    );
  }

  headerClassName () {
    let className = this.className();
    if(!!this.props.format) {
      className += ' table-header--' + this.props.format;
    }

    return className;
  }

  getLabel () {
    if(!!this.props.label && this.props.label.length > 0) {
      return Realize.i18n.t(this.props.label);
    }

    return this.localizeResourceField();
  }

  labelClassName () {
    let className = '';

    if(!this.props.clearTheme) {
      className += Realize.themes.getCssClass('table.header.label');
    }

    if(this.props.sortable) {
      className += " sortable";

      let sortDirection = this.props.sortDirection;
      if(sortDirection !== null) {
        className += " " + sortDirection;
      }
    }

    return className;
  }

  sortColumn = () => {
    if(!this.props.sortable) {
      return null;
    }

    let sortData = this.buildSortData();
    this.props.onSort(sortData);
  }

  buildSortData () {
    let sortField = this.getSortFieldName();
    let sortDirection = this.getSortDirection();

    return {
      field: sortField,
      direction: sortDirection
    };
  }

  getSortFieldName () {
    return this.props.sortFieldName || this.props.name;
  }

  getSortDirection () {
    let currentSortDirection = this.props.sortDirection;
    if(currentSortDirection === null || currentSortDirection == 'desc') {
      return 'asc';
    } else if(currentSortDirection == 'asc') {
      return 'desc';
    }
  }
}
