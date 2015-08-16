var TableRow = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    columns: React.PropTypes.object,
    data: React.PropTypes.object,
    dataRowIdField: React.PropTypes.string,
    selectable: React.PropTypes.bool,
    selected: React.PropTypes.bool,
    onSelectToggle: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      columns: {},
      data: {},
      dataRowIdField: 'id',
      selectable: true,
      selected: false,
      onSelectToggle: function(event, dataRows, selected) {}
    };
  },

  render: function() {
    return (
      <tr className={this.className()}>
        {this.renderCells()}
      </tr>
    );
  },

  renderCells: function() {
    var columns = this.props.columns;
    var cellComponents = [];

    if(this.props.selectable) {
      cellComponents.push(
        <TableSelectCell
          onSelectToggle={this.props.onSelectToggle}
          dataRowIds={[this.getDataRowId()]}
          rowId={this.getDataRowId()}
          selected={this.props.selected}
          key="select"
        />
      );
    }

    for(var columnName in columns) {
      if(columns.hasOwnProperty(columnName)) {
        var columnProps = columns[columnName];
        cellComponents.push(
          <TableCell {...columnProps}
            name={columnName}
            data={this.props.data}
            clearTheme={this.props.clearTheme}
            key={columnName}
          />
        );
      }
    }

    return cellComponents;
  },

  getDataRowId: function() {
    return this.props.data[this.props.dataRowIdField];
  }
});
