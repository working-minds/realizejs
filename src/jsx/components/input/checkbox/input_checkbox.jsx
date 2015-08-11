var InputCheckbox = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    renderAsIndeterminate: React.PropTypes.bool,
    checked: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.checkbox',
      renderAsIndeterminate: false,
      checked: undefined
    };
  },

  getInitialState: function() {
    return {
      checked: this.props.checked
    }
  },

  render: function() {
    return (
      <input {...this.props} {...this.state} type="checkbox" className={this.className()} onChange={this.handleChange} ref="input" />
    );
  },

  handleChange: function() {
    if(this.props.checked === undefined) {
      return;
    }

    this.setState({
      checked: !this.state.checked
    });
  }

});
