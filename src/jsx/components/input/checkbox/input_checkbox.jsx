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
    var inputNode = React.findDOMNode(this.refs.input);
    inputNode.indeterminate = this.props.renderAsIndeterminate;
  },

  render: function() {
    return (
      <input {...this.props}
        value={this.state.value}
        className={this.inputClassName()}
        onChange={this._handleChange}
        type="checkbox"
        ref="input"
      />
    );
  }

});
