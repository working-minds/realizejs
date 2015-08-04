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
      <input {...this.props} type="password" className={this.className()} ref="input" />
    );
  }
});
