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
      <div className={this.className()} {...this.props}>
        {this.renderButtons()}
      </div>
    );
  },

  renderButtons: function() {
    var actionButtons = [];
    var actionButtonsProps = this.props.actionButtons;

    for(var i = 0; i < actionButtonsProps.length; i++) {
      var actionButtonProps = actionButtonsProps[i];
      actionButtons.push(<Button {...actionButtonProps} onClick={this.handleActionClick.bind(this, actionButtonProps)} key={"action_" + i} />);
    }

    return actionButtons;
  },

  handleActionClick: function(actionButtonProps, event) {
    var buttonOnClick = actionButtonProps.onClick;
    var buttonHref = actionButtonProps.href;

    if($.isFunction(buttonOnClick)) {
      var dataRowId = this.props.data[this.props.dataRowIdField];
      buttonOnClick(event, dataRowId);
    } else if(!!buttonHref) {
      window.location = buttonHref;
    }
  }
});
