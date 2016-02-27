var ColorPicker = require('react-color').default;
var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var InputComponentMixin = require('realize/mixins/input/input_component_mixin.jsx');

window.InputColorpicker = React.createClass({
  mixins: [CssClassMixin, InputComponentMixin],
  propTypes: {
    type: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      wrapperThemeClassKey: 'input.colorpicker.wrapper',
      displayThemeClassKey: 'input.colorpicker.display',
      themeClassKey: 'input.colorpicker',
      defaultColor: 'EEE',
      type: 'sketch',
      position: 'below',
      display: false,
      positionCSS: {
        marginTop: '0'
      }
    };
  },

  getInitialState: function() {
    return {
      displayColorPicker: this.props.display,
      color: {}
    };
  },

  componentWillMount: function() {
    var value = this.props.value;
    if(!value) {
      this.setState({
        value: this.props.defaultColor
      });
    }

  },

  render: function() {
    return (
      <div className={this.themedClassName(this.props.wrapperThemeClassKey)}>
        <input {...this.props}
          placeholder=""
          className={this.inputClassName()}
          readOnly={true}
          type="text"
          ref="input"
        />
        <Label {...this.propsWithoutCSS()} />

        <div
          className={this.themedClassName(this.props.displayThemeClassKey)}
          style={this.displayBackgroundStyle()}
          onClick={this.showColorPicker}
        ></div>

        <ColorPicker {...this.props}
          color={this.state.value}
          display={this.state.displayColorPicker}
          onChangeComplete={this.onColorSelect}
        />
      </div>
    );
  },

  displayBackgroundStyle: function() {
    var colorHex = this.state.value || this.props.defaultColor;

    return {
      backgroundColor: '#' + colorHex
    };
  },

  showColorPicker: function() {
    this.setState({
      displayColorPicker: true
    });
  },

  onColorSelect: function(color) {
    this.setState({
      color: color,
      value: color.hex
    });
  }
});
