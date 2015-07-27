var InputCheckbox = React.createClass({displayName: "InputCheckbox",
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      disabled: false
    };
  },

  componentDidMount: function() {
    React.findDOMNode(this.refs.checkbox).indeterminate = true;
  },

  render: function() {
    return (
      React.createElement("input", {
        id: this.props.id, 
        name: this.props.name, 
        onChange: this.props.onChange, 
        type: "checkbox", className: "validate", ref: "checkbox"}
      )
    );
  }
});
