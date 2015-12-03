var InputComponentMixin = {
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.node,
    disabled: React.PropTypes.bool,
    placeholder: Realize.PropTypes.localizedString,
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
      return ReactDOM.findDOMNode(inputRef).form;
    }

    return null;
  },

  _handleReset: function(event) {
    if(this.isMounted() && !this.inputNodeIsCheckbox()) {
      this.setState({
        value: ''
      });
    }
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
      className += ' ' + Realize.themes.getCssClass('input.error');
    }

    return className;
  },

  getPlaceholder: function() {
    var placeholder = Realize.t(this.props.placeholder);
    if(typeof placeholder !== "string" || placeholder.length === 0) {
      return null;
    }

    return placeholder;
  },

  inputNodeIsCheckbox: function() {
    var inputNode = ReactDOM.findDOMNode(this.refs.input);
    return (!!inputNode && inputNode.type === "checkbox");
  }


};