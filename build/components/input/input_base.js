'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _class2, _temp2;

var _react = require('react');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _prop_types = require('../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _i18n = require('../../i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _decorators = require('../../utils/decorators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

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

var InputBase = (_class = (_temp2 = _class2 = function (_Component) {
  _inherits(InputBase, _Component);

  function InputBase() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, InputBase);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(InputBase)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      value: _this.props.value
    }, _initDefineProp(_this, 'handleFocus', _descriptor, _this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InputBase, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var $form = (0, _jquery2.default)(this.getInputFormNode());
      $form.on('reset', this.handleReset);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var $form = (0, _jquery2.default)(this.getInputFormNode());
      $form.off('reset', this.handleReset);
    }
  }, {
    key: 'getInputFormNode',
    value: function getInputFormNode() {
      var inputRef = this.refs.input;
      if (!!inputRef) {
        return _reactDom2.default.findDOMNode(inputRef).form;
      }

      return null;
    }
  }, {
    key: 'getPlaceholder',
    value: function getPlaceholder() {
      var placeholder = _i18n2.default.t(this.props.placeholder);
      if (typeof placeholder !== 'string' || placeholder.length === 0) {
        return null;
      }

      return placeholder;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: 'inputClassName',
    value: function inputClassName() {
      var className = this.className();
      var errors = this.props.errors;

      if (!!errors && errors.length > 0) {
        className += ' ' + _theme2.default.getCssClass('input.error');
      }

      return className;
    }
  }, {
    key: 'inputNodeIsCheckbox',
    value: function inputNodeIsCheckbox() {
      var inputNode = _reactDom2.default.findDOMNode(this.refs.input);
      return !!inputNode && inputNode.type === 'checkbox';
    }
  }, {
    key: 'handleReset',
    value: function handleReset() {
      console.log(this.isMounted());

      if (this.isMounted() && !this.inputNodeIsCheckbox()) {
        this.setState({
          value: null
        });
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.props.onChange(event);

      if (!event.isDefaultPrevented()) {
        var value = event.target.value;
        this.setState({ value: value });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return InputBase;
}(_react.Component), _class2.propTypes = {
  id: _prop_types2.default.string,
  name: _prop_types2.default.string,
  value: _prop_types2.default.any,
  disabled: _prop_types2.default.bool,
  readOnly: _prop_types2.default.bool,
  placeholder: _prop_types2.default.localizedString,
  errors: _prop_types2.default.oneOfType([_prop_types2.default.object, _prop_types2.default.array]),
  onChange: _prop_types2.default.func,
  onFocus: _prop_types2.default.func
}, _class2.defaultProps = {
  value: null,
  disabled: false,
  readOnly: false,
  onChange: function onChange() {
    return true;
  },
  onFocus: function onFocus() {
    return true;
  },
  errors: []
}, _temp2), (_applyDecoratedDescriptor(_class.prototype, 'handleReset', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'handleReset'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleChange', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'handleChange'), _class.prototype), _descriptor = _applyDecoratedDescriptor(_class.prototype, 'handleFocus', [_decorators.autobind], {
  enumerable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function (event) {
      _this2.props.onFocus(event);

      if (_this2.props.readOnly) {
        var inputNode = event.currentTarget;
        inputNode.blur();
      }
    };
  }
})), _class);
exports.default = InputBase;