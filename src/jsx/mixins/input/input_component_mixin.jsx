var InputComponentMixin = {
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.node,
    disabled: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    errors: React.PropTypes.node,
    onChange: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      value: null,
      disabled: false,
      onChange: function(event) { return true; },
      errors: []
    };
  },

  getInitialState: function() {
    return {
      value: this.props.value
    };
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      value: nextProps.value
    });
  },

  _handleChange: function(event) {
    this.props.onChange(event);

    if(!event.isDefaultPrevented()) {
      var value = event.target.value;
      this.setState({value: value});
    }
  },

  inputClassName: function() {
    var className = this.className();
    var errors = this.props.errors;
    var value = this.props.value;

    if(!!errors && errors.length > 0) {
      className += ' ' + WRF.themeClass('input.error');
    }

    if(!!value) {
      className += ' ' + WRF.themeClass('input.active');
    }

    return className;
  }
};