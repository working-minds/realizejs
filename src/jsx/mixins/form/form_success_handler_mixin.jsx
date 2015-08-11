var FormSuccessHandlerMixin = {
  propTypes: {
    onSuccess: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      onSuccess: function(data, status, xhr) {
        return true;
      }
    };
  },

  getInitialState: function() {
    return {
    };
  },

  handleSuccess: function(data, status, xhr) {
    this.setState({isLoading: false, errors: {}});

    if(this.props.onSuccess(data, status, xhr)) {
      if(xhr.getResponseHeader('Content-Type').match(/text\/javascript/)) {
        eval(data);
      }

    }
  }
};