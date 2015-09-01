var InputCheckbox = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    renderAsIndeterminate: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.checkbox',
      renderAsIndeterminate: false,
      checked: false
    };
  },

  getInitialState: function() {
    return {
      checked: this.props.checked
    };
  },

  componentDidMount: function() {
    var inputNode = React.findDOMNode(this.refs.input);
    inputNode.indeterminate = this.props.renderAsIndeterminate;
  },

  render: function() {
    return (
      <input {...this.props}
        checked={this.state.checked}
        className={this.inputClassName()}
        onChange={this.handleChange}
        type="checkbox"
        ref="input"
      />
    );
  },

  handleChange: function(event) {
    this.props.onChange(event);

    if(!event.isDefaultPrevented()) {
      this.setState({checked: event.target.checked});
    }
  },

});
