var InputRadio = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    renderAsIndeterminate: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.radio',
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
    alert(this.props.value);
    alert(this.state.checked);
    return (
        <input {...this.props} {...this.state} type="radio" className={this.className()} onChange={this.handleChange} ref="input" />
    );
  },

  handleChange: function(event) {
    this.props.onChange(event);

    alert(this.props.value);

    if(!event.isPropagationStopped()) {
      var checkbox = event.currentTarget;
      alert(checkbox.checked);


      this.setState({
        checked: checkbox.checked
      });
    }
  }

});
