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

var HeaderButton = (_temp = _class = function (_Component) {
  _inherits(HeaderButton, _Component);

  function HeaderButton() {
    _classCallCheck(this, HeaderButton);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HeaderButton).apply(this, arguments));
  }

  _createClass(HeaderButton, [{
    key: 'renderButton',
    value: function renderButton() {
      return _react2.default.createElement(
        'a',
        { href: this.props.href, ref: this.props.ref, onClick: this.props.onClick, target: this.props.target },
        _react2.default.createElement(
          'i',
          { className: 'material-icons ' + this.props.iconAlign },
          this.props.icon
        ),
        this.props.text
      );
    }
  }, {
    key: 'renderImage',
    value: function renderImage() {
      return _react2.default.createElement(
        'a',
        { className: 'brand-logo', href: this.props.href },
        _react2.default.createElement('img', { src: this.props.imgSrc, alt: this.props.imgAlt })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var button = '';
      if (this.props.imgSrc) button = this.renderImage();else button = this.renderButton();

      return button;
    }
  }]);

  return HeaderButton;
}(_react.Component), _class.propTypes = {
  imgSrc: _prop_types2.default.string,
  imgAlt: _prop_types2.default.string,
  icon: _prop_types2.default.string,
  iconAlign: _prop_types2.default.string,
  text: _prop_types2.default.string,
  href: _prop_types2.default.string,
  target: _prop_types2.default.string,
  onClick: _prop_types2.default.func,
  ref: _prop_types2.default.string
}, _class.defaultProps = {
  iconAlign: ' '
}, _temp);
exports.default = HeaderButton;