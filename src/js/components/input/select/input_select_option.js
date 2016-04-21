window.InputSelectOption = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    value: React.PropTypes.node
  },

  render: function() {
    return <option value={this.props.value}>{this.props.name}</option>;
  }
});
