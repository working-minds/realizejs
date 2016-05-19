var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var UtilsMixin = require('realize/mixins/utils_mixin.jsx');

window.TableSelectCell = React.createClass({
  mixins: [CssClassMixin, UtilsMixin],

  propTypes: {
    rowId: React.PropTypes.string,
    cellElement: React.PropTypes.string,
    dataRowIds: React.PropTypes.array,
    selected: React.PropTypes.bool,
    onSelectToggle: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'table.select',
      className: 'table-select',
      rowId: '',
      cellElement: 'td',
      dataRowIds: [],
      selected: false,
      onSelectToggle: function(event, dataRows, selected) {}
    };
  },

  render: function() {
    return (
      React.createElement(this.props.cellElement,
        { className: this.className() },
        [
          <InputCheckbox id={this.getCheckboxId()} checked={this.props.selected} key={this.generateUUID()} />,
          <Label id={this.getCheckboxId()} key="label" onClick={this.handleChange} />
        ]
      )
    );
  },

  getCheckboxId: function() {
    return "select_" + String(this.props.rowId);
  },

  handleChange: function(event) {
    this.props.onSelectToggle(event, this.props.dataRowIds, !this.props.selected);
    event.stopPropagation();
  }
});
