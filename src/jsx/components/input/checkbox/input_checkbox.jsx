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

  render: function() {
    return (
      <input {...this.props} type="checkbox" className={this.className()} onChange={this.handleChange} ref="input" />
    );
  },

  handleChange: function(event) {
    this.props.onChange(event);
  }

});
