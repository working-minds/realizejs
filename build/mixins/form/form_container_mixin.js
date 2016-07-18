'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _prop_types = require('../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  propTypes: {
    errors: _prop_types2.default.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.array]),
    errorThemeClassKey: _prop_types2.default.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      errors: {}
    };
  },
  formContainerClassName: function formContainerClassName() {
    var className = this.className();
    if (this.inputChildrenHaveErrors() || !!this.props.errors && !_jquery2.default.isEmptyObject(this.props.errors)) {
      className += ' ' + _theme2.default.getCssClass(this.props.errorThemeClassKey);
    }

    return className;
  },
  inputChildrenHaveErrors: function inputChildrenHaveErrors() {
    var errorIds = _jquery2.default.map(this.props.errors, function (error, errorId) {
      return errorId;
    });

    return this.checkInputChildrenForErrors(errorIds, this.props.children);
  },
  checkInputChildrenForErrors: function checkInputChildrenForErrors(errorIds, children) {
    var inputChildrenHaveErrors = false;

    _react2.default.Children.forEach(children, function (child) {
      if (child.type == Input && _jquery2.default.inArray(child.props.id, errorIds) >= 0) {
        inputChildrenHaveErrors = true;
      } else if (child.type == InputGroup) {
        inputChildrenHaveErrors = this.checkInputGroupForErrors(errorIds, child);
      } else if (_react2.default.Children.count(child.children) > 0) {
        inputChildrenHaveErrors = this.checkInputChildrenForErrors(errorIds, child.children);
      }

      if (inputChildrenHaveErrors) {
        return false;
      }
    }.bind(this));

    return inputChildrenHaveErrors;
  },
  checkInputGroupForErrors: function checkInputGroupForErrors(errorIds, inputGroup) {
    var inputGroupHaveErrors = false;
    var inputsIds = _jquery2.default.map(inputGroup.props.inputs, function (inputProps) {
      return inputProps.id;
    });

    _jquery2.default.each(inputsIds, function (i, inputId) {
      if (_jquery2.default.inArray(inputId, errorIds) >= 0) {
        inputGroupHaveErrors = true;
        return false;
      }
    });

    return inputGroupHaveErrors;
  }
};