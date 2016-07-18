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

var _decorators = require('../../utils/decorators');

var _css_class_mixin = require('../../mixins/css_class_mixin');

var _css_class_mixin2 = _interopRequireDefault(_css_class_mixin);

var _table_action_button = require('./table_action_button');

var _table_action_button2 = _interopRequireDefault(_table_action_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableActions = (_dec = (0, _decorators.mixin)(_css_class_mixin2.default), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(TableActions, _Component);

  function TableActions() {
    _classCallCheck(this, TableActions);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TableActions).apply(this, arguments));
  }

  _createClass(TableActions, [{
    key: 'renderButtons',
    value: function renderButtons() {
      var actionButtons = [];
      var actionButtonsProps = this.props.actionButtons;

      for (var i = 0; i < actionButtonsProps.length; i++) {
        var actionButtonProps = actionButtonsProps[i];
        actionButtons.push(_react2.default.createElement(_table_action_button2.default, _extends({}, actionButtonProps, this.propsWithoutCSS(), {
          element: "a",
          themeClassKey: "button.flat",
          key: "action_" + i
        })));
      }

      return actionButtons;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.className() },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(TableSelectionIndicator, this.propsWithoutCSS()),
          this.renderButtons()
        )
      );
    }
  }]);

  return TableActions;
}(_react.Component), _class2.propTypes = {
  dataRows: _prop_types2.default.array,
  selectable: _react2.default.PropTypes.oneOf(['multiple', 'none', 'one']),
  selectedRowIds: _prop_types2.default.array,
  selectedRowIdsParam: _prop_types2.default.string,
  actionButtons: _prop_types2.default.array,
  allSelected: _prop_types2.default.bool,
  count: _prop_types2.default.number,
  onRemoveSelection: _prop_types2.default.func,
  onSelectAll: _prop_types2.default.func,
  rowSelectableFilter: _prop_types2.default.func,
  forceShowSelectAllButton: _prop_types2.default.bool
}, _class2.defaultProps = {
  themeClassKey: 'table.actions',
  actionButtons: [],
  selectable: 'multiple',
  selectedRowIds: [],
  allSelected: false,
  rowSelectableFilter: null,
  forceShowSelectAllButton: false,
  onRemoveSelection: function onRemoveSelection(event) {},
  onSelectAll: function onSelectAll(event) {}
}, _temp)) || _class);
exports.default = TableActions;