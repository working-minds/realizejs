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

var _prop_types = require('../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _decorators = require('../../utils/decorators');

var _mixins = require('../../mixins');

var _table_select_cell = require('./table_select_cell');

var _table_select_cell2 = _interopRequireDefault(_table_select_cell);

var _table_cell = require('./table_cell');

var _table_cell2 = _interopRequireDefault(_table_cell);

var _table_row_actions = require('./table_row_actions');

var _table_row_actions2 = _interopRequireDefault(_table_row_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableRow = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(TableRow, _Component);

  function TableRow() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, TableRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TableRow)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.rowClick = function (event) {
      if (event.isPropagationStopped()) {
        return;
      }

      var onClickRow = _this.props.onClickRow;
      var rowHref = _this.props.rowHref;

      if (!!onClickRow && typeof onClickRow === "function") {
        onClickRow(event, _this.props.data);
      } else if (!!rowHref && typeof rowHref === "string") {
        _this.goToRowHref(event);
      }
    }, _this.goToRowHref = function (event) {
      var rowHref = _this.props.rowHref;
      var dataRowId = _this.props.data[_this.props.dataRowIdField];

      window.location.href = rowHref.replace(/:id/, dataRowId);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TableRow, [{
    key: 'renderSelectCell',
    value: function renderSelectCell() {
      if (this.props.selectable === 'none') {
        return _react2.default.createElement('td', { className: "table-select" });
      }

      var rowSelectableFilter = this.props.rowSelectableFilter;
      if (typeof rowSelectableFilter === "function" && !rowSelectableFilter(this.props.data)) {
        return _react2.default.createElement('td', { className: "table-select" });
      }

      return _react2.default.createElement(_table_select_cell2.default, {
        onSelectToggle: this.handleSelectToggle.bind(this),
        dataRowIds: [this.getDataRowId()],
        rowId: String(this.getDataRowId()),
        selected: this.props.selected,
        key: 'select'
      });
    }
  }, {
    key: 'handleSelectToggle',
    value: function handleSelectToggle(e, dataRowsIds, selected) {
      this.props.onSelectToggle(e, dataRowsIds, selected, this.props.data);
    }
  }, {
    key: 'renderCells',
    value: function renderCells() {
      var columns = this.props.columns;
      var cellComponents = [];

      $.each(columns, function (columnKey, columnProps) {
        var columnName = columnProps.name || columnKey;
        cellComponents.push(_react2.default.createElement(_table_cell2.default, _extends({}, columnProps, this.propsWithoutCSS(), {
          name: columnName,
          key: columnName
        })));
      }.bind(this));

      return cellComponents;
    }
  }, {
    key: 'renderActionsCell',
    value: function renderActionsCell() {
      if (!$.isArray(this.props.actionButtons) || this.props.actionButtons.length === 0) {
        return _react2.default.createElement('td', null);
      }

      return _react2.default.createElement(_table_row_actions2.default, _extends({}, this.propsWithoutCSS(), { ref: 'actions' }));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'tr',
        { className: this.getClassName(), ref: 'row', onClick: this.rowClick },
        this.renderSelectCell(),
        this.renderCells(),
        this.renderActionsCell()
      );
    }
  }, {
    key: 'getClassName',
    value: function getClassName() {
      var className = this.className();

      if (!!this.props.onClickRow || !!this.props.rowHref) {
        className = className + ' clickable-row';
      }

      if (!!this.props.tableRowCssClass) {
        var cssClass = this.props.tableRowCssClass(this.props.data);
        if (!!cssClass) {
          className = className + ' ' + cssClass;
        }
      }

      return className;
    }
  }, {
    key: 'getDataRowId',
    value: function getDataRowId() {
      return this.props.data[this.props.dataRowIdField];
    }
  }]);

  return TableRow;
}(_react.Component), _class2.propTypes = {
  columns: _prop_types2.default.object,
  data: _prop_types2.default.object,
  dataRowIdField: _prop_types2.default.string,
  selectable: _react2.default.PropTypes.oneOf(['multiple', 'none', 'one']),
  selected: _prop_types2.default.bool,
  actionButtons: _prop_types2.default.array,
  rowSelectableFilter: _prop_types2.default.func,
  onSelectToggle: _prop_types2.default.func,
  onClickRow: _prop_types2.default.func,
  rowHref: _prop_types2.default.string,
  tableRowCssClass: _prop_types2.default.func
}, _class2.defaultProps = {
  columns: {},
  data: {},
  dataRowIdField: 'id',
  selectable: 'multiple',
  selected: false,
  actionButtons: [],
  themeClassKey: 'table.row',
  rowSelectableFilter: null,
  onClickRow: null,
  rowHref: null,
  tableRowCssClass: null,
  onSelectToggle: function onSelectToggle(event, dataRows, selected) {}
}, _temp2)) || _class);
exports.default = TableRow;