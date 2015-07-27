var GridTable = React.createClass({
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
      <table className="striped responsive-table">
        <thead>
          {this.renderTableHeaders()}
        </thead>
        <tbody>
          {this.renderTableRows()}
        </tbody>
      </table>
    );
  },

  renderTableHeaders: function() {
    var columns = this.props.columns;
    var headerComponents = [];

    for(var columnName in columns) {
      if(columns.hasOwnProperty(columnName)) {
        var columnProps = columns[columnName];
        headerComponents.push(
          <GridTableHeader {...columnProps} {...this.props.sortConfigs}
            name={columnName}
            key={columnName}
            sortDirection={this.sortDirectionForColumn(columnName)}
            ref={"header_" + columnName}
            onSort={this.props.onSort}
          />
        );
      }
    }

    return (
      <tr>
        {headerComponents}
      </tr>
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
      rowComponents.push(<GridTableRow columns={this.props.columns} data={dataRow} key={"table_row_" + i} />);
    }

    return rowComponents;
  }
});
