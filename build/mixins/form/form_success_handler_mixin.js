'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prop_types = require('../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _components = require('../../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  propTypes: {
    onSuccess: _prop_types2.default.func,
    successMessage: _prop_types2.default.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onSuccess: function onSuccess(data, status, xhr) {
        return true;
      },
      successMessage: ''
    };
  },

  getInitialState: function getInitialState() {
    return {
      showSuccessFlash: false
    };
  },

  renderFlashSuccess: function renderFlashSuccess() {
    if (!this.state.showSuccessFlash) {
      return '';
    }

    return React.createElement(_components.Flash, { type: 'success', message: this.props.successMessage, dismissed: false });
  },

  handleSuccess: function handleSuccess(data, status, xhr) {
    var showSuccessFlash = !!this.props.successMessage && this.props.successMessage.length > 0;
    this.setState({
      isLoading: false,
      errors: {},
      showSuccessFlash: showSuccessFlash
    });

    FormActions.success(this.props.id, data, status, xhr);
    if (this.props.onSuccess(data, status, xhr)) {
      if (xhr.getResponseHeader('Content-Type').match(/text\/javascript/)) {
        eval(data);
      }
    }
  }
};