var RequestHandlerMixin = {
  propTypes: {
    onRequest: React.PropTypes.func,
    onSuccess: React.PropTypes.func,
    onError: React.PropTypes.func,
    onComplete: React.PropTypes.func
  },

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
      data: requestData,
      method: (method || 'GET'),
      success: this.onSuccess,
      error: this.onError,
      complete: this.onComplete
    };

    if(!!dataType) {
      requestOptions.dataType = dataType;
    }

    this.onRequest(requestData, url);
    $.ajax(requestOptions);
  },

  onRequest: function(requestData, url) {
    this.setState({isLoading: true});
    this.props.onRequest(requestData, url);
  },

  onSuccess: function(responseData, status, xhr) {
    if(this.props.onSuccess(responseData, status, xhr)) {
      this.handleSuccess(responseData, status, xhr);
    }
  },

  onError: function(xhr, status, error) {
    this.props.onError(xhr, status, error);
  },

  onComplete: function(xhr, status) {
    this.setState({isLoading: false});
    this.props.onComplete(xhr, status);
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