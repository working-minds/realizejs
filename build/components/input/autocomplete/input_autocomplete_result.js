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

var _i18n = require('../../../i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _decorators = require('../../../utils/decorators');

var _components = require('../../../components');

var _mixins = require('../../../mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputAutocompleteResult = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(InputAutocompleteResult, _Component);

  function InputAutocompleteResult() {
    _classCallCheck(this, InputAutocompleteResult);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputAutocompleteResult).apply(this, arguments));
  }

  _createClass(InputAutocompleteResult, [{
    key: 'renderSearchInput',
    value: function renderSearchInput() {
      return _react2.default.createElement(
        'div',
        { className: 'input-autocomplete__search' },
        _react2.default.createElement(_components.Icon, { type: 'search', className: 'prefix' }),
        _react2.default.createElement(_components.InputText, {
          onKeyDown: this.props.onKeyDown,
          value: this.props.searchValue,
          onChange: this.props.onChange,
          autoComplete: 'off'
        })
      );
    }
  }, {
    key: 'renderClearButton',
    value: function renderClearButton() {
      return _react2.default.createElement(
        'a',
        {
          href: '#!',
          className: 'input-autocomplete__clear-button',
          onClick: this.props.onClear
        },
        _i18n2.default.t('inputs.autocomplete.clear')
      );
    }
  }, {
    key: 'renderResult',
    value: function renderResult() {
      var options = this.props.options;


      if (options.length > 0) {
        return this.renderList();
      }

      return this.renderEmptyMessage();
    }
  }, {
    key: 'renderList',
    value: function renderList() {
      return _react2.default.createElement(_components.InputAutocompleteList, {
        id: this.props.id,
        selectedOptions: this.props.selectedOptions,
        options: this.props.options,
        active: this.props.active,
        onSelect: this.props.onSelect,
        onOptionMouseEnter: this.props.onOptionMouseEnter,
        ref: 'list'
      });
    }
  }, {
    key: 'renderEmptyMessage',
    value: function renderEmptyMessage() {
      return _react2.default.createElement(
        'div',
        { className: 'input-autocomplete__empty-message' },
        _i18n2.default.t('inputs.autocomplete.emptyResult')
      );
    }
  }, {
    key: 'renderActionButtons',
    value: function renderActionButtons() {
      var actionButtons = [];
      var actionButtonsProps = this.props.actionButtons;

      for (var i = 0; i < actionButtonsProps.length; i++) {
        var actionButtonProps = actionButtonsProps[i];
        actionButtons.push(this.renderActionButton(actionButtonProps, i));
      }

      return _react2.default.createElement(
        'div',
        { className: 'input-autocomplete__action-buttons' },
        actionButtons
      );
    }
  }, {
    key: 'renderActionButton',
    value: function renderActionButton(actionButtonProps, i) {
      var buttonComponent = actionButtonProps.component || 'Button';
      var buttonProps = _extends({}, actionButtonProps, {
        themeClassKey: 'input.autocomplete.actionButton',
        element: 'a',
        key: 'action_' + i
      });

      return _react2.default.createElement(eval(buttonComponent), buttonProps);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.className() },
        this.renderSearchInput(),
        this.renderClearButton(),
        this.renderResult(),
        this.renderActionButtons()
      );
    }
  }]);

  return InputAutocompleteResult;
}(_react.Component), _class2.propTypes = {
  id: _prop_types2.default.string,
  options: _prop_types2.default.array,
  selectedOptions: _prop_types2.default.array,
  active: _prop_types2.default.number,
  searchValue: _prop_types2.default.string,
  actionButtons: _prop_types2.default.array,
  onKeyDown: _prop_types2.default.func,
  onChange: _prop_types2.default.func,
  onSelect: _prop_types2.default.func,
  onClear: _prop_types2.default.func,
  onOptionMouseEnter: _prop_types2.default.func
}, _class2.defaultProps = {
  themeClassKey: 'input.autocomplete.result',
  options: [],
  selectedOptions: []
}, _temp)) || _class);
exports.default = InputAutocompleteResult;