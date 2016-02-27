window.RequestHandlerMixin = {
  propTypes: {
    onRequest: React.PropTypes.func,
    onSuccess: React.PropTypes.func,
    onError: React.PropTypes.func,
    onComplete: React.PropTypes.func
  },

  current_xhr: null,

  getDefaultProps: function() {
    return {
      onRequest: function(requestData, url) {},
      onSuccess: function(responseData, status, xhr) { return true; },
      onError: function(xhr, status, error) { return true; },
      onComplete: function(xhr, status) { return true; }
    };
  },

  getInitialState: function() {
    return {
      isLoading: false
    };
  },

  performRequest: function(url, requestData, method, dataType) {
    var requestOptions = {
      url: url,
      data: (requestData || {}),
      method: (method || 'GET'),
      success: this.successCallback,
      error: this.errorCallback,
      complete: this.completeCallback
    };

    if(!!dataType) {
      requestOptions.dataType = dataType;
    }

    this.cancelPendingRequest();
    this.requestCallback(requestData, url);
    this.current_xhr = $.ajax(requestOptions);
  },

  cancelPendingRequest: function() {
    if(this.current_xhr !== null && this.current_xhr.readyState < 4) {
      this.current_xhr.abort();
    }
  },

  requestCallback: function(requestData, url) {
    this.setState({isLoading: true});
    this.executeCallback('onRequest', requestData, url);
  },

  successCallback: function(responseData, status, xhr) {
    if(this.executeCallback('onSuccess', responseData, status, xhr)) {
      this.handleSuccess(responseData, status, xhr);
    }
  },

  errorCallback: function(xhr, status, error) {
    if(error !== "abort") {
      this.executeCallback('onError', xhr, status, error);
    }
  },

  completeCallback: function(xhr, status) {
    this.setState({isLoading: false});
    this.executeCallback('onComplete', xhr, status);
  },

  executeCallback: function(callbackFunction) {
    var callbackArguments = Array.prototype.slice.call(arguments, 1);
    var componentFunction = this[callbackFunction];
    var propFunction = this.props[callbackFunction];

    if(typeof componentFunction === "function") {
      componentFunction.apply(this, callbackArguments);
    } else {
      propFunction.apply(this, callbackArguments);
    }
  },

  handleSuccess: function(responseData, status, xhr) {
    var contentType = xhr.getResponseHeader('Content-Type');

    if(contentType.match(/text\/javascript/)) {
      this.handleJsResponse(responseData);
    } else if(contentType.match(/text\/html/)) {
      this.handleHtmlResponse(responseData);
    }
  },

  handleJsResponse: function(responseJs) {
    eval(responseJs);
  },

  handleHtmlResponse: function(responseHtml) {

  }
};

module.exports = RequestHandlerMixin;