var InputSwitch = React.createClass({
  mixins: [
    CssClassMixin,
    InputComponentMixin,
    CheckboxComponentMixin
  ],

  propTypes: {
    label: React.PropTypes.string,
    offLabel: Realize.PropTypes.localizedString,
    onLabel: Realize.PropTypes.localizedString
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.switch',
      className: 'switch',
      offLabel: 'false',
      onLabel: 'true',
      label: null
    };
  },

  render: function() {
    return (
      <div>
        <div className={this.props.className}>
          <label>
            {Realize.t(this.props.offLabel)}
            <input {...this.props}
              checked={this.state.checked}
              value={this.state.value}
              className={this.inputClassName()}
              onChange={this._handleCheckboxChange}
              type="checkbox"
              ref="input"
            />
            <span className="lever"></span>
            {Realize.t(this.props.onLabel)}
          </label>
        </div>
        {this.renderLabel()}
      </div>
    );
  },

  renderLabel: function() {
    if(!this.props.label) {
      return null;
    }

    return <Label name={this.props.label} active={true} />;
  }
});
