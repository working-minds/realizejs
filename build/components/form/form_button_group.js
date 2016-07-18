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

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _decorators = require('../../utils/decorators');

var _components = require('../../components');

var _mixins = require('../../mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormButtonGroup = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(FormButtonGroup, _Component);

  function FormButtonGroup() {
    _classCallCheck(this, FormButtonGroup);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FormButtonGroup).apply(this, arguments));
  }

  _createClass(FormButtonGroup, [{
    key: 'renderOtherButtons',
    value: function renderOtherButtons() {
      if (!(0, _isEmpty2.default)(this.props.inputs) && this.isAllInputsHidden()) {
        return '';
      }

      var otherButtonsProps = this.props.otherButtons;
      var otherButtons = [];

      for (var i = 0; i < otherButtonsProps.length; i++) {
        var otherButtonProps = otherButtonsProps[i];
        otherButtons.push(_react2.default.createElement(_components.Button, _extends({}, otherButtonProps, { key: otherButtonProps.name })));
      }

      return otherButtons;
    }
  }, {
    key: 'renderSubmitButton',
    value: function renderSubmitButton() {
      if (!(0, _isEmpty2.default)(this.props.inputs) && this.isAllInputsHidden() || !this.props.submitButton) {
        return '';
      }

      var submitButton = [];
      submitButton.push(_react2.default.createElement(_components.Button, _extends({}, this.submitButtonProps(), { ref: 'submitButton', key: 'submit_button' })));
      return submitButton;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.className() },
        this.renderOtherButtons(),
        this.renderSubmitButton()
      );
    }
  }, {
    key: 'isAllInputsHidden',
    value: function isAllInputsHidden() {
      var allHidden = true;
      var inputs = this.props.inputs;

      for (var property in inputs) {
        if (inputs.hasOwnProperty(property)) {
          var input = inputs[property];
          if (input.component !== 'hidden') return allHidden = false;
        }
      }

      return allHidden;
    }
  }, {
    key: 'submitButtonProps',
    value: function submitButtonProps() {
      var isLoading = this.props.isLoading;
      return _jquery2.default.extend({}, this.props.submitButton, {
        type: "submit",
        disabled: isLoading,
        isLoading: isLoading
      });
    }
  }]);

  return FormButtonGroup;
}(_react.Component), _class2.propTypes = {
  inputs: _prop_types2.default.object,
  submitButton: _prop_types2.default.oneOfType([_prop_types2.default.object, _prop_types2.default.bool]),
  otherButtons: _prop_types2.default.array,
  isLoading: _prop_types2.default.bool
}, _class2.defaultProps = {
  themeClassKey: 'form.buttonGroup',
  inputs: {},
  submitButton: {
    name: 'actions.send',
    icon: 'send'
  },
  otherButtons: [],
  isLoading: false
}, _temp)) || _class);
exports.default = FormButtonGroup;