var InputCheckbox = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    renderAsIndeterminate: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.checkbox',
      renderAsIndeterminate: false
    };
  },

  getInitialState: function() {
    return {
      checked: this.props.checked
    }
  },

  componentWillReceiveProps: function(nextProps) {
    var checked = nextProps.checked;
    if(checked !== undefined) {
      this.setState({checked: checked});
    }
  },

  render: function() {
    return (
      <input {...this.props} {...this.state} type="checkbox" className={this.className()} onChange={this.handleChange} ref="input" />
    );
  },

  handleChange: function(event) {
    this.props.onChange(event);
    if(!event.isPropagationStopped()) {
      var checkbox = event.currentTarget;

      this.setState({
        checked: checkbox.checked
      });
    }
  }

});
