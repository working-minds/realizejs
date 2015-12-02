var InputPassword = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    confirms: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.text'
    };
  },

  render: function() {
    return (
      <input
        {...this.props}
        value={this.state.value}
        placeholder={this.getPlaceholder()}
        className={this.inputClassName()}
        onChange={this._handleChange}
        type="password" ref="input" />
    );
  }
});
