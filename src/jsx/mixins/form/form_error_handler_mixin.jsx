var FormErrorHandlerMixin = {
  propTypes: {
    errorMessage: React.PropTypes.string,
    baseErrorParam: React.PropTypes.string,
    onError: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      errorMessage: 'Por favor, verifique o(s) erro(s) abaixo.',
      baseErrorParam: 'base',
      onError: function(xhr, status, error) {
        return true;
      }
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

    return <Flash type="error" message={this.flashErrorMessage()} dismissed={false} />;
  },

  handleError: function(xhr, status, error) {
    this.setState({isLoading: false});
    if(this.props.onError(xhr, status, error)) {
      if(xhr.status === 422) {
        this.handleValidationError(xhr);
      }
    }
  },

  handleValidationError: function(xhr) {
    this.setState({errors: xhr.responseJSON});
  },

  flashErrorMessage: function() {
    return (
      <div>
        {this.props.errorMessage}
        {this.baseErrorsList()}
      </div>
    );
  },

  baseErrorsList: function() {
    var baseErrors = this.state.errors[this.props.baseErrorParam];
    var baseErrorsListComponents = [];
    if(!baseErrors) {
      return '';
    }

    for(var i = 0; i < baseErrors.length; i++) {
      var baseError = baseErrors[i];
      baseErrorsListComponents.push(<li key={baseError}>{baseError}</li>);
    }

    return (
      <ul>
        {baseErrorsListComponents}
      </ul>
    );
  }
};