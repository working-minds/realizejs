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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableSelectionIndicator = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(TableSelectionIndicator, _Component);

  function TableSelectionIndicator() {
    _classCallCheck(this, TableSelectionIndicator);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TableSelectionIndicator).apply(this, arguments));
  }

  _createClass(TableSelectionIndicator, [{
    key: 'renderMessage',
    value: function renderMessage() {
      var count = this.getSelectionCount();
      if (count === 0) {
        return '';
      } else if (count === 1) {
        return Realize.i18n.t(this.props.message.singular);
      } else {
        var message = Realize.i18n.t(this.props.message.plural);
        return message.replace(/:count/, count);
      }
    }
  }, {
    key: 'renderActions',
    value: function renderActions() {
      var count = this.getSelectionCount();
      if (count === 0 || this.props.selectable !== 'multiple') {
        return '';
      }

      return _react2.default.createElement(
        'span',
        null,
        '(',
        this.renderRemoveSelectionButton(),
        this.renderSelectAllButton(),
        ')'
      );
    }
  }, {
    key: 'renderRemoveSelectionButton',
    value: function renderRemoveSelectionButton() {
      return _react2.default.createElement(
        'a',
        { href: '#!', onClick: this.props.onRemoveSelection },
        Realize.i18n.t(this.props.removeSelectionButtonName)
      );
    }
  }, {
    key: 'renderSelectAllButton',
    value: function renderSelectAllButton() {
      if (typeof this.props.rowSelectableFilter === "function" || this.props.allSelected) {
        if (!this.props.forceShowSelectAllButton) {
          return '';
        }
      }

      return _react2.default.createElement(
        'span',
        null,
        ' | ',
        _react2.default.createElement(
          'a',
          { href: '#!', onClick: this.props.onSelectAll },
          this.getSelectAllButtonName()
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.className() },
        _react2.default.createElement(
          'span',
          null,
          this.renderMessage()
        ),
        ' ',
        this.renderActions()
      );
    }
  }, {
    key: 'getSelectionCount',
    value: function getSelectionCount() {
      if (this.props.allSelected && !!this.props.count) {
        return this.props.count;
      } else {
        return this.props.selectedRowIds.length;
      }
    }
  }, {
    key: 'getSelectAllButtonName',
    value: function getSelectAllButtonName() {
      var buttonName = Realize.i18n.t(this.props.selectAllButtonName);
      var count = this.props.count || this.props.dataRows.length;

      return buttonName.replace(/:count/, count);
    }
  }]);

  return TableSelectionIndicator;
}(_react.Component), _class2.propTypes = {
  dataRows: _prop_types2.default.array,
  selectedRowIds: _prop_types2.default.array,
  actionButtons: _prop_types2.default.array,
  message: _prop_types2.default.object,
  removeSelectionButtonName: _prop_types2.default.localizedString,
  selectable: _prop_types2.default.oneOf(['multiple', 'none', 'one']),
  selectAllButtonName: _prop_types2.default.localizedString,
  allSelected: _prop_types2.default.bool,
  count: _prop_types2.default.number,
  onRemoveSelection: _prop_types2.default.func,
  onSelectAll: _prop_types2.default.func,
  rowSelectableFilter: _prop_types2.default.func,
  forceShowSelectAllButton: _prop_types2.default.bool
}, _class2.defaultProps = {
  themeClassKey: 'table.selectionIndicator',
  dataRows: [],
  selectedRowIds: [],
  actionButtons: [],
  message: {
    plural: 'table.selection.select.plural',
    singular: 'table.selection.select.singular'
  },
  removeSelectionButtonName: 'table.selection.clear',
  selectable: 'multiple',
  selectAllButtonName: 'table.selection.selectAll',
  allSelected: false,
  rowSelectableFilter: null,
  forceShowSelectAllButton: false,
  onRemoveSelection: function onRemoveSelection(event) {},
  onSelectAll: function onSelectAll(event) {}
}, _temp)) || _class);
exports.default = TableSelectionIndicator;