var ModalFooter = React.createClass({
  mixins: [CssClassMixin],
  getDefaultProps: function() {
    return {
      themeClassKey: 'modal.footer'
    };
  },
  render: function() {
    return <div className={this.getClassName()}>{this.props.children}</div>;
  },

  getClassName: function() {
    return Realize.themes.getCssClass(this.props.themeClassKey);
  }
});