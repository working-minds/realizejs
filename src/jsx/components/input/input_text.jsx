var InputText = React.createClass({
  mixins: [InputComponentMixin],
  propTypes: {
    placeholder: React.PropTypes.string
  },

  render: function() {
    return (
      <input {...this.props} type="text" ref="input" className="validate" />
    );
  }
});
