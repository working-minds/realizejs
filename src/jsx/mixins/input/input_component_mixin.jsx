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

  componentDidMount: function() {
    var $form = $(this.getInputFormNode());
    $form.on('reset', this._handleReset);
  },

  componentWillUnmount: function() {
    var $form = $(this.getInputFormNode());
    $form.off('reset', this._handleReset);
  },

  getInputFormNode: function() {
    var inputRef = this.refs.input;
    if(!!inputRef) {
      return React.findDOMNode(inputRef).form;
    }

    return null;
  },

  _handleReset: function(event) {
    this.setState({
      value: ''
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

    if(!!errors && errors.length > 0) {
      className += ' ' + Realize.themeClass('input.error');
    }

    return className;
  }
};