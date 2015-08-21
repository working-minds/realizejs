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
      themeClassKey: 'table.row.actions'
    };
  },

  render: function() {
    return (
      <td className={this.className()}>
        {this.renderButtons()}
      </td>
    );
  },

  renderButtons: function() {
    var actionButtons = [];
    var actionButtonsProps = this.props.actionButtons;

    for(var i = 0; i < actionButtonsProps.length; i++) {
      var actionButtonProps = actionButtonsProps[i];
      actionButtons.push(
        <Button {...actionButtonProps}
          href={this.getActionButtonHref(actionButtonProps)}
          onClick={this.handleActionButtonClick.bind(this, actionButtonProps)}
          themeClassKey={"button.flat"}
          element={"a"}
          key={"action_" + i}
        />
      );
    }

    return actionButtons;
  },

  getActionButtonHref: function(actionButtonProps) {
    var buttonHref = actionButtonProps.href;
    if(!!buttonHref) {
      var dataRowId = this.props.data[this.props.dataRowIdField];
      buttonHref = buttonHref.replace(/:id/, dataRowId);
    }

    return buttonHref;
  },

  handleActionButtonClick: function(actionButtonProps, event) {
    var buttonOnClick = actionButtonProps.onClick;

    if($.isFunction(buttonOnClick)) {
      var dataRowId = this.props.data[this.props.dataRowIdField];
      buttonOnClick(event, dataRowId, this.props.data);
    }
  }
});
