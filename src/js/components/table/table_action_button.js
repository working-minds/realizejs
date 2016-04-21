var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var RequestHandlerMixin = require('realize/mixins/request_handler_mixin.jsx');

window.TableActionButton = React.createClass({
  mixins: [CssClassMixin, RequestHandlerMixin],

  propTypes: {
    selectedRowIds: React.PropTypes.array,
    selectedRowIdsParam: React.PropTypes.string,
    allSelected: React.PropTypes.bool,
    allSelectedData: React.PropTypes.object,
    count: React.PropTypes.number,
    actionUrl: React.PropTypes.string,
    method: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    selectionContext: React.PropTypes.oneOf(['none', 'atLeastOne']),
    conditionToShowActionButton: React.PropTypes.func,
    component: React.PropTypes.string,
    params: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      selectedRowIds: [],
      allSelected: false,
      method: null,
      conditionParams: null,
      disabled: false,
      selectionContext: 'none',
      component: 'Button',
      params: null,
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

  renderButton: function() {
    var component = [];
    if(!this.props.conditionToShowActionButton(this.props.conditionParams)) {
      return component;
    }

    var buttonProps = React.__spread({}, this.props, {
      isLoading: this.state.isLoading,
      disabled: this.isDisabled(),
      method: this.actionButtonMethod(),
      href: this.actionButtonHref(),
      onClick: this.actionButtonClick,
      key: this.props.name
    });

    var buttonComponent = React.createElement(eval(this.props.component), buttonProps);
    component.push(buttonComponent);

    return component;
  },

  isDisabled: function() {
    if(!!this.props.disabled || !!this.state.isLoading) {
      return true;
    }

    var selectionContext = this.props.selectionContext;
    if (selectionContext === 'none') {
      return false;
    } else if (selectionContext === 'atLeastOne') {
      return (this.props.selectedRowIds.length === 0) ;
    }

    return false;
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
    if(!buttonHref) {
      return '#!';
    }

    var selectedData = this.getSelectedData();
    buttonHref = (buttonHref + '?' + $.param(selectedData));

    if (!!this.props.params) {
      for(var property in this.props.params) {
        buttonHref = buttonHref + '&' + property + '=' + this.props.params[property]
      }
    }

    return buttonHref;
  },

  actionButtonClick: function(event) {
    if(this.isDisabled()) {
      return;
    }

    var buttonOnClick = this.props.onClick;
    var buttonAction = this.props.actionUrl;
    var selectedData = this.getSelectedData();

    if($.isFunction(buttonOnClick)) {
      buttonOnClick(event, selectedData);
    } else if(!!buttonAction) {
      this.performRequest(buttonAction, selectedData, this.props.method);
    }
  },

  getSelectedData: function() {
    var selectedData = {};
    if(this.props.allSelected && !!this.props.allSelectedData && !$.isEmptyObject(this.props.allSelectedData)) {
      selectedData = this.props.allSelectedData;
    } else {
      selectedData[this.props.selectedRowIdsParam] = this.props.selectedRowIds;
    }

    return selectedData;
  }
});
