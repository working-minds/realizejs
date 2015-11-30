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

  getInitialChecked: function() {
    var checked = this.props.checked;
    var value = this.props.value;
    if(checked !== null && this.props.checked !== undefined) {
      return checked;
    }

    if(typeof value === "boolean" || value === 0 || value === 1) {
      return !!value;
    }

    return false;
  },

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
      var value = this.props.value;

      if(typeof value === "boolean" || value === 0 || value === 1) {
        newState.value = event.target.checked;
      }

      this.setState(newState);
    }
  }
};