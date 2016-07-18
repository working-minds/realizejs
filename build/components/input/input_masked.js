'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _desc, _value, _class2, _class3, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _prop_types = require('../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _i18n = require('../../i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _decorators = require('../../utils/decorators');

var _mixins = require('../../mixins');

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

var InputMasked = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.InputComponentMixin), _dec(_class = (_class2 = (_temp2 = _class3 = function (_Component) {
  _inherits(InputMasked, _Component);

  function InputMasked() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, InputMasked);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(InputMasked)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      placeholder: _this.getPlaceholder(),
      applyMask: true
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InputMasked, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var appliedMask = this.applyMask();
      this.setMaskPlaceholder(appliedMask);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.applyMask) {
        this.applyMask();
      }
    }
  }, {
    key: 'getInputElement',
    value: function getInputElement() {
      return _reactDom2.default.findDOMNode(this.refs.input);
    }
  }, {
    key: 'setMaskPlaceholder',
    value: function setMaskPlaceholder(appliedMaskOptions) {
      var appliedPlaceholder = appliedMaskOptions.placeholder;

      if (!!appliedPlaceholder) {
        this.setState({
          placeholder: appliedPlaceholder,
          applyMask: true
        });
      }
    }
  }, {
    key: 'parseMaskOptions',
    value: function parseMaskOptions() {
      var maskOptions = _jquery2.default.extend({
        showMaskOnHover: false,
        clearIncomplete: true
      }, this.filterMaskOptionProps());

      maskOptions.oncomplete = this.handleComplete;
      maskOptions.onincomplete = this.handleIncomplete;
      maskOptions.oncleared = this.props.onCleared;

      return maskOptions;
    }
  }, {
    key: 'filterMaskOptionProps',
    value: function filterMaskOptionProps() {
      var maskOptionProps = {};
      var propsToFilter = ['onComplete', 'onIncomplete', 'onCleared'];
      for (var propName in this.props) {
        if (this.props.hasOwnProperty(propName)) {
          var prop = this.props[propName];
          if (!!prop && propsToFilter.indexOf(propName) < 0) {
            maskOptionProps[propName] = prop;
          }
        }
      }

      return maskOptionProps;
    }
  }, {
    key: 'predefinedMasks',
    value: function predefinedMasks() {
      var localeMasks = _i18n2.default.t('masks');
      var predefinedMasks = {};

      for (var maskName in localeMasks) {
        if (localeMasks.hasOwnProperty(maskName)) {
          var mask = localeMasks[maskName];
          if (typeof mask === 'string') {
            predefinedMasks[maskName] = { mask: mask };
          } else if ((typeof mask === 'undefined' ? 'undefined' : _typeof(mask)) === 'object') {
            predefinedMasks[maskName] = mask;
          }
        }
      }

      return predefinedMasks;
    }
  }, {
    key: 'applyMask',
    value: function applyMask() {
      var appliedMask = {};
      if (!!this.props.regex) {
        appliedMask = this.applyRegexMask();
      } else {
        appliedMask = this.applyBaseMask();
      }

      return appliedMask;
    }
  }, {
    key: 'applyRegexMask',
    value: function applyRegexMask() {
      var $input = (0, _jquery2.default)(this.getInputElement());
      var maskOptions = this.parseMaskOptions();

      $input.inputmask('Regex', maskOptions);
      return maskOptions;
    }
  }, {
    key: 'applyBaseMask',
    value: function applyBaseMask() {
      var maskType = this.props.maskType;
      var predefinedMasks = this.predefinedMasks();
      var predefinedMask = predefinedMasks[maskType];

      var appliedMask = {};
      if (!!predefinedMask) {
        appliedMask = this.applyPredefinedMask(predefinedMask);
      } else {
        appliedMask = this.applyCustomMask();
      }

      return appliedMask;
    }
  }, {
    key: 'applyPredefinedMask',
    value: function applyPredefinedMask(predefinedMask) {
      var $input = (0, _jquery2.default)(this.getInputElement());
      var predefinedMaskOptions = _jquery2.default.extend({}, this.parseMaskOptions(), predefinedMask);

      $input.inputmask(predefinedMaskOptions);
      return predefinedMaskOptions;
    }
  }, {
    key: 'applyCustomMask',
    value: function applyCustomMask() {
      var $input = (0, _jquery2.default)(this.getInputElement());
      var maskOptions = this.parseMaskOptions();

      console.log(maskOptions);
      $input.inputmask(maskOptions);
      this.setMaskPlaceholder(maskOptions);
      return maskOptions;
    }
  }, {
    key: 'updateValue',
    value: function updateValue(value) {
      this.setState({
        value: value,
        applyMask: false
      });
    }
  }, {
    key: 'handleComplete',
    value: function handleComplete(event) {
      this.props.onComplete(event);
      this.updateValue(event.target.value);
    }
  }, {
    key: 'handleIncomplete',
    value: function handleIncomplete(event) {
      this.props.onIncomplete(event);
      this.updateValue(null);
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      var newValue = event.target.value;
      this.props.onChange(event, newValue, this);

      if (!event.isDefaultPrevented()) {
        this.updateValue(newValue);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'input',
        _extends({}, this.props, {
          value: this.state.value,
          placeholder: this.state.placeholder,
          className: this.inputClassName(),
          onKeyUp: this.handleChange,
          onFocus: this._handleFocus,
          ref: 'input'
        }),
        this.props.children
      );
    }
  }]);

  return InputMasked;
}(_react.Component), _class3.propTypes = {
  type: _prop_types2.default.string,
  mask: _prop_types2.default.string,
  maskType: _prop_types2.default.string,
  regex: _prop_types2.default.string,
  autoUnmask: _prop_types2.default.bool,
  onComplete: _prop_types2.default.func,
  onIncomplete: _prop_types2.default.func,
  onCleared: _prop_types2.default.func
}, _class3.defaultProps = {
  themeClassKey: 'input.text',
  type: 'text',
  mask: null,
  maskType: null,
  regex: null,
  autoUnmask: false,
  onComplete: function onComplete() {},
  onIncomplete: function onIncomplete() {},
  onCleared: function onCleared() {}
}, _temp2), (_applyDecoratedDescriptor(_class2.prototype, 'handleComplete', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleComplete'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleIncomplete', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleIncomplete'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleChange', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleChange'), _class2.prototype)), _class2)) || _class);
exports.default = InputMasked;