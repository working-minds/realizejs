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

var _i18n = require('../../i18n/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _decorators = require('../../utils/decorators');

var _css_class_mixin = require('../../mixins/css_class_mixin');

var _css_class_mixin2 = _interopRequireDefault(_css_class_mixin);

var _request_handler_mixin = require('../../mixins/request_handler_mixin');

var _request_handler_mixin2 = _interopRequireDefault(_request_handler_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = (_dec = (0, _decorators.mixin)(_css_class_mixin2.default, _request_handler_mixin2.default), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Button, _Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, props));

    _this.handleClick = function (event) {
      var buttonOnClick = _this.props.onClick;
      var buttonAction = _this.props.actionUrl;

      if (_jquery2.default.isFunction(buttonOnClick)) {
        _this.props.onClick(event);
      } else if (!!buttonAction) {
        var actionData = _this.props.actionData;
        _this.performRequest(buttonAction, actionData, _this.getMethod() || 'POST');
      }
    };

    _this.state = {
      themeClassKey: _this.getButtonThemeClassKey() + _this.getStyleThemeClassKey()
    };
    return _this;
  }

  _createClass(Button, [{
    key: 'getButtonThemeClassKey',
    value: function getButtonThemeClassKey() {
      var themeClassKey = this.props.themeClassKey;

      if (!this.props.name || this.props.name.length === 0) {
        themeClassKey += ' button.iconOnly';
      }

      return themeClassKey;
    }
  }, {
    key: 'getStyleThemeClassKey',
    value: function getStyleThemeClassKey() {
      if (!this.props.style) {
        return '';
      }

      return ' button.' + this.props.style;
    }
  }, {
    key: 'render',
    value: function render() {
      var content = '';
      if (this.props.isLoading) {
        content = this.renderLoadingIndicator();
      } else {
        content = this.renderContent();
      }

      return _react2.default.createElement(this.props.element, {
        className: this.getClassName(),
        type: this.props.type,
        hidden: this.props.hidden,
        visible: this.props.visible,
        disabled: this.props.disabled || this.props.isLoading,
        href: this.getHref(),
        onClick: this.handleClick,
        'data-method': this.getMethod(),
        'data-confirm': this.getConfirmsWith()
      }, content);
    }
  }, {
    key: 'getClassName',
    value: function getClassName() {
      var className = this.className();
      if (this.props.disabled && this.props.element === 'a') className = 'button btn-flat disable-action-button';

      return className;
    }
  }, {
    key: 'getHref',
    value: function getHref() {
      if (this.props.disabled && this.props.element === 'a') return 'javascript:void(0)';
      return this.props.href;
    }
  }, {
    key: 'getMethod',
    value: function getMethod() {
      if (!!this.props.method) {
        return this.props.method;
      }

      return null;
    }
  }, {
    key: 'getConfirmsWith',
    value: function getConfirmsWith() {
      if (!!this.props.confirmsWith) {
        return _i18n2.default.t(this.props.confirmsWith);
      }

      return null;
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      return [_i18n2.default.t(this.props.name), this.renderIcon()];
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon() {
      if (!this.props.icon) {
        return '';
      }

      var iconProps = null;
      if (_jquery2.default.isPlainObject(this.props.icon)) {
        iconProps = this.props.icon;
      } else {
        iconProps = { type: this.props.icon };
      }

      return _react2.default.createElement(Icon, _extends({ className: this.getIconClassName() }, iconProps, { key: 'icon' }));
    }
  }, {
    key: 'renderLoadingIndicator',
    value: function renderLoadingIndicator() {
      return _i18n2.default.t(this.props.disableWith);
    }
  }, {
    key: 'getIconClassName',
    value: function getIconClassName() {
      if (!this.props.name || this.props.name.length === 0) {
        return '';
      } else {
        return 'right';
      }
    }
  }]);

  return Button;
}(_react.Component), _class2.propTypes = {
  name: _prop_types2.default.localizedString,
  type: _prop_types2.default.string,
  icon: _prop_types2.default.oneOfType([_prop_types2.default.string, _prop_types2.default.object]),
  style: _prop_types2.default.oneOf(['danger', 'primary', 'warning', 'cancel']),
  disabled: _prop_types2.default.bool,
  href: _prop_types2.default.string,
  onClick: _prop_types2.default.func,
  actionUrl: _prop_types2.default.string,
  actionData: _prop_types2.default.object,
  isLoading: _prop_types2.default.bool,
  disableWith: _prop_types2.default.localizedString,
  confirmsWith: _prop_types2.default.localizedString,
  element: _prop_types2.default.oneOf(['button', 'a']),
  target: _prop_types2.default.string,
  method: _prop_types2.default.string
}, _class2.defaultProps = {
  themeClassKey: 'button',
  name: '',
  disabled: false,
  isLoading: false,
  icon: null,
  href: null,
  onClick: null,
  actionUrl: null,
  actionData: {},
  disableWith: 'loading',
  confirmsWith: null,
  element: 'button',
  method: null
}, _temp)) || _class);
exports.default = Button;