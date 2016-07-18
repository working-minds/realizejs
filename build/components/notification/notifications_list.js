'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _prop_types = require('../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _i18n = require('../../i18n/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _decorators = require('../../utils/decorators');

var _mixins = require('../../mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotificationsList = (_dec = (0, _decorators.mixin)(_mixins.RequestHandlerMixin, _mixins.ModalRendererMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(NotificationsList, _Component);

  function NotificationsList() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, NotificationsList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(NotificationsList)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClick = function (event, id) {
      var url = _this.props.baseUrl + '/' + id;
      _this.performRequest(url);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NotificationsList, [{
    key: 'renderNotification',
    value: function renderNotification() {
      var component = [];
      var notifications = this.props.notifications;

      for (var i = 0; i < notifications.length; i++) {
        var notification = notifications[i];
        var liClass = !!notification.read_by_user ? '' : 'not-read';

        component.push(_react2.default.createElement(
          'li',
          { className: liClass, key: "notification_item_" + i },
          _react2.default.createElement(
            'a',
            { onClick: this.handleClick.bind(this, event, notification.id) },
            _react2.default.createElement(
              'span',
              null,
              notification.message
            ),
            _react2.default.createElement(
              'div',
              { className: 'created_at-notification' },
              'Criado em: ',
              _moment2.default.utc(notification.created_at).format("DD/MM/YYYY HH:mm")
            )
          )
        ));
      }

      return component;
    }
  }, {
    key: 'renderSeeAll',
    value: function renderSeeAll() {
      var component = [];

      if (this.props.notifications.length === 0) {
        component.push(_react2.default.createElement(
          'div',
          { className: 'box-see-all', key: 'notification_see_all' },
          _react2.default.createElement('div', { className: 'divider' }),
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'a',
              null,
              _i18n2.default.t('buttons.noNotifications')
            )
          )
        ));
      } else {
        component.push(_react2.default.createElement(
          'div',
          { className: 'box-see-all', key: 'notification_see_all' },
          _react2.default.createElement('div', { className: 'divider' }),
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'a',
              { href: '/notifications' },
              _i18n2.default.t('buttons.seeAll')
            )
          )
        ));
      }

      return component;
    }
  }, {
    key: 'render',
    value: function render() {
      var display = this.props.active ? 'block' : 'none';
      return _react2.default.createElement(
        'div',
        { className: this.props.className, style: { display: display } },
        _react2.default.createElement(
          'ul',
          null,
          this.renderNotification()
        ),
        this.renderSeeAll()
      );
    }
  }, {
    key: 'onSuccess',
    value: function onSuccess(responseData) {
      this.renderModalHtml(responseData);
      this.props.handleClickItem(responseData);
    }
  }]);

  return NotificationsList;
}(_react.Component), _class2.propTypes = {
  className: _prop_types2.default.string,
  active: _prop_types2.default.bool,
  notifications: _prop_types2.default.array,
  handleClickItem: _prop_types2.default.func,
  baseUrl: _prop_types2.default.string
}, _class2.defaultProps = {
  className: 'notifications-list z-depth-1',
  active: false,
  notifications: [],
  baseUrl: '/notifications',
  handleClickItem: function handleClickItem(data) {}
}, _temp2)) || _class);
exports.default = NotificationsList;