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

var _i18n = require('../../i18n/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _utils = require('../../utils');

var _decorators = require('../../utils/decorators');

var _mixins = require('../../mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputDatepicker = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.InputComponentMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(InputDatepicker, _Component);

  function InputDatepicker() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, InputDatepicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(InputDatepicker)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      inputMaskedKey: _utils.uuid.v4()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InputDatepicker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setPickadatePlugin();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(InputMasked, _extends({}, this.props, {
          value: this.getFormattedDateValue(),
          className: this.className(),
          onChange: this._handleChange,
          onIncomplete: this.handleMaskIncomplete,
          key: this.state.inputMaskedKey,
          ref: 'input'
        })),
        _react2.default.createElement(Label, _extends({}, this.propsWithoutCSS(), { active: this.labelIsActive() })),
        _react2.default.createElement(Button, {
          disabled: this.props.disabled || this.props.readOnly,
          icon: { type: "calendar" },
          className: 'input-datepicker__button prefix',
          onClick: this.handleCalendarClick,
          type: 'button',
          ref: 'button'
        })
      );
    }
  }, {
    key: 'getDateFormat',
    value: function getDateFormat() {
      return this.props.format || Realize.i18n.t('date.formats.date');
    }
  }, {
    key: 'getFormattedDateValue',
    value: function getFormattedDateValue() {
      var date = _moment2.default.utc(this.state.value, _moment2.default.ISO_8601);
      if (date.isValid()) {
        return date.format(this.getDateFormat());
      }

      return this.state.value;
    }
  }, {
    key: 'labelIsActive',
    value: function labelIsActive() {
      var inputValue = this.state.value;

      return inputValue != null && String(inputValue).length > 0;
    }
  }, {
    key: 'setPickadatePlugin',
    value: function setPickadatePlugin() {
      var $inputNode = $(ReactDOM.findDOMNode(this.refs.input));
      $inputNode.pickadate({
        editable: true,
        selectMonths: true,
        selectYears: true,
        format: this.getDateFormat().toLowerCase(),
        onSet: this.handlePickadateSet
      });

      var picker = $inputNode.pickadate('picker');
      picker.on('close', this.props.onChange);
    }
  }, {
    key: 'handleCalendarClick',
    value: function handleCalendarClick(event) {
      var $inputNode = $(ReactDOM.findDOMNode(this.refs.input));
      var picker = $inputNode.pickadate('picker');

      // TODO: should close on date click - materialize currently broke it
      if (picker.get('open')) {
        picker.close();
      } else {
        picker.open();
      }

      event.stopPropagation();
    }
  }, {
    key: 'handlePickadateSet',
    value: function handlePickadateSet(pickadateObject) {
      var selectedDate = (0, _moment2.default)(pickadateObject.select).format();
      this.props.onChange(null, this.getFormattedDateValue(), this);

      this.setState({
        value: selectedDate,
        inputMaskedKey: _utils.uuid.v4()
      }, this.setPickadatePlugin);
    }
  }, {
    key: 'handleMaskIncomplete',
    value: function handleMaskIncomplete(event) {
      this.setState({ value: null });
    }
  }, {
    key: '_getValue',
    value: function _getValue() {
      return this.getFormattedDateValue();
    }
  }]);

  return InputDatepicker;
}(_react.Component), _class2.propTypes = {
  mask: _prop_types2.default.string
}, _class2.defaultProps = {
  themeClassKey: 'input.datepicker',
  mask: null,
  format: null,
  maskType: 'date'
}, _temp2)) || _class);
exports.default = InputDatepicker;