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

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _decorators = require('../../utils/decorators');

var _realize = require('../../realize');

var _realize2 = _interopRequireDefault(_realize);

var _utils = require('../../utils');

var _utils2 = _interopRequireDefault(_utils);

var _mixins = require('../../mixins');

var _components = require('../../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Grid = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.RequestHandlerMixin, _mixins.RestActionsMixin, _mixins.GridActionsMixin), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Grid, _Component);

  function Grid(props) {
    _classCallCheck(this, Grid);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Grid).call(this, props));

    _this.onPagination = function (page) {
      _this.state.page = page;
      if (_this.state.allSelected) {
        _this.state.selectedRowIds = [];
      }

      _this.state.allSelected = false;
      _this.loadData();
    };

    _this.onChangePerPage = function (perPage) {
      _this.state.perPage = perPage;
      _this.paginationConfigs().perPage = perPage;

      if (_this.state.allSelected) _this.state.selectedRowIds = [];

      _this.state.allSelected = false;
      _this.loadData();
    };

    _this.onFilterSubmit = function (event, postData) {
      _this.props.onFilterSubmit(event, postData);

      if (!event.isDefaultPrevented()) {
        event.preventDefault();

        _this.state.selectedRowIds = [];
        _this.state.allSelected = false;
        _this.state.filterData = postData;
        _this.state.page = 1;
        _this.loadData();
      }
    };

    _this.onSort = function (sortData) {
      _this.state.sortData = sortData;
      _this.state.page = 1;
      _this.loadData();
    };

    _this.handleLoad = function (data) {
      var dataRows = _utils2.default.getProp(_this.props.dataRowsParam, data);
      var count = _utils2.default.getProp(_this.props.countParam, data);

      _this.setState({
        gridIsLoading: false,
        dataRows: dataRows,
        count: count
      }, function () {
        this.props.onLoadSuccess(data);
      }.bind(_this));
    };

    _this.handleLoadError = function (xhr, status, error) {
      _this.props.onLoadError(xhr, status, error);
      _this.setState({ gridIsLoading: false });
      console.log('Grid Load Error:' + error);
    };

    _this.selectDataRows = function (event, selectedRowIds, selectedData) {
      _this.props.onSelectDataRow(event, selectedRowIds);
      if (!event.isDefaultPrevented()) {
        event.preventDefault();

        var nextState = _this.getSelectDataRowsState(selectedRowIds, selectedData);
        _this.setState(nextState);
      }
    };

    _this.getSelectDataRowsState = function (selectedRowIds, selectedData) {
      var nextState = { selectedRowIds: selectedRowIds, allSelected: false };

      if (!!selectedData && _this.props.selectable === 'one') nextState.selectedData = selectedData;

      return nextState;
    };

    _this.removeSelection = function (event) {
      _this.props.onRemoveSelection(event);
      if (!event.isDefaultPrevented()) {
        event.preventDefault();

        _this.setState({
          selectedRowIds: [],
          allSelected: false
        });
      }
    };

    _this.selectAllRows = function (event) {
      _this.props.onSelectAllRows(event);
      if (!event.isDefaultPrevented()) {
        event.preventDefault();

        _this.setState({
          allSelected: true
        });
      }
    };

    _this.state = {
      dataRows: _this.props.data.dataRows,
      selectedData: {},
      selectedRowIds: [],
      allSelected: false,
      count: _this.props.data.count,
      page: 1,
      perPage: _this.initialPerPage(),
      filterData: {},
      sortData: _this.props.sortData,
      gridIsLoading: _this.props.isLoading
    };
    return _this;
  }

  _createClass(Grid, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        filterData: this.getInitialFilterData()
      }, function () {
        if (!!this.props.eagerLoad) {
          this.loadData();
        }
      }.bind(this));
    }
  }, {
    key: 'renderPaginationOnTop',
    value: function renderPaginationOnTop() {
      if (!!this.props.paginationOnTop) return this.renderPagination();
    }
  }, {
    key: 'renderFilter',
    value: function renderFilter() {
      if (_jquery2.default.isEmptyObject(this.props.filter)) {
        return '';
      }

      return _react2.default.createElement(_components.GridFilter, _extends({
        action: this.props.url
      }, this.props.filter, {
        isLoading: this.state.gridIsLoading,
        onSubmit: this.onFilterSubmit,
        ref: 'filter'
      }));
    }
  }, {
    key: 'renderTable',
    value: function renderTable() {
      return _react2.default.createElement(_components.GridTable, {
        resource: this.props.resource,
        columns: this.props.columns,
        sortConfigs: this.sortConfigs(),
        sortData: this.state.sortData,
        dataRows: this.state.dataRows,
        selectable: this.props.selectable,
        selectedRowIds: this.state.selectedRowIds,
        selectedRowIdsParam: this.props.selectedRowIdsParam,
        dataRowIdField: this.props.dataRowIdField,
        allSelected: this.state.allSelected,
        allSelectedData: this.state.filterData,
        count: this.state.count,
        actionButtons: this.getActionButtons(),
        tableClassName: this.props.tableClassName,
        onSort: this.onSort,
        onSelect: this.selectDataRows,
        onRemoveSelection: this.removeSelection,
        onSelectAll: this.selectAllRows,
        rowSelectableFilter: this.props.rowSelectableFilter,
        customTableHeader: this.props.customTableHeader,
        forceShowSelectAllButton: this.props.forceShowSelectAllButton,
        onClickRow: this.props.onClickRow,
        rowHref: this.getRowHref(),
        tableRowCssClass: this.props.tableRowCssClass,
        clearThemeTable: this.props.clearThemeTable,
        emptyMessage: this.props.emptyMessage
      });
    }
  }, {
    key: 'renderPagination',
    value: function renderPagination() {
      if (this.props.pagination) {
        return _react2.default.createElement(_components.GridPagination, _extends({}, this.paginationConfigs(), {
          perPage: this.state.perPage,
          page: this.state.page,
          count: this.state.count,
          onPagination: this.onPagination,
          onChangePerPage: this.onChangePerPage,
          pageRowsCount: this.state.dataRows.length
        }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.gridClassName(), ref: 'grid' },
        this.renderFilter(),
        this.renderPaginationOnTop(),
        this.renderTable(),
        this.renderPagination()
      );
    }
  }, {
    key: 'backToInitialState',
    value: function backToInitialState() {
      this.setState({
        selectedRowIds: [],
        allSelected: false,
        page: 1
      });

      this.setState({
        filterData: this.getInitialFilterData()
      }, function () {
        this.loadData();
      }.bind(this));
    }
  }, {
    key: 'initialPerPage',
    value: function initialPerPage() {
      return this.paginationConfigs().perPage;
    }
  }, {
    key: 'gridClassName',
    value: function gridClassName() {
      var className = this.className();
      if (this.state.gridIsLoading) {
        className += ' loading';
      }

      return className;
    }
  }, {
    key: 'paginationConfigs',
    value: function paginationConfigs() {
      return _jquery2.default.extend({}, _realize2.default.config.grid.pagination, this.props.paginationConfigs);
    }
  }, {
    key: 'sortConfigs',
    value: function sortConfigs() {
      return _jquery2.default.extend({}, _realize2.default.config.grid.sort, this.props.sortConfigs);
    }
  }, {
    key: 'getInitialFilterData',
    value: function getInitialFilterData() {
      var gridFilterNode = ReactDOM.findDOMNode(this.refs.filter);
      var filterForm = (0, _jquery2.default)(gridFilterNode).find('form');

      return filterForm.serializeObject();
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      this.setState({ gridIsLoading: true });
      var postData = this.buildPostData();
      var filterProps = this.props.filter;
      var filterMethod = filterProps.method || 'GET';
      var filterDataType = filterProps.dataType || 'json';

      _jquery2.default.ajax({
        url: this.getRestActionUrl('index'),
        method: filterMethod,
        dataType: filterDataType,
        data: postData,
        success: this.handleLoad,
        error: this.handleLoadError
      });
    }
  }, {
    key: 'buildPostData',
    value: function buildPostData() {
      var postData = _jquery2.default.extend({}, this.state.filterData);

      _jquery2.default.extend(postData, this.buildPaginationPostData());
      if (!_jquery2.default.isEmptyObject(this.state.sortData)) {
        _jquery2.default.extend(postData, this.buildSortPostData());
      }

      return postData;
    }
  }, {
    key: 'buildPaginationPostData',
    value: function buildPaginationPostData() {
      var paginationPostData = {};

      var paginationParam = this.paginationConfigs().param;
      var paginationParamPerPage = 'per_page';

      paginationPostData[paginationParam] = this.state.page;
      paginationPostData[paginationParamPerPage] = this.state.perPage;

      return paginationPostData;
    }
  }, {
    key: 'buildSortPostData',
    value: function buildSortPostData() {
      var sortConfigs = this.sortConfigs();

      var sortParam = sortConfigs.param;
      var sortDirectionParam = sortConfigs.directionParam;
      var sortPostData = {};
      sortPostData[sortParam] = this.parseSortPostDataValue();
      sortPostData[sortDirectionParam] = this.state.sortData.direction;

      return sortPostData;
    }
  }, {
    key: 'parseSortPostDataValue',
    value: function parseSortPostDataValue() {
      var sortValueFormat = this.sortConfigs().fieldValueFormat;
      var field = this.state.sortData.field;
      var direction = this.state.sortData.direction;

      if (!sortValueFormat) {
        return field;
      }

      return sortValueFormat.replace(/%\{field}/, field).replace(/%\{direction}/, direction);
    }

    /* Selection handlers */

  }, {
    key: 'serialize',
    value: function serialize() {
      return this.state.dataRows;
    }
  }]);

  return Grid;
}(_react.Component), _class2.propTypes = {
  url: _prop_types2.default.string,
  eagerLoad: _prop_types2.default.bool,
  resource: _prop_types2.default.string,
  paginationConfigs: _prop_types2.default.object,
  sortConfigs: _prop_types2.default.object,
  sortData: _prop_types2.default.object,
  filter: _prop_types2.default.object,
  columns: _prop_types2.default.object,
  data: _prop_types2.default.object,
  emptyMessage: _prop_types2.default.localizedString,
  dataRowsParam: _prop_types2.default.string,
  countParam: _prop_types2.default.string,
  selectedRowIdsParam: _prop_types2.default.string,
  dataRowIdField: _prop_types2.default.string,
  isLoading: _prop_types2.default.bool,
  selectable: _prop_types2.default.oneOf(['multiple', 'none', 'one']),
  tableClassName: _prop_types2.default.string,
  onLoadSuccess: _prop_types2.default.func,
  onLoadError: _prop_types2.default.func,
  rowSelectableFilter: _prop_types2.default.func,
  customTableHeader: _prop_types2.default.string,
  forceShowSelectAllButton: _prop_types2.default.bool,
  onClickRow: _prop_types2.default.func,
  tableRowCssClass: _prop_types2.default.func,
  paginationOnTop: _prop_types2.default.bool,
  clearThemeTable: _prop_types2.default.bool,
  pagination: _prop_types2.default.bool,
  perPageOptions: _prop_types2.default.array,
  onFilterSubmit: _prop_types2.default.func,
  onSelectDataRow: _prop_types2.default.func,
  onRemoveSelection: _prop_types2.default.func,
  onSelectAllRows: _prop_types2.default.func
}, _class2.defaultProps = {
  themeClassKey: 'grid',
  eagerLoad: false,
  paginationConfigs: {},
  sortConfigs: {},
  sortData: {},
  filter: {},
  columns: {},
  dataRowsParam: 'data',
  countParam: 'count',
  selectedRowIdsParam: 'rowIds',
  dataRowIdField: 'id',
  isLoading: false,
  selectable: 'multiple',
  rowSelectableFilter: null,
  customTableHeader: null,
  forceShowSelectAllButton: false,
  onClickRow: null,
  tableRowCssClass: null,
  paginationOnTop: true,
  clearThemeTable: false,
  pagination: true,
  onLoadSuccess: function onLoadSuccess(data) {},
  onLoadError: function onLoadError(xhr, status, error) {},
  onFilterSubmit: function onFilterSubmit(event, postData) {},
  onSelectDataRow: function onSelectDataRow(event, selectedRowIds) {},
  onRemoveSelection: function onRemoveSelection(event) {},
  onSelectAllRows: function onSelectAllRows(event) {},
  data: {
    dataRows: [],
    count: 0
  }
}, _temp)) || _class);
exports.default = Grid;