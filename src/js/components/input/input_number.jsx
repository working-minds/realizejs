var InputNumber = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.number',
      maskType: 'integer'
    };
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