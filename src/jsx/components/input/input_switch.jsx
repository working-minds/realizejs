var InputSwitch = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    className: React.PropTypes.string,
    renderAsIndeterminate: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.switch',
      renderAsIndeterminate: false,
      offLabel: 'Não',
      onLabel: 'Sim',
      className: 'switch'
    };
  },

  componentDidMount: function() {
    var inputNode = React.findDOMNode(this.refs.input);
    inputNode.indeterminate = this.props.renderAsIndeterminate;
  },

  render: function() {
    return (
        <div className={this.props.className}>
          <label>
            {this.props.offLabel}
            <input {...this.props}
                value={this.state.value}
                className={this.inputClassName()}
                onChange={this._handleChange}
                type="checkbox"
                ref="input"
                />
            <span className="lever"></span>
            {this.props.onLabel}
          </label>
        </div>
    );
  }
});
