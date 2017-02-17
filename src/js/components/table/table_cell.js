import React, { Component } from 'react';
import PropTypes from '../../prop_types';
import moment from 'moment';
import numeral from 'numeral';
import i18n from '../../i18n/i18n';
import $ from 'jquery';
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
    value: PropTypes.func,
    format: PropTypes.oneOf(validFormats),
    formatString: PropTypes.string,
    component: PropTypes.string
  };

  static defaultProps = {
    themeClassKey: 'table.cell',
    data: {},
    format: 'text',
    formatString: null,
    component: null
  };

  renderValue () {
    let format = this.props.format;
    let customValue = this.props.value;
    let dataValue = this.props.data[this.props.name];

    let value = null;

    if(!!customValue) {
      value = customValue(this.props.data, this.props);
    } else if(dataValue === null || dataValue === undefined) {
      value = '-';
    } else {
      try {
        value = this[format + "Value"](dataValue);
      } catch(err) {
        value = this.textValue(dataValue);
      }
    }

    if(!!this.props.component){
      return React.createElement(eval(this.props.component), $.extend({}, this.props, {value: value}));
    }
    else {
      return value;
    }

  }

  render () {
    return (
      <td className={this.cellClassName()}>
        {this.renderValue()}
      </td>
    );
  }

  cellClassName () {
    let className = this.className();
    if(!!this.props.format) {
      className += ' table-cell--' + this.props.format;
    }

    if(!!this.props.name) {
      className += ' table-cell--' + this.props.name;
    }

    return className;
  }

  textValue (value) {
    return value;
  }

  numberValue (value) {
    value = parseFloat(value);
    return numeral(value).format(this.getFormatString());
  }

  percentageValue (value) {
    value = parseFloat(value);
    if(value > 1.0 || value < -1.0) {
      value = value / 100.0;
    }

    return numeral(value).format(this.getFormatString());
  }

  currencyValue (value) {
    value = parseFloat(value);
    return numeral(value).format(this.getFormatString());
  }

  booleanValue (value) {
    return i18n.t(String(value));
  }

  dateValue (value) {
    let dateValue = moment.utc(value, moment.ISO_8601);
    if(dateValue.isValid()) {
      return dateValue.format(this.getFormatString());
    }

    return value;
  }

  datetimeValue (value) {
    let dateTimeValue = moment.utc(value, moment.ISO_8601);
    if(dateTimeValue.isValid()) {
      return dateTimeValue.format(this.getFormatString());
    }

    return value;
  }

  timeValue (value) {
    value = moment.utc(value);
    return value.format(this.getFormatString());
  }

  getFormatString () {
    let format = this.props.format;
    let formatString = this.props.formatString;

    return formatString || i18n.t('table.cell.formats.' + format);
  }
}
