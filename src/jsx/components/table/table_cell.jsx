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

    if(!!customValue) {
      return customValue(this.props.data, this.props);
    } else if(dataValue === null || dataValue === undefined) {
      return '-';
    } else {
      try {
        return this[format + "Value"](dataValue);
      } catch(err) {
        return this.textValue(dataValue);
      }
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
    return value ? "Sim" : "Não";
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
