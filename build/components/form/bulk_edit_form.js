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

var _utils = require('../../utils');

var _decorators = require('../../utils/decorators');

var _components = require('../../components');

var _mixins = require('../../mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BulkEditForm = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(BulkEditForm, _Component);

  function BulkEditForm(props) {
    _classCallCheck(this, BulkEditForm);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BulkEditForm).call(this, props));

    var disabled = [];
    for (var i = 0; i < _this.props.inputGroups.length; i++) {
      var inputs = _this.props.inputGroups[i].inputs;
      for (var inputId in inputs) {
        disabled.push(inputId);
      }
    }

    _this.state = {
      disabled: disabled,
      inputKeys: _this.generateInputIds()
    };
    return _this;
  }

  _createClass(BulkEditForm, [{
    key: 'renderChildren',
    value: function renderChildren() {
      var inputComponents = [];

      for (var i = 0; i < this.props.inputGroups.length; i++) {
        var inputGroup = this.props.inputGroups[i];
        this.generateInputs(inputComponents, inputGroup, i);
      }

      return inputComponents;
    }
  }, {
    key: 'render',
    value: function render() {
      var formProps = _jquery2.default.extend({}, this.props);
      delete formProps.inputGroups;

      return _react2.default.createElement(
        _components.Form,
        formProps,
        this.renderChildren()
      );
    }
  }, {
    key: 'generateInputIds',
    value: function generateInputIds() {
      var idsMap = {};
      for (var i = 0; i < this.props.inputGroups.length; i++) {
        var inputs = this.props.inputGroups[i].inputs;
        for (var inputId in inputs) {
          idsMap[inputId] = "input_" + inputId + _utils.uuid.v4();
        }
      }

      return idsMap;
    }
  }, {
    key: 'generateInputs',
    value: function generateInputs(inputComponents, inputGroup, i) {
      var inputIndex = 0;
      var inputsProps = inputGroup.inputs;

      inputComponents.push(_react2.default.createElement(
        'h5',
        { key: "header_" + i },
        inputGroup.label
      ));

      for (var inputId in inputsProps) {
        if (inputsProps.hasOwnProperty(inputId)) {
          var inputProps = inputsProps[inputId];
          if (!inputProps.id) {
            inputProps.id = inputId;
          }

          inputProps.disabled = this.state.disabled.indexOf(inputId) !== -1;
          var resourceName = inputGroup.resource || this.props.resource;

          var switchId = "enable";
          if (!!resourceName) {
            switchId = switchId + "_" + resourceName;
          }
          switchId = switchId + "_" + inputId;

          var switchName = "enable";
          if (!!resourceName) {
            switchName = switchName + "[" + resourceName + "]";
          }
          switchName = switchName + "[" + inputId + "]";

          if (inputId == 'ids') {
            inputComponents.push(_react2.default.createElement(_components.Input, _extends({}, inputProps, {
              disabled: false,
              data: this.props.data,
              resource: inputGroup.resource || this.props.resource,
              className: 'col m7 s10',
              key: "value_" + inputId,
              ref: "input_" + inputId,
              component: 'hidden'
            })));
          } else {
            inputComponents.push(_react2.default.createElement(
              _components.Container,
              { className: 'row', key: "container_" + inputId },
              _react2.default.createElement(InputSwitch, {
                id: switchId,
                name: switchName,
                onChange: this.handleSwitchChange,
                className: 'switch col l3 m3 s2',
                offLabel: '',
                onLabel: '',
                key: "switch_" + inputId
              }),
              _react2.default.createElement(_components.Input, _extends({}, inputProps, {
                data: this.props.data,
                errors: this.props.errors,
                resource: inputGroup.resource || this.props.resource,
                formStyle: this.props.formStyle,
                className: 'input-field col offset-s1 l8 m8 s8',
                clearTheme: true,
                key: this.state.inputKeys[inputId],
                ref: "input_" + inputId
              }))
            ));
            inputIndex++;
          }
        }
      }

      return inputComponents;
    }
  }, {
    key: 'handleSwitchChange',
    value: function handleSwitchChange(event) {
      var sw = event.target;
      var inputId = sw.id.replace(/^enable_/, '');

      if (sw.name.indexOf('[') !== -1) {
        inputId = sw.name.split('[').pop().replace(']', '');
      }

      var disabled = _jquery2.default.extend([], this.state.disabled);

      if (!sw.checked) {
        disabled.push(inputId);
      } else {
        disabled.splice(disabled.indexOf(inputId), 1);
      }

      var inputKeys = this.state.inputKeys;
      inputKeys[inputId] = "input_" + inputId + _utils.uuid.v4();
      this.setState({ disabled: disabled, inputKeys: inputKeys });
    }
  }]);

  return BulkEditForm;
}(_react.Component), _class2.propTypes = {
  inputs: _prop_types2.default.object,
  data: _prop_types2.default.object,
  action: _prop_types2.default.string,
  method: _prop_types2.default.string,
  dataType: _prop_types2.default.string,
  contentType: _prop_types2.default.string,
  style: _prop_types2.default.string,
  resource: _prop_types2.default.string,
  submitButton: _prop_types2.default.object,
  otherButtons: _prop_types2.default.array,
  isLoading: _prop_types2.default.bool,
  onSubmit: _prop_types2.default.func,
  onReset: _prop_types2.default.func
}, _class2.defaultProps = {
  inputs: {},
  data: {},
  action: '',
  method: 'POST',
  dataType: undefined,
  contentType: undefined,
  submitButton: {
    name: 'Enviar',
    icon: 'send'
  },
  otherButtons: [],
  isLoading: false,
  themeClassKey: 'form',
  style: 'default',
  resource: null,
  onSubmit: function onSubmit(event, postData) {},
  onReset: function onReset(event) {}
}, _temp)) || _class);
exports.default = BulkEditForm;