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

var HeaderSection = (_temp = _class = function (_Component) {
  _inherits(HeaderSection, _Component);

  function HeaderSection() {
    _classCallCheck(this, HeaderSection);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HeaderSection).apply(this, arguments));
  }

  _createClass(HeaderSection, [{
    key: 'renderChildren',
    value: function renderChildren() {
      return _react2.default.Children.map(this.props.children, function (child, i) {
        return _react2.default.createElement(
          'li',
          { key: "item_" + i },
          child
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        { className: this.props.className + ' ' + this.props.align, id: this.props.id },
        this.renderChildren()
      );
    }
  }]);

  return HeaderSection;
}(_react.Component), _class.propTypes = {
  align: _prop_types2.default.string,
  id: _prop_types2.default.string
}, _class.defaultProps = {
  align: 'left',
  className: 'hide-on-med-and-down'
}, _temp);
exports.default = HeaderSection;