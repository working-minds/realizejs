var Table = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    resource: React.PropTypes.string,
    columns: React.PropTypes.object,
    dataRowIdField: React.PropTypes.string,
    selectedRowIdsParam: React.PropTypes.string,
    selectable: React.PropTypes.bool,
    sortConfigs: React.PropTypes.object,
    sortData: React.PropTypes.object,
    dataRows: React.PropTypes.array,
    count: React.PropTypes.number,
    selectedRowIds: React.PropTypes.array,
    allSelected: React.PropTypes.bool,
    allSelectedData: React.PropTypes.object,
    emptyMessage: Realize.PropTypes.localizedString,
    actionButtons: React.PropTypes.object,
    onSort: React.PropTypes.func,
    onSelect: React.PropTypes.func,
    onRemoveSelection: React.PropTypes.func,
    onSelectAll: React.PropTypes.func,
    rowSelectable: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'table',
      columns: {},
      dataRowIdField: 'id',
      selectedRowIdsParam: 'rowIds',
      selectable: false,
      sortConfigs: {
        param: 's',
        valueFormat: '%{field} %{direction}'
      },
      sortData: {},
      dataRows: [],
      count: 0,
      selectedRowIds: null,
      allSelected: null,
      allSelectedData: {},
      emptyMessage: 'table.emptyResult',
      actionButtons: {
        member: [],
        collection: []
      },
      onSort: function(sortData) {},
      onSelect: function(event, selectedRowIds) {},
      onRemoveSelection: function(event) {},
      onSelectAll: function(event) {},
      rowSelectable: function(data) {}
    };
  },

  getInitialState: function() {
    return {
      selectedRowIds: this.props.selectedRowIds || [],
      allSelected: this.props.allSelected
    };
  },

  componentWillReceiveProps: function(nextProps) {
    var selectedRowIds = nextProps.selectedRowIds;
    var allSelected = nextProps.allSelected;

    if(!!selectedRowIds && $.isArray(selectedRowIds)) {
      this.setState({selectedRowIds: selectedRowIds});
    }

    if(allSelected !== null && allSelected !== undefined) {
      this.setState({allSelected: allSelected});
    }
  },

  render: function() {
    return(
      <div className={this.wrapperClassName()}>
        {this.renderActions()}
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
      </div>
    );
  },

  wrapperClassName: function() {
    var wrapperClassName = '';
    if(!this.props.clearTheme) {
      wrapperClassName = Realize.themes.getCssClass('table.wrapper');
    }

    return wrapperClassName;
  },

  renderActions: function() {
    return (
      <TableActions
        dataRows={this.state.dataRows}
        selectedRowIds={this.state.selectedRowIds}
        selectedRowIdsParam={this.props.selectedRowIdsParam}
        allSelected={this.state.allSelected}
        allSelectedData={this.props.allSelectedData}
        count={this.props.count}
        onRemoveSelection={this.removeSelection}
        onSelectAll={this.selectAllRows}
        actionButtons={this.props.actionButtons.collection || []}
      />
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
            resource={this.props.resource}
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
          actionButtons={this.props.actionButtons.member || []}
          key={"table_row_" + i}
          rowSelectable={this.props.rowSelectable}
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
        <td colSpan={columnsCount} className="empty-message">
          {Realize.t(this.props.emptyMessage)}
        </td>
      </tr>
    );
  },

  getDataRowIds: function() {
    return $.map(this.props.dataRows, function(dataRow) {
      return dataRow[this.props.dataRowIdField];
    }.bind(this));
  },

  toggleDataRows: function(event, dataRowIds, selected) {
    var selectedRowIds = [];
    if(selected) {
      selectedRowIds = this.addSelectedDataRows(dataRowIds);
    } else {
      selectedRowIds = this.removeSelectedDataRows(dataRowIds);
    }

    this.props.onSelect(event, selectedRowIds);
    if(!event.isDefaultPrevented()) {
      this.setState({
        selectedRowIds: selectedRowIds,
        allSelected: false
      });
    }
  },

  addSelectedDataRows: function(dataRowIds) {
    var selectedRowIds = this.state.selectedRowIds.slice();
    $.each(dataRowIds, function(i, dataRowId) {
      if($.inArray(dataRowId, selectedRowIds) < 0) {
        selectedRowIds.push(dataRowId);
      }
    });

    return selectedRowIds;
  },

  removeSelectedDataRows: function(dataRowIds) {
    return $.grep(this.state.selectedRowIds, function(dataRowId) {
      return ($.inArray(dataRowId, dataRowIds) < 0);
    }.bind(this));
  },

  dataRowIsSelected: function(dataRow) {
    var dataRowId = dataRow[this.props.dataRowIdField];
    return (($.inArray(dataRowId, this.state.selectedRowIds) >= 0) || this.props.allSelected);
  },

  isAllDataRowsSelected: function() {
    var dataRowIds = $.map(this.props.dataRows, function(dataRow) {
      return dataRow[this.props.dataRowIdField];
    }.bind(this));

    var selectedRowIdsInPage = $.grep(this.state.selectedRowIds, function(selectedDataRowId) {
      return ($.inArray(selectedDataRowId, dataRowIds) >= 0);
    });

    return ((dataRowIds.length > 0 && (dataRowIds.length == selectedRowIdsInPage.length)) || this.props.allSelected);
  },

  removeSelection: function(event) {
    this.props.onRemoveSelection(event);

    if(!event.isDefaultPrevented()) {
      this.setState({
        selectedRowIds: [],
        allSelected: false
      });
    }
  },

  selectAllRows: function(event) {
    this.props.onSelectAll(event);

    if(!event.isDefaultPrevented()) {
      this.setState({
        allSelected: true
      });
    }
  }
});
