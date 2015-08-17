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
      themeClassKey: 'table.row',
      onSelectToggle: function(event, dataRows, selected) {}
    };
  },

  render: function() {
    return (
      <tr className={this.className()} ref="row">
        {this.renderSelectCell()}
        {this.renderCells()}
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
    var firstCell = true;

    $.each(columns, function(columnName, columnProps) {
      cellComponents.push(
        <TableCell {...columnProps}
          {...this.propsWithoutCSS()}
          firstCell={firstCell}
          name={columnName}
          key={columnName}
        />
      );

      firstCell = false;
    }.bind(this));

    return cellComponents;
  },

  getDataRowId: function() {
    return this.props.data[this.props.dataRowIdField];
  }

});
