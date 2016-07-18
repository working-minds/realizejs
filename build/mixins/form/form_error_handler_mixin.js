'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prop_types = require('../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  propTypes: {
    errorMessage: _prop_types2.default.string,
    baseErrorParam: _prop_types2.default.string,
    onError: _prop_types2.default.func,
    mapping: _prop_types2.default.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      errorMessage: 'Por favor, verifique o(s) erro(s) abaixo.',
      baseErrorParam: 'base',
      onError: function onError(xhr, status, error) {
        return true;
      },
      mapping: true
    };
  },

  getInitialState: function getInitialState() {
    return {
      errors: {}
    };
  },

  renderFlashErrors: function renderFlashErrors() {
    if (_jquery2.default.isEmptyObject(this.state.errors)) {
      return '';
    }

    return React.createElement(Flash, { type: 'error', message: this.flashErrorMessage(), dismissed: false });
  },

  clearErrors: function clearErrors() {
    this.setState({ errors: {} });
  },

  handleError: function handleError(xhr, status, error) {
    this.setState({ isLoading: false });

    FormActions.error(this.props.id, xhr, status, error);
    if (this.props.onError(xhr, status, error)) {
      if (xhr.status === 422) {
        this.handleValidationError(xhr);
      }
    }
  },

  handleValidationError: function handleValidationError(xhr) {
    this.setState({ errors: this.getMappingErrors(xhr.responseText) });
  },

  getMappingErrors: function getMappingErrors(error) {
    var errors = JSON.parse(error);
    if (this.props.mapping) {
      var mappingErrors = {};

      for (var property in errors) {
        var key = property.split('.').pop();
        mappingErrors[key] = errors[property];
      }

      return mappingErrors;
    } else {
      return errors;
    }
  },

  flashErrorMessage: function flashErrorMessage() {
    return React.createElement(
      'div',
      null,
      this.props.errorMessage,
      this.baseErrorsList()
    );
  },

  baseErrorsList: function baseErrorsList() {
    var baseErrors = this.state.errors[this.props.baseErrorParam];
    var baseErrorsListComponents = [];
    if (!baseErrors) {
      return '';
    }

    for (var i = 0; i < baseErrors.length; i++) {
      var baseError = baseErrors[i];
      baseErrorsListComponents.push(React.createElement(
        'li',
        { key: baseError },
        baseError
      ));
    }

    return React.createElement(
      'ul',
      null,
      baseErrorsListComponents
    );
  }
};