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

var _css_class_mixin = require('../../mixins/css_class_mixin');

var _css_class_mixin2 = _interopRequireDefault(_css_class_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlashContent = (_dec = (0, _decorators.mixin)(_css_class_mixin2.default), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(FlashContent, _Component);

  function FlashContent(props) {
    _classCallCheck(this, FlashContent);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FlashContent).call(this, props));

    _this.state = {
      themeClassKey: 'flash.content flash.' + _this.props.type + '.content'
    };
    return _this;
  }

  _createClass(FlashContent, [{
    key: 'renderMessages',
    value: function renderMessages() {
      var isArray = Array.isArray(this.props.message);
      var messages = !isArray ? [this.props.message] : this.props.message;
      return messages.map(function (message, index) {
        return typeof message == "string" ? _react2.default.createElement(
          'p',
          { key: "flash_content_" + index },
          message
        ) : message;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.className() },
        this.renderMessages()
      );
    }
  }]);

  return FlashContent;
}(_react.Component), _class2.propTypes = {
  type: _prop_types2.default.string,
  message: _prop_types2.default.oneOfType([_prop_types2.default.element, _prop_types2.default.string, _prop_types2.default.array])
}, _temp)) || _class);
exports.default = FlashContent;