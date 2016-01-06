var CheckboxComponentMixin = {
  propTypes: {
    checked: React.PropTypes.bool,
    renderAsIndeterminate: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      renderAsIndeterminate: false
    };
  },

  getInitialState: function() {
    return {
      checked: this.getInitialChecked()
    };
  },

  componentDidMount: function() {
    var inputNode = ReactDOM.findDOMNode(this.refs.input);
    inputNode.indeterminate = this.props.renderAsIndeterminate;

    var $form = $(inputNode.form);
    $form.on('reset', this._handleCheckboxReset);
  },

  componentWillUnmount: function() {
    var inputNode = ReactDOM.findDOMNode(this.refs.input);
    var $form = $(inputNode.form);
    $form.off('reset', this._handleCheckboxReset);
  },

  valueIsBoolean: function() {
    var value = this.props.value;
    return (typeof value === "boolean" || value === 0 || value === 1);
  },

  getInitialChecked: function() {
    var checked = this.props.checked;
    if(checked !== null && this.props.checked !== undefined) {
      return checked;
    }

    if(this.valueIsBoolean()) {
      return !!this.props.value;
    }

    return false;
  },

  /* Event handlers */

  _handleCheckboxReset: function(event) {
    if(this.isMounted()) {
      this.setState({
        checked: this.getInitialChecked()
      });
    }
  },

  _handleCheckboxChange: function(event) {
    this.props.onChange(event);

    if(!event.isDefaultPrevented()) {
      var newState = { checked: event.target.checked };
      if(this.valueIsBoolean()) {
        newState.value = event.target.checked;
      }

      this.setState(newState);
    }
  }
};