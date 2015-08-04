var InputCheckbox = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.checkbox'
    };
  },

  componentDidMount: function() {
    React.findDOMNode(this.refs.input).indeterminate = true;
  },

  render: function() {
    return (
      <input {...this.props} type="checkbox" className={this.className()} ref="input"  />
    );
  }
});
