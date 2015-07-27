var InputText = React.createClass({
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    onChange: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      disabled: false
    };
  },

  render: function() {
    return (
      <input
        placeholder={this.props.placeholder}
        id={this.props.id}
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.onChange}
        disabled={this.props.disabled}
        type="text" className="validate"
      />
    );
  }
});
