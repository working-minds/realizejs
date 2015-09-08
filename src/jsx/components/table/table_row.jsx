var TableRow = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    columns: React.PropTypes.object,
    data: React.PropTypes.object,
    dataRowIdField: React.PropTypes.string,
    selectable: React.PropTypes.bool,
    selected: React.PropTypes.bool,
    actionButtons: React.PropTypes.array,
    rowSelectableFilter: React.PropTypes.func,
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
      rowSelectableFilter: null,
      onSelectToggle: function(event, dataRows, selected) {}
    };
  },


  render: function() {
    return (
      <tr className={this.className()} ref="row">
        {this.renderSelectCell()}
        {this.renderCells()}
        {this.renderActionsCell()}
      </tr>
    );
  },

  renderSelectCell: function() {
    if(!this.props.selectable) {
      return '';
    }

    var rowSelectableFilter = this.props.rowSelectableFilter;
    if(typeof rowSelectableFilter === "function" && !rowSelectableFilter(this.props.data)) {
      return <td></td>;
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

    $.each(columns, function(columnName, columnProps) {
      cellComponents.push(
        <TableCell {...columnProps}
          {...this.propsWithoutCSS()}
          name={columnName}
          key={columnName}
        />
      );
    }.bind(this));

    return cellComponents;
  },

  renderActionsCell: function() {
    if(!$.isArray(this.props.actionButtons) || this.props.actionButtons.length === 0) {
      return '';
    }

    return <TableRowActions {...this.propsWithoutCSS()} ref="actions" />;
  },

  getDataRowId: function() {
    return this.props.data[this.props.dataRowIdField];
  }

});
