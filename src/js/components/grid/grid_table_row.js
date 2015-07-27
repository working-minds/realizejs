var GridTableRow = React.createClass({displayName: "GridTableRow",
  propTypes: {
    columns: React.PropTypes.object,
    data: React.PropTypes.object
  },

  render: function() {
    return (
      React.createElement("tr", null, 
        this.renderCells()
      )
    );
  },

  renderCells: function() {
    var columns = this.props.columns;
    var cellComponents = [];

    for(var columnName in columns) {
      if(columns.hasOwnProperty(columnName)) {
        var columnProps = columns[columnName];
        cellComponents.push(React.createElement(GridTableCell, React.__spread({},  columnProps, {name: columnName, data: this.props.data, key: columnName})));
      }
    }

    return cellComponents;
  }
});
