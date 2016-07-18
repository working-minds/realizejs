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

var _theme = require('../../theme/theme');

var _theme2 = _interopRequireDefault(_theme);

var _decorators = require('../../utils/decorators');

var _css_class_mixin = require('../../mixins/css_class_mixin');

var _css_class_mixin2 = _interopRequireDefault(_css_class_mixin);

var _tooltip_mixin = require('../../mixins/tooltip_mixin');

var _tooltip_mixin2 = _interopRequireDefault(_tooltip_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = (_dec = (0, _decorators.mixin)(_css_class_mixin2.default, _tooltip_mixin2.default), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Icon, _Component);

  function Icon(props) {
    _classCallCheck(this, Icon);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Icon).call(this, props));

    _this.state = {
      themeClassKey: 'icon'
    };
    return _this;
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'i',
        _extends({ className: this.getTooltipClassName()
        }, this.tooltipAttributes(), this.propsWithoutCSS()),
        this.iconType()
      );
    }
  }, {
    key: 'iconType',
    value: function iconType() {
      var iconType = _theme2.default.getProp('icon.' + this.props.type);
      if (!iconType) {
        iconType = this.props.type;
      }

      return iconType;
    }
  }]);

  return Icon;
}(_react.Component), _class2.propTypes = {
  type: _prop_types2.default.string
}, _class2.defaultProps = {
  type: ''
}, _temp)) || _class);
exports.default = Icon;