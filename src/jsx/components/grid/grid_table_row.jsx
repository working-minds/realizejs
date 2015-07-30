var GridTableRow = React.createClass({
  propTypes: {
    columns: React.PropTypes.object,
    data: React.PropTypes.object
  },

  render: function() {
    return (
      <tr>
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
        cellComponents.push(<GridTableCell {...columnProps} name={columnName} data={this.props.data} key={columnName} />);
      }
    }

    return cellComponents;
  }
});
