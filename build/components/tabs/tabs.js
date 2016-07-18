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

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _decorators = require('../../utils/decorators');

var _mixins = require('../../mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.ContainerMixin), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).apply(this, arguments));
  }

  _createClass(Tabs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _jquery2.default)(ReactDOM.findDOMNode(this.refs.tabsContainer)).tabs();
    }
  }, {
    key: 'renderTabButtons',
    value: function renderTabButtons() {
      var tabs = [];
      var children = this.getChildren();

      _react2.default.Children.forEach(children, function (child, i) {
        var isActive = i === this.props.activeTab - 1;
        tabs.push(_react2.default.createElement(TabButton, _extends({}, child.props, { active: isActive, key: "tab_" + i })));
      }.bind(this));

      return tabs;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.className() },
        _react2.default.createElement(
          'ul',
          { className: 'tabs z-depth-1', ref: 'tabsContainer' },
          this.renderTabButtons()
        ),
        _react2.default.createElement(
          'div',
          null,
          this.renderChildren()
        )
      );
    }
  }]);

  return Tabs;
}(_react.Component), _class2.propTypes = {
  activeTab: _prop_types2.default.number
}, _class2.defaultProps = {
  themeClassKey: 'tabs',
  activeTab: 1
}, _temp)) || _class);
exports.default = Tabs;