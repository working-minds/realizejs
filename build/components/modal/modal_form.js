'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _prop_types = require('../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _decorators = require('../../utils/decorators');

var _components = require('../../components');

var _mixins = require('../../mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalForm = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.ContainerMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(ModalForm, _Component);

  function ModalForm() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, ModalForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ModalForm)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      isLoading: false
    }, _this.handleSubmitSuccess = function (data, status, xhr) {
      var onSuccessCallback = _this.props.form.onSuccess;
      if (typeof onSuccessCallback == "function") {
        _this.props.onSuccess(data, status, xhr);
      }

      _this.setState({
        isLoading: false
      });

      return true;
    }, _this.handleSubmitError = function (xhr, status, error) {
      var onErrorCallback = _this.props.form.onError;
      if (typeof onErrorCallback == "function") {
        _this.props.onError(xhr, status, error);
      }

      _this.setState({
        isLoading: false
      });

      return true;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ModalForm, [{
    key: 'renderHeader',
    value: function renderHeader() {
      var modalHeader = this.filterChildren(_components.ModalHeader);
      if (!modalHeader || modalHeader.length == 0) {
        modalHeader.push(_react2.default.createElement(
          _components.ModalHeader,
          { key: 'modal-header' },
          _react2.default.createElement(
            'h5',
            null,
            this.props.title
          )
        ));
      }

      return modalHeader;
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      return _react2.default.createElement(
        _components.ModalContent,
        null,
        _react2.default.createElement(
          _components.Form,
          _extends({}, this.props.form, {
            submitButton: false,
            otherButtons: [],
            onError: this.handleSubmitError,
            onSuccess: this.handleSubmitSuccess,
            ref: 'form' }),
          this.props.children
        )
      );
    }
  }, {
    key: 'renderFooter',
    value: function renderFooter() {
      return _react2.default.createElement(
        _components.ModalFooter,
        null,
        _react2.default.createElement(_components.FormButtonGroup, _extends({}, this.props.form, { submitButton: this.submitButtonProps(), isLoading: this.state.isLoading }))
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _components.Modal,
        this.props,
        this.renderHeader(),
        this.renderContent(),
        this.renderFooter()
      );
    }
  }, {
    key: 'submitButtonProps',
    value: function submitButtonProps() {
      var submitButtonProps = this.props.form.submitButton || this.defaultSubmitButtonProps();
      submitButtonProps.onClick = this.submitForm;

      return submitButtonProps;
    }
  }, {
    key: 'defaultSubmitButtonProps',
    value: function defaultSubmitButtonProps() {
      return {
        name: 'actions.send',
        icon: 'send'
      };
    }
  }, {
    key: 'submitForm',
    value: function submitForm(event) {
      var formRef = this.refs.form;

      formRef.handleSubmit(event);
      this.setState({
        isLoading: true
      });
    }
  }]);

  return ModalForm;
}(_react.Component), _class2.propTypes = {
  title: _prop_types2.default.string,
  form: _prop_types2.default.object
}, _class2.defaultProps = {
  title: "",
  form: {}
}, _temp2)) || _class);
exports.default = ModalForm;