window.FormSuccessHandlerMixin = {
  propTypes: {
    onSuccess: React.PropTypes.func,
    successMessage: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      onSuccess: function(data, status, xhr) { return true; },
      successMessage: ''
    };
  },

  getInitialState: function() {
    return {
      showSuccessFlash: false
    };
  },

  renderFlashSuccess: function() {
    if(!this.state.showSuccessFlash) {
      return '';
    }

    return <Flash type="success" message={this.props.successMessage} dismissed={false} />;
  },

  handleSuccess: function(data, status, xhr) {
    var showSuccessFlash = (!!this.props.successMessage && this.props.successMessage.length > 0);
    this.setState({
      isLoading: false,
      errors: {},
      showSuccessFlash: showSuccessFlash
    });

    FormActions.success(this.props.id, data, status, xhr);
    if(this.props.onSuccess(data, status, xhr)) {
      if(xhr.getResponseHeader('Content-Type').match(/text\/javascript/)) {
        eval(data);
      }

    }
  }
};

module.exports = FormSuccessHandlerMixin;