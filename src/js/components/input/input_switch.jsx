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
      offLabel: 'false',
      onLabel: 'true',
      label: null
    };
  },

  render: function() {
    return (
      <div>
        <div className={this.className()}>
          <label>
            {Realize.t(this.props.offLabel)}
            <input {...this.checkboxProps()}
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

          {this.renderInputHidden()}
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
  },

  renderInputHidden: function() {
    if(this.valueIsBoolean()) {
      return <InputHidden {...this.props} value={this.state.value} />;
    }

    return null;
  },

  checkboxProps: function() {
    if(this.valueIsBoolean()) {
      return {};
    }

    return this.props;
  }
});
