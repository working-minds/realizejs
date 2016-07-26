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

var _prop_types = require('../../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _decorators = require('../../../utils/decorators');

var _components = require('../../../components');

var _input_base = require('../input_base');

var _input_base2 = _interopRequireDefault(_input_base);

var _mixins = require('../../../mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputRadioGroup = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.SelectComponentMixin), _dec(_class = (_temp2 = _class2 = function (_InputBase) {
  _inherits(InputRadioGroup, _InputBase);

  function InputRadioGroup() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, InputRadioGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(InputRadioGroup)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      currentValue: _this.props.currentValue
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InputRadioGroup, [{
    key: 'renderOptions',
    value: function renderOptions() {
      var selectOptions = [];
      var options = this.state.options;

      for (var i = 0; i < options.length; i++) {
        var optionProps = options[i];
        optionProps.id = this.props.name + '_' + i;
        optionProps.type = 'radio';

        if (this.state.currentValue === optionProps.value) {
          optionProps.defaultChecked = optionProps.value;
        }

        if (this.props.withGap) {
          optionProps.className = 'with-gap';
        }

        selectOptions.push(_react2.default.createElement(
          'p',
          { key: 'p_input_' + i, id: 'input_' + optionProps.value },
          _react2.default.createElement('input', _extends({}, optionProps, {
            name: this.props.name,
            onChange: this.handleChange
          })),
          _react2.default.createElement(_components.Label, { id: optionProps.id, label: optionProps.name })
        ));
      }
      return selectOptions;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          className: 'input-checkbox-group align-' + this.props.align,
          ref: 'radioGroup'
        },
        this.renderOptions()
      );
    }
  }]);

  return InputRadioGroup;
}(_input_base2.default), _class2.propTypes = {
  align: _prop_types2.default.oneOf(['vertical', 'horizontal']),
  currentValue: _prop_types2.default.string,
  withGap: _prop_types2.default.bool
}, _class2.defaultProps = {
  name: '',
  align: 'vertical',
  currentValue: null,
  withGap: false
}, _temp2)) || _class);
exports.default = InputRadioGroup;