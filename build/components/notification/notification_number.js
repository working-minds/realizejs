'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _prop_types = require('../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotificationNumber = (_temp = _class = function (_Component) {
  _inherits(NotificationNumber, _Component);

  function NotificationNumber() {
    _classCallCheck(this, NotificationNumber);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NotificationNumber).apply(this, arguments));
  }

  _createClass(NotificationNumber, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        { className: 'jewelCount' },
        this.unreadNotificationNumber()
      );
    }
  }, {
    key: 'unreadNotificationNumber',
    value: function unreadNotificationNumber() {
      var component = [];
      if (!!this.props.count && this.props.count > 0) component.push(_react2.default.createElement(
        'span',
        { className: this.props.className, key: 'notification_count' },
        this.props.count
      ));
      return component;
    }
  }]);

  return NotificationNumber;
}(_react.Component), _class.propTypes = {
  className: _prop_types2.default.string,
  count: _prop_types2.default.number
}, _class.defaultProps = {
  className: 'notification-number',
  count: 0
}, _temp);
exports.default = NotificationNumber;