var TableCell = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    name: React.PropTypes.string,
    data: React.PropTypes.object,
    dataRowIdField: React.PropTypes.string,
    value: React.PropTypes.func,
    format: React.PropTypes.oneOf(['text', 'currency', 'number', 'boolean', 'date', 'datetime'])
  },

  getDefaultProps: function() {
    return {
      format: 'text',
      data: {}
    };
  },

  getInitialState: function() {
    return {
      themeClassKey: 'table.cell table.cell.' + this.props.format
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
    className += ' table-cell--' + this.props.name;

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

  currencyValue: function(value) {
    value = parseFloat(value);
    return numeral(value).format('$ 0,0.00');
  },

  booleanValue: function(value) {
    return Realize.t(String(value));
  },

  dateValue: function(value) {
    value = moment(value);
    return value.format("DD/MM/YYYY");
  },

  datetimeValue: function(value) {
    value = moment(value);
    return value.format("DD/MM/YYYY HH:mm");
  }
});
