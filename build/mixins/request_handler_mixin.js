'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prop_types = require('../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  propTypes: {
    onRequest: _prop_types2.default.func,
    onSuccess: _prop_types2.default.func,
    onError: _prop_types2.default.func,
    onComplete: _prop_types2.default.func
  },

  current_xhr: null,

  getDefaultProps: function getDefaultProps() {
    return {
      onRequest: function onRequest(requestData, url) {},
      onSuccess: function onSuccess(responseData, status, xhr) {
        return true;
      },
      onError: function onError(xhr, status, error) {
        return true;
      },
      onComplete: function onComplete(xhr, status) {
        return true;
      }
    };
  },

  getInitialState: function getInitialState() {
    return {
      isLoading: false
    };
  },

  performRequest: function performRequest(url, requestData, method, dataType) {
    var requestOptions = {
      url: url,
      data: requestData || {},
      method: method || 'GET',
      success: this.successCallback.bind(this),
      error: this.errorCallback.bind(this),
      complete: this.completeCallback.bind(this)
    };

    if (!!dataType) {
      requestOptions.dataType = dataType;
    }

    this.cancelPendingRequest();
    this.requestCallback(requestData, url);
    this.current_xhr = _jquery2.default.ajax(requestOptions);
  },

  cancelPendingRequest: function cancelPendingRequest() {
    if (this.current_xhr !== null && this.current_xhr.readyState < 4) {
      this.current_xhr.abort();
    }
  },

  requestCallback: function requestCallback(requestData, url) {
    this.setState({ isLoading: true });
    this.executeCallback('onRequest', requestData, url);
  },

  successCallback: function successCallback(responseData, status, xhr) {
    if (this.executeCallback('onSuccess', responseData, status, xhr)) {
      this.handleSuccess(responseData, status, xhr);
    }
  },

  errorCallback: function errorCallback(xhr, status, error) {
    if (error !== "abort") {
      this.executeCallback('onError', xhr, status, error);
    }
  },

  completeCallback: function completeCallback(xhr, status) {
    this.setState({ isLoading: false });
    this.executeCallback('onComplete', xhr, status);
  },

  executeCallback: function executeCallback(callbackFunction) {
    var callbackArguments = Array.prototype.slice.call(arguments, 1);
    var componentFunction = this[callbackFunction];
    var propFunction = this.props[callbackFunction];

    if (typeof componentFunction === "function") {
      componentFunction.apply(this, callbackArguments);
    } else {
      propFunction.apply(this, callbackArguments);
    }
  },

  handleSuccess: function handleSuccess(responseData, status, xhr) {
    var contentType = xhr.getResponseHeader('Content-Type');

    if (contentType.match(/text\/javascript/)) {
      this.handleJsResponse(responseData);
    } else if (contentType.match(/text\/html/)) {
      this.handleHtmlResponse(responseData);
    }
  },

  handleJsResponse: function handleJsResponse(responseJs) {
    eval(responseJs);
  },

  handleHtmlResponse: function handleHtmlResponse(responseHtml) {}
};