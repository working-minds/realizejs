'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _decorators = require('../../utils/decorators');

var _input_masked = require('./input_masked');

var _input_masked2 = _interopRequireDefault(_input_masked);

var _label = require('../label');

var _input_base = require('./input_base');

var _input_base2 = _interopRequireDefault(_input_base);

var _mixins = require('../../mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputNumber = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_InputBase) {
  _inherits(InputNumber, _InputBase);

  function InputNumber() {
    _classCallCheck(this, InputNumber);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputNumber).apply(this, arguments));
  }

  _createClass(InputNumber, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(_input_masked2.default, _extends({}, this.props, {
          className: this.className(),
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          type: 'text',
          ref: 'input'
        })),
        _react2.default.createElement(_label.Label, this.propsWithoutCSS())
      );
    }
  }]);

  return InputNumber;
}(_input_base2.default), _class2.defaultProps = {
  themeClassKey: 'input.number',
  maskType: 'integer'
}, _temp)) || _class);
exports.default = InputNumber;