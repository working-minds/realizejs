'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _desc, _value, _class2, _class3, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _prop_types = require('../../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _decorators = require('../../../utils/decorators');

var _input_base = require('../input_base');

var _input_base2 = _interopRequireDefault(_input_base);

var _input_datefilter_select = require('./input_datefilter_select');

var _input_datefilter_select2 = _interopRequireDefault(_input_datefilter_select);

var _input_datefilter_body = require('./input_datefilter_body');

var _input_datefilter_body2 = _interopRequireDefault(_input_datefilter_body);

var _mixins = require('../../../mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var InputDatefilter = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_class2 = (_temp2 = _class3 = function (_InputBase) {
  _inherits(InputDatefilter, _InputBase);

  function InputDatefilter() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, InputDatefilter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(InputDatefilter)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      selectedDates: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InputDatefilter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var $containerNode = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.container));
      var $form = (0, _jquery2.default)($containerNode.find('input')[0].form);
      $form.on('reset', this.clearSelection);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var $containerNode = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.container));
      var $form = (0, _jquery2.default)($containerNode.find('input')[0].form);
      $form.off('reset', this.clearSelection);
    }
  }, {
    key: 'clearSelection',
    value: function clearSelection() {
      this.setState({
        selectedDates: []
      });
    }
  }, {
    key: 'showFilterBody',
    value: function showFilterBody() {
      if (this.props.disabled) {
        return;
      }

      (0, _jquery2.default)(document).on('click', this.handleDocumentClick);
      var $bodyNode = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.body));
      var firstFilterInput = $bodyNode.find('input[type=text]')[0];

      $bodyNode.show();
      firstFilterInput.focus();
    }
  }, {
    key: 'hideFilterBody',
    value: function hideFilterBody() {
      (0, _jquery2.default)(document).off('click', this.handleDocumentClick);
      var $bodyNode = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.body));
      $bodyNode.hide();
    }
  }, {
    key: 'handleDocumentClick',
    value: function handleDocumentClick(event) {
      var $containerNode = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this.refs.container));
      if ($containerNode.find(event.target).length === 0) {
        this.hideFilterBody();
      }
    }
  }, {
    key: 'handleSelectDate',
    value: function handleSelectDate(selectedDates) {
      this.setState({
        selectedDates: selectedDates
      });

      this.hideFilterBody();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.className(), ref: 'container' },
        _react2.default.createElement(_input_datefilter_select2.default, _extends({}, this.propsWithoutCSS(), {
          selectedDates: this.state.selectedDates,
          onFocus: this.showFilterBody
        })),
        _react2.default.createElement(_input_datefilter_body2.default, _extends({}, this.propsWithoutCSS(), {
          id: this.props.originalId,
          name: this.props.originalName,
          onSelectDate: this.handleSelectDate,
          ref: 'body'
        }))
      );
    }
  }]);

  return InputDatefilter;
}(_input_base2.default), _class3.propTypes = {
  originalId: _prop_types2.default.string,
  originalName: _prop_types2.default.string,
  resource: _prop_types2.default.string,
  fromFilterInput: _prop_types2.default.object,
  toFilterInput: _prop_types2.default.object,
  okButton: _prop_types2.default.object
}, _class3.defaultProps = {
  themeClassKey: 'input.datefilter'
}, _temp2), (_applyDecoratedDescriptor(_class2.prototype, 'handleDocumentClick', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleDocumentClick'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleSelectDate', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleSelectDate'), _class2.prototype)), _class2)) || _class);
exports.default = InputDatefilter;