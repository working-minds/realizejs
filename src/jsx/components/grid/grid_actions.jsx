var GridActions = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    dataRows: React.PropTypes.array,
    selectedDataRowIds: React.PropTypes.array,
    actionButtons: React.PropTypes.array,
    allSelected: React.PropTypes.bool,
    count: React.PropTypes.number,
    onRemoveSelection: React.PropTypes.func,
    onSelectAll: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'grid.actions',
      actionButtons: [],
      selectedDataRowIds: [],
      allSelected: false,
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
      actionButtons.push(<Button {...actionButtonProps} element={"a"} themeClassKey={"button.flat"} key={"action_" + i} />);
    }

    return actionButtons;
  }
});
