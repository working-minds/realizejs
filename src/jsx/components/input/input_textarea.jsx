var InputTextarea = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    rows: React.PropTypes.number
  },

  getDefaultProps: function() {
    return {
      rows: 4,
      themeClassKey: 'input.textarea'
    };
  },

  render: function() {
    return (
      <textarea {...this.props}
        value={this.state.value}
        className={this.inputClassName()}
        onChange={this._handleChange}
        ref="input"
      />
    );
  }
});
