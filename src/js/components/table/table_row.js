var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.TableRow = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    columns: React.PropTypes.object,
    data: React.PropTypes.object,
    dataRowIdField: React.PropTypes.string,
    selectable: React.PropTypes.oneOf(['multiple', 'none', 'one']),
    selected: React.PropTypes.bool,
    actionButtons: React.PropTypes.array,
    rowSelectableFilter: React.PropTypes.func,
    onSelectToggle: React.PropTypes.func,
    onClickRow: React.PropTypes.func,
    rowHref: React.PropTypes.string,
    tableRowCssClass: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      columns: {},
      data: {},
      dataRowIdField: 'id',
      selectable: 'multiple',
      selected: false,
      actionButtons: [],
      themeClassKey: 'table.row',
      rowSelectableFilter: null,
      onClickRow: null,
      rowHref: null,
      tableRowCssClass: null,
      onSelectToggle: function(event, dataRows, selected) {}
    };
  },

  /* renderers */

  render: function() {
    return (
      <tr className={this.getClassName()} ref="row" onClick={this.rowClick}>
        {this.renderSelectCell()}
        {this.renderCells()}
        {this.renderActionsCell()}
      </tr>
    );
  },

  getClassName: function() {
    var className = this.className();

    if(!!this.props.onClickRow || !!this.props.rowHref) {
      className = className + ' clickable-row'
    }

    if(!!this.props.tableRowCssClass) {
      var cssClass = this.props.tableRowCssClass(this.props.data);
      if (!!cssClass) {
        className = className + ' ' + cssClass;
      }
    }

    return className;
  },

  renderSelectCell: function() {
    if(this.props.selectable === 'none') {
      return <td className= {"table-select"}></td>;
    }

    var rowSelectableFilter = this.props.rowSelectableFilter;
    if(typeof rowSelectableFilter === "function" && !rowSelectableFilter(this.props.data)) {
      return <td className= {"table-select"}></td>;
    }

    return (
      <TableSelectCell
        onSelectToggle={this.handleSelectToggle}
        dataRowIds={[this.getDataRowId()]}
        rowId={String(this.getDataRowId())}
        selected={this.props.selected}
        key="select"
      />
    );
  },

  handleSelectToggle: function(e, dataRowsIds, selected) {
    this.props.onSelectToggle(e, dataRowsIds, selected, this.props.data);
  },

  renderCells: function() {
    var columns = this.props.columns;
    var cellComponents = [];

    $.each(columns, function(columnKey, columnProps) {
      var columnName = columnProps.name || columnKey;
      cellComponents.push(
        <TableCell
          {...columnProps}
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
      return <td></td>;
    }

    return <TableRowActions {...this.propsWithoutCSS()} ref="actions" />;
  },

  /* event handlers */

  rowClick: function(event) {
    if(event.isPropagationStopped()) {
      return;
    }

    var onClickRow = this.props.onClickRow;
    var rowHref = this.props.rowHref;

    if(!!onClickRow && typeof onClickRow === "function") {
      onClickRow(event, this.props.data);
    } else if(!!rowHref && typeof rowHref === "string") {
      this.goToRowHref(event);
    }
  },

  goToRowHref: function(event) {
    var rowHref = this.props.rowHref;
    var dataRowId = this.props.data[this.props.dataRowIdField];

    window.location.href = rowHref.replace(/:id/, dataRowId);
  },

  /* utilities */

  getDataRowId: function() {
    return this.props.data[this.props.dataRowIdField];
  }

});
