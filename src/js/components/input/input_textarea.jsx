var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var InputComponentMixin = require('realize/mixins/input/input_component_mixin.jsx');

window.InputTextarea = React.createClass({
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
        placeholder={this.getPlaceholder()}
        className={this.inputClassName()}
        onChange={this._handleChange}
        onFocus={this._handleFocus}
        ref="input"
      />
    );
  }
});
