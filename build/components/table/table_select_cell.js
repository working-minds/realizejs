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

var _utils = require('../../utils');

var _decorators = require('../../utils/decorators');

var _mixins = require('../../mixins');

var _components = require('../../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableSelectCell = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(TableSelectCell, _Component);

  function TableSelectCell() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, TableSelectCell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TableSelectCell)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleChange = function (event) {
      _this.props.onSelectToggle(event, _this.props.dataRowIds, !_this.props.selected);
      event.stopPropagation();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TableSelectCell, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(this.props.cellElement, { className: this.className() }, [_react2.default.createElement(_components.InputCheckbox, { id: this.getCheckboxId(), checked: this.props.selected, key: _utils.uuid.v4() }), _react2.default.createElement(_components.Label, { id: this.getCheckboxId(), key: 'label', onClick: this.handleChange })]);
    }
  }, {
    key: 'getCheckboxId',
    value: function getCheckboxId() {
      return "select_" + String(this.props.rowId);
    }
  }]);

  return TableSelectCell;
}(_react.Component), _class2.propTypes = {
  rowId: _prop_types2.default.string,
  cellElement: _prop_types2.default.string,
  dataRowIds: _prop_types2.default.array,
  selected: _prop_types2.default.bool,
  onSelectToggle: _prop_types2.default.func
}, _class2.defaultProps = {
  themeClassKey: 'table.select',
  className: 'table-select',
  rowId: '',
  cellElement: 'td',
  dataRowIds: [],
  selected: false,
  onSelectToggle: function onSelectToggle(event, dataRows, selected) {}
}, _temp2)) || _class);
exports.default = TableSelectCell;