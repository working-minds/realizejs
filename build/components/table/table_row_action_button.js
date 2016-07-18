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

var _mixins = require('../../mixins');

var _button = require('../../components/button/button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableRowActionButton = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.RequestHandlerMixin), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(TableRowActionButton, _Component);

  function TableRowActionButton() {
    _classCallCheck(this, TableRowActionButton);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TableRowActionButton).apply(this, arguments));
  }

  _createClass(TableRowActionButton, [{
    key: 'renderButton',
    value: function renderButton() {
      var component = [];
      if (!this.props.conditionToShowActionButton(this.props.data)) {
        return component;
      }

      if (!!this.props.component) {
        return _react2.default.createElement(eval(this.props.component), this.props);
      } else {
        component.push(_react2.default.createElement(_button2.default, _extends({}, this.props, {
          method: this.actionButtonMethod(),
          href: this.actionButtonHref(),
          onClick: this.actionButtonClick,
          key: 'button'
        })));
      }

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
      if (!!buttonHref) {
        var dataRowId = this.props.data[this.props.dataRowIdField];
        buttonHref = buttonHref.replace(/:id/, dataRowId);
      }

      return buttonHref;
    }
  }, {
    key: 'actionButtonUrl',
    value: function actionButtonUrl() {
      var buttonActionUrl = this.props.actionUrl;
      if (!!buttonActionUrl) {
        var dataRowId = this.props.data[this.props.dataRowIdField];
        buttonActionUrl = buttonActionUrl.replace(/:id/, dataRowId);
      }

      return buttonActionUrl;
    }
  }, {
    key: 'actionButtonClick',
    value: function actionButtonClick(event) {
      var buttonOnClick = this.props.onClick;
      var buttonAction = this.actionButtonUrl();

      if (_jquery2.default.isFunction(buttonOnClick)) {
        var dataRowId = this.props.data[this.props.dataRowIdField];
        buttonOnClick(event, dataRowId, this.props.data);
      } else if (!!buttonAction) {
        var actionData = this.getActionData(this.props);
        this.performRequest(buttonAction, actionData, this.props.method || 'POST');
      }

      event.stopPropagation();
    }
  }, {
    key: 'getActionData',
    value: function getActionData() {
      var dataIdParam = this.props.dataIdParam || 'id';
      var dataRowId = this.props.data[this.props.dataRowIdField];
      var actionData = {};

      actionData[dataIdParam] = dataRowId;
      return actionData;
    }
  }]);

  return TableRowActionButton;
}(_react.Component), _class2.propTypes = {
  data: _prop_types2.default.object,
  dataRowIdField: _prop_types2.default.string,
  count: _prop_types2.default.number,
  actionUrl: _prop_types2.default.string,
  method: _prop_types2.default.string,
  disabled: _prop_types2.default.bool,
  conditionToShowActionButton: _prop_types2.default.func,
  component: _prop_types2.default.string,
  element: _prop_types2.default.string
}, _class2.defaultProps = {
  data: {},
  dataRowIdField: 'id',
  method: null,
  disabled: false,
  component: null,
  element: 'a',
  themeClassKey: 'button.flat',
  conditionToShowActionButton: function conditionToShowActionButton(data) {
    return true;
  }
}, _temp)) || _class);
exports.default = TableRowActionButton;