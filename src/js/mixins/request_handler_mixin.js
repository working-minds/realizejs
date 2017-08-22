import PropTypes from '../prop_types';
import { config } from '../realize';

export default {
  propTypes: {
    onRequest: PropTypes.func,
    onSuccess: PropTypes.func,
    onError: PropTypes.func,
    onComplete: PropTypes.func,
  },

  current_xhr: null,

  getDefaultProps() {
    return {
      onRequest() {},
      onSuccess() { return true; },
      onError() { return true; },
      onComplete() { return true; },
    };
  },

  getInitialState() {
    return {
      isLoading: false,
    };
  },

  performRequest(url, requestData, method, dataType) {
    const requestOptions = {
      data: (requestData || {}),
      method: (method || 'GET'),
    };

    if (!!dataType) {
      requestOptions.dataType = dataType;
    }

    this.cancelPendingRequest();
    this.requestCallback(requestData, url);
    this.current_xhr = config.httpClient(url, requestOptions)
      .then((...args) => this.successCallback(...args))
      .catch((...args) => this.errorCallback(...args));
  },

  cancelPendingRequest() {
    if (this.current_xhr !== undefined &&
        this.current_xhr !== null &&
        this.current_xhr.readyState < 4) {

      this.current_xhr.abort();
    }
  },

  requestCallback(requestData, url) {
    this.setState({ isLoading: true });
    this.executeCallback('onRequest', requestData, url);
  },

  successCallback(responseData, status, xhr) {
    this.setState({ isLoading: false });
    if (this.executeCallback('onSuccess', responseData, status, xhr)) {
      this.handleSuccess(responseData, status, xhr);
    }
  },

  errorCallback(xhr, status, error) {
    this.setState({ isLoading: false });
    if (error !== 'abort') {
      this.executeCallback('onError', xhr, status, error);
    }
  },

  completeCallback(xhr, status) {
    this.setState({ isLoading: false });
    this.executeCallback('onComplete', xhr, status);
  },

  executeCallback(callbackFunction) {
    var callbackArguments = Array.prototype.slice.call(arguments, 1);
    var componentFunction = this[callbackFunction];
    var propFunction = this.props[callbackFunction];

    if (typeof componentFunction === 'function') {
      componentFunction.apply(this, callbackArguments);
    } else {
      propFunction.apply(this, callbackArguments);
    }
  },

  handleSuccess(responseData, status, xhr) {
    var contentType = xhr.getResponseHeader('Content-Type');

    if (contentType.match(/text\/javascript/)) {
      this.handleJsResponse(responseData);
    } else if (contentType.match(/text\/html/)) {
      this.handleHtmlResponse(responseData);
    }
  },

  handleJsResponse(responseJs) {
    eval(responseJs);
  },

  handleHtmlResponse(responseHtml) {},
};
