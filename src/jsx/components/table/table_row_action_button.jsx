var TableRowActionButton = React.createClass({
  mixins: [CssClassMixin, RequestHandlerMixin],

  propTypes: {
    data: React.PropTypes.object,
    dataRowFieldId: React.PropTypes.string,
    count: React.PropTypes.number,
    actionUrl: React.PropTypes.string,
    method: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    conditionToShowActionButton: React.PropTypes.func,
    component: React.PropTypes.string,
    element: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      data: {},
      dataRowFieldId: 'id',
      method: null,
      conditionParams: null,
      disabled: false,
      component: null,
      element: 'a',
      themeClassKey: 'button.flat',
      conditionToShowActionButton: function(data) { return true }
    };
  },

  render: function() {
    return (
      <span>
        {this.renderButton()}
      </span>
    );
  },

  renderButton: function(){
    var component = [];
    if (this.props.conditionToShowActionButton(this.props.conditionParams))
      if(!!this.props.component){
        return React.createElement(eval(this.props.component), this.props)
      } else {
        component.push(
          <Button {...this.props}
            method={this.actionButtonMethod(this.props)}
            href={this.actionButtonHref(this.props)}
            onClick={this.actionButtonClick.bind(this, this.props)}
          />
        );
      }

    return component;
  },

  actionButtonMethod: function(actionButtonProps) {
    var buttonHref = actionButtonProps.href;
    if(!buttonHref) {
      return null;
    }

    return actionButtonProps.method;
  },

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
      var dataRowId = this.props.dataRowIdField;
      buttonOnClick(event, dataRowId, this.props.data);
    } else if(!!buttonAction) {
      var actionData = this.getActionData(actionButtonProps);
      this.performRequest(buttonAction, actionData, (this.props.method || 'POST'));
    }
  },

  getActionData: function(actionButtonProps) {
    var dataIdParam = actionButtonProps.dataIdParam || 'id';
    var dataRowId = this.props.dataRowIdField;
    var actionData = {};

    actionData[dataIdParam] = dataRowId;
    return actionData;
  }

});
