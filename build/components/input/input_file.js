'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _desc, _value, _class2, _class3, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _prop_types = require('../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _i18n = require('../../i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _decorators = require('../../utils/decorators');

var _input_base = require('./input_base');

var _input_base2 = _interopRequireDefault(_input_base);

var _mixins = require('../../mixins');

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

var InputFile = (_dec = (0, _decorators.mixin)(_mixins.CssClassMixin), _dec(_class = (_class2 = (_temp = _class3 = function (_InputBase) {
  _inherits(InputFile, _InputBase);

  function InputFile() {
    _classCallCheck(this, InputFile);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputFile).apply(this, arguments));
  }

  _createClass(InputFile, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setFilePathValue();
    }
  }, {
    key: 'getButtonName',
    value: function getButtonName() {
      if (!!this.props.buttonIcon) {
        var component = [];
        component.push(_react2.default.createElement(
          'i',
          { className: 'material-icons', key: 'inputFileIcon' },
          this.props.buttonIcon
        ));

        return component;
      }

      return _i18n2.default.t(this.props.buttonName);
    }
  }, {
    key: 'getLabelName',
    value: function getLabelName() {
      return this.props.label || this.props.name;
    }
  }, {
    key: 'getFilePathField',
    value: function getFilePathField() {
      var filePathField = this.props.filePathField;
      if (!filePathField) {
        filePathField = this.props.id + '_file_name';
      }

      return filePathField;
    }
  }, {
    key: 'setFilePathValue',
    value: function setFilePathValue() {
      var filePathNode = _reactDom2.default.findDOMNode(this.refs.filePath);
      var filePathField = this.getFilePathField();

      if (!!filePathField) {
        var filePath = this.props.data[filePathField];
        if (!!filePath) {
          filePathNode.value = filePath;
        }
      }
    }
  }, {
    key: 'filePathWrapperClassName',
    value: function filePathWrapperClassName() {
      return this.themedClassName('input.file.filePathWrapper', this.props.filePathWrapperClassName);
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.handleChange(event);

      var fileInput = _reactDom2.default.findDOMNode(this.refs.input);
      var filePathInput = _reactDom2.default.findDOMNode(this.refs.filePath);

      (0, _jquery2.default)(filePathInput).val(fileInput.files[0].name);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.wrapperClassName },
        _react2.default.createElement(
          'div',
          { className: this.buttonClassName },
          _react2.default.createElement(
            'span',
            null,
            this.getButtonName()
          ),
          _react2.default.createElement('input', _extends({}, this.props, {
            value: this.state.value,
            onChange: this.handleChange,
            disabled: this.props.disabled || this.props.readOnly,
            type: 'file',
            ref: 'input'
          }))
        ),
        _react2.default.createElement(
          'div',
          { className: this.filePathWrapperClassName() },
          _react2.default.createElement('input', {
            className: this.inputClassName(),
            placeholder: this.getLabelName(),
            onFocus: this.handleFocus,
            type: 'text',
            ref: 'filePath'
          })
        )
      );
    }
  }]);

  return InputFile;
}(_input_base2.default), _class3.propTypes = {
  wrapperClassName: _prop_types2.default.string,
  buttonClassName: _prop_types2.default.string,
  buttonName: _prop_types2.default.localizedString,
  buttonIcon: _prop_types2.default.string,
  filePathWrapperClassName: _prop_types2.default.string,
  filePathField: _prop_types2.default.string,
  data: _prop_types2.default.object
}, _class3.defaultProps = {
  themeClassKey: 'input.file',
  buttonName: 'inputs.file.buttonName',
  filePathField: null,
  data: {}
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'handleChange', [_decorators.autobind], Object.getOwnPropertyDescriptor(_class2.prototype, 'handleChange'), _class2.prototype)), _class2)) || _class);
exports.default = InputFile;