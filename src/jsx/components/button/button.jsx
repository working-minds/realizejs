var Button = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    name: React.PropTypes.string,
    type: React.PropTypes.string,
    icon: React.PropTypes.object,
    disabled: React.PropTypes.bool,
    href: React.PropTypes.string,
    onClick: React.PropTypes.func,
    isLoading: React.PropTypes.bool,
    additionalThemeClassKeys: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      additionalThemeClassKeys: '',
      disabled: false,
      isLoading: false,
      icon: null,
      href: null,
      onClick: null,
      disableWith: 'Carregando...'
    };
  },

  getInitialState: function() {
    return {
      themeClassKey: 'button ' + this.props.additionalThemeClassKeys
    };
  },

  render: function() {
    return (
      <button className={this.className()} type={this.props.type} disabled={this.props.disabled} onClick={this.handleClick}>
        {this.props.isLoading ? this.renderLoadingIndicator(): this.renderContent()}
      </button>
    );
  },

  renderContent: function() {
    return [ this.props.name, this.renderIcon() ];
  },

  renderIcon: function() {
    if(!this.props.icon) {
      return '';
    }
    
    return <Icon {...this.props.icon} key="icon" />;
  },

  renderLoadingIndicator: function() {
    return this.props.disableWith;
  },

  handleClick: function(event) {
    if(!!this.props.onClick) {
      this.props.onClick(event);
    } else if(!!this.props.href) {
      window.location = this.props.href;
    }
  }
  
});
