var TableRowActions = React.createClass({
  mixins: [CssClassMixin],

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
            <Button {...actionButtonProps}
              href={this.actionButtonHref(actionButtonProps)}
              onClick={this.actionButtonClick.bind(this, actionButtonProps)}
              themeClassKey={"button.flat"}
              element={"a"}
              key={"action_" + i}
              />
          );
        }
      }
    }

    return actionButtons;
  },

  //TODO: Criar um componente para TableRowActionButton
  actionButtonHref: function(actionButtonProps) {
    var buttonHref = actionButtonProps.href;
    if(!!buttonHref) {
      var dataRowId = this.props.data[this.props.dataRowIdField];
      buttonHref = buttonHref.replace(/:id/, dataRowId);
    }

    return buttonHref;
  },

  actionButtonClick: function(actionButtonProps, event) {
    var buttonOnClick = actionButtonProps.onClick;
    var buttonAction = actionButtonProps.actionUrl;

    if($.isFunction(buttonOnClick)) {
      var dataRowId = this.props.data[this.props.dataRowIdField];
      buttonOnClick(event, dataRowId, this.props.data);
    } else if(!!buttonAction) {
      var actionData = this.getActionData(actionButtonProps);
      this.performRequest(buttonAction, actionData, (this.props.method || 'POST'));
    }
  },

  getActionData: function(actionButtonProps) {
    var dataIdParam = actionButtonProps.dataIdParam || 'id';
    var dataRowId = this.props.data[this.props.dataRowIdField];
    var actionData = {};

    actionData[dataIdParam] = dataRowId;
    return actionData;
  }
});
