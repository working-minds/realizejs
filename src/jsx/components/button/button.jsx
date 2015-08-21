var Button = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    name: React.PropTypes.string,
    type: React.PropTypes.string,
    icon: React.PropTypes.node,
    style: React.PropTypes.oneOf(['danger', 'primary', 'warning', 'cancel']),
    disabled: React.PropTypes.bool,
    href: React.PropTypes.string,
    onClick: React.PropTypes.func,
    isLoading: React.PropTypes.bool,
    element: React.PropTypes.string
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
      disableWith: 'Carregando...',
      element: 'button'
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
          className: this.className(),
          type: this.props.type,
          disabled: this.props.disabled,
          href: this.props.href,
          onClick: this.handleClick
        },
        content
      )
    );
  },

  renderContent: function() {
    return [ this.props.name, this.renderIcon() ];
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
    return this.props.disableWith;
  },

  handleClick: function(event) {
    if(!!this.props.onClick) {
      this.props.onClick(event);
    } else if(!!this.props.href && this.props.element !== 'a') {
      window.location = this.props.href;
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
