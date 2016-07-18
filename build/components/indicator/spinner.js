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

var Spinner = (_temp = _class = function (_Component) {
  _inherits(Spinner, _Component);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Spinner).apply(this, arguments));
  }

  _createClass(Spinner, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.wrapperClassName() },
        _react2.default.createElement(
          'div',
          { className: this.layerClassName() },
          _react2.default.createElement(
            'div',
            { className: 'circle-clipper left' },
            _react2.default.createElement('div', { className: 'circle' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'gap-patch' },
            _react2.default.createElement('div', { className: 'circle' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'circle-clipper right' },
            _react2.default.createElement('div', { className: 'circle' })
          )
        )
      );
    }
  }, {
    key: 'wrapperClassName',
    value: function wrapperClassName() {
      var className = "spinner preloader-wrapper " + this.props.size;
      if (this.props.active) {
        className += " active";
      }

      className += " " + this.props.className;
      return className;
    }
  }, {
    key: 'layerClassName',
    value: function layerClassName() {
      var className = "spinner-layer spinner-" + this.props.color + "-only";

      return className;
    }
  }]);

  return Spinner;
}(_react.Component), _class.propTypes = {
  size: _prop_types2.default.string,
  color: _prop_types2.default.string,
  active: _prop_types2.default.bool,
  className: _prop_types2.default.string
}, _class.defaultProps = {
  size: 'small',
  color: 'green',
  active: true,
  className: ''
}, _temp);
exports.default = Spinner;