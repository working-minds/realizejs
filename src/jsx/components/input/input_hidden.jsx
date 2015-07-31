var InputHidden = React.createClass({
  mixins: [InputComponentMixin],

  render: function() {
    return (
      <input {...this.props} type="hidden" ref="input" />
    );
  }
});
