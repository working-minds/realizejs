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

var Label = (_dec = (0, _decorators.mixin)(_css_class_mixin2.default), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Label, _Component);

  function Label(props) {
    _classCallCheck(this, Label);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Label).call(this, props));

    _this.state = {
      themeClassKey: _this.getLabelThemeClassKey(_this.props)
    };
    return _this;
  }

  _createClass(Label, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        themeClassKey: this.getLabelThemeClassKey(nextProps)
      });
    }
  }, {
    key: 'getLabelThemeClassKey',
    value: function getLabelThemeClassKey(props) {
      var themeClassKey = props.themeClassKey;
      if (props.active) {
        themeClassKey += ' label.active';
      }

      return themeClassKey;
    }
  }, {
    key: 'render',
    value: function render() {
      var labelProp = this.props.label;
      if (typeof labelProp == "boolean" && !labelProp) {
        return _react2.default.createElement('span', null);
      }

      return _react2.default.createElement(
        'label',
        { htmlFor: this.props.id, onClick: this.props.onClick, className: this.className() },
        labelProp || this.props.name
      );
    }
  }]);

  return Label;
}(_react.Component), _class2.propTypes = {
  id: _prop_types2.default.string,
  name: _prop_types2.default.string,
  label: _prop_types2.default.oneOfType([_prop_types2.default.string, _prop_types2.default.bool]),
  active: _prop_types2.default.bool,
  onClick: _prop_types2.default.func
}, _class2.defaultProps = {
  active: false,
  name: '',
  label: '',
  themeClassKey: 'label'
}, _temp)) || _class);
exports.default = Label;