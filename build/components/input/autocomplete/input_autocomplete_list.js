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

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _decorators = require('../../../utils/decorators');

var _components = require('../../../components');

var _mixins = require('../../../mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputAutocompleteList = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(InputAutocompleteList, _Component);

  function InputAutocompleteList() {
    _classCallCheck(this, InputAutocompleteList);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputAutocompleteList).apply(this, arguments));
  }

  _createClass(InputAutocompleteList, [{
    key: 'onTopSelectedOptions',
    value: function onTopSelectedOptions() {
      var selectedOptions = _jquery2.default.map(this.props.selectedOptions, function (selectedOption) {
        var option = _jquery2.default.extend({}, selectedOption);

        option.selected = true;
        return option;
      });

      return _jquery2.default.grep(selectedOptions, function (option) {
        return !!option.showOnTop;
      });
    }
  }, {
    key: 'otherOptions',
    value: function otherOptions() {
      var _this2 = this;

      var otherOptions = _jquery2.default.map(this.props.options, function (option) {
        var otherOption = _jquery2.default.extend({}, option);
        var relatedSelectedOption = _jquery2.default.grep(_this2.props.selectedOptions, function (selectedOption) {
          return selectedOption.value === otherOption.value;
        })[0];

        if (!!relatedSelectedOption) {
          otherOption.selected = true;
          otherOption.showOnTop = relatedSelectedOption.showOnTop;
        }

        return otherOption;
      });

      return _jquery2.default.grep(otherOptions, function (option) {
        return !option.showOnTop;
      });
    }
  }, {
    key: 'renderOptions',
    value: function renderOptions() {
      var options = [].concat(this.onTopSelectedOptions(), this.otherOptions());
      var listOptions = [];

      for (var i = 0; i < options.length; i++) {
        var optionProps = options[i];
        listOptions.push(_react2.default.createElement(_components.InputAutocompleteOption, _extends({}, optionProps, {
          onSelect: this.props.onSelect,
          onOptionMouseEnter: this.props.onOptionMouseEnter,
          position: i,
          isActive: i === this.props.active,
          id: this.props.id,
          key: optionProps.name,
          ref: 'option_' + i
        })));
      }

      return listOptions;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        { className: this.className() },
        this.renderOptions()
      );
    }
  }]);

  return InputAutocompleteList;
}(_react.Component), _class2.propTypes = {
  id: _prop_types2.default.string,
  selectedOptions: _prop_types2.default.array,
  options: _prop_types2.default.array,
  active: _prop_types2.default.number,
  onSelect: _prop_types2.default.func,
  onOptionMouseEnter: _prop_types2.default.func
}, _class2.defaultProps = {
  themeClassKey: 'input.autocomplete.list',
  options: [],
  selectedOptions: [],
  onSelect: function onSelect() {
    return true;
  },
  onOptionMouseEnter: function onOptionMouseEnter() {
    return true;
  }
}, _temp)) || _class);
exports.default = InputAutocompleteList;