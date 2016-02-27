var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var InputComponentMixin = require('realize/mixins/input/input_component_mixin.jsx');
var CheckboxComponentMixin = require('realize/mixins/input/checkbox_component_mixin.jsx');

window.InputSwitch = React.createClass({
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
            {Realize.i18n.t(this.props.offLabel)}
            <input {...this.checkboxProps()}
              checked={this.state.checked}
              value={this.state.value}
              disabled={this.props.disabled || this.props.readOnly}
              className={this.inputClassName()}
              onChange={this._handleCheckboxChange}
              type="checkbox"
              ref="input"
            />
            <span className="lever"></span>
            {Realize.i18n.t(this.props.onLabel)}
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
