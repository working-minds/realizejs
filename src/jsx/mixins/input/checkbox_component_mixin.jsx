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
    var inputNode = React.findDOMNode(this.refs.input);
    inputNode.indeterminate = this.props.renderAsIndeterminate;
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

  _handleCheckboxChange: function(event) {
    this.props.onChange(event);

    if(!event.isDefaultPrevented()) {
      this.setState({checked: event.target.checked});
    }
  }
};