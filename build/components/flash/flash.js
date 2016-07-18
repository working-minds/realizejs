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

var _decorators = require('../../utils/decorators');

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _css_class_mixin = require('../../mixins/css_class_mixin');

var _css_class_mixin2 = _interopRequireDefault(_css_class_mixin);

var _flash_content = require('./flash_content');

var _flash_content2 = _interopRequireDefault(_flash_content);

var _flash_dismiss = require('./flash_dismiss');

var _flash_dismiss2 = _interopRequireDefault(_flash_dismiss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Flash = (_dec = (0, _decorators.mixin)(_css_class_mixin2.default), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Flash, _Component);

  function Flash(props) {
    _classCallCheck(this, Flash);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Flash).call(this, props));

    _this.dismiss = function () {
      _this.setState({ dismissed: true });
      _this.props.onDismiss();
    };

    _this.state = {
      themeClassKey: 'flash flash.' + _this.props.type,
      dismissed: _this.props.dismissed
    };
    return _this;
  }

  _createClass(Flash, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ dismissed: nextProps.dismissed });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.dismissTimeout > 0) {
        this.setDismissTimeout();
      }
    }
  }, {
    key: 'renderFlash',
    value: function renderFlash() {
      return _react2.default.createElement(
        'div',
        { className: this.className(), ref: 'flash' },
        _react2.default.createElement(_flash_content2.default, this.props),
        this.props.canDismiss ? _react2.default.createElement(FlashDismiss, _extends({}, this.props, { onClick: this.dismiss })) : ''
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        {
          transitionName: 'dismiss',
          transitionAppear: true,
          transitionAppearTimeout: 500,
          transitionEnterTimeout: 500,
          transitionLeaveTimeout: 500
        },
        this.state.dismissed ? '' : this.renderFlash()
      );
    }
  }, {
    key: 'setDismissTimeout',
    value: function setDismissTimeout() {
      var _this2 = this;

      setTimeout(function () {
        _this2.dismiss();
      }, this.props.dismissTimeout);
    }
  }]);

  return Flash;
}(_react.Component), _class2.propTypes = {
  type: _prop_types2.default.oneOf(['info', 'warning', 'error', 'success']),
  message: _prop_types2.default.node,
  dismissTimeout: _prop_types2.default.number,
  canDismiss: _prop_types2.default.bool,
  onDismiss: _prop_types2.default.func,
  dismissed: _prop_types2.default.bool
}, _class2.defaultProps = {
  type: 'info',
  dismissTimeout: -1,
  canDismiss: true,
  dismissed: false,
  message: '',
  onDismiss: function onDismiss() {
    return true;
  }
}, _temp)) || _class);
exports.default = Flash;