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
            method={this.actionButtonMethod()}
            href={this.actionButtonHref()}
            onClick={this.actionButtonClick}
            key="button"
          />
        );
      }

    return component;
  },

  actionButtonMethod: function() {
    var buttonHref = this.props.href;
    if(!buttonHref) {
      return null;
    }

    return this.props.method;
  },

  actionButtonHref: function() {
    var buttonHref = this.props.href;
    if(!!buttonHref) {
      var dataRowId = this.props.data[this.props.dataRowIdField];
      buttonHref = buttonHref.replace(/:id/, dataRowId);
    }

    return buttonHref;
  },

  actionButtonClick: function(event) {
    var buttonOnClick = this.props.onClick;
    var buttonAction = this.props.actionUrl;

    if($.isFunction(buttonOnClick)) {
      var dataRowId = this.props.data[this.props.dataRowIdField];
      buttonOnClick(event, dataRowId, this.props.data);
    } else if(!!buttonAction) {
      var actionData = this.getActionData(this.props);
      this.performRequest(buttonAction, actionData, (this.props.method || 'POST'));
    }
  },

  getActionData: function() {
    var dataIdParam = this.props.dataIdParam || 'id';
    var dataRowId = this.props.data[this.props.dataRowIdField];
    var actionData = {};

    actionData[dataIdParam] = dataRowId;
    return actionData;
  }

});
