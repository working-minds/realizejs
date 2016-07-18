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

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _filter = require('lodash/filter');

var _filter2 = _interopRequireDefault(_filter);

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

var _decorators = require('../../utils/decorators');

var _components = require('../../components');

var _mixins = require('../../mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputGroup = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(InputGroup, _Component);

  function InputGroup() {
    _classCallCheck(this, InputGroup);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputGroup).apply(this, arguments));
  }

  _createClass(InputGroup, [{
    key: 'renderInputs',
    value: function renderInputs() {
      var inputsProps = this.props.inputs;
      var inputComponents = [];
      var inputIndex = 0;
      var InputWrapperComponent = this.getInputWrapperComponent();

      for (var inputId in inputsProps) {
        if (inputsProps.hasOwnProperty(inputId)) {
          var inputProps = inputsProps[inputId];
          if (!inputProps.id) {
            inputProps.id = inputId;
          }

          inputComponents.push(_react2.default.createElement(InputWrapperComponent, _extends({
            disabled: this.props.disabled,
            readOnly: this.props.readOnly,
            formStyle: this.props.formStyle,
            inputWrapperComponent: this.props.inputWrapperComponent,
            key: "input_" + inputIndex
          }, inputProps, {
            data: this.props.data,
            errors: this.props.errors,
            resource: this.props.resource,
            ref: "input_" + inputIndex
          })));

          inputIndex++;
        }
      }

      return inputComponents;
    }
  }, {
    key: 'renderLabel',
    value: function renderLabel() {
      if (this.props.label === null) {
        return '';
      }

      return _react2.default.createElement(
        'h5',
        null,
        this.props.label
      );
    }
  }, {
    key: 'renderDivider',
    value: function renderDivider() {
      if (!this.props.separator) {
        return '';
      }

      //TODO: refatorar para um componente
      var className = Realize.themes.getCssClass('form.inputGroup.divider');
      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement('hr', null)
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.props.wrapperClassName },
        _react2.default.createElement(
          'div',
          { className: this.inputGroupClassName() },
          this.renderLabel(),
          this.renderInputs(),
          this.props.children
        ),
        this.renderDivider()
      );
    }
  }, {
    key: 'inputGroupClassName',
    value: function inputGroupClassName() {
      var className = this.className();
      if (this.props.label !== null) {
        className += ' ' + Realize.themes.getCssClass('form.inputGroup.section');
      }

      return className;
    }
  }, {
    key: 'getInputWrapperComponent',
    value: function getInputWrapperComponent() {
      var inputWrapperComponent = this.props.inputWrapperComponent;
      if (typeof inputWrapperComponent == "string") {
        return window[inputWrapperComponent];
      } else if (typeof inputWrapperComponent == "function") {
        return inputWrapperComponent;
      } else {
        return window.Input;
      }
    }
  }, {
    key: 'serialize',
    value: function serialize() {
      var inputRefs = (0, _filter2.default)(this.refs, function (ref, refName) {
        return refName.match(/^input_/);
      });

      var inputValues = {};
      inputRefs.forEach(function (inputRef) {
        (0, _merge2.default)(inputValues, inputRef.serialize());
      });

      return inputValues;
    }
  }]);

  return InputGroup;
}(_react.Component), _class2.propTypes = {
  inputs: _prop_types2.default.object,
  data: _prop_types2.default.object,
  errors: _prop_types2.default.oneOfType([_prop_types2.default.object, _prop_types2.default.array]),
  resource: _prop_types2.default.string,
  disabled: _prop_types2.default.bool,
  readOnly: _prop_types2.default.bool,
  label: _prop_types2.default.string,
  separator: _prop_types2.default.bool,
  formStyle: _prop_types2.default.string,
  wrapperClassName: _prop_types2.default.string,
  inputWrapperComponent: _prop_types2.default.oneOfType([_prop_types2.default.func, _prop_types2.default.element, _prop_types2.default.string])
}, _class2.defaultProps = {
  inputs: {},
  data: {},
  errors: {},
  formStyle: 'default',
  label: null,
  separator: false,
  disabled: false,
  readOnly: false,
  themeClassKey: 'form.inputGroup',
  wrapperClassName: 'wrapper_input_group',
  inputWrapperComponent: null
}, _temp)) || _class);
exports.default = InputGroup;