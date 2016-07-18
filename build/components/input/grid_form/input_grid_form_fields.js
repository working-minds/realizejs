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

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _decorators = require('../../../utils/decorators');

var _components = require('../../../components');

var _mixins = require('../../../mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputGridFormFields = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(InputGridFormFields, _Component);

  function InputGridFormFields() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, InputGridFormFields);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(InputGridFormFields)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      errors: _this.props.errors
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InputGridFormFields, [{
    key: 'submitFormFields',
    value: function submitFormFields(event) {
      var inputGroupRef = this.refs.inputGroup;
      var fieldsData = inputGroupRef.serialize();

      this.props.onSubmit(event, fieldsData);
      this.clearErrors();
    }
  }, {
    key: 'clearErrors',
    value: function clearErrors() {
      //TODO implementar uma forma de limpar os errors do form nos campos do gridform.
    }
  }, {
    key: 'reset',
    value: function reset() {
      console.log('reset!');
    }
  }, {
    key: 'renderInputs',
    value: function renderInputs() {
      if (!this.props.inputs || _jquery2.default.isEmptyObject(this.props.inputs)) {
        return [];
      }

      return _react2.default.createElement(_components.InputGroup, _extends({}, this.propsWithoutCSS(), {
        errors: this.state.errors,
        formStyle: this.props.style,
        ref: 'inputGroup'
      }));
    }
  }, {
    key: 'renderButtons',
    value: function renderButtons() {
      return _react2.default.createElement(
        'div',
        { className: this.themedClassName('form.buttonGroup') },
        this.renderOtherButtons(),
        this.renderSubmitButton()
      );
    }
  }, {
    key: 'renderOtherButtons',
    value: function renderOtherButtons() {
      var otherButtonsProps = this.props.otherButtons;
      var otherButtons = [];

      for (var i = 0; i < otherButtonsProps.length; i++) {
        var otherButtonProps = otherButtonsProps[i];
        otherButtons.push(_react2.default.createElement(_components.Button, _extends({}, otherButtonProps, {
          element: 'a',
          key: otherButtonProps.name
        })));
      }

      return otherButtons;
    }
  }, {
    key: 'renderSubmitButton',
    value: function renderSubmitButton() {
      if (!this.props.submitButton) {
        return [];
      }

      return _react2.default.createElement(_components.Button, _extends({}, this.props.submitButton, {
        element: 'a',
        onClick: this.submitFormFields
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: this.props.id, className: this.className(), ref: 'form' },
        this.renderInputs(),
        this.renderButtons()
      );
    }
  }]);

  return InputGridFormFields;
}(_react.Component), _class2.propTypes = {
  id: _prop_types2.default.string,
  inputs: _prop_types2.default.object,
  data: _prop_types2.default.object,
  style: _prop_types2.default.string,
  resource: _prop_types2.default.string,
  disabled: _prop_types2.default.bool,
  readOnly: _prop_types2.default.bool,
  submitButton: _prop_types2.default.oneOfType([_prop_types2.default.object, _prop_types2.default.bool]),
  otherButtons: _prop_types2.default.array,
  onSubmit: _prop_types2.default.func,
  onReset: _prop_types2.default.func
}, _class2.defaultProps = {
  themeClassKey: 'form',
  id: null,
  inputs: {},
  data: {},
  style: 'default',
  resource: null,
  disabled: false,
  readOnly: false,
  submitButton: {
    name: 'actions.send',
    icon: 'send'
  },
  otherButtons: [],
  onSubmit: function onSubmit() {},
  onReset: function onReset() {}
}, _temp2)) || _class);
exports.default = InputGridFormFields;