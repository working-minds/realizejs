var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.TableActions = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    dataRows: React.PropTypes.array,
    selectable: React.PropTypes.oneOf(['multiple', 'none', 'one']),
    selectedRowIds: React.PropTypes.array,
    selectedRowIdsParam: React.PropTypes.string,
    actionButtons: React.PropTypes.array,
    allSelected: React.PropTypes.bool,
    count: React.PropTypes.number,
    onRemoveSelection: React.PropTypes.func,
    onSelectAll: React.PropTypes.func,
    rowSelectableFilter: React.PropTypes.func,
    forceShowSelectAllButton: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'table.actions',
      actionButtons: [],
      selectable: 'multiple',
      selectedRowIds: [],
      allSelected: false,
      rowSelectableFilter: null,
      forceShowSelectAllButton: false,
      onRemoveSelection: function(event) {},
      onSelectAll: function(event) {}
    };
  },

  render: function() {
    return (
      <div className={this.className()}>
        <div>
          <TableSelectionIndicator {...this.propsWithoutCSS()} />
          {this.renderButtons()}
        </div>
      </div>
    );
  },

  renderButtons: function() {
    var actionButtons = [];
    var actionButtonsProps = this.props.actionButtons;

    for(var i = 0; i < actionButtonsProps.length; i++) {
      var actionButtonProps = actionButtonsProps[i];
      actionButtons.push(
        <TableActionButton
          {...actionButtonProps}
          {...this.propsWithoutCSS()}
          element={"a"}
          themeClassKey={"button.flat"}
          key={"action_" + i}
        />
      );
    }

    return actionButtons;
  }
});
