'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _prop_types = require('../../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _decorators = require('../../../utils/decorators');

var _components = require('../../../components');

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

var CloseModalButton = (_class = (_temp = _class2 = function (_Component) {
  _inherits(CloseModalButton, _Component);

  function CloseModalButton() {
    _classCallCheck(this, CloseModalButton);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CloseModalButton).apply(this, arguments));
  }

  _createClass(CloseModalButton, [{
    key: 'closeModal',
    value: function closeModal() {
      if (!!this.props.modalId) {
        (0, _jquery2.default)('#' + this.props.modalId).closeModal();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_components.Button, _extends({}, this.props, { onClick: this.closeModal }));
    }
  }]);

  return CloseModalButton;
}(_react.Component), _class2.propTypes = {
  name: _prop_types2.default.string,
  className: _prop_types2.default.string,
  clearTheme: _prop_types2.default.bool,
  element: _prop_types2.default.string,
  modalId: _prop_types2.default.string
}, _class2.defaultProps = {
  name: 'Fechar',
  className: 'btn waves-effect waves-light close-button grey lighten-4',
  clearTheme: true,
  element: 'a'
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'closeModal', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'closeModal'), _class.prototype)), _class);
exports.default = CloseModalButton;