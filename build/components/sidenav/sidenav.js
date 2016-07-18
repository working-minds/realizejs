'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _prop_types = require('../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _decorators = require('../../utils/decorators');

var _css_class_mixin = require('../../mixins/css_class_mixin');

var _css_class_mixin2 = _interopRequireDefault(_css_class_mixin);

var _menu = require('../../components/menu/menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideNav = (_dec = (0, _decorators.mixin)(_css_class_mixin2.default), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(SideNav, _Component);

  function SideNav() {
    _classCallCheck(this, SideNav);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SideNav).apply(this, arguments));
  }

  _createClass(SideNav, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.sideNav)).sideNav();
    }
  }, {
    key: 'renderMenu',
    value: function renderMenu() {
      return _react2.default.createElement(
        _menu2.default,
        {
          ref_id: this.props.ref_id,
          className: 'side-nav full',
          items: this.props.items },
        this.props.children
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var iconAlign = this.props.text ? 'left' : '';

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'a',
          { href: this.props.href, className: this.className(), ref: 'sideNav', onClick: this.props.onClick, target: this.props.target, 'data-activates': this.props.ref_id },
          _react2.default.createElement(
            'i',
            { className: 'material-icons ' + iconAlign },
            this.props.icon
          ),
          this.props.text
        ),
        this.renderMenu()
      );
    }
  }]);

  return SideNav;
}(_react.Component), _class2.propTypes = {
  items: _prop_types2.default.array,
  icon: _prop_types2.default.string,
  iconAlign: _prop_types2.default.string,
  text: _prop_types2.default.string,
  ref_id: _prop_types2.default.string
}, _class2.defaultProps = {
  themeClassKey: 'sidenav.button',
  items: [],
  icon: 'view_headline',
  iconAlign: '',
  ref_id: 'sideNav',
  text: ''
}, _temp)) || _class);
exports.default = SideNav;