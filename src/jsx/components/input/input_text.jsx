var InputText = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    type: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      type: 'text',
      themeClassKey: 'input.text'
    };
  },

  render: function() {
    return (
      <input {...this.props} value={this.state.value} className={this.inputClassName()} onChange={this._handleChange} ref="input" />
    );
  }
});
