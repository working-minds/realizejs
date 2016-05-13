var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.TableSelectionIndicator = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    dataRows: React.PropTypes.array,
    selectedRowIds: React.PropTypes.array,
    actionButtons: React.PropTypes.array,
    message: React.PropTypes.object,
    removeSelectionButtonName: Realize.PropTypes.localizedString,
    selectable: React.PropTypes.oneOf(['multiple', 'none', 'one']),
    selectAllButtonName: Realize.PropTypes.localizedString,
    allSelected: React.PropTypes.bool,
    count: React.PropTypes.number,
    onRemoveSelection: React.PropTypes.func,
    onSelectAll: React.PropTypes.func,
    rowSelectableFilter: React.PropTypes.func,
    forceShowSelectAllButton: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'table.selectionIndicator',
      dataRows: [],
      selectedRowIds: [],
      actionButtons: [],
      message: {
        plural: 'table.selection.select.plural',
        singular: 'table.selection.select.singular'
      },
      removeSelectionButtonName: 'table.selection.clear',
      selectable: 'multiple',
      selectAllButtonName: 'table.selection.selectAll',
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
        <span>{this.renderMessage()}</span> {this.renderActions()}
      </div>
    );
  },

  renderMessage: function() {
    var count = this.getSelectionCount();
    if(count === 0) {
      return '';
    } else if(count === 1) {
      return Realize.i18n.t(this.props.message.singular);
    } else {
      var message = Realize.i18n.t(this.props.message.plural);
      return message.replace(/:count/, count);
    }
  },

  renderActions: function() {
    var count = this.getSelectionCount();
    if(count === 0 || this.props.selectable !== 'multiple') {
      return '';
    }

    return (
      <span>
        ({this.renderRemoveSelectionButton()}
        {this.renderSelectAllButton()})
      </span>
    );
  },

  renderRemoveSelectionButton: function() {
    return (
      <a href="#!" onClick={this.props.onRemoveSelection}>
        {Realize.i18n.t(this.props.removeSelectionButtonName)}
      </a>
    );
  },

  renderSelectAllButton: function() {
    if(typeof this.props.rowSelectableFilter === "function" || this.props.allSelected) {
      if(!this.props.forceShowSelectAllButton){
        return '';
      }
    }

    return (
      <span>
        &nbsp;|&nbsp;
        <a href="#!" onClick={this.props.onSelectAll}>
          {this.getSelectAllButtonName()}
        </a>
      </span>
    );
  },

  getSelectionCount: function() {
    if(this.props.allSelected && !!this.props.count) {
      return this.props.count;
    } else {
      return this.props.selectedRowIds.length;
    }
  },

  getSelectAllButtonName: function() {
    var buttonName = Realize.i18n.t(this.props.selectAllButtonName);
    var count = this.props.count || this.props.dataRows.length;

    return buttonName.replace(/:count/, count);
  }
});
