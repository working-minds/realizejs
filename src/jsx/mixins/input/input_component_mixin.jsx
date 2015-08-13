var InputComponentMixin = {
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    errors: React.PropTypes.node,
    onChange: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      disabled: false,
      onChange: function(event) {
        return true;
      },
      errors: []
    };
  },

  getInitialState: function() {
    return {
      themeClassKey: this.setThemeClassKeyWithErrors(this.props)
    };
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      themeClassKey: this.setThemeClassKeyWithErrors(nextProps)
    });
  },

  setThemeClassKeyWithErrors: function(props) {
    var themeClassKey = (props.themeClassKey || '');
    var errors = props.errors;
    if(!!errors && errors.length > 0) {
      themeClassKey += ' input.error';
    }

    return themeClassKey;
  }
};