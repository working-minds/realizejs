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

var _prop_types = require('../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _i18n = require('../../i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _decorators = require('../../utils/decorators');

var _input_base = require('./input_base');

var _input_base2 = _interopRequireDefault(_input_base);

var _label = require('../label');

var _mixins = require('../../mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputSwitch = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.CheckboxComponentMixin), _dec(_class = (_temp = _class2 = function (_InputBase) {
  _inherits(InputSwitch, _InputBase);

  function InputSwitch() {
    _classCallCheck(this, InputSwitch);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputSwitch).apply(this, arguments));
  }

  _createClass(InputSwitch, [{
    key: 'checkboxProps',
    value: function checkboxProps() {
      if (this.valueIsBoolean()) {
        return {};
      }

      return this.props;
    }
  }, {
    key: 'renderLabel',
    value: function renderLabel() {
      if (!this.props.label) {
        return null;
      }

      return _react2.default.createElement(_label.Label, { name: this.props.label, active: true });
    }
  }, {
    key: 'renderInputHidden',
    value: function renderInputHidden() {
      if (this.valueIsBoolean()) {
        return _react2.default.createElement(_input_base2.default, _extends({}, this.props, { value: this.state.value }));
      }

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: this.className() },
          _react2.default.createElement(
            'label',
            null,
            _i18n2.default.t(this.props.offLabel),
            _react2.default.createElement('input', _extends({}, this.checkboxProps(), {
              checked: this.state.checked,
              value: this.state.value,
              disabled: this.props.disabled || this.props.readOnly,
              className: this.inputClassName(),
              onChange: this._handleCheckboxChange,
              type: 'checkbox',
              ref: 'input'
            })),
            _react2.default.createElement('span', { className: 'lever' }),
            _i18n2.default.t(this.props.onLabel)
          ),
          this.renderInputHidden()
        ),
        this.renderLabel()
      );
    }
  }]);

  return InputSwitch;
}(_input_base2.default), _class2.propTypes = {
  label: _prop_types2.default.string,
  offLabel: _prop_types2.default.localizedString,
  onLabel: _prop_types2.default.localizedString
}, _class2.defaultProps = {
  themeClassKey: 'input.switch',
  offLabel: 'false',
  onLabel: 'true',
  label: null
}, _temp)) || _class);
exports.default = InputSwitch;