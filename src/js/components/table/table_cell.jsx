var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var moment = require('moment');
var numeral = require('realize/numeralWithLocale.js');

window.TableCell = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    name: React.PropTypes.string,
    data: React.PropTypes.object,
    dataRowIdField: React.PropTypes.string,
    value: React.PropTypes.func,
    format: React.PropTypes.oneOf(['text', 'currency', 'number', 'percentage', 'boolean', 'date', 'datetime', 'time']),
    formatString: React.PropTypes.string,
    component: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'table.cell',
      data: {},
      format: 'text',
      formatString: null,
      component: null
    };
  },

  componentWillMount: function() {
    var currentLanguage = Realize.i18n.currentLocale.toLowerCase();
    numeral.language(currentLanguage);
  },

  render: function() {
    return (
      <td className={this.cellClassName()}>
        {this.renderValue()}
      </td>
    );
  },

  cellClassName: function() {
    var className = this.className();
    if(!!this.props.format) {
      className += ' table-cell--' + this.props.format;
    }

    if(!!this.props.name) {
      className += ' table-cell--' + this.props.name;
    }

    return className;
  },

  renderValue: function() {
    var format = this.props.format;
    var customValue = this.props.value;
    var dataValue = this.props.data[this.props.name];

    var value = null;

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

  },

  textValue: function(value) {
    return value;
  },

  numberValue: function(value) {
    value = parseFloat(value);
    return numeral(value).format(this.getFormatString());
  },

  percentageValue: function(value) {
    value = parseFloat(value);
    if(value > 1.0 || value < -1.0) {
      value = value / 100.0;
    }

    return numeral(value).format(this.getFormatString());
  },

  currencyValue: function(value) {
    value = parseFloat(value);
    return numeral(value).format(this.getFormatString());
  },

  booleanValue: function(value) {
    return Realize.i18n.t(String(value));
  },

  dateValue: function(value) {
    var dateValue = moment.utc(value, moment.ISO_8601);
    if(dateValue.isValid()) {
      return dateValue.format(this.getFormatString());
    }

    return value;
  },

  datetimeValue: function(value) {
    var dateTimeValue = moment.utc(value, moment.ISO_8601);
    if(dateTimeValue.isValid()) {
      return dateTimeValue.format(this.getFormatString());
    }

    return value;
  },

  timeValue: function(value) {
    value = moment.utc(value);
    return value.format(this.getFormatString());
  },

  getFormatString: function() {
    var format = this.props.format;
    var formatString = this.props.formatString;

    return formatString || Realize.i18n.t('table.cell.formats.' + format);
  }
});
