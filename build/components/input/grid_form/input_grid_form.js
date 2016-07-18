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

var _prop_types = require('../../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

var _mapValues = require('lodash/mapValues');

var _mapValues2 = _interopRequireDefault(_mapValues);

var _decorators = require('../../../utils/decorators');

var _components = require('../../../components');

var _mixins = require('../../../mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputGridForm = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.InputComponentMixin), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(InputGridForm, _Component);

  function InputGridForm() {
    _classCallCheck(this, InputGridForm);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputGridForm).apply(this, arguments));
  }

  _createClass(InputGridForm, [{
    key: 'getDefaultFormProps',
    value: function getDefaultFormProps() {
      return {
        formStyle: 'filter',
        inputWrapperComponent: this.props.inputWrapperComponent
      };
    }
  }, {
    key: 'getColumnName',
    value: function getColumnName(column, columnKey) {
      var columnName = column.name || columnKey;
      if (this.columnHaveDisplayValueKey(columnName)) {
        columnName += 'Display';
      }

      return columnName;
    }
  }, {
    key: 'getSerializedValue',
    value: function getSerializedValue() {
      return JSON.stringify(this.state.value);
    }
  }, {
    key: 'parseFormProp',
    value: function parseFormProp() {
      var formProp = (0, _merge2.default)(this.getDefaultFormProps(), this.props.form);
      var fieldsProp = (0, _merge2.default)({}, this.props.fields);
      formProp.inputs = (0, _mapValues2.default)(fieldsProp, function (field) {
        delete field.format;
        return field;
      });

      return formProp;
    }
  }, {
    key: 'parseColumnsProp',
    value: function parseColumnsProp() {
      var _this2 = this;

      var columnsProp = (0, _merge2.default)({}, this.props.fields);
      columnsProp = (0, _mapValues2.default)(columnsProp, function (column, columnKey) {
        delete column.component;
        delete column.className;
        delete column.value;
        column.name = _this2.getColumnName(column, columnKey);
        return column;
      });

      return columnsProp;
    }
  }, {
    key: 'columnHaveDisplayValueKey',
    value: function columnHaveDisplayValueKey(columnName) {
      var value = this.state.value;
      var firstValueRow = value == null ? null : value[0];
      if (firstValueRow == null) {
        return false;
      }

      var valueKeys = Object.keys(firstValueRow);
      return valueKeys.indexOf(columnName + 'Display') >= 0;
    }

    /* GridForm Result serializer */

  }, {
    key: 'serializeGridForm',
    value: function serializeGridForm() {
      var gridFormRef = this.refs.gridForm;
      this.setState({
        value: gridFormRef.serialize()
      });
    }
  }, {
    key: '_getValue',
    value: function _getValue() {
      return JSON.stringify(this.state.value);
    }

    /* Event handling functions */

  }, {
    key: 'handleOnSuccess',
    value: function handleOnSuccess() {
      var gridFormValue = this.refs.gridForm.serialize();

      this.props.onSuccess(gridFormValue);
      this.serializeGridForm();
    }
  }, {
    key: 'handleOnDestroySuccess',
    value: function handleOnDestroySuccess() {
      var gridFormValue = this.refs.gridForm.serialize();

      this.props.onDestroySuccess(gridFormValue);
      this.serializeGridForm();
    }

    /* Renderers */

  }, {
    key: 'renderLabel',
    value: function renderLabel() {
      var label = this.props.label;
      if (typeof label === 'boolean' && !label) {
        return [];
      }

      return _react2.default.createElement(
        'h3',
        { className: this.themedClassName('input.gridForm.label') },
        label
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.className() },
        this.renderLabel(),
        _react2.default.createElement(_components.GridForm, _extends({}, this.propsWithoutCSS(), {
          formComponent: _components.InputGridFormFields,
          form: this.parseFormProp(),
          columns: this.parseColumnsProp(),
          onSuccess: this.handleOnSuccess,
          onDestroySuccess: this.handleOnDestroySuccess,
          errors: this.props.errors,
          ref: 'gridForm'
        })),
        _react2.default.createElement(_components.InputHidden, _extends({}, this.propsWithoutCSS(), {
          value: this.getSerializedValue(),
          ref: 'input'
        }))
      );
    }
  }]);

  return InputGridForm;
}(_react.Component), _class2.propTypes = {
  label: _prop_types2.default.oneOfType([_prop_types2.default.string, _prop_types2.default.bool]),
  fields: _prop_types2.default.object,
  form: _prop_types2.default.object,
  clientSide: _prop_types2.default.bool,
  inputWrapperComponent: _prop_types2.default.oneOfType([_prop_types2.default.func, _prop_types2.default.element, _prop_types2.default.string]),
  onSuccess: _prop_types2.default.func,
  onDestroySuccess: _prop_types2.default.func
}, _class2.defaultProps = {
  themeClassKey: 'input.gridForm',
  className: '',
  fields: {},
  form: {},
  clientSide: true,
  inputWrapperComponent: null,
  onSuccess: function onSuccess() {},
  onDestroySuccess: function onDestroySuccess() {}
}, _temp)) || _class);
exports.default = InputGridForm;