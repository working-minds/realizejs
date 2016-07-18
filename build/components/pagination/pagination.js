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

var _components = require('../../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Pagination);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Pagination)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.navigateToPrevious = function () {
      var pageToNavigate = Math.max(1, _this.props.page - 1);
      _this.navigateTo(pageToNavigate);
    }, _this.navigateToNext = function () {
      var pageToNavigate = Math.min(_this.lastPage(), _this.props.page + 1);
      _this.navigateTo(pageToNavigate);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Pagination, [{
    key: 'renderPaginationByType',
    value: function renderPaginationByType() {
      if (this.props.type == 'default') return _react2.default.createElement(
        'span',
        null,
        this.renderFirstButton(),
        this.renderPageButtons(),
        this.renderLastButton()
      );else if (this.props.type == 'input') return _react2.default.createElement(
        'span',
        null,
        this.renderPageInput()
      );
    }
  }, {
    key: 'renderPreviousButton',
    value: function renderPreviousButton() {
      var disabled = this.props.page <= 1;

      return _react2.default.createElement(_components.PaginationItem, { disabled: disabled, iconType: 'left', onClick: this.navigateToPrevious });
    }
  }, {
    key: 'renderFirstButton',
    value: function renderFirstButton() {
      if (this.firstWindowPage() <= 1) {
        return '';
      }

      return _react2.default.createElement(_components.PaginationItem, { text: '...', onClick: this.navigateTo.bind(this, 1) });
    }
  }, {
    key: 'renderNextButton',
    value: function renderNextButton() {
      var disabled = this.props.page >= this.lastPage();

      return _react2.default.createElement(_components.PaginationItem, { disabled: disabled, iconType: 'right', onClick: this.navigateToNext });
    }
  }, {
    key: 'renderLastButton',
    value: function renderLastButton() {
      var lastPage = this.lastPage();
      if (this.lastWindowPage() >= lastPage) {
        return '';
      }

      return _react2.default.createElement(_components.PaginationItem, { text: '...', onClick: this.navigateTo.bind(this, lastPage) });
    }
  }, {
    key: 'renderPageButtons',
    value: function renderPageButtons() {
      var pageButtons = [];
      for (var i = this.firstWindowPage(); i <= this.lastWindowPage(); i++) {
        pageButtons.push(this.renderPageButton(i));
      }

      return pageButtons;
    }
  }, {
    key: 'renderPageButton',
    value: function renderPageButton(page) {
      var active = this.props.page === page;

      return _react2.default.createElement(_components.PaginationItem, { active: active, text: String(page), onClick: this.navigateTo.bind(this, page), key: "page_" + page });
    }
  }, {
    key: 'renderPageInput',
    value: function renderPageInput() {
      var page = this.props.page;
      return _react2.default.createElement(_components.Input, { value: page, clearTheme: true, className: 'form__input input-field col s3' });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        { className: this.className() },
        this.renderPreviousButton(),
        this.renderPaginationByType(),
        this.renderNextButton()
      );
    }
  }, {
    key: 'lastPage',
    value: function lastPage() {
      return Math.ceil(this.props.count / this.props.perPage);
    }
  }, {
    key: 'firstWindowPage',
    value: function firstWindowPage() {
      return Math.max(1, this.props.page - this.props.window);
    }
  }, {
    key: 'lastWindowPage',
    value: function lastWindowPage() {
      return Math.min(this.lastPage(), this.props.page + this.props.window);
    }
  }, {
    key: 'navigateTo',
    value: function navigateTo(page) {
      this.props.onPagination(page);
    }
  }]);

  return Pagination;
}(_react.Component), _class2.propTypes = {
  count: _prop_types2.default.number,
  page: _prop_types2.default.number,
  perPage: _prop_types2.default.number,
  window: _prop_types2.default.number,
  onPagination: _prop_types2.default.func,
  type: _prop_types2.default.string
}, _class2.defaultProps = {
  themeClassKey: 'pagination',
  page: 1,
  perPage: 20,
  window: 4,
  onPagination: function onPagination(page) {
    return true;
  }
}, _temp2)) || _class);
exports.default = Pagination;