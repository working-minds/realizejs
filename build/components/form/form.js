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

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _decorators = require('../../utils/decorators');

var _components = require('../../components');

var _mixins = require('../../mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin, _mixins.ContainerMixin, _mixins.FormErrorHandlerMixin, _mixins.FormSuccessHandlerMixin), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Form)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      isLoading: null
    }, _this.handleSubmit = function (event) {
      event.nativeEvent.preventDefault();
      var postData = _this.serialize();
      _this.props.onSubmit(event, postData);
      FormActions.submit(_this.props.id, event, postData);

      if (!event.isDefaultPrevented()) {
        _this.setState({ isLoading: true, errors: [], showSuccessFlash: false });
        _this.submit(postData);
      }
    }, _this.handleReset = function (event) {
      _this.props.onReset(event);
      FormActions.reset(_this.props.id, event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Form, [{
    key: 'renderMethodTag',
    value: function renderMethodTag() {
      return _react2.default.createElement('input', { name: '_method', type: 'hidden', value: this.props.method });
    }
  }, {
    key: 'renderInputs',
    value: function renderInputs() {
      if (!this.props.inputs || _jquery2.default.isEmptyObject(this.props.inputs)) {
        return [];
      }

      return _react2.default.createElement(_components.InputGroup, _extends({}, this.propsWithoutCSS(), { formStyle: this.props.style, errors: this.state.errors, ref: 'inputGroup' }));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { action: this.props.action,
          method: this.props.method == 'PUT' && !this.props.ajaxSubmit ? 'POST' : this.props.method,
          encType: this.parseFormEncType(),
          id: this.props.id,
          onSubmit: this.handleSubmit,
          onReset: this.handleReset,
          className: this.className(),
          hidden: this.props.hidden,
          visible: this.props.visible,
          ref: 'form' },
        this.renderFlashErrors(),
        this.renderFlashSuccess(),
        this.renderInputs(),
        this.renderMethodTag(),
        this.renderChildren(),
        _react2.default.createElement(_components.FormButtonGroup, _extends({}, this.propsWithoutCSS(), { isLoading: this.isLoading() }))
      );
    }
  }, {
    key: 'propsToForward',
    value: function propsToForward() {
      return ['resource', 'data', 'readOnly', 'disabled'];
    }
  }, {
    key: 'parseFormEncType',
    value: function parseFormEncType() {
      if (!!this.props.multipart) {
        return "multipart/form-data";
      } else {
        return "application/x-www-form-urlencoded";
      }
    }
  }, {
    key: 'propsToForwardMapping',
    value: function propsToForwardMapping() {
      return {
        errors: this.state.errors,
        formStyle: this.props.style
      };
    }
  }, {
    key: 'serialize',
    value: function serialize() {
      var form = ReactDOM.findDOMNode(this.refs.form);
      return (0, _jquery2.default)(form).serializeObject();
    }
  }, {
    key: 'submit',
    value: function submit(postData) {
      if (!!this.props.ajaxSubmit) {
        this.ajaxSubmit(postData);
      } else {
        this.formSubmit();
      }
    }
  }, {
    key: 'ajaxSubmit',
    value: function ajaxSubmit(postData) {
      var submitOptions = {
        url: this.props.action,
        method: this.props.method,
        data: postData,
        success: this.handleSuccess,
        error: this.handleError
      };

      if (!!this.props.dataType) {
        submitOptions.dataType = this.props.dataType;
      }

      if (!!this.props.contentType) {
        submitOptions.contentType = this.props.contentType;

        if (submitOptions.contentType == "application/json") {
          submitOptions.data = JSON.stringify(postData);
        }
      }

      if (this.props.multipart) {
        var fd = new FormData(ReactDOM.findDOMNode(this.refs.form));
        var multipartOptions = {
          data: fd,
          enctype: 'multipart/form-data',
          processData: false,
          contentType: false
        };
        submitOptions = _jquery2.default.extend({}, submitOptions, multipartOptions);
      }

      _jquery2.default.ajax(submitOptions);
    }
  }, {
    key: 'formSubmit',
    value: function formSubmit() {
      var formNode = ReactDOM.findDOMNode(this.refs.form);
      formNode.submit();
    }
  }, {
    key: 'reset',
    value: function reset() {
      var formNode = ReactDOM.findDOMNode(this.refs.form);
      formNode.reset();
    }
  }, {
    key: 'haveNativeReset',
    value: function haveNativeReset() {
      return true;
    }
  }, {
    key: 'isLoading',
    value: function isLoading() {
      var isLoading = this.state.isLoading;
      if (isLoading === null) {
        isLoading = this.props.isLoading;
      }

      return isLoading;
    }
  }]);

  return Form;
}(_react.Component), _class2.propTypes = {
  id: _prop_types2.default.string,
  inputs: _prop_types2.default.object,
  data: _prop_types2.default.object,
  action: _prop_types2.default.string,
  method: _prop_types2.default.string,
  dataType: _prop_types2.default.string,
  contentType: _prop_types2.default.string,
  multipart: _prop_types2.default.bool,
  style: _prop_types2.default.string,
  resource: _prop_types2.default.string,
  ajaxSubmit: _prop_types2.default.bool,
  isLoading: _prop_types2.default.bool,
  disabled: _prop_types2.default.bool,
  readOnly: _prop_types2.default.bool,
  inputWrapperComponent: _prop_types2.default.oneOfType([_prop_types2.default.func, _prop_types2.default.element, _prop_types2.default.string]),
  submitButton: _prop_types2.default.oneOfType([_prop_types2.default.object, _prop_types2.default.bool]),
  otherButtons: _prop_types2.default.array,
  onSubmit: _prop_types2.default.func,
  onReset: _prop_types2.default.func
}, _class2.defaultProps = {
  themeClassKey: 'form',
  id: null,
  inputs: {},
  data: {},
  action: '',
  method: 'POST',
  dataType: undefined,
  contentType: undefined,
  multipart: false,
  style: 'default',
  resource: null,
  ajaxSubmit: true,
  isLoading: false,
  disabled: false,
  readOnly: false,
  inputWrapperComponent: null,
  submitButton: {
    name: 'actions.send',
    icon: 'send'
  },
  otherButtons: [],
  onSubmit: function onSubmit(event, postData) {},
  onReset: function onReset(event) {}
}, _temp2)) || _class);
exports.default = Form;