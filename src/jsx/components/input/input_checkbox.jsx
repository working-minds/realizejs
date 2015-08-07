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

  componentDidMount: function() {
    React.findDOMNode(this.refs.input).indeterminate = this.props.renderAsIndeterminate;
  },

  render: function() {
    return (
      <input {...this.props} type="checkbox" className={this.className()} ref="input"  />
    );
  }
});
