var FormErrorHandlerMixin = {
  getInitialState: function() {
    return {
      errors: {}
    };
  },

  handleError: function(xhr, status, error) {
    if(xhr.status === 422) {
      this.handleValidationError(xhr);
    }
  },

  handleValidationError: function(xhr) {
    this.setState({errors: xhr.responseJSON});
  }
};