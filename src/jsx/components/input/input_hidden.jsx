var InputHidden = React.createClass({
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.string
  },

  render: function() {
    return (
      <input
        id={this.props.id}
        name={this.props.name}
        value={this.props.value}
        type="hidden"
      />
    );
  }
});
