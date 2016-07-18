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

var _decorators = require('../../utils/decorators');

var _mixins = require('../../mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputError = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(InputError, _Component);

  function InputError() {
    _classCallCheck(this, InputError);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputError).apply(this, arguments));
  }

  _createClass(InputError, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        { className: this.className() },
        this.errorMessages()
      );
    }
  }, {
    key: 'errorMessages',
    value: function errorMessages() {
      var errors = this.props.errors;
      var errorMessage = '';
      if (!$.isArray(errors)) {
        errors = [errors];
      }

      for (var i = 0; i < errors.length; i++) {
        var error = errors[i];
        errorMessage += error + ' / ';
      }

      return errorMessage.replace(/[\/\s]*$/, '');
    }
  }]);

  return InputError;
}(_react.Component), _class2.propTypes = {
  errors: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.array])
}, _class2.defaultProps = {
  errors: [],
  themeClassKey: 'input.error.hint'
}, _temp)) || _class);
exports.default = InputError;