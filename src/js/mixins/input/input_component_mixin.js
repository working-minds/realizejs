window.InputComponentMixin = {
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.any,
    disabled: React.PropTypes.bool,
    readOnly: React.PropTypes.bool,
    placeholder: Realize.PropTypes.localizedString,
    errors: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
    onChange: React.PropTypes.func,
    onFocus: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      disabled: false,
      readOnly: false,
      onChange: function(event) { return true; },
      onFocus: function(event) { return true; },
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
        value: null
      });
    }
  },

  _handleChange: function(event) {
    var newValue = event.target.value;
    this.props.onChange(event, newValue, this);

    if(!event.isDefaultPrevented()) {
      this.setState({ value: newValue });
    }
  },

  _handleFocus: function(event) {
    this.props.onFocus(event);

    if(this.props.readOnly) {
      var inputNode = event.currentTarget;
      inputNode.blur();
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
    var placeholder = Realize.i18n.t(this.props.placeholder);
    if(typeof placeholder !== "string" || placeholder.length === 0) {
      return null;
    }

    return placeholder;
  },

  inputNodeIsCheckbox: function() {
    var inputNode = ReactDOM.findDOMNode(this.refs.input);
    return (!!inputNode && inputNode.type === "checkbox");
  },

  /* Serializer functions */

  getValue: function() {
    var componentGetValue = this._getValue;

    // workaround para o problema de não ser possível sobrescrever funções de mixins.
    if(!!componentGetValue && typeof componentGetValue == "function") {
      return componentGetValue();
    } else {
      return this.state.value;
    }
  }

};

module.exports = InputComponentMixin;