'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _desc, _value, _class2, _class3, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _prop_types = require('../../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _decorators = require('../../../utils/decorators');

var _utils = require('../../../utils');

var _components = require('../../../components');

var _mixins = require('../../../mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var InputAutocompleteOption = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_class2 = (_temp2 = _class3 = function (_Component) {
  _inherits(InputAutocompleteOption, _Component);

  function InputAutocompleteOption() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, InputAutocompleteOption);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(InputAutocompleteOption)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      themeClassKey: _this.parseThemeClassKey(_this.props.isActive)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InputAutocompleteOption, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        themeClassKey: this.parseThemeClassKey(nextProps.isActive)
      });
    }
  }, {
    key: 'parseThemeClassKey',
    value: function parseThemeClassKey(isActive) {
      var themeClassKey = 'input.autocomplete.option';
      if (isActive) {
        themeClassKey += ' input.autocomplete.option.active';
      }

      return themeClassKey;
    }
  }, {
    key: 'disableEvent',
    value: function disableEvent(event) {
      event.stopPropagation();
      event.preventDefault();
    }
  }, {
    key: 'handleSelect',
    value: function handleSelect(event) {
      var option = {
        name: this.props.name,
        value: this.props.value,
        showOnTop: false
      };

      this.props.onSelect(event, option);
      event.stopPropagation();
    }
  }, {
    key: 'handleMouseEnter',
    value: function handleMouseEnter() {
      this.props.onOptionMouseEnter(this.props.position);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'li',
        {
          className: this.className(),
          onClick: this.handleSelect,
          onMouseEnter: this.handleMouseEnter
        },
        _react2.default.createElement(_components.InputCheckbox, {
          id: this.parseOptionId(),
          checked: this.props.selected,
          onChange: this.disableEvent,
          onClick: this.disableEvent,
          key: _utils.uuid.v4()
        }),
        _react2.default.createElement(_components.Label, { id: this.parseOptionId(), name: this.props.name })
      );
    }
  }]);

  return InputAutocompleteOption;
}(_react.Component), _class3.propTypes = {
  id: _prop_types2.default.string,
  name: _prop_types2.default.string,
  value: _prop_types2.default.node,
  selected: _prop_types2.default.bool,
  position: _prop_types2.default.number,
  isActive: _prop_types2.default.bool,
  onSelect: _prop_types2.default.func,
  onOptionMouseEnter: _prop_types2.default.func
}, _class3.defaultProps = {
  selected: false,
  onSelect: function onSelect() {
    return true;
  },
  onOptionMouseEnter: function onOptionMouseEnter() {
    return true;
  }
}, _temp2), (_applyDecoratedDescriptor(_class2.prototype, 'handleSelect', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleSelect'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleMouseEnter', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleMouseEnter'), _class2.prototype)), _class2)) || _class);
exports.default = InputAutocompleteOption;