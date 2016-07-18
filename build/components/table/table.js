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

var _realize = require('../../realize');

var _realize2 = _interopRequireDefault(_realize);

var _i18n = require('../../i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _decorators = require('../../utils/decorators');

var _mixins = require('../../mixins');

var _table_actions = require('./table_actions');

var _table_actions2 = _interopRequireDefault(_table_actions);

var _table_select_cell = require('./table_select_cell');

var _table_select_cell2 = _interopRequireDefault(_table_select_cell);

var _table_header = require('./table_header');

var _table_header2 = _interopRequireDefault(_table_header);

var _table_row = require('./table_row');

var _table_row2 = _interopRequireDefault(_table_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Table, _Component);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Table).call(this, props));

    _this.toggleDataRows = function (event, dataRowIds, selected, selectedData) {
      var selectedRowIds = [];
      if (selected) {
        selectedRowIds = _this.getSelectedDataRows(dataRowIds);
      } else {
        selectedRowIds = _this.removeSelectedDataRows(dataRowIds);
        selectedData = {};
      }

      _this.props.onSelect(event, selectedRowIds, selectedData);
      if (!event.isDefaultPrevented()) {
        _this.setState({
          selectedRowIds: selectedRowIds,
          allSelected: false
        });
      }
    };

    _this.removeSelection = function (event) {
      _this.props.onRemoveSelection(event);

      if (!event.isDefaultPrevented()) {
        _this.setState({
          selectedRowIds: [],
          allSelected: false
        });
      }
    };

    _this.selectAllRows = function (event) {
      _this.props.onSelectAll(event);

      if (!event.isDefaultPrevented()) {
        _this.setState({
          allSelected: true
        });
      }
    };

    _this.state = {
      selectedRowIds: _this.props.selectedRowIds || [],
      allSelected: _this.props.allSelected
    };
    return _this;
  }

  _createClass(Table, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var selectedRowIds = nextProps.selectedRowIds;
      var allSelected = nextProps.allSelected;

      if (!!selectedRowIds && $.isArray(selectedRowIds)) {
        this.setState({ selectedRowIds: selectedRowIds });
      }

      if (allSelected !== null && allSelected !== undefined) {
        this.setState({ allSelected: allSelected });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.sortConfigs = $.extend({}, _realize2.default.config.grid.sort, this.props.sortConfigs);

      if (!!this.props.customTableHeader) {
        var $thead = $(ReactDOM.findDOMNode(this.refs.thead));
        $thead.prepend(this.props.customTableHeader);
      }
    }
  }, {
    key: 'renderActions',
    value: function renderActions() {
      var collectionButtons = this.props.actionButtons.collection || [];
      if (this.props.selectable === 'none' && collectionButtons.length == 0) {
        return '';
      }

      return _react2.default.createElement(_table_actions2.default, {
        dataRows: this.state.dataRows,
        selectedRowIds: this.state.selectedRowIds,
        selectedRowIdsParam: this.props.selectedRowIdsParam,
        selectable: this.props.selectable,
        allSelected: this.state.allSelected,
        allSelectedData: this.props.allSelectedData,
        count: this.props.count,
        onRemoveSelection: this.removeSelection,
        onSelectAll: this.selectAllRows,
        actionButtons: this.props.actionButtons.collection || [],
        rowSelectableFilter: this.props.rowSelectableFilter,
        forceShowSelectAllButton: this.props.forceShowSelectAllButton
      });
    }
  }, {
    key: 'renderHeaderSelectCell',
    value: function renderHeaderSelectCell() {
      if (this.props.selectable === 'none' || this.props.selectable === 'one') {
        return _react2.default.createElement('th', { className: "table-select" });
      }

      return _react2.default.createElement(_table_select_cell2.default, {
        onSelectToggle: this.toggleDataRows,
        dataRowIds: this.getDataRowIds(),
        selected: this.isAllDataRowsSelected(),
        rowId: "all",
        cellElement: "th",
        key: "header_select"
      });
    }
  }, {
    key: 'renderTableHeaders',
    value: function renderTableHeaders() {
      var columns = this.props.columns;
      var headerComponents = [];

      for (var columnName in columns) {
        if (columns.hasOwnProperty(columnName)) {
          var columnProps = columns[columnName];
          headerComponents.push(_react2.default.createElement(_table_header2.default, _extends({}, columnProps, this.sortConfigs, {
            name: columnName,
            key: columnName,
            sortDirection: this.sortDirectionForColumn(columnName, columnProps),
            ref: "header_" + columnName,
            resource: this.props.resource,
            onSort: this.props.onSort,
            clearTheme: this.props.clearTheme
          })));
        }
      }

      return headerComponents;
    }
  }, {
    key: 'renderTableRows',
    value: function renderTableRows() {
      var rowComponents = [];
      var dataRows = this.props.dataRows;

      for (var i = 0; i < dataRows.length; i++) {
        var dataRow = dataRows[i];
        rowComponents.push(_react2.default.createElement(_table_row2.default, _extends({}, this.propsWithoutCSS(), {
          onSelectToggle: this.toggleDataRows,
          selected: this.dataRowIsSelected(dataRow),
          data: dataRow,
          dataRowIdField: this.props.dataRowIdField,
          actionButtons: this.props.actionButtons.member || [],
          key: "table_row_" + i,
          rowSelectableFilter: this.props.rowSelectableFilter,
          onClickRow: this.props.onClickRow,
          rowHref: this.props.rowHref,
          tableRowCssClass: this.props.tableRowCssClass
        })));
      }

      return rowComponents;
    }
  }, {
    key: 'renderEmptyMessage',
    value: function renderEmptyMessage() {
      var columnsCount = 1;
      for (var key in this.props.columns) {
        columnsCount++;
      }

      if (this.props.selectable === 'multiple') {
        columnsCount++;
      }

      return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { colSpan: columnsCount, className: 'empty-message' },
          _i18n2.default.t(this.props.emptyMessage)
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.wrapperClassName() },
        this.renderActions(),
        _react2.default.createElement(
          'table',
          { className: this.className() },
          _react2.default.createElement(
            'thead',
            { ref: 'thead' },
            _react2.default.createElement(
              'tr',
              null,
              this.renderHeaderSelectCell(),
              this.renderTableHeaders()
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            this.props.dataRows.length > 0 ? this.renderTableRows() : this.renderEmptyMessage()
          )
        )
      );
    }
  }, {
    key: 'wrapperClassName',
    value: function wrapperClassName() {
      var wrapperClassName = '';
      if (!this.props.clearTheme) {
        wrapperClassName = _theme2.default.getCssClass('table.wrapper');
      }

      return wrapperClassName;
    }
  }, {
    key: 'sortDirectionForColumn',
    value: function sortDirectionForColumn(columnName, columnProps) {
      var sortFieldName = columnProps.sortFieldName;
      var sortField = sortFieldName || columnName;

      var sortData = this.props.sortData;
      if (!!sortData.field && sortData.field == sortField) {
        return sortData.direction;
      }

      return null;
    }
  }, {
    key: 'getDataRowIds',
    value: function getDataRowIds() {
      var rowSelectableFilter = this.props.rowSelectableFilter;
      var selectableDataRows = $.grep(this.props.dataRows, function (dataRow) {
        return !rowSelectableFilter || !!rowSelectableFilter(dataRow);
      });

      return $.map(selectableDataRows, function (dataRow) {
        return dataRow[this.props.dataRowIdField];
      }.bind(this));
    }
  }, {
    key: 'getSelectedDataRows',
    value: function getSelectedDataRows(dataRowId) {
      if (this.props.selectable === 'one') return dataRowId;

      return this.addSelectedDataRow(dataRowId);
    }
  }, {
    key: 'addSelectedDataRow',
    value: function addSelectedDataRow(dataRowId) {
      var selectedRowIds = this.state.selectedRowIds.slice();

      dataRowId.filter(function (dataRowId) {
        return selectedRowIds.indexOf(dataRowId) < 0;
      }).forEach(function (dataRowId) {
        return selectedRowIds.push(dataRowId);
      });

      return selectedRowIds;
    }
  }, {
    key: 'removeSelectedDataRows',
    value: function removeSelectedDataRows(dataRowIds) {
      return $.grep(this.state.selectedRowIds, function (dataRowId) {
        return $.inArray(dataRowId, dataRowIds) < 0;
      }.bind(this));
    }
  }, {
    key: 'dataRowIsSelected',
    value: function dataRowIsSelected(dataRow) {
      var dataRowId = dataRow[this.props.dataRowIdField];
      return $.inArray(dataRowId, this.state.selectedRowIds) >= 0 || this.props.allSelected;
    }
  }, {
    key: 'isAllDataRowsSelected',
    value: function isAllDataRowsSelected() {
      var dataRowIds = this.getDataRowIds();
      var selectedRowIdsInPage = $.grep(this.state.selectedRowIds, function (selectedDataRowId) {
        return $.inArray(selectedDataRowId, dataRowIds) >= 0;
      });

      return dataRowIds.length > 0 && dataRowIds.length == selectedRowIdsInPage.length || this.props.allSelected;
    }
  }]);

  return Table;
}(_react.Component), _class2.propTypes = {
  resource: _prop_types2.default.string,
  columns: _prop_types2.default.object,
  dataRowIdField: _prop_types2.default.string,
  selectedRowIdsParam: _prop_types2.default.string,
  selectable: _prop_types2.default.oneOf(['multiple', 'none', 'one']),
  sortConfigs: _prop_types2.default.object,
  sortData: _prop_types2.default.object,
  dataRows: _prop_types2.default.array,
  count: _prop_types2.default.number,
  selectedRowIds: _prop_types2.default.array,
  allSelected: _prop_types2.default.bool,
  allSelectedData: _prop_types2.default.object,
  emptyMessage: _prop_types2.default.localizedString,
  actionButtons: _prop_types2.default.object,
  onSort: _prop_types2.default.func,
  onSelect: _prop_types2.default.func,
  onRemoveSelection: _prop_types2.default.func,
  onSelectAll: _prop_types2.default.func,
  rowSelectableFilter: _prop_types2.default.func,
  forceShowSelectAllButton: _prop_types2.default.bool,
  onClickRow: _prop_types2.default.func,
  rowHref: _prop_types2.default.string,
  tableRowCssClass: _prop_types2.default.func
}, _class2.defaultProps = {
  themeClassKey: 'table',
  columns: {},
  dataRowIdField: 'id',
  selectedRowIdsParam: 'rowIds',
  selectable: 'multiple',
  sortConfigs: {},
  sortData: {},
  dataRows: [],
  count: 0,
  selectedRowIds: null,
  allSelected: null,
  allSelectedData: {},
  emptyMessage: 'table.emptyResult',
  actionButtons: {
    member: [],
    collection: []
  },
  onSort: function onSort(sortData) {},
  onSelect: function onSelect(event, selectedRowIds) {},
  onRemoveSelection: function onRemoveSelection(event) {},
  onSelectAll: function onSelectAll(event) {},
  rowSelectableFilter: null,
  forceShowSelectAllButton: false,
  onClickRow: null,
  rowHref: null,
  tableRowCssClass: null
}, _temp)) || _class);
exports.default = Table;