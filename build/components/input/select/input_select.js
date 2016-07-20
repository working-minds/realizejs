'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _desc, _value, _class2, _class3, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _prop_types = require('../../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _i18n = require('../../../i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _decorators = require('../../../utils/decorators');

var _components = require('../../../components');

var _mixins = require('../../../mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var InputSelect = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.InputComponentMixin, _mixins.SelectComponentMixin, _mixins.InputSelectActionsListenerMixin, _mixins.MaterializeSelectMixin), _dec(_class = (_class2 = (_temp = _class3 = function (_Component) {
  _inherits(InputSelect, _Component);

  function InputSelect() {
    _classCallCheck(this, InputSelect);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputSelect).apply(this, arguments));
  }

  _createClass(InputSelect, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var valuesSelect = _reactDom2.default.findDOMNode(this.refs.select);
      var $form = (0, _jquery2.default)(valuesSelect.form);
      $form.on('reset', this.clearSelection);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var valuesSelect = _reactDom2.default.findDOMNode(this.refs.select);
      var $form = (0, _jquery2.default)(valuesSelect.form);
      $form.off('reset', this.clearSelection);
    }
  }, {
    key: 'clearSelection',
    value: function clearSelection() {
      this.setState({
        value: []
      }, this.triggerDependableChanged);
    }
  }, {
    key: 'selectedValue',
    value: function selectedValue() {
      var value = this.state.value;

      Console.log(value);
      if (!this.props.multiple) {
        value = value[0];
      }

      return value;
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      var selectElement = _reactDom2.default.findDOMNode(this.refs.select);
      var newValue = this.ensureIsArray(selectElement.value);
      this.props.onChange(event, newValue, this);

      if (!event.isDefaultPrevented()) {
        this.setState({
          value: newValue
        }, this.triggerDependableChanged);
      }
    }
  }, {
    key: 'renderOptions',
    value: function renderOptions() {
      var selectOptions = [];
      var options = this.state.options;

      if (this.props.includeBlank) {
        selectOptions.push(_react2.default.createElement(_components.InputSelectOption, {
          name: _i18n2.default.t(this.props.blankText),
          value: '',
          key: 'empty_option'
        }));
      }

      for (var i = 0; i < options.length; i++) {
        var optionProps = options[i];
        selectOptions.push(_react2.default.createElement(_components.InputSelectOption, _extends({}, optionProps, { key: optionProps.name })));
      }

      return selectOptions;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'select',
        {
          id: this.props.id,
          name: this.props.name,
          value: this.selectedValue(),
          onChange: this.handleChange,
          disabled: this.isDisabled() || this.props.readOnly,
          className: this.className(),
          ref: 'select'
        },
        this.renderOptions()
      );
    }
  }]);

  return InputSelect;
}(_react.Component), _class3.propTypes = {
  includeBlank: _prop_types2.default.bool,
  blankText: _prop_types2.default.localizedString
}, _class3.defaultProps = {
  includeBlank: true,
  themeClassKey: 'input.select',
  blankText: 'select'
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'handleChange', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleChange'), _class2.prototype)), _class2)) || _class);
exports.default = InputSelect;