var GridActions = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    dataRows: React.PropTypes.array,
    selectedDataRowIds: React.PropTypes.array,
    actionButtons: React.PropTypes.array,
    onRemoveSelection: React.PropTypes.func,
    onSelectAll: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      actionButtons: [],
      selectedDataRowIds: [],
      themeClassKey: 'grid.actions',
      onRemoveSelection: function(event) {},
      onSelectAll: function(event) {}
    };
  },

  render: function() {
    return (
      <div className={this.className()}>
        <div>
          <GridSelectionIndicator {...this.propsWithoutCSS()} />
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
      actionButtons.push(<Button {...actionButtonProps} themeClassKey={"button.flat"} key={"action_" + i} />);
    }

    return actionButtons;
  }
});
