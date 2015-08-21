var Table = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    columns: React.PropTypes.object,
    dataRowIdField: React.PropTypes.string,
    selectable: React.PropTypes.bool,
    sortConfigs: React.PropTypes.object,
    sortData: React.PropTypes.object,
    dataRows: React.PropTypes.array,
    selectedDataRowIds: React.PropTypes.array,
    allSelected: React.PropTypes.bool,
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
      selectable: false,
      sortConfigs: {
        param: 's',
        valueFormat: '%{field} %{direction}'
      },
      sortData: {},
      dataRows: [],
      selectedDataRowIds: [],
      allSelected: false,
      emptyMessage: 'Nenhum resultado foi encontrado.',
      actionButtons: [],
      onSort: function(sortData) {},
      onSelect: function(event, selectedDataRowIds) {}
    };
  },

  getInitialState: function() {
    return {
      selectedDataRowIds: this.props.selectedDataRowIds,
      allSelected: this.props.allSelected
    };
  },

  componentWillReceiveProps: function(nextProps) {
    var selectedDataRowIds = nextProps.selectedDataRowIds;
    if($.isArray(selectedDataRowIds)) {
      this.setState({selectedDataRowIds: selectedDataRowIds});
    }
  },

  render: function() {
    return(
      <table className={this.className()}>
        <thead>
          <tr>
            {this.renderHeaderSelectCell()}
            {this.renderTableHeaders()}
          </tr>
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

    return headerComponents;
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
        <td colSpan={columnsCount} className="empty-message">{this.props.emptyMessage}</td>
      </tr>
    );
  },

  getDataRowIds: function() {
    return $.map(this.props.dataRows, function(dataRow) {
      return dataRow[this.props.dataRowIdField];
    }.bind(this));
  },

  toggleDataRows: function(event, dataRowIds, selected) {
    var selectedDataRowIds = [];
    if(selected) {
      selectedDataRowIds = this.addSelectedDataRows(dataRowIds);
    } else {
      selectedDataRowIds = this.removeSelectedDataRows(dataRowIds);
    }

    this.props.onSelect(event, selectedDataRowIds);
    if(!event.isDefaultPrevented()) {
      this.setState({
        selectedDataRowIds: selectedDataRowIds,
        allSelected: false
      });
    }
  },

  addSelectedDataRows: function(dataRowIds) {
    var selectedDataRowIds = this.state.selectedDataRowIds.slice();
    $.each(dataRowIds, function(i, dataRowId) {
      if($.inArray(dataRowId, selectedDataRowIds) < 0) {
        selectedDataRowIds.push(dataRowId);
      }
    });

    return selectedDataRowIds;
  },

  removeSelectedDataRows: function(dataRowIds) {
    return $.grep(this.state.selectedDataRowIds, function(dataRowId) {
      return ($.inArray(dataRowId, dataRowIds) < 0);
    }.bind(this));
  },

  dataRowIsSelected: function(dataRow) {
    var dataRowId = dataRow[this.props.dataRowIdField];
    return (($.inArray(dataRowId, this.state.selectedDataRowIds) >= 0) || this.props.allSelected);
  },

  isAllDataRowsSelected: function() {
    var dataRowIds = $.map(this.props.dataRows, function(dataRow) {
      return dataRow[this.props.dataRowIdField];
    }.bind(this));

    var selectedDataRowIdsInPage = $.grep(this.state.selectedDataRowIds, function(selectedDataRowId) {
      return ($.inArray(selectedDataRowId, dataRowIds) >= 0);
    });

    return ((dataRowIds.length > 0 && (dataRowIds.length == selectedDataRowIdsInPage.length)) || this.props.allSelected);
  }
});
