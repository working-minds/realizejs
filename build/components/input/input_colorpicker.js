'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _prop_types = require('../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _decorators = require('../../utils/decorators');

var _reactColor = require('react-color');

var _reactColor2 = _interopRequireDefault(_reactColor);

var _components = require('../../components');

var _mixins = require('../../mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputColorpicker = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.InputComponentMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(InputColorpicker, _Component);

  function InputColorpicker() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, InputColorpicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(InputColorpicker)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      displayColorPicker: _this.props.display,
      color: {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InputColorpicker, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var value = this.props.value;
      if (!value) {
        this.setState({
          value: this.props.defaultColor
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.themedClassName(this.props.wrapperThemeClassKey) },
        _react2.default.createElement('input', {
          id: 'colorpicker_input',
          placeholder: '',
          className: this.inputClassName(),
          readOnly: true,
          type: 'text',
          ref: 'input'
        }),
        _react2.default.createElement(_components.Label, _extends({}, this.propsWithoutCSS(), { id: 'colorpicker_input', active: true })),
        _react2.default.createElement('div', {
          className: this.themedClassName(this.props.displayThemeClassKey),
          style: this.displayBackgroundStyle(),
          onClick: this.showColorPicker
        }),
        _react2.default.createElement(_reactColor2.default, _extends({}, this.props, {
          color: this.state.value,
          display: this.state.displayColorPicker,
          onChangeComplete: this.onColorSelect
        })),
        _react2.default.createElement(_components.InputHidden, _extends({}, this.propsWithoutCSS(), {
          value: this.state.value
        }))
      );
    }
  }, {
    key: 'displayBackgroundStyle',
    value: function displayBackgroundStyle() {
      var colorHex = this.state.value || this.props.defaultColor;

      return {
        backgroundColor: '#' + colorHex
      };
    }
  }, {
    key: 'showColorPicker',
    value: function showColorPicker() {
      this.setState({
        displayColorPicker: true
      });
    }
  }, {
    key: 'onColorSelect',
    value: function onColorSelect(color) {
      this.setState({
        color: color,
        value: color.hex
      });
    }
  }]);

  return InputColorpicker;
}(_react.Component), _class2.propTypes = {
  type: _react2.default.PropTypes.string
}, _class2.defaultProps = {
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
}, _temp2)) || _class);
exports.default = InputColorpicker;