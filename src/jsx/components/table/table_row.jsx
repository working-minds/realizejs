var TableRow = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    columns: React.PropTypes.object,
    data: React.PropTypes.object,
    dataRowIdField: React.PropTypes.string,
    selectable: React.PropTypes.bool,
    selected: React.PropTypes.bool,
    actionButtons: React.PropTypes.array,
    onSelectToggle: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      columns: {},
      data: {},
      dataRowIdField: 'id',
      selectable: true,
      selected: false,
      actionButtons: [],
      onSelectToggle: function(event, dataRows, selected) {}
    };
  },

  render: function() {
    return (
      <tr className={this.className()} ref="row">
        {this.renderSelectCell()}
        {this.renderCells()}
        {this.renderActionButtons()}
      </tr>
    );
  },

  renderSelectCell: function() {
    if(!this.props.selectable) {
      return '';
    }

    return (
      <TableSelectCell
        onSelectToggle={this.props.onSelectToggle}
        dataRowIds={[this.getDataRowId()]}
        rowId={String(this.getDataRowId())}
        selected={this.props.selected}
        key="select"
      />
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
            clearTheme={this.props.clearTheme}
            key={columnName}
          />
        );
      }
    }

    return cellComponents;
  },

  renderActionButtons: function() {
    if(!$.isArray(this.props.actionButtons) || this.props.actionButtons.length === 0) {
      return '';
    }

    return <TableRowActions {...this.propsWithoutCSS()} key="actions" />;
  },

  getDataRowId: function() {
    return this.props.data[this.props.dataRowIdField];
  }
});
