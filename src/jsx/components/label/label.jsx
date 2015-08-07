var Label = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    label: React.PropTypes.string,
    onClick: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      name: '',
      label: ''
    };
  },

  render: function() {
    return (
      <label htmlFor={this.props.id} onClick={this.props.onClick}>
        {(this.props.label || this.props.name)}
      </label>
    );
  }
});
