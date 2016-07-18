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

var _components = require('../../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaginationItem = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(PaginationItem, _Component);

  function PaginationItem(props) {
    _classCallCheck(this, PaginationItem);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PaginationItem).call(this, props));

    _this.handleClick = function () {
      if (!_this.props.disabled) {
        _this.props.onClick();
      }
    };

    _this.state = {
      themeClassKey: _this.buildThemeClassKey()
    };
    return _this;
  }

  _createClass(PaginationItem, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        themeClassKey: this.buildThemeClassKey(nextProps)
      });
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon() {
      return _react2.default.createElement(_components.Icon, { type: this.props.iconType });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'li',
        { className: this.className(), onClick: this.handleClick },
        _react2.default.createElement(
          'a',
          { href: '#!' },
          this.props.text,
          !!this.props.iconType ? this.renderIcon() : ''
        )
      );
    }
  }, {
    key: 'buildThemeClassKey',
    value: function buildThemeClassKey(props) {
      props = props || this.props;
      var themeClassKey = 'pagination.item';
      if (props.disabled) {
        themeClassKey += ' pagination.item.disabled';
      }

      if (props.active) {
        themeClassKey += ' pagination.item.active';
      }

      return themeClassKey;
    }
  }]);

  return PaginationItem;
}(_react.Component), _class2.propTypes = {
  disabled: _prop_types2.default.bool,
  active: _prop_types2.default.bool,
  iconType: _prop_types2.default.string,
  text: _prop_types2.default.string,
  onClick: _prop_types2.default.func
}, _class2.defaultProps = {
  disabled: false,
  active: false,
  iconType: null,
  text: '',
  onClick: function onClick(event) {
    return true;
  }
}, _temp)) || _class);
exports.default = PaginationItem;