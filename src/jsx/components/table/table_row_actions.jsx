var TableRowActions = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    data: React.PropTypes.object,
    dataRowIdField: React.PropTypes.string,
    actionButtons: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      data: {},
      dataRowIdField: 'id',
      actionButtons: [],
      themeClassKey: 'table.rowActions'
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
      actionButtons.push(<Button {...actionButtonProps} key={"action_" + i} />);
    }

    return actionButtons;
  }
});
