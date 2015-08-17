var Table = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    columns: React.PropTypes.object,
    dataRowIdField: React.PropTypes.string,
    selectable: React.PropTypes.bool,
    sortConfigs: React.PropTypes.object,
    sortData: React.PropTypes.object,
    dataRows: React.PropTypes.array,
    selectedDataRows: React.PropTypes.array,
    emptyMessage: React.PropTypes.string,
    actionButtons: React.PropTypes.array,
    onSort: React.PropTypes.func,
    onSelect: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'table',
      columns: {},
      dataRowIdField: 'id',
      selectable: true,
      sortConfigs: {
        param: 's',
        valueFormat: '%{field} %{direction}'
      },
      emptyMessage: 'Nenhum resultado foi encontrado.',
      sortData: {},
      dataRows: [],
      selectedDataRows: [],
      actionButtons: [],
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
    return(
      <table className={this.className()}>
        <thead>
          {this.renderHeaderSelectCell()}
          {this.renderTableHeaders()}
        </thead>
        <tbody>
          {(this.props.dataRows.length > 0) ? this.renderTableRows() : this.renderEmptyMessage()}
        </tbody>
      </table>
    );
  },

  renderHeaderSelectCell: function() {
    if(!this.props.selectable) {
      return '';
    }

    return (
      <TableSelectCell
        onSelectToggle={this.toggleDataRows}
        dataRowIds={this.getDataRowIds()}
        selected={this.isAllDataRowsSelected()}
        rowId={"all"}
        cellElement={"th"}
        key={"header_select"}
      />
    );
  },

  renderTableHeaders: function() {
    var columns = this.props.columns;
    var headerComponents = [];

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
          actionButtons={this.props.actionButtons}
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

  getDataRowIds: function() {
    return $.map(this.props.dataRows, function(dataRow) {
      return dataRow[this.props.dataRowIdField];
    }.bind(this));
  },

  toggleDataRows: function(event, dataRowIds, selected) {
    var selectedDataRows = [];
    if(selected) {
      selectedDataRows = this.addSelectedDataRows(dataRowIds);
    } else {
      selectedDataRows = this.removeSelectedDataRows(dataRowIds);
    }

    this.props.onSelect(event, selectedDataRows);
    if(!event.isDefaultPrevented()) {
      this.setState({
        selectedDataRows: selectedDataRows
      });
    }
  },

  addSelectedDataRows: function(dataRowIds) {
    var selectedDataRows = this.state.selectedDataRows.slice();
    $.each(dataRowIds, function(i, dataRowId) {
      if($.inArray(dataRowId, selectedDataRows) < 0) {
        selectedDataRows.push(dataRowId);
      }
    });

    return selectedDataRows;
  },

  removeSelectedDataRows: function(dataRowIds) {
    return $.grep(this.state.selectedDataRows, function(dataRowId) {
      return ($.inArray(dataRowId, dataRowIds) < 0);
    }.bind(this));
  },

  dataRowIsSelected: function(dataRow) {
    var dataRowId = dataRow[this.props.dataRowIdField];
    return ($.inArray(dataRowId, this.state.selectedDataRows) >= 0);
  },

  isAllDataRowsSelected: function() {
    var dataRows = this.props.dataRows;
    var selectedDataRows = this.state.selectedDataRows;

    return dataRows.length > 0 && (dataRows.length == selectedDataRows.length);
  }
});
