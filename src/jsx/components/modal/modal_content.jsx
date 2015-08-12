var ModalContent = React.createClass({
  mixins: [CssClassMixin],

  getDefaultProps: function() {
    return {
    };
  },

  render: function() {
    return (
      <div id={this.props.id} className={'modal-content '+this.props.className}>
        {this.props.children}
      </div>
    );
  }

});
