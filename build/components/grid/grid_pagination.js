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

var _components = require('../../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridPagination = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(GridPagination, _Component);

  function GridPagination() {
    _classCallCheck(this, GridPagination);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(GridPagination).apply(this, arguments));
  }

  _createClass(GridPagination, [{
    key: 'renderRangePagination',
    value: function renderRangePagination() {
      return _react2.default.createElement(
        'div',
        { className: 'range_pagination' },
        _react2.default.createElement(
          'span',
          null,
          this.rangePaginationText()
        )
      );
    }
  }, {
    key: 'renderPerPage',
    value: function renderPerPage() {
      return _react2.default.createElement(
        'div',
        { className: 'per_page' },
        _react2.default.createElement(_components.Input, { value: this.props.perPage, component: 'select',
          includeBlank: false, clearTheme: true,
          className: 'form__input input-field',
          options: this.props.perPageOptions,
          onChange: this.changePerPage
        })
      );
    }
  }, {
    key: 'renderPagination',
    value: function renderPagination() {
      var totalRowsCount = this.props.count;
      var pageRowsCount = this.props.pageRowsCount;
      if (totalRowsCount <= pageRowsCount) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_components.Pagination, {
          page: this.props.page,
          count: this.props.count,
          perPage: this.props.perPage,
          window: this.props.window,
          onPagination: this.props.onPagination,
          type: this.props.type
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.className() },
        this.renderPagination(),
        this.renderRangePagination(),
        this.renderPerPage()
      );
    }
  }, {
    key: 'changePerPage',
    value: function changePerPage(event) {
      var perPage = parseInt(event.currentTarget.value);
      this.props.onChangePerPage(perPage);
    }
  }, {
    key: 'rangePaginationText',
    value: function rangePaginationText() {
      var perPage = this.props.perPage;
      var page = this.props.page;
      var pageRowsCount = this.props.pageRowsCount;

      var firstElement = perPage * page - (perPage - 1);
      var lastElement = pageRowsCount < perPage ? this.props.count : perPage * page;
      var totalElement = this.props.count;

      return firstElement + ' - ' + lastElement + ' de ' + totalElement;
    }
  }]);

  return GridPagination;
}(_react.Component), _class2.propTypes = {
  count: _prop_types2.default.number,
  page: _prop_types2.default.number,
  perPage: _prop_types2.default.number,
  window: _prop_types2.default.number,
  onPagination: _prop_types2.default.func,
  onChangePerPage: _prop_types2.default.func,
  pageRowsCount: _prop_types2.default.number,
  type: _prop_types2.default.string,
  perPageOptions: _prop_types2.default.array
}, _class2.defaultProps = {
  themeClassKey: 'grid.pagination',
  onPagination: function onPagination(page) {
    return true;
  },
  onChangePerPage: function onChangePerPage(perPage) {
    return true;
  }
}, _temp)) || _class);
exports.default = GridPagination;