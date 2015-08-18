var GridSelectionIndicator = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    dataRows: React.PropTypes.array,
    selectedDataRowIds: React.PropTypes.array,
    actionButtons: React.PropTypes.array,
    message: React.PropTypes.string,
    onRemoveSelection: React.PropTypes.func,
    onSelectAll: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      actionButtons: [],
      selectedDataRowIds: [],
      themeClassKey: 'grid.selectionIndicator',
      message: {
        plural: ':count itens selecionados',
        singular: '1 item selecionado'
      },
      removeSelectionButtonName: 'remover seleção',
      selectAllButtonName: 'selecionar todos',
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
    var count = this.props.selectedDataRowIds.length;
    if(count === 0) {
      return '';
    } else if(count === 1) {
      return this.props.message.singular;
    } else {
      var message = this.props.message.plural;
      return message.replace(/:count/, count);
    }
  },

  renderActions: function() {
    var count = this.props.selectedDataRowIds.length;
    if(count === 0) {
      return '';
    }

    return (
      <span>
        ({this.renderRemoveSelectionButton()} | {this.renderSelectAllButton()})
      </span>
    );
  },

  renderRemoveSelectionButton: function() {
    return (
      <a href="#!" onClick={this.props.onRemoveSelection}>
        {this.props.removeSelectionButtonName}
      </a>
    );
  },

  renderSelectAllButton: function() {
    return (
      <a href="#!" onClick={this.props.onSelectAll}>
        {this.props.selectAllButtonName}
      </a>
    );
  }
});
