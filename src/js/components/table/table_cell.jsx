var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.TableCell = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    name: React.PropTypes.string,
    data: React.PropTypes.object,
    dataRowIdField: React.PropTypes.string,
    value: React.PropTypes.func,
    format: React.PropTypes.oneOf(['text', 'currency', 'number', 'percentage', 'boolean', 'date', 'datetime', 'time'])
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'table.cell',
      format: 'text',
      data: {}
    };
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
    return numeral(value).format('0,0.[000]');
  },

  percentageValue: function(value) {
    value = parseFloat(value);
    if(value > 1.0 || value < -1.0) {
      value = value / 100.0;
    }

    return numeral(value).format('0.00%');
  },

  currencyValue: function(value) {
    value = parseFloat(value);
    return numeral(value).format('$ 0,0.00');
  },

  booleanValue: function(value) {
    return Realize.i18n.t(String(value));
  },

  dateValue: function(value) {
    value = moment(value);
    return value.format("DD/MM/YYYY");
  },

  datetimeValue: function(value) {
    value = moment(value);
    return value.format("DD/MM/YYYY HH:mm");
  },

  timeValue: function(value) {
    value = moment(value);
    return value.format("HH:mm:ss");
  }
});
