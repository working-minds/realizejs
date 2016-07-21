'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _prop_types = require('../../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _utils = require('../../../utils');

var _decorators = require('../../../utils/decorators');

var _components = require('../../../components');

var _mixins = require('../../../mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputAutocompleteSelect = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.InputComponentMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(InputAutocompleteSelect, _Component);

  function InputAutocompleteSelect() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, InputAutocompleteSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(InputAutocompleteSelect)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      options: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InputAutocompleteSelect, [{
    key: 'selectId',
    value: function selectId() {
      return 'autocomplete_select_' + this.props.id;
    }
  }, {
    key: 'focusSelect',
    value: function focusSelect() {
      var selectInput = _reactDom2.default.findDOMNode(this.refs.select);
      selectInput.focus();
    }
  }, {
    key: 'renderSelectedOptions',
    value: function renderSelectedOptions() {
      var options = this.props.selectedOptions;

      return _jquery2.default.map(options, function (option) {
        return option.name;
      }).join(', ');
    }

    // TODO: este e um componente do materialize. Tornar este componente generico.

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: this.className() },
          _react2.default.createElement(
            'span',
            { className: 'caret', onClick: this.focusSelect },
            '▼'
          ),
          _react2.default.createElement(_components.InputText, {
            id: this.selectId(),
            value: this.renderSelectedOptions(),
            disabled: this.props.disabled,
            placeholder: this.props.placeholder,
            onFocus: this.props.onFocus.bind(this),
            errors: this.props.errors,
            ref: 'select',
            key: 'autocomplete_select_' + _utils.uuid.v4()
          })
        ),
        _react2.default.createElement(_components.Label, _extends({}, this.propsWithoutCSS(), { id: this.selectId() }))
      );
    }
  }]);

  return InputAutocompleteSelect;
}(_react.Component), _class2.propTypes = {
  selectedOptions: _prop_types2.default.array
}, _class2.defaultProps = {
  selectedOptions: [],
  themeClassKey: 'input.autocomplete.select',
  placeholder: 'select'
}, _temp2)) || _class);
exports.default = InputAutocompleteSelect;