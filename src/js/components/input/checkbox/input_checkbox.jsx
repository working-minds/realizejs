var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var InputComponentMixin = require('realize/mixins/input/input_component_mixin.jsx');
var CheckboxComponentMixin = require('realize/mixins/input/checkbox_component_mixin.jsx');

window.InputCheckbox = React.createClass({
  mixins: [
    CssClassMixin,
    InputComponentMixin,
    CheckboxComponentMixin
  ],

  propTypes: {
    renderAsIndeterminate: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.checkbox'
    };
  },

  render: function() {
    return (
      <input {...this.props}
        checked={this.state.checked}
        className={this.inputClassName()}
        onChange={this._handleCheckboxChange}
        type="checkbox"
        ref="input"
      />
    );
  }

});
