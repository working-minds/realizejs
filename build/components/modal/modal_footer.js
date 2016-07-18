'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _prop_types = require('../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _decorators = require('../../utils/decorators');

var _mixins = require('../../mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalFooter = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(ModalFooter, _Component);

  function ModalFooter() {
    _classCallCheck(this, ModalFooter);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalFooter).apply(this, arguments));
  }

  _createClass(ModalFooter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.footerClassName() },
        this.props.children
      );
    }
  }, {
    key: 'footerClassName',
    value: function footerClassName() {
      var className = this.className();
      if (this.props.withSeparator) {
        className += " " + _theme2.default.getCssClass(this.props.separatorThemeClassKey);
      }

      return className;
    }
  }]);

  return ModalFooter;
}(_react.Component), _class2.propTypes = {
  separatorThemeClassKey: _prop_types2.default.string,
  withSeparator: _prop_types2.default.bool
}, _class2.defaultProps = {
  themeClassKey: 'modal.footer',
  separatorThemeClassKey: 'modal.footer.withSeparator',
  withSeparator: true
}, _temp)) || _class);
exports.default = ModalFooter;