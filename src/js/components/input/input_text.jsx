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
      <input {...this.props}
        value={this.state.value}
        placeholder={this.getPlaceholder()}
        className={this.inputClassName()}
        onChange={this._handleChange}
        onFocus={this._handleFocus}
        ref="input"
      />
    );
  }
});
