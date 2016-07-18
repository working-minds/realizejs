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

var TableActionButton = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.RequestHandlerMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(TableActionButton, _Component);

  function TableActionButton() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, TableActionButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TableActionButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.actionButtonClick = function (event) {
      if (_this.isDisabled()) {
        return;
      }

      var buttonOnClick = _this.props.onClick;
      var buttonAction = _this.props.actionUrl;
      var selectedData = _this.getSelectedData();

      if ($.isFunction(buttonOnClick)) {
        buttonOnClick(event, selectedData);
      } else if (!!buttonAction) {
        _this.performRequest(buttonAction, selectedData, _this.props.method);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TableActionButton, [{
    key: 'renderButton',
    value: function renderButton() {
      var component = [];
      if (!this.props.conditionToShowActionButton(this.props.conditionParams)) {
        return component;
      }

      var buttonProps = _react2.default.__spread({}, this.props, {
        isLoading: this.state.isLoading,
        disabled: this.isDisabled(),
        method: this.actionButtonMethod(),
        href: this.actionButtonHref(),
        onClick: this.actionButtonClick,
        key: this.props.name
      });

      var buttonComponent = _react2.default.createElement(eval(this.props.component), buttonProps);
      component.push(buttonComponent);

      return component;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        null,
        this.renderButton()
      );
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      if (!!this.props.disabled || !!this.state.isLoading) {
        return true;
      }

      var selectionContext = this.props.selectionContext;
      if (selectionContext === 'none') {
        return false;
      } else if (selectionContext === 'atLeastOne') {
        return this.props.selectedRowIds.length === 0;
      }

      return false;
    }
  }, {
    key: 'actionButtonMethod',
    value: function actionButtonMethod() {
      var buttonHref = this.props.href;
      if (!buttonHref) {
        return null;
      }

      return this.props.method;
    }
  }, {
    key: 'actionButtonHref',
    value: function actionButtonHref() {
      var buttonHref = this.props.href;
      if (!buttonHref) {
        return '#!';
      }

      var selectedData = this.getSelectedData();
      buttonHref = buttonHref + '?' + $.param(selectedData);

      if (!!this.props.params) {
        for (var property in this.props.params) {
          buttonHref = buttonHref + '&' + property + '=' + this.props.params[property];
        }
      }

      return buttonHref;
    }
  }, {
    key: 'getSelectedData',
    value: function getSelectedData() {
      var selectedData = {};
      if (this.props.allSelected && !!this.props.allSelectedData && !$.isEmptyObject(this.props.allSelectedData)) {
        selectedData = this.props.allSelectedData;
      } else {
        selectedData[this.props.selectedRowIdsParam] = this.props.selectedRowIds;
      }

      return selectedData;
    }
  }]);

  return TableActionButton;
}(_react.Component), _class2.propTypes = {
  selectedRowIds: _prop_types2.default.array,
  selectedRowIdsParam: _prop_types2.default.string,
  allSelected: _prop_types2.default.bool,
  allSelectedData: _prop_types2.default.object,
  count: _prop_types2.default.number,
  actionUrl: _prop_types2.default.string,
  method: _prop_types2.default.string,
  disabled: _prop_types2.default.bool,
  selectionContext: _prop_types2.default.oneOf(['none', 'atLeastOne']),
  conditionToShowActionButton: _prop_types2.default.func,
  component: _prop_types2.default.string,
  params: _prop_types2.default.object
}, _class2.defaultProps = {
  selectedRowIds: [],
  allSelected: false,
  method: null,
  conditionParams: null,
  disabled: false,
  selectionContext: 'none',
  component: 'Button',
  params: null,
  conditionToShowActionButton: function conditionToShowActionButton(data) {
    return true;
  }
}, _temp2)) || _class);
exports.default = TableActionButton;