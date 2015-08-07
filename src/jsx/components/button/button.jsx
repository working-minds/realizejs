var Button = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    name: React.PropTypes.string,
    type: React.PropTypes.string,
    iconProps: React.PropTypes.object,
    onClick: React.PropTypes.func,
    additionalThemeClassKeys: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      additionalThemeClassKeys: '',
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
      <button className={this.className()} type={this.props.type} onClick={this.props.onClick}>
        {this.props.name}
        {this.renderIcon()}
      </button>
    );
  },

  renderIcon: function() {
    if(!this.props.iconProps) {
      return '';
    }

    return <Icon {...this.props.iconProps} />;
  }
});
