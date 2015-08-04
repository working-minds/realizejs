var TableRow = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    columns: React.PropTypes.object,
    data: React.PropTypes.object
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

    for(var columnName in columns) {
      if(columns.hasOwnProperty(columnName)) {
        var columnProps = columns[columnName];
        cellComponents.push(
          <TableCell {...columnProps}
            name={columnName}
            data={this.props.data}
            key={columnName}
            clearTheme={this.props.clearTheme}
          />
        );
      }
    }

    return cellComponents;
  }
});
