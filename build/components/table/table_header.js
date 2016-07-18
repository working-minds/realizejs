'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

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

var TableHeader = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.LocalizedResourceFieldMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(TableHeader, _Component);

  function TableHeader() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, TableHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TableHeader)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.sortColumn = function () {
      if (!_this.props.sortable) {
        return null;
      }

      var sortData = _this.buildSortData();
      _this.props.onSort(sortData);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TableHeader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'th',
        { className: this.headerClassName() },
        _react2.default.createElement(
          'span',
          { onClick: this.sortColumn, className: this.labelClassName() },
          this.getLabel()
        )
      );
    }
  }, {
    key: 'headerClassName',
    value: function headerClassName() {
      var className = this.className();
      if (!!this.props.format) {
        className += ' table-header--' + this.props.format;
      }

      return className;
    }
  }, {
    key: 'getLabel',
    value: function getLabel() {
      if (!!this.props.label && this.props.label.length > 0) {
        return Realize.i18n.t(this.props.label);
      }

      return this.localizeResourceField();
    }
  }, {
    key: 'labelClassName',
    value: function labelClassName() {
      var className = '';

      if (!this.props.clearTheme) {
        className += Realize.themes.getCssClass('table.header.label');
      }

      if (this.props.sortable) {
        className += " sortable";

        var sortDirection = this.props.sortDirection;
        if (sortDirection !== null) {
          className += " " + sortDirection;
        }
      }

      return className;
    }
  }, {
    key: 'buildSortData',
    value: function buildSortData() {
      var sortField = this.getSortFieldName();
      var sortDirection = this.getSortDirection();

      return {
        field: sortField,
        direction: sortDirection
      };
    }
  }, {
    key: 'getSortFieldName',
    value: function getSortFieldName() {
      return this.props.sortFieldName || this.props.name;
    }
  }, {
    key: 'getSortDirection',
    value: function getSortDirection() {
      var currentSortDirection = this.props.sortDirection;
      if (currentSortDirection === null || currentSortDirection == 'desc') {
        return 'asc';
      } else if (currentSortDirection == 'asc') {
        return 'desc';
      }
    }
  }]);

  return TableHeader;
}(_react.Component), _class2.propTypes = {
  label: _prop_types2.default.localizedString,
  format: _prop_types2.default.oneOf(['text', 'currency', 'number', 'percentage', 'boolean', 'date', 'datetime', 'time']),
  sortable: _prop_types2.default.bool,
  sortDirection: _prop_types2.default.string,
  sortFieldName: _prop_types2.default.string,
  onSort: _prop_types2.default.func
}, _class2.defaultProps = {
  themeClassKey: 'table.header',
  sortable: true,
  sortDirection: null,
  sortFieldName: null,
  onSort: function onSort(sortData) {
    return true;
  }
}, _temp2)) || _class);
exports.default = TableHeader;