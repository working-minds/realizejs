var Button = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    name: React.PropTypes.string,
    type: React.PropTypes.string,
    iconProps: React.PropTypes.object,
    onClick: React.PropTypes.func,
    disabled: React.PropTypes.bool,
    isLoading: React.PropTypes.bool,
    additionalThemeClassKeys: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      additionalThemeClassKeys: '',
      disabled: false,
      isLoading: false,
      iconProps: null
    };
  },

  getInitialState: function() {
    return {
      themeClassKey: 'button ' + this.props.additionalThemeClassKeys
    };
  },

  render: function() {
    return (
      <button className={this.className()} type={this.props.type} disabled={this.props.disabled} onClick={this.props.onClick}>
        {this.props.isLoading ? this.renderLoadingIndicator(): this.renderContent()}
      </button>
    );
  },

  renderContent: function() {
    return [ this.props.name, this.renderIcon() ];
  },

  renderIcon: function() {
    if(!this.props.iconProps) {
      return '';
    }
    
    return <Icon {...this.props.iconProps} key="icon" />;
  },

  renderLoadingIndicator: function() {
    return "Carregando...";
  }
  
});
