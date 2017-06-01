import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import moment from 'moment';
import numeral from 'numeral';
import i18n from '../../i18n/i18n';
import { mixin } from '../../utils/decorators';

import CssClassMixin from '../../mixins/css_class_mixin';

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
    component: null,
    value: null,
  };

  getValueFormatter() {
    switch (this.props.format) {
      case 'currency':
      case 'number':
        return this.numberValue;
      case 'percentage':
        return this.percentageValue;
      case 'boolean':
        return this.booleanValue;
      case 'datetime':
        return this.datetimeValue;
      case 'date':
        return this.dateValue;
      case 'time':
        return this.timeValue;
      case 'text':
      default:
        return this.textValue;
    }
  }

  textValue(value) {
    return value;
  }

  numberValue(value) {
    const floatValue = parseFloat(value);
    return numeral(floatValue).format(this.getFormatString());
  }

  percentageValue(value) {
    let floatValue = parseFloat(value);
    if (floatValue > 1.0 || value < -1.0) {
      floatValue = floatValue / 100.0;
    }

    return numeral(floatValue).format(this.getFormatString());
  }

  booleanValue(value) {
    return i18n.t(String(value));
  }

  dateValue(value) {
    const dateValue = moment.utc(value, moment.ISO_8601);
    if (dateValue.isValid()) {
      return dateValue.format(this.getFormatString());
    }

    return value;
  }

  datetimeValue(value) {
    const dateTimeValue = moment.utc(value, moment.ISO_8601);
    if (dateTimeValue.isValid()) {
      return dateTimeValue.format(this.getFormatString());
    }

    return value;
  }

  timeValue(value) {
    return moment.utc(value).format(this.getFormatString());
  }

  getFormatString() {
    const { format, formatString } = this.props;
    return formatString || i18n.t(`table.cell.formats.${format}`);
  }

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

  renderCustomComponent() {
    const CustomComponent = this.props.component;
    return <CustomComponent {...this.props} />;
  }

  renderCustomValue() {
    const { value, data } = this.props;
    return (typeof value === 'function')
      ? value(data, this.props)
      : this.renderFormattedValue(value);
  }

  renderFormattedValue(value) {
    const valueFormatter = this.getValueFormatter().bind(this);
    return value ? valueFormatter(value) : '-';
  }

  renderValue() {
    const { component, value, data, name } = this.props;
    if (component) return this.renderCustomComponent();
    if (value) return this.renderCustomValue();
    return this.renderFormattedValue(data[name]);
  }

  render() {
    return (
      <td className={this.buildCellClassName()}>
        {this.renderValue()}
      </td>
    );
  }
}
