window.FormErrorHandlerMixin = {
  propTypes: {
    errorMessage: React.PropTypes.string,
    baseErrorParam: React.PropTypes.string,
    onError: React.PropTypes.func,
    mapping: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      errorMessage: 'Por favor, verifique o(s) erro(s) abaixo.',
      baseErrorParam: 'base',
      onError: function(xhr, status, error) {
        return true;
      },
      mapping: true
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

  clearErrors: function() {
    this.setState({errors: {}});
  },

  handleError: function(xhr, status, error) {
    this.setState({isLoading: false});

    FormActions.error(this.props.id, xhr, status, error);
    if(this.props.onError(xhr, status, error)) {
      if(xhr.status === 422) {
        this.handleValidationError(xhr);
      }
    }
  },

  handleValidationError: function(xhr) {
    this.setState({errors: this.getMappingErrors(xhr.responseText)});
  },

  getMappingErrors: function(error){
    var errors = JSON.parse(error);
    if(this.props.mapping) {
      var mappingErrors = {};

      for(var property in errors){
        var key = property.split('.').pop();
        mappingErrors[key] = errors[property]
      }

      return mappingErrors;
    } else {
     return errors;
    }
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

module.exports = FormErrorHandlerMixin;