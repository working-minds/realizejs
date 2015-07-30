var InputHidden = React.createClass({displayName: "InputHidden",
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.string
  },

  render: function() {
    return (
      React.createElement("input", {
        id: this.props.id, 
        name: this.props.name, 
        value: this.props.value, 
        type: "hidden"}
      )
    );
  }
});
