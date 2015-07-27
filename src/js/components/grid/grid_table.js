var GridTable = React.createClass({displayName: "GridTable",
  propTypes: {
    columns: React.PropTypes.object,
    sortConfigs: React.PropTypes.object,
    sortData: React.PropTypes.object,
    dataRows: React.PropTypes.array,
    onSort: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      columns: {},
      sortConfigs: {},
      sortData: {},
      dataRows: [],
      onSort: function(sortData) {
        return true;
      }
    };
  },

  render: function() {
    return(
      React.createElement("table", {className: "striped responsive-table"}, 
        React.createElement("thead", null, 
          this.renderTableHeaders()
        ), 
        React.createElement("tbody", null, 
          this.renderTableRows()
        )
      )
    );
  },

  renderTableHeaders: function() {
    var columns = this.props.columns;
    var headerComponents = [];

    for(var columnName in columns) {
      if(columns.hasOwnProperty(columnName)) {
        var columnProps = columns[columnName];
        headerComponents.push(
          React.createElement(GridTableHeader, React.__spread({},  columnProps,  this.props.sortConfigs, 
            {name: columnName, 
            key: columnName, 
            sortDirection: this.sortDirectionForColumn(columnName), 
            ref: "header_" + columnName, 
            onSort: this.props.onSort})
          )
        );
      }
    }

    return (
      React.createElement("tr", null, 
        headerComponents
      )
    );
  },

  sortDirectionForColumn: function(columnName) {
    var sortData = this.props.sortData;
    if(!!sortData.field && sortData.field == columnName) {
      return sortData.direction;
    }

    return null;
  },

  renderTableRows: function() {
    var rowComponents = [];
    var dataRows = this.props.dataRows;

    for(var i = 0; i < dataRows.length; i++) {
      var dataRow = dataRows[i];
      rowComponents.push(React.createElement(GridTableRow, {columns: this.props.columns, data: dataRow, key: "table_row_" + i}));
    }

    return rowComponents;
  }
});
