var InputCheckbox = React.createClass({
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
