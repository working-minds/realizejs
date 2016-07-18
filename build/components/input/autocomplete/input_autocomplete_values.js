'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _prop_types = require('../../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('../../../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputAutocompleteValues = (_temp = _class = function (_Component) {
  _inherits(InputAutocompleteValues, _Component);

  function InputAutocompleteValues() {
    _classCallCheck(this, InputAutocompleteValues);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputAutocompleteValues).apply(this, arguments));
  }

  _createClass(InputAutocompleteValues, [{
    key: 'selectedOptionsValues',
    value: function selectedOptionsValues() {
      return _jquery2.default.map(this.props.selectedOptions, function (selectedOption) {
        return selectedOption.value;
      });
    }
  }, {
    key: 'valueInputName',
    value: function valueInputName() {
      var inputName = this.props.name;

      if (this.props.multiple) {
        inputName += '[]';
      }

      return inputName;
    }
  }, {
    key: 'renderValueInputs',
    value: function renderValueInputs() {
      var valueInputs = [];
      var selectedOptions = this.props.selectedOptions;

      for (var i = 0; i < selectedOptions.length; i++) {
        var option = selectedOptions[i];
        valueInputs.push(_react2.default.createElement('option', { value: option.value, key: option.name }));
      }

      return valueInputs;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'select',
        {
          multiple: true,
          id: this.props.id,
          name: this.valueInputName(),
          value: this.selectedOptionsValues(),
          readOnly: true,
          style: { display: 'none' }
        },
        this.renderValueInputs()
      );
    }
  }]);

  return InputAutocompleteValues;
}(_react.Component), _class.propTypes = {
  id: _prop_types2.default.string,
  name: _prop_types2.default.string,
  multiple: _prop_types2.default.bool,
  selectedOptions: _prop_types2.default.array
}, _class.defaultProps = {
  multiple: false,
  selectedOptions: []
}, _temp);
exports.default = InputAutocompleteValues;