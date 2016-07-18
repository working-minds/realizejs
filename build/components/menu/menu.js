'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _prop_types = require('../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _menu_item = require('./menu_item');

var _menu_item2 = _interopRequireDefault(_menu_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: [DEPRECATION] Prop ref_id is deprecated, remember to remove it.
var Menu = (_temp = _class = function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Menu).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: 'renderPropItems',
    value: function renderPropItems() {
      var menuItems = this.props.items.map(function (item, i) {
        return _react2.default.createElement(_menu_item2.default, _extends({}, item, { key: 'menu_' + i }));
      }, this);
      return menuItems;
    }
  }, {
    key: 'renderChildItems',
    value: function renderChildItems() {
      var menuItems = _react2.default.Children.map(this.props.children, function (item) {
        if (item && item.type && (item.type.displayName || item.type.name) === 'MenuItem') return item;
      });
      return menuItems;
    }
  }, {
    key: 'render',
    value: function render() {
      console && console.warn && console.warn('[Realize] Menu prop ref_id will be removed, use id instead!');
      var id = this.props.ref_id || (typeof this.props.id !== 'string' ? '' : this.props.id);

      return _react2.default.createElement(
        'ul',
        { id: id, className: this.props.className },
        this.renderPropItems(),
        this.renderChildItems()
      );
    }
  }]);

  return Menu;
}(_react.Component), _class.propTypes = {
  ref_id: _prop_types2.default.string,
  id: _prop_types2.default.string,
  items: _prop_types2.default.array
}, _class.defaultProps = {
  ref_id: '',
  id: '',
  items: []
}, _temp);
exports.default = Menu;