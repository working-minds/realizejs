'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _desc, _value, _class2, _class3, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _prop_types = require('../../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _i18n = require('../../../i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _decorators = require('../../../utils/decorators');

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

var InputDatefilterBody = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_class2 = (_temp = _class3 = function (_Component) {
  _inherits(InputDatefilterBody, _Component);

  function InputDatefilterBody() {
    _classCallCheck(this, InputDatefilterBody);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputDatefilterBody).apply(this, arguments));
  }

  _createClass(InputDatefilterBody, [{
    key: 'getFilterInputId',
    value: function getFilterInputId(filterType) {
      var inputId = this.props.id;
      if (!!inputId) {
        return inputId + '_' + filterType;
      }

      return null;
    }
  }, {
    key: 'getFilterInputName',
    value: function getFilterInputName(filterType) {
      var inputName = this.props.name;
      if (!!inputName) {
        return inputName + '_' + filterType;
      }

      return null;
    }
  }, {
    key: 'getFilterInputLabel',
    value: function getFilterInputLabel(filterType) {
      return _i18n2.default.t('inputs.datefilter.' + filterType);
    }
  }, {
    key: 'selectDate',
    value: function selectDate() {
      var $fromInput = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.fromInput)).find('input');
      var $toInput = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.toInput)).find('input');
      var selectedDates = _jquery2.default.grep([$fromInput.val(), $toInput.val()], function (date) {
        return !!date;
      });

      this.props.onSelectDate(selectedDates);
    }
  }, {
    key: 'filterInputProps',
    value: function filterInputProps(filterType) {
      var inputProps = {
        formStyle: 'oneLine',
        resource: this.props.resource,
        id: this.getFilterInputId(filterType),
        name: this.getFilterInputName(filterType),
        label: this.getFilterInputLabel(filterType)
      };

      _jquery2.default.extend(inputProps, this.props[filterType + 'FilterInput']);
      return inputProps;
    }
  }, {
    key: 'fromInputProps',
    value: function fromInputProps() {
      return this.filterInputProps('from');
    }
  }, {
    key: 'toInputProps',
    value: function toInputProps() {
      return this.filterInputProps('to');
    }
  }, {
    key: 'handleFilterBodyClick',
    value: function handleFilterBodyClick(event) {
      var filterBody = _reactDom2.default.findDOMNode(this.refs.filterBody);
      var fromInput = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.fromInput)).find('input')[0];

      if (event.target === filterBody) {
        fromInput.focus();
      }
    }
  }, {
    key: 'handleInputKeypress',
    value: function handleInputKeypress(event) {
      var keyCode = event.keyCode;

      if (keyCode === 13 || keyCode === 9) {
        this.handleInputTabKeypress(event);
      } else if (keyCode === 27) {
        event.preventDefault();
        this.selectDate();
      }
    }
  }, {
    key: 'handleInputTabKeypress',
    value: function handleInputTabKeypress(event) {
      event.preventDefault();
      var fromInput = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.fromInput)).find('input')[0];
      var toInput = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.toInput)).find('input')[0];

      if (event.target === fromInput) {
        toInput.focus();
      } else {
        this.selectDate();
      }
    }
  }, {
    key: 'renderUpdateButton',
    value: function renderUpdateButton() {
      return _react2.default.createElement(
        'div',
        { className: 'input-datefilter__button' },
        _react2.default.createElement(_components.Button, _extends({}, this.props.okButton, {
          element: 'a',
          onClick: this.selectDate
        }))
      );
    }
  }, {
    key: 'renderFromInput',
    value: function renderFromInput() {
      return _react2.default.createElement(
        'div',
        { className: 'input-datefilter__filter' },
        _react2.default.createElement(_components.Input, _extends({}, this.fromInputProps(), {
          onKeyDown: this.handleInputKeypress,
          component: 'datepicker',
          ref: 'fromInput'
        }))
      );
    }
  }, {
    key: 'renderToInput',
    value: function renderToInput() {
      return _react2.default.createElement(
        'div',
        { className: 'input-datefilter__filter' },
        _react2.default.createElement(_components.Input, _extends({}, this.toInputProps(), {
          onKeyDown: this.handleInputKeypress,
          component: 'datepicker',
          ref: 'toInput'
        }))
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.className(), onClick: this.handleFilterBodyClick, ref: 'filterBody' },
        this.renderFromInput(),
        this.renderToInput(),
        this.renderUpdateButton()
      );
    }
  }]);

  return InputDatefilterBody;
}(_react.Component), _class3.propTypes = {
  id: _prop_types2.default.string,
  name: _prop_types2.default.string,
  fromFilterInput: _prop_types2.default.object,
  toFilterInput: _prop_types2.default.object,
  okButton: _prop_types2.default.object
}, _class3.defaultProps = {
  themeClassKey: 'input.datefilter.body',
  id: null,
  name: null,
  resource: null,
  fromFilterInput: {},
  toFilterInput: {},
  okButton: {
    name: 'ok'
  }
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'handleFilterBodyClick', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleFilterBodyClick'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleInputKeypress', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleInputKeypress'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleInputTabKeypress', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleInputTabKeypress'), _class2.prototype)), _class2)) || _class);
exports.default = InputDatefilterBody;