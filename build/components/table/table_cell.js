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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

var _i18n = require('../../i18n/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _decorators = require('../../utils/decorators');

var _css_class_mixin = require('../../mixins/css_class_mixin');

var _css_class_mixin2 = _interopRequireDefault(_css_class_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableCell = (_dec = (0, _decorators.mixin)(_css_class_mixin2.default), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(TableCell, _Component);

  function TableCell() {
    _classCallCheck(this, TableCell);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TableCell).apply(this, arguments));
  }

  _createClass(TableCell, [{
    key: 'renderValue',
    value: function renderValue() {
      var format = this.props.format;
      var customValue = this.props.value;
      var dataValue = this.props.data[this.props.name];

      var value = null;

      if (!!customValue) {
        value = customValue(this.props.data, this.props);
      } else if (dataValue === null || dataValue === undefined) {
        value = '-';
      } else {
        try {
          value = this[format + "Value"](dataValue);
        } catch (err) {
          value = this.textValue(dataValue);
        }
      }

      if (!!this.props.component) {
        return _react2.default.createElement(eval(this.props.component), _jquery2.default.extend({}, this.props, { value: value }));
      } else {
        return value;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'td',
        { className: this.cellClassName() },
        this.renderValue()
      );
    }
  }, {
    key: 'cellClassName',
    value: function cellClassName() {
      var className = this.className();
      if (!!this.props.format) {
        className += ' table-cell--' + this.props.format;
      }

      if (!!this.props.name) {
        className += ' table-cell--' + this.props.name;
      }

      return className;
    }
  }, {
    key: 'textValue',
    value: function textValue(value) {
      return value;
    }
  }, {
    key: 'numberValue',
    value: function numberValue(value) {
      value = parseFloat(value);
      return (0, _numeral2.default)(value).format(this.getFormatString());
    }
  }, {
    key: 'percentageValue',
    value: function percentageValue(value) {
      value = parseFloat(value);
      if (value > 1.0 || value < -1.0) {
        value = value / 100.0;
      }

      return (0, _numeral2.default)(value).format(this.getFormatString());
    }
  }, {
    key: 'currencyValue',
    value: function currencyValue(value) {
      value = parseFloat(value);
      return (0, _numeral2.default)(value).format(this.getFormatString());
    }
  }, {
    key: 'booleanValue',
    value: function booleanValue(value) {
      return _i18n2.default.t(String(value));
    }
  }, {
    key: 'dateValue',
    value: function dateValue(value) {
      var dateValue = _moment2.default.utc(value, _moment2.default.ISO_8601);
      if (dateValue.isValid()) {
        return dateValue.format(this.getFormatString());
      }

      return value;
    }
  }, {
    key: 'datetimeValue',
    value: function datetimeValue(value) {
      var dateTimeValue = _moment2.default.utc(value, _moment2.default.ISO_8601);
      if (dateTimeValue.isValid()) {
        return dateTimeValue.format(this.getFormatString());
      }

      return value;
    }
  }, {
    key: 'timeValue',
    value: function timeValue(value) {
      value = _moment2.default.utc(value);
      return value.format(this.getFormatString());
    }
  }, {
    key: 'getFormatString',
    value: function getFormatString() {
      var format = this.props.format;
      var formatString = this.props.formatString;

      return formatString || _i18n2.default.t('table.cell.formats.' + format);
    }
  }]);

  return TableCell;
}(_react.Component), _class2.propTypes = {
  name: _prop_types2.default.string,
  data: _prop_types2.default.object,
  dataRowIdField: _prop_types2.default.string,
  value: _prop_types2.default.func,
  format: _prop_types2.default.oneOf(['text', 'currency', 'number', 'percentage', 'boolean', 'date', 'datetime', 'time']),
  formatString: _prop_types2.default.string,
  component: _prop_types2.default.string
}, _class2.defaultProps = {
  themeClassKey: 'table.cell',
  data: {},
  format: 'text',
  formatString: null,
  component: null
}, _temp)) || _class);
exports.default = TableCell;