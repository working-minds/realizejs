var GridActions = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    actionButtons: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      actionButtons: [],
      themeClassKey: 'grid.actions'
    };
  },

  render: function() {
    return (
      <div className={this.className()}>
        {this.renderButtons()}
      </div>
    );
  },

  renderButtons: function() {
    var actionButtons = [];
    var actionButtonsProps = this.props.actionButtons;

    for(var i = 0; i < actionButtonsProps.length; i++) {
      var actionButtonProps = actionButtonsProps[i];
      actionButtons.push(<Button {...actionButtonProps} themeClassKey={"button.floating"} key={"action_" + i} />);
    }

    return actionButtons;
  }
});
