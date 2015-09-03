var InputNumber = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.number',
      greedy: false,
      repeat: 10
    };
  },

  render: function() {
    return (
      <span>
        <InputMasked {...this.props} type="number" plugin_params={{typeMask: '9', repeat: this.props.repeat, greedy: this.props.greedy}} className={this.className()} ref="input" />
        <Label {...this.propsWithoutCSS()} />
      </span>
    );
  }
});