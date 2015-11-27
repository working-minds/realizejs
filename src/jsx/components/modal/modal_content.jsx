var ModalContent  = React.createClass({
  mixins: [CssClassMixin],

  getDefaultProps: function() {
    return {
      themeClassKey: 'modal.content'
    };
  },

  render: function() {
    return <div className={this.className()}>{this.props.children}</div>;
  }
});
