'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _prop_types = require('../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _notification = require('../../components/notification');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderNotifications = (_temp2 = _class = function (_Component) {
  _inherits(HeaderNotifications, _Component);

  function HeaderNotifications() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, HeaderNotifications);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(HeaderNotifications)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      count: 0,
      active: false
    }, _this.handleClick = function () {
      var list = _reactDom2.default.findDOMNode(_this.refs.notificationsList);
      (0, _jquery2.default)(list).slideDown();
      _this.state.active = !_this.state.active;
      _this.forceUpdate();
    }, _this.handleClickItem = function (responseData) {
      _jquery2.default.ajax({
        url: _this.props.baseUrl,
        dataType: 'json',
        data: {
          per_page: 50,
          q: {
            s: 'created_at desc'
          }
        },
        success: function (data) {
          this.setState({
            notifications: data.notifications,
            count: data.not_read_count
          });
        }.bind(_this)
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HeaderNotifications, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //TODO: alterar estes event handlers para o React.
      (0, _jquery2.default)('html').on('click', this.closeList);

      (0, _jquery2.default)('.notifications-list').mouseover(function () {
        (0, _jquery2.default)('body').addClass('noscroll');
      });

      (0, _jquery2.default)('.notifications-list').mouseout(function () {
        (0, _jquery2.default)('body').removeClass('noscroll');
      });

      this.loadNotifications();
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon() {
      var component = [];

      if (this.state.count > 0) {
        component.push(_react2.default.createElement(
          'i',
          { className: 'material-icons', key: 'notification_icon' },
          'notifications'
        ));
      } else {
        component.push(_react2.default.createElement(
          'i',
          { className: 'material-icons', key: 'notification_icon' },
          'notifications_none'
        ));
      }

      return component;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.props.className },
        _react2.default.createElement(
          'a',
          { onClick: this.handleClick },
          this.renderIcon(),
          _react2.default.createElement(_notification.NotificationNumber, { count: this.state.count })
        ),
        _react2.default.createElement(NotificationsList, { ref: 'notificationsList',
          active: this.state.active,
          baseUrl: this.props.baseUrl,
          handleClickItem: this.handleClickItem,
          notifications: this.state.notifications
        })
      );
    }
  }, {
    key: 'closeList',
    value: function closeList() {
      this.setState({
        active: false
      });
    }
  }, {
    key: 'loadNotifications',
    value: function loadNotifications() {
      _jquery2.default.ajax({
        url: this.props.baseUrl,
        dataType: 'json',
        data: {
          per_page: 50,
          ou_slug: this.props.ouSlug,
          q: {
            s: 'created_at desc'
          }
        },
        success: function (data) {
          this.setState({
            notifications: data.notifications,
            count: data.unread_count
          });
        }.bind(this)
      });
    }
  }]);

  return HeaderNotifications;
}(_react.Component), _class.propTypes = {
  ouSlug: _prop_types2.default.string,
  className: _prop_types2.default.string,
  text: _prop_types2.default.string,
  icon: _prop_types2.default.string,
  baseUrl: _prop_types2.default.string
}, _class.defaultProps = {
  ouSlug: null,
  className: 'notifications',
  icon: 'add_alert',
  text: '',
  baseUrl: '/notifications'
}, _temp2);
exports.default = HeaderNotifications;