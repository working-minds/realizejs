var FormErrorHandlerMixin = {
  propTypes: {
    errorMessage: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      errorMessage: 'Por favor, verifique o(s) seguinte(s) campo(s):'
    };
  },

  getInitialState: function() {
    return {
      errors: {}
    };
  },

  renderFlashErrors: function() {
    if($.isEmptyObject(this.state.errors)) {
      return '';
    }

    return <Flash type="error" text={this.props.errorMessage} />;
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