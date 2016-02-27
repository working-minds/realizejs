var RequestHandlerMixin = require('realize/mixins/request_handler_mixin.jsx');
var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.Button = React.createClass({
  mixins: [CssClassMixin, RequestHandlerMixin],

  propTypes: {
    name: Realize.PropTypes.localizedString,
    type: React.PropTypes.string,
    icon: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object]),
    style: React.PropTypes.oneOf(['danger', 'primary', 'warning', 'cancel']),
    disabled: React.PropTypes.bool,
    href: React.PropTypes.string,
    onClick: React.PropTypes.func,
    actionUrl: React.PropTypes.string,
    actionData: React.PropTypes.object,
    isLoading: React.PropTypes.bool,
    disableWith: Realize.PropTypes.localizedString,
    confirmsWith: Realize.PropTypes.localizedString,
    element: React.PropTypes.oneOf(['button', 'a']),
    target: React.PropTypes.string,
    method: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'button',
      name: '',
      disabled: false,
      isLoading: false,
      icon: null,
      href: null,
      onClick: null,
      actionUrl: null,
      actionData: {},
      disableWith: 'loading',
      confirmsWith: null,
      element: 'button',
      method: null
    };
  },

  getInitialState: function() {
    return {
      themeClassKey: this.getButtonThemeClassKey() + this.getStyleThemeClassKey()
    };
  },

  getButtonThemeClassKey: function() {
    var themeClassKey = this.props.themeClassKey;

    if(!this.props.name || this.props.name.length === 0) {
      themeClassKey += ' button.iconOnly';
    }

    return themeClassKey;
  },

  getStyleThemeClassKey: function() {
    if(!this.props.style) {
      return '';
    }

    return ' button.' + this.props.style;
  },

  render: function() {
    var content = '';
    if(this.props.isLoading) {
      content = this.renderLoadingIndicator();
    } else {
      content = this.renderContent();
    }

    return (
      React.createElement(this.props.element,
        {
          className: this.getClassName(),
          type: this.props.type,
          disabled: this.props.disabled || this.props.isLoading,
          href: this.getHref(),
          onClick: this.handleClick,
          'data-method': this.getMethod(),
          'data-confirm': this.getConfirmsWith()
        },
        content
      )
    );
  },

  getClassName: function(){
    var className = this.className();
    if (this.props.disabled && this.props.element === 'a')
      className = 'button btn-flat disable-action-button';

    return className;
  },

  getHref: function() {
    if (this.props.disabled && this.props.element === 'a')
      return 'javascript:void(0)';
    return this.props.href;
  },

  getMethod: function() {
    if(!!this.props.method) {
      return this.props.method;
    }

    return null
  },

  getConfirmsWith: function() {
    if(!!this.props.confirmsWith) {
      return Realize.i18n.t(this.props.confirmsWith);
    }

    return null
  },

  renderContent: function() {
    return [Realize.i18n.t(this.props.name), this.renderIcon()];
  },

  renderIcon: function() {
    if(!this.props.icon) {
      return '';
    }

    var iconProps = null;
    if($.isPlainObject(this.props.icon)) {
      iconProps = this.props.icon;
    } else {
      iconProps = { type: this.props.icon };
    }
    
    return <Icon className={this.getIconClassName()} {...iconProps} key="icon" />;
  },

  renderLoadingIndicator: function() {
      return Realize.i18n.t(this.props.disableWith);
  },

  handleClick: function(event) {
    var buttonOnClick = this.props.onClick;
    var buttonAction = this.props.actionUrl;

    if($.isFunction(buttonOnClick)) {
      this.props.onClick(event);
    } else if(!!buttonAction) {
      var actionData = this.props.actionData;
      this.performRequest(buttonAction, actionData, (this.getMethod() || 'POST'));
    }
  },

  getIconClassName: function() {
    if(!this.props.name || this.props.name.length === 0) {
      return '';
    } else {
      return 'right';
    }
  }
  
});
