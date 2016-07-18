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

var _capitalize = require('lodash/capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _decorators = require('../../utils/decorators');

var _mixins = require('../../mixins');

var _components = require('../../components');

var _input = require('../../components/input');

var InputComponents = _interopRequireWildcard(_input);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this, props));

    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  _createClass(Input, [{
    key: 'renderInput',
    value: function renderInput() {
      return _react2.default.createElement(
        'div',
        { className: this.inputClassName(), id: this.getInputContainerId() },
        this.renderComponentInput(),
        this.renderLabel(),
        this.renderInputErrors()
      );
    }
  }, {
    key: 'renderInputWithoutLabel',
    value: function renderInputWithoutLabel() {
      return _react2.default.createElement(
        'div',
        { className: this.inputClassName(), id: this.getInputContainerId() },
        this.renderComponentInput(),
        this.renderInputErrors()
      );
    }
  }, {
    key: 'renderAutocompleteInput',
    value: function renderAutocompleteInput() {
      return this.renderInputWithoutLabel();
    }
  }, {
    key: 'renderDatefilterInput',
    value: function renderDatefilterInput() {
      return this.renderInputWithoutLabel();
    }
  }, {
    key: 'renderDatepickerInput',
    value: function renderDatepickerInput() {
      return this.renderInputWithoutLabel();
    }
  }, {
    key: 'renderNumberInput',
    value: function renderNumberInput() {
      return this.renderInputWithoutLabel();
    }
  }, {
    key: 'renderSwitchInput',
    value: function renderSwitchInput() {
      return this.renderInputWithoutLabel();
    }
  }, {
    key: 'renderFileInput',
    value: function renderFileInput() {
      return this.renderInputWithoutLabel();
    }
  }, {
    key: 'renderColorpickerInput',
    value: function renderColorpickerInput() {
      return this.renderInputWithoutLabel();
    }
  }, {
    key: 'renderGridformInput',
    value: function renderGridformInput() {
      return this.renderInputWithoutLabel();
    }
  }, {
    key: 'renderHiddenInput',
    value: function renderHiddenInput() {
      return this.renderComponentInput();
    }
  }, {
    key: 'renderComponentInput',
    value: function renderComponentInput() {
      var componentInputClass = this.getInputComponentClass(this.props.component);
      var isGrid = componentInputClass === InputGridForm;

      var componentInputProps = _react2.default.__spread(this.propsWithoutCSS(), {
        originalId: this.props.id,
        originalName: this.props.name,
        id: this.getInputComponentId(),
        name: this.getInputComponentName(),
        errors: isGrid ? this.props.errors : this.getInputErrors(),
        value: this.getInputComponentValue(),
        maxLength: this.getMaxLength(),
        ref: "inputComponent"
      });

      return _react2.default.createElement(componentInputClass, componentInputProps);
    }
  }, {
    key: 'renderLabel',
    value: function renderLabel() {
      var inputValue = this.getInputComponentValue();
      var isActive = this.labelIsActive(inputValue);

      return _react2.default.createElement(_components.Label, _extends({}, this.propsWithoutCSS(), { id: this.getInputComponentId(), active: isActive }));
    }
  }, {
    key: 'labelIsActive',
    value: function labelIsActive(inputValue) {
      if (this.props.component === 'checkbox') return false;

      return inputValue !== null && inputValue !== undefined && String(inputValue).length > 0;
    }
  }, {
    key: 'renderInputErrors',
    value: function renderInputErrors() {
      return _react2.default.createElement(InputComponents.InputError, { errors: this.getInputErrors() });
    }
  }, {
    key: 'render',
    value: function render() {
      var renderFunction = 'render' + (0, _capitalize2.default)(this.props.component) + 'Input';
      var renderLabel = this.props.renderLabel;

      if (this.hasOwnProperty(renderFunction)) {
        return this[renderFunction]();
      } else if (!renderLabel) {
        return this.renderInputWithoutLabel();
      } else {
        return this.renderInput();
      }
    }
  }, {
    key: 'inputClassName',
    value: function inputClassName() {
      var className = this.className();
      if (!this.props.className) {
        className += ' ' + Realize.themes.getCssClass('input.grid.' + this.props.formStyle);
      }

      return className;
    }
  }, {
    key: 'getInputContainerId',
    value: function getInputContainerId() {
      return "input__" + this.props.id;
    }
  }, {
    key: 'getInputComponentClass',
    value: function getInputComponentClass(component) {
      var mapping = {
        text: InputComponents.InputText,
        autocomplete: InputComponents.InputAutocomplete,
        checkbox: InputComponents.InputCheckbox,
        colorpicker: InputComponents.InputColorpicker,
        datefilter: InputComponents.InputDatefilter,
        datepicker: InputComponents.InputDatepicker,
        number: InputComponents.InputNumber,
        file: InputComponents.InputFile,
        gridform: InputComponents.InputGridForm,
        hidden: InputComponents.InputHidden,
        password: InputComponents.InputPassword,
        select: InputComponents.InputSelect,
        switch: InputComponents.InputSwitch,
        textarea: InputComponents.InputTextarea,
        checkbox_group: InputComponents.InputCheckboxGroup,
        radio_group: InputComponents.InputRadioGroup,
        masked: InputComponents.InputMasked
      };

      return mapping[component] || window[component] || component;
    }
  }, {
    key: 'getInputComponentId',
    value: function getInputComponentId() {
      var inputId = this.props.id;
      if (this.props.resource !== null && this.props.scope === "resource") {
        inputId = this.props.resource + '_' + inputId;
      }

      return inputId;
    }
  }, {
    key: 'getInputComponentName',
    value: function getInputComponentName() {
      var inputName = this.props.name || this.props.id;
      if (this.props.resource !== null && this.props.scope === "resource") {
        inputName = this.props.resource + '[' + inputName + ']';
      }

      return inputName;
    }
  }, {
    key: 'getInputComponentValue',
    value: function getInputComponentValue() {
      if (!!this.props.value) {
        return this.props.value;
      }

      var data = this.props.data || {};
      var dataValue = data[this.props.id];

      if (typeof dataValue === 'boolean') {
        dataValue = dataValue ? 1 : 0;
      }

      return dataValue;
    }
  }, {
    key: 'getMaxLength',
    value: function getMaxLength() {
      var acceptComponents = ['text', 'masked', 'number', 'textarea'];

      if (!!this.props.maxLength && acceptComponents.indexOf(this.props.component) != -1) {
        return this.props.maxLength;
      }
    }
  }, {
    key: 'getInputErrors',
    value: function getInputErrors() {
      if (this.props.errors[this.props.resource] && this.props.errors[this.props.resource][this.props.id]) return this.props.errors[this.props.resource][this.props.id];
      return this.props.errors[this.props.id];
    }

    /* Serializer functions */

  }, {
    key: 'getName',
    value: function getName() {
      return this.getInputComponentName();
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var inputComponentRef = this.refs.inputComponent;
      if (typeof inputComponentRef.getValue == "function") {
        return inputComponentRef.getValue();
      } else {
        return this.getInputComponentValue();
      }
    }
  }, {
    key: 'serialize',
    value: function serialize() {
      var inputComponentRef = this.refs.inputComponent;
      if (typeof inputComponentRef.serialize == "function") {
        return inputComponentRef.serialize();
      }

      var serializedInput = {};
      serializedInput[this.getName()] = this.getValue();
      return serializedInput;
    }
  }]);

  return Input;
}(_react2.default.Component), _class2.propTypes = {
  id: _prop_types2.default.string,
  name: _prop_types2.default.string,
  label: _prop_types2.default.oneOfType([_prop_types2.default.string, _prop_types2.default.bool]),
  value: _prop_types2.default.any,
  component: _prop_types2.default.string,
  formStyle: _prop_types2.default.oneOf(['default', 'filter', 'oneLine']),
  data: _prop_types2.default.object,
  errors: _prop_types2.default.oneOfType([_prop_types2.default.object, _prop_types2.default.array]),
  resource: _prop_types2.default.string,
  scope: _prop_types2.default.oneOf(['resource', 'global']),
  maxLength: _prop_types2.default.number,
  renderLabel: _prop_types2.default.bool
}, _class2.defaultProps = {
  themeClassKey: 'input',
  value: null,
  component: 'text',
  formStyle: 'default',
  data: {},
  errors: {},
  resource: null,
  scope: 'resource',
  maxLength: null,
  renderLabel: true
}, _temp)) || _class);
exports.default = Input;