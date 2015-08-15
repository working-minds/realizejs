var Table = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    columns: React.PropTypes.object,
    rowIdField: React.PropTypes.string,
    selectable: React.PropTypes.bool,
    sortConfigs: React.PropTypes.object,
    sortData: React.PropTypes.object,
    dataRows: React.PropTypes.array,
    selectedDataRows: React.PropTypes.array,
    emptyMessage: React.PropTypes.string,
    onSort: React.PropTypes.func,
    onSelect: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'table',
      columns: {},
      rowIdField: 'id',
      selectable: true,
      sortConfigs: {
        param: 's',
        valueFormat: '%{field} %{direction}'
      },
      emptyMessage: 'Nenhum resultado foi encontrado.',
      sortData: {},
      dataRows: [],
      selectedDataRows: [],
      onSort: function(sortData) {},
      onSelect: function(event, selectedDataRows) {}
    };
  },

  getInitialState: function() {
    return {
      selectedDataRows: this.props.selectedDataRows
    };
  },

  componentWillReceiveProps: function(nextProps) {
    var selectedDataRows = nextProps.selectedDataRows;
    if($.isArray(selectedDataRows)) {
      this.setState({selectedDataRows: selectedDataRows});
    }
  },

  render: function() {
    console.log('rendering table...');

    return(
      <table className={this.className()}>
        <thead>
          {this.renderTableHeaders()}
        </thead>
        <tbody>
          {(this.props.dataRows.length > 0) ? this.renderTableRows() : this.renderEmptyMessage()}
        </tbody>
      </table>
    );
  },

  renderTableHeaders: function() {
    var columns = this.props.columns;
    var headerComponents = [];

    if(this.props.selectable) {
      headerComponents.push(
        <TableSelectCell
          onSelectToggle={this.toggleDataRows}
          dataRows={this.props.dataRows}
          selected={this.isAllDataRowsSelected()}
          rowId={"all"}
          cellElement={"th"}
          key={"header_select"}
        />
      );
    }

    for(var columnName in columns) {
      if(columns.hasOwnProperty(columnName)) {
        var columnProps = columns[columnName];
        headerComponents.push(
          <TableHeader {...columnProps} {...this.props.sortConfigs}
            name={columnName}
            key={columnName}
            sortDirection={this.sortDirectionForColumn(columnName)}
            ref={"header_" + columnName}
            onSort={this.props.onSort}
            clearTheme={this.props.clearTheme}
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
      rowComponents.push(
        <TableRow
          {...this.propsWithoutCSS()}
          onSelectToggle={this.toggleDataRows}
          selected={this.dataRowIsSelected(dataRow)}
          data={dataRow}
          key={"table_row_" + i}
        />
      );
    }

    return rowComponents;
  },

  renderEmptyMessage: function() {
    var columnsCount = 0;
    for(var key in this.props.columns) {
      columnsCount++;
    }

    if(this.props.selectable) {
      columnsCount++;
    }

    return (
      <tr>
        <td colSpan={columnsCount}>{this.props.emptyMessage}</td>
      </tr>
    );
  },

  toggleDataRows: function(event, dataRows, selected) {
    var selectedDataRows = [];
    if(selected) {
      selectedDataRows = this.selectDataRows(dataRows);
    } else {
      selectedDataRows = this.unselectDataRows(dataRows);
    }

    this.props.onSelect(event, selectedDataRows);
    if(!event.isDefaultPrevented()) {
      this.setState({
        selectedDataRows: selectedDataRows
      });
    }
  },

  selectDataRows: function(dataRows) {
    return this.state.selectedDataRows.concat(dataRows);
  },

  unselectDataRows: function(dataRows) {
    var dataRowIdsToRemove = $.map(dataRows, function(dataRow) {
      return dataRow[this.props.rowIdField];
    }.bind(this));

    return $.grep(this.state.selectedDataRows, function(dataRow) {
      var dataRowId = dataRow[this.props.rowIdField];
      return ($.inArray(dataRowId, dataRowIdsToRemove) < 0);
    }.bind(this));
  },

  dataRowIsSelected: function(dataRow) {
    var dataRowId = dataRow[this.props.rowIdField];
    var selectedDataRowIds = $.map(this.state.selectedDataRows, function(dataRow) {
      return dataRow[this.props.rowIdField];
    }.bind(this));

    return ($.inArray(dataRowId, selectedDataRowIds) >= 0);
  },

  isAllDataRowsSelected: function() {
    var dataRows = this.props.dataRows;
    var selectedDataRows = this.state.selectedDataRows;

    return dataRows.length > 0 && (dataRows.length == selectedDataRows.length);
  }
});
