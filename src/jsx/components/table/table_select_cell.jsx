var TableSelectCell = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    rowId: React.PropTypes.string,
    cellElement: React.PropTypes.string,
    dataRows: React.PropTypes.array,
    selected: React.PropTypes.bool,
    onSelectToggle: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'table.select',
      rowId: '',
      cellElement: 'td',
      dataRows: [],
      selected: false,
      onSelectToggle: function(event, dataRows, selected) {}
    };
  },

  render: function() {
    return (
      React.createElement(this.props.cellElement,
        { className: this.className() },
        [
          <InputCheckbox id={this.getCheckboxId()} checked={this.props.selected}  key="checkbox" />,
          <Label id={this.getCheckboxId()} key="label" onClick={this.handleChange} />
        ]
      )
    );
  },

  getCheckboxId: function() {
    return "select_" + this.props.rowId;
  },

  handleChange: function(event) {
    this.props.onSelectToggle(event, this.props.dataRows, !this.props.selected);
  },

  handleClick: function(event) {
    event.stopPropagation();
  }
});
