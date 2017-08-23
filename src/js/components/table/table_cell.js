import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import { mixin } from '../../utils/decorators';

import CssClassMixin from '../../mixins/css_class_mixin';
import TableCellValue from './table_cell_value';

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

@mixin(CssClassMixin)
export default class TableCell extends Component {
  static propTypes = {
    name: PropTypes.string,
    data: PropTypes.object,
    dataRowIdField: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    format: PropTypes.oneOf(validFormats),
    formatString: PropTypes.string,
    component: PropTypes.component,
  };

  static defaultProps = {
    themeClassKey: 'table.cell',
    data: {},
    format: 'text',
    formatString: null,
    component: TableCellValue,
    value: null,
  };

  buildCellClassName() {
    let className = this.className();
    if (!!this.props.format) {
      className += ` table-cell--${this.props.format}`;
    }

    if (!!this.props.name) {
      className += ` table-cell--${this.props.name}`;
    }

    return className;
  }

  render() {
    const ValueComponent = this.props.component;
    return (
      <td className={this.buildCellClassName()}>
        <ValueComponent {...this.props} />
      </td>
    );
  }
}
