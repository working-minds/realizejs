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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _prop_types = require('../../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _utils = require('../../../utils');

var _decorators = require('../../../utils/decorators');

var _input_base = require('../input_base');

var _input_base2 = _interopRequireDefault(_input_base);

var _input_text = require('../input_text');

var _input_text2 = _interopRequireDefault(_input_text);

var _label = require('../../label');

var _label2 = _interopRequireDefault(_label);

var _mixins = require('../../../mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputDatefilterSelect = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_InputBase) {
  _inherits(InputDatefilterSelect, _InputBase);

  function InputDatefilterSelect() {
    _classCallCheck(this, InputDatefilterSelect);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputDatefilterSelect).apply(this, arguments));
  }

  _createClass(InputDatefilterSelect, [{
    key: 'focusSelect',
    value: function focusSelect() {
      var selectInput = _reactDom2.default.findDOMNode(this.refs.select);
      selectInput.focus();
    }
  }, {
    key: 'selectId',
    value: function selectId() {
      return 'datefilter_select_' + this.props.id;
    }
  }, {
    key: 'renderSelectedDates',
    value: function renderSelectedDates() {
      var dates = this.props.selectedDates;
      return dates.join(' - ');
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
            'span',
            { className: 'caret', onClick: this.focusSelect },
            '▼'
          ),
          _react2.default.createElement(_input_text2.default, {
            id: this.selectId(),
            value: this.renderSelectedDates(),
            disabled: this.props.disabled,
            placeholder: this.props.placeholder,
            onFocus: this.props.onFocus,
            errors: this.props.errors,
            ref: 'select',
            key: 'datefilter_select_' + _utils.uuid.v4()
          })
        ),
        _react2.default.createElement(_label2.default, _extends({}, this.propsWithoutCSS(), { id: this.selectId() }))
      );
    }
  }]);

  return InputDatefilterSelect;
}(_input_base2.default), _class2.propTypes = {
  selectedDates: _prop_types2.default.array,
  onBlur: _prop_types2.default.func
}, _class2.defaultProps = {
  selectedDates: [],
  themeClassKey: 'input.datefilter.select',
  placeholder: 'select'
}, _temp)) || _class);
exports.default = InputDatefilterSelect;