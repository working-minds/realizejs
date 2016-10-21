var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var InputComponentMixin = require('realize/mixins/input/input_component_mixin.jsx');

window.InputNumber = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.number',
      maskType: 'integer'
    };
  },

  componentDidMount: function() {
    Materialize.updateTextFields()
  },

  render: function() {
    return (
      <span>
        <InputMasked
          {...this.props}
          className={this.className()}
          onChange={this._handleChange}
          onFocus={this._handleFocus}
          type="text"
          ref="input"
        />
        <Label {...this.propsWithoutCSS()} />
      </span>
    );
  }
});
