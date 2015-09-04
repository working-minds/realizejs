var ModalHeader = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    withTitle: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'modal.header',
      withTitle: false
    };
  },

  render: function() {
    return <div className={this.getClassName()}>{this.props.children}</div>;
  },

  getClassName: function() {
    var className = Realize.themes.getCssClass(this.props.themeClassKey);
    if(this.props.clearTheme == false && this.props.withTitle) {
      className += ' '+ Realize.themes.getProp('modal.header.withTitle')
    }
    return className;
  }
});