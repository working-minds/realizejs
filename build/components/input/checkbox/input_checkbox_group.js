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

var _prop_types = require('../../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _decorators = require('../../../utils/decorators');

var _input_base = require('../input_base');

var _input_base2 = _interopRequireDefault(_input_base);

var _mixins = require('../../../mixins');

var _components = require('../../../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputCheckboxGroup = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.SelectComponentMixin), _dec(_class = (_temp = _class2 = function (_InputBase) {
  _inherits(InputCheckboxGroup, _InputBase);

  function InputCheckboxGroup(props) {
    _classCallCheck(this, InputCheckboxGroup);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InputCheckboxGroup).call(this, props));

    _this.state = {
      currentValues: _this.props.currentValues
    };
    return _this;
  }

  _createClass(InputCheckboxGroup, [{
    key: 'renderChildItems',
    value: function renderChildItems() {
      var items = _react2.default.Children.map(this.props.children, function (item) {
        if (item !== null && item.props.children[0].type.displayName == "input") return item;
      });
      return items;
    }
  }, {
    key: 'renderPropItems',
    value: function renderPropItems() {
      var selectOptions = [];
      var options = this.state.options;

      for (var i = 0; i < options.length; i++) {
        var optionProps = options[i];

        var filledClass = optionProps.filled ? 'filled-in' : '';
        optionProps.id = this.props.id + '_' + i;

        selectOptions.push(_react2.default.createElement(
          'p',
          { key: 'p_input' + i },
          _react2.default.createElement(_components.InputCheckbox, _extends({}, optionProps, { name: this.props.name, className: filledClass, checked: this.isChecked(optionProps) })),
          _react2.default.createElement(_components.Label, optionProps)
        ));
      }
      return selectOptions;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'input-checkbox-group align-' + this.props.align },
        this.renderChildItems(),
        this.renderPropItems()
      );
    }
  }, {
    key: 'isChecked',
    value: function isChecked(item) {
      var currentValues = this.state.currentValues;
      if (!$.isArray(currentValues)) currentValues = [currentValues];
      return $.inArray(item.value, currentValues) !== -1;
    }
  }]);

  return InputCheckboxGroup;
}(_input_base2.default), _class2.propTypes = {
  align: _react2.default.PropTypes.oneOf(['vertical', 'horizontal']),
  currentValues: _react2.default.PropTypes.string
}, _class2.defaultProps = {
  themeClassKey: 'input.checkbox',
  name: '',
  align: 'vertical'
}, _temp)) || _class);
exports.default = InputCheckboxGroup;