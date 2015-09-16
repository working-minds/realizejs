var TableRowActions = React.createClass({
  mixins: [CssClassMixin, RequestHandlerMixin],

  propTypes: {
    data: React.PropTypes.object,
    dataRowIdField: React.PropTypes.string,
    actionButtons: React.PropTypes.array,
    conditionParams: React.PropTypes.object,
    component: React.PropTypes.string,
    paramsToComponent: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      data: {},
      dataRowIdField: 'id',
      actionButtons: [],
      themeClassKey: 'table.row.actions',
      conditionParams: {},
      component: null,
      paramsToComponent: {}
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
      var conditionToShowFunction = actionButtonProps.conditionToShowActionButton;

      if(!conditionToShowFunction || actionButtonProps.conditionToShowActionButton(actionButtonProps.conditionParams)) {
        if(!!actionButtonProps.component) {
          return React.createElement(eval(actionButtonProps.component), $.extend({}, this.props, actionButtonProps.paramsToComponent))
        } else {
          actionButtons.push(
              <TableRowActionButton key={"action_" + i} {...actionButtonProps} dataRowIdField={this.props.data[this.props.dataRowIdField]}/>
          );
        }
      }
    }

    return actionButtons;
  }
});
